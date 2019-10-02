import React, { Component } from 'react';
import { StyleSheet, css as aphrocss } from 'aphrodite/no-important';
import axios from 'axios';
import Item from './Item';
import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/core';

const styles = StyleSheet.create({
  container: {
    marginTop: '40px'
  }
});

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }

  render() {
    return this.state.items.length === 0 ? (
      <div className={aphrocss(styles.container)}>
        <ClimbingBoxLoader
          css={override}
          sizeUnit={'px'}
          size={23}
          color={'#F8E507'}
          loading={true}
        />
      </div>
    ) : (
      <div className={aphrocss(styles.container)}>
        {this.state.items.map((a, i) => {
          return (
            <div>
              <Item
                key={i}
                link={a.viewItemURL[0]}
                title={a.title}
                price={Number(
                  Math.round(
                    a.sellingStatus[0].currentPrice[0].__value__ * 100
                  ) / 100
                ).toFixed(2)}
                ships={a.location[0].slice(0, -7)}
                destination={a.shippingInfo[0].shipToLocations[0]}
                shippingCost={Number(
                  a.shippingInfo[0].shippingServiceCost[0].__value__
                ).toFixed(2)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
