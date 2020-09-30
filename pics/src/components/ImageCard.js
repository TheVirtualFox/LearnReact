import React from "react";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    imageLoadedPromise() {
        return new Promise((resolve, reject) => {
            this.imageRef.current.addEventListener("load", (event) => {resolve(event)})
        });
    }

    async componentDidMount() {
        console.log(this.imageRef)
        await this.imageLoadedPromise();

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans});
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}/>
            </div>
        );
    }
}

export default ImageCard;