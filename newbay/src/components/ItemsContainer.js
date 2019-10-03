import React from 'react';
import { StyleSheet, css as aphrocss } from 'aphrodite/no-important';
import Item from './Item';
import { ClimbingBoxLoader } from 'react-spinners';
import { css } from '@emotion/core';

const styles = StyleSheet.create({
  container: {
    marginTop: '45px'
  }
});

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ItemsContainerUI = ({ items }) => {
  return items === undefined ? (
    <div>No results found</div>
  ) : items.length === 0 ? (
    <div className={aphrocss(styles.container)}>
      <ClimbingBoxLoader
        css={override}
        sizeUnit={'px'}
        size={23}
        color={'#F8E507'}
        loading={items.length === 0}
      />
    </div>
  ) : (
    <div className={aphrocss(styles.container)}>
      {items.map((a, i) => {
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
      })}
    </div>
  );
};

export default ItemsContainerUI;
