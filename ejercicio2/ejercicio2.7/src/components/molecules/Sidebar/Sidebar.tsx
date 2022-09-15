import './Sidebar.css';

interface Props {
    className?: string;
}


export const Sidebar = ({className: classNameFromProps}: Props) => {
  return (
    <div className={`Sidebar text--bold block--center ${classNameFromProps}`}> SIDE <br/> BAR </div>
  )
}
