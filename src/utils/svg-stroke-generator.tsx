import { Variant } from '../types/svg-props';

const strokeGenerator = (variant: Variant): string => {
  switch (variant) {
    case 'primary':
      return 'stroke-primary-black fill-white';
    case 'secondary':
      return 'stroke-primary-red fill-white';
    case 'tertiary':
      return 'stroke-secondary-gray-900 fill-white';
    case 'white':
      return 'stroke-white ';
    default:
      return 'stroke-primary-black fill-white';
  }
};

export default strokeGenerator;
