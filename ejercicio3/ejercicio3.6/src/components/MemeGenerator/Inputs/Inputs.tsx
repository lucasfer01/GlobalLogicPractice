import { Component } from "react";
import InputText from "../../InputText/InputText";
import './Inputs.css';

interface Props {
  top_text: string;
  bottom_text: string;
  onChange: (value: any) => void;
  onClick: (value?: object) => void;
}

export default class Inputs extends Component<Props> {
  render() {
    const { top_text, bottom_text, onChange: handleChange, onClick: handleClick } = this.props;

    return (
      <div className="Inputs">
        <div className="Inputs__container">
            <div>
                <label> Texto superior </label>

                <InputText value={top_text} name="top_text" onChange={handleChange} />
            </div>

            <div>
                <label> Texto inferior </label>

                <InputText value={bottom_text} name="bottom_text" onChange={handleChange} />
            </div>
        </div>

        <button className="Inputs__button" onClick={() => handleClick()}> Generar MEME </button>
      </div>
    );
  }
}
