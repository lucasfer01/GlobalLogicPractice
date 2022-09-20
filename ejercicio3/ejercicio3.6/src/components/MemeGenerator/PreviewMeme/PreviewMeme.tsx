import { Component } from "react";
import Image from "../../Image/Image";
import { MemeProps } from "../interfaces/interfaces";
import "./PreviewMeme.css";

interface Props {
  meme: MemeProps;
  onClick: (value?: any) => void;
}

export default class PreviewMeme extends Component<Props> {
  render() {
    const { meme } = this.props;

    return (
      <div className={`PreviewMeme__preview ${meme.image.width > meme.image.height ? '--horizontal' : '--vertical'}`}>
        {meme.image.url && (
          <Image
            className="PreviewMeme__img"
            src={meme.image.url}
            alt="Preview meme"
            style={{ width: '100%', height: '100%' }}
          />
        )}

        <span className="PreviewMeme__text PreviewMeme__text--top_text">{meme.top_text}</span>

        <span className="PreviewMeme__text PreviewMeme__text--bottom_text">{meme.bottom_text}</span>
      </div>
    );
  }
}
