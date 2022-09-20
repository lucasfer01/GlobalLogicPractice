import { Component } from "react";
import "./MemeGenerator.css";
import Image from "../Image/Image";
import Inputs from "./Inputs/Inputs";
import PreviewMeme from "./PreviewMeme/PreviewMeme";
import { DataProps } from "./interfaces/interfaces";

interface Props extends DataProps {
  handleChange: (value: any) => void;
  handleClick: (value?: object) => void;
  handleChoosePhoto: (image: any) => void;
  status: string;
  error: string;
}

export class MemeGenerator extends Component<Props> {
  render() {
    const {
      inputs,
      meme,
      handleClick,
      handleChange,
      images,
      status,
      error,
      handleChoosePhoto,
    } = this.props;


    return (
      <div className="MemeGenerator__container">
        <Inputs
          top_text={inputs.top_text}
          bottom_text={inputs.bottom_text}
          onChange={handleChange}
          onClick={handleClick}
        />

        {status === "error" && <span className="--error">{error}</span>}

        <div className="MemeGenerator__Images">
          <div style={{ height: "100%" }}>
            {!!images.length &&
              images.map((mapImage) => (
                <Image
                  key={mapImage.id}
                  onClick={() => handleChoosePhoto(mapImage)}
                  src={mapImage.url}
                  alt={mapImage.name}
                  className={(inputs.image?.id === mapImage.id) && '--Active'}
                />
              ))}
          </div>
        </div>

        <PreviewMeme meme={meme} onClick={handleClick}/>
      </div>
    );
  }
}
