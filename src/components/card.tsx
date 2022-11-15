import React, { useMemo } from "react";
import { isNil } from "remeda";
import { collapse } from "@growthops/ext-ts";
import { Heading, Text } from "../components";
import { CardProps } from "../types/card";

const generateRootClasses = (isFramed: boolean) => `
	overflow-hidden
	rounded
	h-full
	flex
	flex-col
	${isFramed ? "bg-white shadow-lg" : ""}
`;

const generateBodyClasses = (isFramed: boolean) => `
	flex
	flex-col
	flex-grow
	${isFramed ? "px-4 pb-3" : ""}
`;

const generateMetaClasses = (hasAutoHeight: boolean) => `
	pt-6
	${hasAutoHeight ? "mt-auto" : ""}
`;

const Card = ({
  image,
  heading,
  content,
  meta,
  isFramed = false,
  hasAutoHeight = false,
}: CardProps) => {
  const classes = useMemo(
    () => ({
      root: collapse(generateRootClasses(isFramed)),
      image: isFramed ? "" : "rounded shadow-lg",
      body: collapse(generateBodyClasses(isFramed)),
      heading: "mt-4",
      content: "mt-2",
      meta: collapse(generateMetaClasses(hasAutoHeight)),
    }),
    [isFramed, hasAutoHeight]
  );

  return (
    <article className={classes.root}>
      <img className={classes.image} src={image} alt="Card" />
      <div className={classes.body}>
        {!isNil(heading) && (
          <Heading
            className={classes.heading}
            label={heading}
            variant="heading-four"
          />
        )}

        <Text className={classes.content} variant="text-regular">
          {content}
        </Text>
        {!isNil(meta) && <div className={classes.meta}>{meta}</div>}
      </div>
    </article>
  );
};

export default Card;
