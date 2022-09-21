import { useState } from 'react'

export default function useInput() {

    const [formState, setFormState] = useState({nombre: '', edad: '', dni: ''});

    function onChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

  return {formState, onChange}
}
