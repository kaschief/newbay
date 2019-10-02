import React, { Component } from 'react';
// import { StyleSheet, css } from 'aphrodite/no-important';
// import { compose, withProps, lifecycle } from 'recompose';
import axios from 'axios';
import Item from './Item';

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

export default class ItemsContainerUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount(props) {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=cars&RESPONSE-DATA-FORMAT=JSON&itemFilter(0).name=MaxPrice&itemFilter(0).value=10.0'
      )
      .then(
        response => {
          this.setState({
            items:
              response.data.findItemsByKeywordsResponse[0].searchResult[0].item
          });
          console.log('STATE', this.state.items);

          console.log(
            'SHIPPING INFO',
            this.state.items[0].shippingInfo[0].shipToLocations[0]
          );
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }

  render() {
    return this.state.items.length === 0 ? (
      <div>Loading</div>
    ) : (
      this.state.items.map((a, i) => {
        return (
          <Item
            key={i}
            link={a.viewItemURL[0]}
            title={a.title}
            price={Number(
              Math.round(a.sellingStatus[0].currentPrice[0].__value__ * 100) /
                100
            ).toFixed(2)}
            ships={a.location[0].slice(0, -7)}
            destination={a.shippingInfo[0].shipToLocations[0]}
            shippingCost={Number(
              a.shippingInfo[0].shippingServiceCost[0].__value__
            ).toFixed(2)}
          />
        );
      })
    );
  }
}
