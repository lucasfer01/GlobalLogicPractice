import React from 'react';
import CssStyle from './QuestionTextArea.module.css';
import { useDispatch } from 'react-redux';
import { changeInputState } from '../../actions/changeInputState';

interface Props {
    name: string;
    value: string;
    onChange?: any;
    onSubmit?: any;
}

export const QuestionTextArea = ({name, value, onChange, onSubmit}: Props) => {
    const dispatch = useDispatch();

    function handleChange(e: any) {
        onChange && onChange();

        dispatch(changeInputState({name: e.target.name, value: e.target.value}));
    }

  return <textarea name={name} value={value} onChange={handleChange}></textarea>
}
