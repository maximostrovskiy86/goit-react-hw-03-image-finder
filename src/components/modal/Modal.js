import React, {Component} from "react";
import {createPortal} from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount(e) {
        window.addEventListener("keydown", this.onCLoseModal);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.onCLoseModal);
    }

    onCLoseModal = (e) => {
        // console.log(e.code)
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    onOverlayClose = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={style.Overlay} onClick={this.onOverlayClose}>
                <div className={style.Modal}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        );
    }

}

export default Modal;