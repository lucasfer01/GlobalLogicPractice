import './Section.css';
import '../../../styles/custom-style.css';

interface Props {
    children?: string;
    className?: string;
}

export const Section = ({children, className: classNameFromProps}: Props) => {
  return (
    <p className={`Section p--noMargin text--bold block--center ${classNameFromProps}`}>
       {children}
    </p>
  )
}
