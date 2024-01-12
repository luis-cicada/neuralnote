export interface IHomeHeaderProps {
  order: 'asc' | 'desc';
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

export interface IHomeFooterProps {
  onPress: () => void;
}
