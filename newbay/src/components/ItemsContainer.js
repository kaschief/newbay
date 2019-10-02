import React from 'react';
// import { StyleSheet, css } from 'aphrodite/no-important';
import { compose, withProps } from 'recompose';
import axios from 'axios';
import { RSA_NO_PADDING } from 'constants';
import { resolve } from 'path';

// const styles = StyleSheet.create({
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   button: {
//     border: '1px solid lightGrey',
//     borderRadius: '5px'
//   },
//   link: {
//     color: 'black',
//     textDecoration: 'none'
//   }
// });

const ItemsContainerUI = () => {
  return <div>Groups of Items</div>;
};

const addItems = withProps(props => {
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=cars&RESPONSE-DATA-FORMAT=JSON&itemFilter(0).name=MaxPrice&itemFilter(0).value=10.0'
    )
    .then(
      response => {
        console.log(
          'RESPONSE',
          response.data.findItemsByKeywordsResponse[0].searchResult[0].item
        );
      },
      error => {
        console.log('ERROR', error);
      }
    );

  return {
    items: 'hello'
  };
});

const ItemsContainer = compose(addItems)(ItemsContainerUI);

export default ItemsContainer;
