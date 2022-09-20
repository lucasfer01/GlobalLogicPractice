import { Component } from 'react'
import './Image.css';

interface Props {
    src: string;
    alt: string;
    className: false | string;
    style?: React.CSSProperties | any;
    onClick?: (value?: any) => void;
}

export default class Image extends Component<Props> {
  render() {
    const {src, alt, className, style, onClick} = this.props;

    return <img className={`Image ${className}`} style={style} src={src} alt={alt} onClick={onClick}/>
  }
}
