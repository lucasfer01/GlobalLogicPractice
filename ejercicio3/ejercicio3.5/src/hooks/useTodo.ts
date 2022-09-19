import { ChangeEvent, useState } from "react";


export const useTodo = (completed: boolean) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(completed);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCheckboxState(e.target.checked);
    }

    return { checkboxState, handleChange };
}
