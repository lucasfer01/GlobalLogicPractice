import "./WebsiteHeading.css";

interface Props {
  className?: string;
}

export const WebsiteHeading = ({ className: classNameFromProps }: Props) => {
  return (
  <p className={`WebsiteHeading block--center text--bold ${classNameFromProps}`}> WebsiteHeading </p>);
};
