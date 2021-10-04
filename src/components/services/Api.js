import React, {Component} from "react";
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "23297096-fdec21a8bcbab7faa251f0233";

class Api extends Component {

    state = {
        gallery: [],
    }

    // async componentDidUpdate(prevProps) {
    //     if (prevProps.value !== this.props.inputValue) {
    //         const response = await axios.get(BASE_URL + `q=${this.props.inputValue}&page=${this.props.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    //         // console.log(response.data)
    //     }
    // }

    render() {
        const {inputValue} = this.props
        return (
            <>
                <h2>Наше значение с инпута: {inputValue}</h2>
            </>
        );
    }
}

export default Api;