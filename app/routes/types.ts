export type AppStackParamList = {
  [key: string]: React.FC | undefined
}

/**
 * AppStackScreens
 * @description AppStackScreens is an enum of all the screens in the AppStack
 * @example AppStackScreens.HOME
 */
export enum AppStackScreens {
  HOME = 'Home',
  MENU = 'Menu',
}
