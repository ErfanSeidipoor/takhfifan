import React from 'react';
import { connect } from 'react-redux'
import Actions from '../../modules/action'
import Navbar from '../../components/navbar'
import Products from '../../components/products'
import './index.scss';


 class HomePage extends React.Component {
   render() {
      return (
        <div className="home-page">
          <Navbar />
          <Products />
        </div>
      );
   }
 }

 const mapStateToProps = state => ({
   text: state.text,
 }
)

const mapDispatchToProps = dispatch => ({
  createItem: ()=>dispatch(Actions.createItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
