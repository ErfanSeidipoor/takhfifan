import React from 'react';
import './index.scss';
import Actions from '../../../modules/action'
import { connect } from 'react-redux'


 class Navbar extends React.Component {
   render() {
      return (
        <div className="cart">
            <div className="cart-count">{this.props.products.filter(item=>item.cart).count}</div>
            <div className="cart-dropdown">
                {
                    this.props.products.filter(item=>item.cart).map(item=>{
                        return (
                            <div
                                key={item.title}
                                className="cart-dropdown-item"
                                onClick={()=>this.props.RemoveFromCart(item.id)}
                            >
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
      );
   }
 }


const mapStateToProps = state => ({
    products: state.products,
  }
)

const mapDispatchToProps = dispatch => ({
    RemoveFromCart: (id)=>dispatch(Actions.RemoveFromCart(id)),
    AddToCart: (id)=>dispatch(Actions.AddToCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);