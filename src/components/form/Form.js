import './Form.css';
import { useState } from 'react';

const Form = (props) => {
    const [value, setValue] = useState('');

    return (
        <form className='form' onSubmit={e => {
            e.preventDefault();
            props.putTodos(value);
            setValue('');
        }}>
            <input type="text" placeholder='Write something...' value={value} className='input' onChange={e => setValue(e.target.value)} />
        </form>
    )
}

export default Form;

