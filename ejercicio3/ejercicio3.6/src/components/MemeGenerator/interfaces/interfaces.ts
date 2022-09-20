export interface InputsProps {
    top_text: string;
    bottom_text: string;
    image: any;
}

export interface MemeProps extends InputsProps {
    image: any;
}

export interface ImagesProps {
    id: number;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

export interface DataProps {
    inputs: InputsProps;
    meme: MemeProps;
    images: Array<ImagesProps>;
}