import Carousel from 'react-bootstrap/Carousel';
import data from '../data/concerts'
import { Link } from "react-router-dom";

const Product = (props) => {
    const productList = data.map((product) => (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={product.productImageUrl}
                alt={product.cardinal}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link className='button-8' type="button" to={`/pay/${product.title}`}>Reservar Entrada</Link>
        </Carousel.Item>
    ));

    return (
        <Carousel >
            {productList}
        </Carousel>
    );
}

export default Product