
interface Props {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
}

export const Sections = ({children, className: classNameFromProps}: Props) => {
  return (
    <div className={`div--flex ${classNameFromProps}`}>
        {children}
    </div>
  )
}
