import { useState } from 'react'

function useForm () {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

   return { formData, handleChange, handleSubmit }
}

export default useForm;