import React from 'react';
import style from './MyInput.module.css';

let MyInput = (props) => {
    return (
        <input className={style.myInput} {...props}></input>
    )

}

export default MyInput;