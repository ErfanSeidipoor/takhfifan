import React from 'react';
import './index.scss';


 class Product extends React.Component {
    render() {
      return (
        <div className="product">
            <div className="product-img" />
            <div className="product-title">{this.props.item.title}</div>
            <div className="product-desc">{this.props.item.desc.substring(0, 120)} ...</div>
            <div className="product-bottom-section">
                <div className="product-bottom-section-price">{this.props.item.price}</div>
                <div className="product-bottom-section-addcart" onClick={()=>this.props.addToCart()}>addcart</div>
            </div>
        </div>
      );
    }
 }

export default Product;