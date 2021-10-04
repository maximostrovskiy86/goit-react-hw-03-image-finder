import React, {Component} from "react";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "../button/Button";
import Modal from "../modal/Modal";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "23297096-fdec21a8bcbab7faa251f0233";

class ImageGallery extends Component {

    state = {
        gallery: [],
        page: 1,
        // showModal: false,
        largeImg: '',
    }

    async componentDidUpdate(prevProp, prevState) {

        if (this.props.inputValue !== prevProp.inputValue) {
            fetch(BASE_URL + `q=${this.props.inputValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(gallery => {
                    // console.log(gallery)
                    this.setState(prevState => ({
                        gallery: gallery.hits,
                        page: 1
                    }))

                    // this.setState(prev => {
                    //     console.log(this.state.page)
                    //     console.log(prev.page)
                    // })
                })

            // if (result.data) {
            //     const keys = Object.keys(result.data)
            //     // console.log('keys: ' + keys)
            //     console.log(keys)
            //     const products = keys.map(key => ({
            //         id: key,
            //         ...response.data[key]
            //     }))
            //     // console.log(keys)
            //     console.log(products)
            //     // return products;
            // }
        }

        if (this.state.page !== prevState.page && this.state.page !== 1) {
            fetch(BASE_URL + `q=${this.props.inputValue}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(gallery => {
                    this.setState(prevState => ({
                        gallery: [...prevState.gallery, ...gallery.hits]
                        // console.log(prevState.state.page)

                    }))
                    // this.setState(prev => {
                    //     // console.log([...prev.gallery, ...gallery.hits])
                    //     console.log(this.state.page)
                    //     console.log(prev.page)
                    // })
                })
        }

        if (this.state.gallery !== prevState.gallery) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }
    }

    onLoadMore = () => {
        this.setState(prev => ({
            page: prev.page + 1,
        }))

    }

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }))
    }

    findTargetImg = (e) => {
        const url = e.target.dataset.url;
        this.setState((prev) => ({
            showModal: !prev.showModal,
            largeImg: url
        }));
    };


    render() {
        const {gallery, showModal, largeImg} = this.state;
        // console.log(largeImg)

        return (
            <main className={style.main}>
                <ul className={style.ImageGallery}>
                    {gallery.map(image => <ImageGalleryItem
                        src={image.webformatURL}
                        alt={image.tags} key={image.id}
                        modalUrl={image.largeImageURL}
                        // largeImg={image.largeImageURL}
                        onClickCurrentImage={this.findTargetImg}
                        // onClose={this.toggleModal}
                        // showModal={showModal}

                    />
                    )}
                </ul>
                {showModal && <Modal onClose={this.toggleModal}>
                    <img src={largeImg} alt=""/>
                </Modal>}

                <Button LoadMore={this.onLoadMore}/>
                {/*<Loader*/}
                {/*    type="Puff"*/}
                {/*    color="#00BFFF"*/}
                {/*    height={100}*/}
                {/*    width={100}*/}
                {/*    timeout={3000} //3 secs*/}
                {/*/>*/}
            </main>
        );
    }
}

export default ImageGallery;