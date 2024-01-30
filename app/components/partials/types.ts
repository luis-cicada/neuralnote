import {LegacyRef} from 'react';
import * as HeroIcons from 'react-native-heroicons/outline';
import RBSheet from 'react-native-raw-bottom-sheet';

export type IconName = keyof typeof HeroIcons;

/**
 * Interface to be used on Bottom Sheet component
 *
 * @interface IBottomSheet
 *
 * @member {Function} close
 * @member {LegacyRef} refRBSheet
 * @member {Function} open
 * @member {ReactNode} children
 *
 */
export interface IBottomSheet {
  close: Function;
  refRBSheet: LegacyRef<RBSheet> | undefined;
  open?: Function;
  children?: React.JSX.Element | React.ReactNode;
}

/**
 * Interface to be used on Icon component
 *
 * @interface IconProps
 *
 * @member {IconName} icon
 * @member {string} styles
 * @member {boolean} outline
 *
 */
export interface IconProps {
  icon: IconName;
  size: number;
  className?: string;
  outline?: boolean;
  color?: string;
}
