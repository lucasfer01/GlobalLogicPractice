import "./Menu.css";

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
}

export const Menu = ({children, className: classNameFromProps}: Props) => {
  return (
    <nav className={`Menu block--center ${classNameFromProps}`}>
      {children}
    </nav>
  )
}
