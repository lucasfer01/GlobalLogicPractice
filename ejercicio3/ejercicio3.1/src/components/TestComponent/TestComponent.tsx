import './TestComponent.css';

interface Props {
  text: string;
  style?: React.CSSProperties;
}

export const TestComponent = ({ text, style }: Props) => {
  
  return <div className='div__container' style={style}>{ text }</div>;
};
