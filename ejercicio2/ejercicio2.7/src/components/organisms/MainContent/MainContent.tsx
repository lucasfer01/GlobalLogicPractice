import './MainContent.css';

interface Props {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
}

export const MainContent = ({children, className: classNameFromProps}: Props) => {
  return (
    <div className={`MainContent ${classNameFromProps}`}>
        {children}
    </div>
  )
}
