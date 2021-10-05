import React, {Component} from "react";
import style from "./ImageGallery.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from 'prop-types';
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import imagesApi from "../../services/Api";
import Loader from "react-loader-spinner";

class ImageGallery extends Component {

    state = {
        gallery: [],
        page: 1,
        showModal: false,
        largeImg: '',
        error: null,
        loading: false,
    }

    getImages = (inputValue, page) => {
        this.setState({loading: true});
        (!page ?
                imagesApi
                    .fetchQueryApi(inputValue) :
                imagesApi
                    .fetchLoadMore(inputValue, page)
        )

            .then(gallery => !page ? this.setState(prevState => ({
                    gallery: gallery.hits,
                    page: 1,
                })) : this.setState(prevState => ({
                    gallery: [...prevState.gallery, ...gallery.hits]
                }))
            )
            .catch(error => {
                console.log(error)
                this.setState({error})
            })
            .finally(() => {
                this.setState({loading: false});
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            })
    }

    componentDidUpdate = (prevProp, prevState) => {
        if (this.props.inputValue !== prevProp.inputValue) this.getImages(this.props.inputValue);
        if (this.state.page !== prevState.page && this.state.page !== 1) this.getImages(this.props.inputValue, this.state.page);
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

    findCurrentImages = (largeImg) => {
        this.setState((prev) => ({
            showModal: !prev.showModal,
            largeImg,
        }));
    };

    render() {
        const {gallery, showModal, largeImg, error, loading} = this.state;
        return (
            <main className={style.main}>
                {error && <h2>Введите запрос ещё раз</h2>}
                <ul className={style.ImageGallery}>
                    {gallery.map(image => <ImageGalleryItem
                            src={image.webformatURL}
                            alt={image.tags} key={image.id}
                            modalUrl={image.largeImageURL}
                            onClickCurrentImage={this.findCurrentImages}
                        />
                    )}
                </ul>
                {loading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}
                {showModal && <Modal onClose={this.toggleModal}>
                    <img src={largeImg} alt="Изображение"/>
                </Modal>}
                {gallery.length > 0 && <Button LoadMore={this.onLoadMore}/>}
            </main>
        );
    }
}

ImageGallery.propTypes = {
    inputValue: PropTypes.string.isRequired,
}

export default ImageGallery;