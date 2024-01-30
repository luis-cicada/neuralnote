import { IconProps } from '../partials/types'
/**
 * @interface IBaseTouchableWithIcon - Base Touchable With Icon
 *
 * @property {IconProps} IconProps - Icon props
 * @property {function} onPress - Function to be called on press
 * @property {string} iconStyle - Icon style
 * @property {string} className - Class name
 * @property {boolean} disabled - Disabled
 * @property {string} testID - Test ID
 */
export interface IBaseTouchableWithIcon extends IconProps {
  onPress: () => void
  iconStyle?: string
  className?: string
  disabled?: boolean
  testID?: string
}
