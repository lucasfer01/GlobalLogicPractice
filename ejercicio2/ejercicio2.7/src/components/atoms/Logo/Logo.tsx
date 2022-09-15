import './Logo.css';

interface Props {
  className?: string;
}

export const Logo = ({className: classNameFromProps}: Props) => {
  return (
    <p className={`Logo block--center text--bold ${classNameFromProps}`}> LOGO </p>
  )
}
