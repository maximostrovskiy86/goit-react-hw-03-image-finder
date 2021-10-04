import React from "react";
import style from "./Button.module.css";

const Button = ({LoadMore}) => {
    return (
        <button type="button" className={style.Button} onClick={LoadMore}>Load more</button>
    );
}

export default Button;