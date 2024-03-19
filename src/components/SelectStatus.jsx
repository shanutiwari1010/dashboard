import { useState } from 'react';

function SelectStatus() {
    const [select, setSelect] = useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    return (
        <div className='flex gap-2'>
            <label htmlFor="select">Select Option:</label>
            <select id='select' value={select} onChange={handleChange} className='bg-black'>
                <option value="active/in">active/in</option>
                <option value="theft/Theft">theft/Theft</option>
                <option value="ended">ended</option>
            </select>
            {select && <p>Selected Option: {select}</p>}
        </div>
    );
}

export default SelectStatus;