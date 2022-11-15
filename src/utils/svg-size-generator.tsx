import { Size } from "../types/svg-props";

const sizeGenerator = (size: Size): string => {
  switch (size) {
    case "extra-small":
      return "h-[14px] w-[14px]";
    case "small":
      return "h-6 w-6";
    case "medium":
      return "h-8 w-8";
    case "regular":
      return "h-[18px] w-[18px]";
    case "large":
      return "h-12 w-12";
    case "xSmall":
      return "h-4 w-4";
    default:
      return "h-6 w-6";
  }
};

export default sizeGenerator;
