import { Component } from 'react'
import './InputText.css';

interface Props {
    value: string;
    name: string;
    onChange: (e: any) => void;
}

export default class InputText extends Component<Props> {
    
    render() {
        const {value, name, onChange} = this.props;

        return <input className='InputText' type='text' name={name} value={value} onChange={onChange}/>
  }
}

