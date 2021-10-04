import React, {Component} from "react";
import style from "./App.module.css";
import Searchbar from "./searchbar/Searchbar";

// import Api from "./services/Api";
// import getImagesFromApi from "./services/Api"
import ImageGallery from "./imageGallery/ImageGallery";



class App extends Component {

    state = {
        value: '',
        // currentPage: '',

    }

    // const result = async getImagesFromApi(value, currentPage)

    // async componentDidMount() {
    //     const {value, currentPage} = this.state;
    //     const result = await getImagesFromApi(value, currentPage )
    //     this.setState({gallery: result.hits})
    //     console.log(this.state.gallery)
    // }
    // async componentDidUpdate(prevState) {
    //     console.log('componentDidUpdate')
    //     // console.log('prevState: ' + prevState.gallery)
    //     // console.log(this.state.gallery)
    //     const {value, currentPage} = this.state;
    //     // const result = await
    //     // if (this.state.gallery !== prevState.gallery) {
    //         getImagesFromApi(value, currentPage).then(gallery => {
    //             // console.log(gallery.hits)
    //             this.setState({gallery: gallery.hits})
    //         })
    //
    //         // console.log(result.hits)
    //         //     this.setState({gallery: result.hits})
    //     // }
    // }

    handleFormSearch = (searchQuery) => {
        this.setState({
            value: searchQuery,
            // page: this.state.page + 1
        })
    }

    render() {
        return (
            <div className={style.App}>
                <Searchbar onSubmit={this.handleFormSearch}/>
                <ImageGallery inputValue={this.state.value}/>
                {/*<Api*/}
                {/*    page={this.state.page}*/}
                {/*    inputValue={this.state.value}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;
