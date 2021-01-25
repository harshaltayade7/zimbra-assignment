import { Component } from 'react';
import Header from './Header';
import GlobalTextObj from '../utils/text';
import productLogo from '../assets/lenovo_0.png';

/**
 * ProductDesc - Product description component
 */
export default class ProductDesc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.showProduct) {
            return;
        }
        const { category, name, description } = this.props.showProduct;

        const descriptionStyle = {
            fontSize:"18px", 
            marginTop:"73px",
            marginRight: "34px"
        }
        return (
            <div className="HomeScreen ProductDescription">
                <Header title={GlobalTextObj.DescTitle} />
                <hr className='breakLine' />
                <div className="commonDiv">
                    <div className='leftDiv'>
                        <img className="discPage" style={{ backgroundImage: `url(${productLogo})`, }} />
                    </div>
                    <div className='rightDiv'>
                        <div className="table">
                            <div className="titleField">
                                <div className='titles'>Category</div>
                                <div className='titles'>Product Name</div>
                                <div className='titles'>Product Description</div>
                            </div>
                            <div className="infoField"> 
                                <div className='titles'>{category}</div>
                                <div className='titles'>{name}</div>
                                <div className='titles' style={descriptionStyle}>{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}