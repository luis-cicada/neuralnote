import {TouchableOpacity} from 'react-native';
import BaseIcon from '../partials/icons/BaseIcon';
import {IBaseTouchableWithIcon} from './types';

const BaseTouchableWithIcon = (props: IBaseTouchableWithIcon) => {
  const {onPress, icon, iconStyle, className, disabled, testID, outline, size} =
    props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      className={`flex justify-center items-center ${className}`}
      disabled={disabled}
      testID={testID}>
      <BaseIcon
        icon={icon}
        className={iconStyle}
        outline={outline}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default BaseTouchableWithIcon;
