import React, {Component} from "react";
import style from "./App.module.css";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";

class App extends Component {

    state = {
        value: '',
    }

    handleFormSearch = (searchQuery) => {
        this.setState({
            value: searchQuery,
        })
    }

    render() {
        return (
            <div className={style.App}>
                <Searchbar onSubmit={this.handleFormSearch}/>
                <ImageGallery inputValue={this.state.value}/>
            </div>
        );
    }
}

export default App;
