
interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const Header = ({ children }: Props) => {
  return (
    <header>
      {children}
    </header>
  );
};
