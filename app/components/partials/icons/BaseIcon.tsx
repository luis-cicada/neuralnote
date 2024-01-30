import * as HeroIconsOutline from 'react-native-heroicons/outline';
import * as HeroIcons from 'react-native-heroicons/solid';
import { IconProps } from '../types';

const BaseIcon = ({
  icon,
  className,
  outline,
  size,
  color = 'white',
}: IconProps) => {
  const SingleIcon = outline ? HeroIconsOutline[icon] : HeroIcons[icon];

  return <SingleIcon className={className} size={size} color={color} />;
};

export default BaseIcon;
