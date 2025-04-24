import React from 'react';

const InputWithLabel = ({id, label, type = 'text', required = false, placeholder, value, onChange}) => {
    return (
        <div className='mb-3'>
            <label htmlFor={id} className='form-label' style={{marginBottom: '0rem'}}>{label}</label>
            <input id={id} className='form-control' type={type} required={required} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default InputWithLabel;