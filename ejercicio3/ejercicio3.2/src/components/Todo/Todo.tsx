import { useTodo } from '../../hooks/useTodo';

import './Todo.css';

interface Props {
    children: string;
    completed?: boolean;
    id: number;
}

export const TodoItem = ({ children: description, completed = false /* Default value */, id }: Props) => {

    const {checkboxState, handleChange} = useTodo(completed);

  return (
    <li id={`${id}`} className={`Todo block--rounded`}>
        <input id={`TodoCheckbox${id}`} type='checkbox' className={`--pointer`} checked={checkboxState} onChange={handleChange}/>

        <label htmlFor={`TodoCheckbox${id}`} className={`Todo__label ${checkboxState && 'Todo__label--underlined'}`}>{description}</label>
    </li>
  )
}
