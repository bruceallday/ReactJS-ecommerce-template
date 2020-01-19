import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { addItem }from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
        </div>

        <CustomButton onClick={ () =>  addItem(item)} inverted>Add to cart</CustomButton>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);