import React from "react";
import { MemeGenerator } from "./MemeGenerator";
import { httpClient } from "../../httpClient/httpClient";
import { DataProps } from "./interfaces/interfaces";


interface StateProps {
  status: string;
  error: string;
  data: DataProps;
}

export class MemeGeneratorContainer extends React.Component<{}, StateProps> {
  state: StateProps = {
    status: "success",
    error: "",
    data: {
      images: [],
      inputs: {
        top_text: "",
        bottom_text: "",
        image: {}
      },
      meme: {
        top_text: "",
        bottom_text: "",
        image: {},
      },
    },
  };

  componentDidMount() {
    httpClient.get("/get_memes").then(({ data: result }) => {

      this.setState({
        status: this.state.status,
        error: this.state.error,
        data: {
          images: [...result.data.memes],
          inputs: { ...this.state.data.inputs },
          meme: { ...this.state.data.meme },
        },
      });
    });
  }

  handleChange = (e: any) => {
    if(e.target.name === 'top_text' && e.target.value.length === 42) return;

    if(e.target.name === 'bottom_text' && e.target.value.length === 42) return;

    this.setState({
      status: this.state.status,
      error: this.state.error,
      data: {
        images: [...this.state.data.images],
        inputs: { ...this.state.data.inputs, [e.target.name]: e.target.value },
        meme: { ...this.state.data.meme },
      },
    });
  };

  handleChoosePhoto = (image: any) => {
    if(!image) {
      return this.setState({
        status: 'error',
        error: 'Debe seleccionar una imagen',
        data: { ...this.state.data }
      });
    }

    this.setState({
      status: "success",
      error: "",
      data: {
        images: [...this.state.data.images],
        inputs: { ...this.state.data.inputs, image },
        meme: { ...this.state.data.meme },
      },
    });
  }

  handleClick = () => {
    const {top_text, bottom_text, image} = this.state.data.inputs;

    const imagesLenght = Object.entries(image).length;

    if(!top_text || !bottom_text || !imagesLenght) {
      return this.setState({
        status: 'error',
        error: 'Faltan datos, por favor indique mensaje superior, inferior y foto',
        data: { ...this.state.data }
      })
    }

    this.setState({
      status: "success",
      error: "",
      data: {
        images: [...this.state.data.images],
        inputs: { ...this.state.data.inputs },
        meme: { ...this.state.data.inputs },
      },
    });

    window.scroll(0, 650)
  };

  render() {
    const inputs = this.state.data.inputs;

    const meme = this.state.data.meme;

    return (
      <>
        <MemeGenerator
          inputs={inputs}
          meme={meme}
          images={this.state.data.images}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleChoosePhoto={this.handleChoosePhoto}
          status={this.state.status}
          error={this.state.error}
        />
      </>
    );
  }
}
