import React, {
  useState,
  useContext,
  useCallback,
  useMemo,
  createContext,
} from "react";
import { isNil, reject, equals } from "remeda";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { collapse } from "@growthops/ext-ts";

type ContainerContext = {
  toggleActivePanel: (label: string) => void;
  activePanels: string[];
};

type ExpandMode = "single" | "multiple";

type ContainerProps = {
  expandMode?: ExpandMode;
  children: JSX.Element[] | JSX.Element;
};

type PanelProps = {
  children: JSX.Element | JSX.Element[];
  label: string;
  icon?: React.ElementType;
  variant?: "primary" | "secondary";
  hasBorder?: boolean;
  hasPadding?: boolean;
};

const containerContext = createContext<ContainerContext>({
  toggleActivePanel: () => null,
  activePanels: [],
});

const Container = ({ children, expandMode = "single" }: ContainerProps) => {
  const [activePanels, setActivePanels] = useState<string[]>([]);

  const toggleActivePanel = useCallback(
    (label: string) => {
      if (expandMode === "single") {
        setActivePanels(activePanels.includes(label) ? [] : [label]);
      }

      if (expandMode === "multiple") {
        setActivePanels(
          activePanels.includes(label)
            ? reject(activePanels, equals(label))
            : [...activePanels, label]
        );
      }
    },
    [activePanels, expandMode]
  );

  const context = useMemo(
    () => ({
      toggleActivePanel,
      activePanels,
    }),
    [toggleActivePanel, activePanels]
  );

  return (
    <section className="space-y-3">
      <containerContext.Provider value={context}>
        {children}
      </containerContext.Provider>
    </section>
  );
};

const generatePanelButtonClasses = (
  isActive: boolean,
  variant: string,
  hasBorder: boolean,
  hasPadding: boolean
) => `
	flex
	w-full
	items-center
	flex-grow
	text-left
  text-primary-black
  ${
    variant === "primary"
      ? "text-heading-h5 sm:text-heading-h3"
      : "heading-four"
  }

	${
    isActive
      ? "font-bold pb-6"
      : `font-medium ${
          hasBorder ? "" : " border-secondary-gray-600 border-b-2"
        }  ${hasPadding ? "pb-6" : "py-6"}
        `
  }
`;

const Panel = ({
  children,
  label,
  icon: Icon,
  variant = "primary",
  hasBorder = false,
  hasPadding = false,
}: PanelProps) => {
  const { toggleActivePanel, activePanels } = useContext(containerContext);

  const togglePanel = useCallback(() => {
    toggleActivePanel(label);
  }, [toggleActivePanel, label]);

  const isActive = useMemo(
    () => activePanels.includes(label),
    [activePanels, label]
  );

  const classes = useMemo(
    () => ({
      button: collapse(
        generatePanelButtonClasses(isActive, variant, hasBorder, hasPadding)
      ),
    }),
    [isActive, variant, hasBorder, hasPadding]
  );

  return (
    <article>
      <header>
        <button
          key={label}
          className={classes.button}
          type="button"
          onClick={togglePanel}
        >
          {!isNil(Icon) && <Icon className="w-5" />}
          <span className="max-w-[300px] sm:max-w-full">{label}</span>
          {isActive && <ChevronUpIcon className="!ml-auto w-5" />}
          {!isActive && <ChevronDownIcon className="!ml-auto w-5" />}
        </button>
      </header>
      <div className="text-regular text-secondary-gray-900">
        {isActive && children}
      </div>
    </article>
  );
};

const Accordion = {
  Container,
  Panel,
};

export default Accordion;

export type { ContainerContext, ExpandMode, ContainerProps, PanelProps };
