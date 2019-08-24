import React from 'react';
import { connect } from 'react-redux'
import Actions from '../../modules/action'
import './index.scss';


 class HomePage extends React.Component {
   render() {
     console.log(this.props);
     
      return (
        <div className="home-page">
            <h1 onClick={()=>this.props.createItem()}>Home Page</h1>
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
