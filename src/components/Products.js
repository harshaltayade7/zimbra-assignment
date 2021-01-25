import { Component } from 'react';
import '../css/Products.css'
import _ from 'lodash';
import productLogo from '../assets/lenovo_0.png';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.onProductClick = this.onProductClick.bind(this);
    }

    /**
     * onProductClick - On product click
     * @param {Object} e - Event
     */
    onProductClick(e) {
        const id = e.currentTarget.dataset.id;
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(
            (result) => {
                 console.log("resul buttonclick", result)
                var product = _.find(result,(res)=>res.productId===id);
                this.props.shouldShowDescriptionPage(true, product)
          },
        )
    }

    /**
     * render - React render method
     * @returns - React component
     */
    render() { 
        return (
            <div className='productsWrapper'>
                {this.props.productList.map((product, key) => (
                    <div key={key} data-id={product.productId} className={`productItem ${product.name}`} onClick={this.onProductClick}>
                        <img className="productImg" style={{backgroundImage: `url(${productLogo})`,}} />
                        <div className="itemTitle">
                            {product.name}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}