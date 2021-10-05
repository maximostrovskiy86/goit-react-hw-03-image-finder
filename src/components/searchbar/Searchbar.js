import React, {Component} from "react";
import style from "./Searchbar.module.css";
import PropTypes from 'prop-types';

class Searchbar extends Component {

    state = {
        inputValue: '',
    }

    handleInput = (e) => {
        const {value} = e.target;
        this.setState({
            inputValue: value.toLowerCase(),
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.inputValue.trim() === '') {
            alert("Введите название изображения")
            return;
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    render() {
        return (
            <header className={style.Searchbar}>
                <form onSubmit={this.handleSubmit} className={style.SearchForm}>
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={style.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInput}
                        value={this.state.inputValue}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
