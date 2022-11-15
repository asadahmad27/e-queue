import { Variant } from '../types/svg-props';

const colorGenerator = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'fill-primary-black';
    case 'secondary':
      return 'fill-primary-red';
    case 'tertiary':
      return 'fill-secondary-gray-900';
    case 'white':
      return 'fill-white';
    default:
      return 'fill-primary-black';
  }
};

export default colorGenerator;
