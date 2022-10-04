import React from 'react'
import { QuestionTextArea } from '../QuestionTextArea/QuestionTextArea'

interface Props {
    name: string;
    value: string;
    onChange?: () => void;
    onSubmit?: () => void;
}

export const AnswerTextArea = ({name, value, onChange, onSubmit}: Props) => (
    <QuestionTextArea name={name} value={value} onChange={onChange} onSubmit={onSubmit}/>
)
