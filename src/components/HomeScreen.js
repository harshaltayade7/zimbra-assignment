import { Component } from 'react';
import GlobalTextObj from '../utils/text';
import Dropdown from './Dropdown';
import Products from './Products';
import ProductDesc from './ProcuctDesc';
import Header from './Header';
import _ from 'lodash';
import '../css/HomeScreen.css';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      ],
      selectedCategory: 'Laptops',
      showDescriptionPage: false,
      readyToShow: false,
      showProduct: {},
    };
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.shouldShowDescriptionPage = this.shouldShowDescriptionPage.bind(this);
  }

  /**
   * componentWillMount
   */
  componentWillMount() {
    console.info('componentWillMount')
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result", result)
          this.setState({ products: [...result], readyToShow: true });
        },
      )
  }

  /**
   * onSelectionChange - dropdown change event for category selection
   */
  onSelectionChange({ value }) {
    this.setState({ selectedCategory: value })
  }

  /**
   * shouldShowDescriptionPage - Product description page
   */
  shouldShowDescriptionPage(bool, product) {
    this.setState({ showDescriptionPage: bool, showProduct: product });
  }

  /**
   * render - Product description page
   * @returns React Component
   */
  render() {
    const { products, selectedCategory, showDescriptionPage, readyToShow } = this.state;

    const productCategories = _.uniqBy(products, (product) => product.category).map((product) => product.category) // Dropdown list

    const selectedProducts = _.filter(products, (product) => product.category === selectedCategory);
    return (
      (!showDescriptionPage && readyToShow ? (
        <div className='HomeScreen'>
          <header className='HomeScreen-header'>
            <Header title={GlobalTextObj.HomeScreenTitle} />
            <Dropdown list={productCategories} defaultValue={selectedCategory} onSelectionChange={this.onSelectionChange} />
          </header>
          <hr className='breakLine' />
          <Products productList={selectedProducts} selectedCategory={selectedCategory} shouldShowDescriptionPage={this.shouldShowDescriptionPage} />
        </div>) :
        (this.state.products ? <ProductDesc showProduct={this.state.showProduct} /> : null))

    );
  }
}

export default HomeScreen;
