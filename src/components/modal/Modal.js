import React, {Component} from "react";
import PropTypes from 'prop-types';
import style from "./Modal.module.css";
import {createPortal} from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount(e) {
        window.addEventListener("keydown", this.onCLoseModal);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.onCLoseModal);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    onCLoseModal = (e) => {
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

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default Modal;