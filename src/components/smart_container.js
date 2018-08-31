import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Smart extends Component {
    render() { 
        return ( 
            <div>
            
            </div> );
    }
}



const mapStateToProps = storeData => {
    return {
        valueInState: storeData.NewValue
    }
}
 
export default connect(mapStateToProps,{placeholder, placeholder})(Smart);