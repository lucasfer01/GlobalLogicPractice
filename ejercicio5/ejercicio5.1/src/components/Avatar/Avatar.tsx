import React from 'react';
import CssStyle from './Avatar.module.css';
import notProfilePhoto from '../../assets/notPhoto.jpg';

const {Avatar__img} = CssStyle;

interface Props {
    image?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const Avatar = ({image, className, style}: Props) => {
    return (
        <img 
            src={image || notProfilePhoto} 
            alt={'User profile'}
            className={`${Avatar__img} ${className}`}
            style={style}
        />
    );
}
