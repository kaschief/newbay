import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    background: 'rgb(255, 255, 255)',
    minWidth: '100px',
    width: '700px',
    height: '80px',
    borderRadius: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 0px 0px, rgba(0, 0, 0, 0.13) 0px 0px 0px;',
    marginBottom: '16px',
    overflow: 'hidden'
  },
  imageContainer: {
    height: '80px',
    minWidth: '80px',
    maxWidth: '80px',
    backgroundColor: 'blue'
  },
  contentContainer: {
    height: '80px',
    flex: '1',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '16px'
  },
  contents: {
    marginBlockStart: '0',
    marginBlockEnd: '0',
    color: 'black'
  },
  header: {
    fontSize: '14px',
    fontWeight: '600',
    paddingBottom: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  text: {
    fontSize: '14px'
  },
  link: {
    textDecoration: 'none'
  },
  footer: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shipping: {
    color: 'green',
    fontWeight: '600'
  }
});

const ItemUI = ({ title, price, link, destination, shippingCost }) => {
  return (
    <div className={css(styles.container)}>
      <a className={css(styles.link)} href={link}>
        <div className={css(styles.imageContainer)}></div>
      </a>
      <div className={css(styles.contentContainer)}>
        <a className={css(styles.link)} href={link}>
          <h4 className={css(styles.contents, styles.header)}>{title}</h4>
        </a>
        <div className={css(styles.footer, styles.text)}>
          {shippingCost > 0 ? (
            <p className={css(styles.contents, styles.text, styles.shipping)}>
              Ships {destination} for ${shippingCost}
            </p>
          ) : (
            <p className={css(styles.contents, styles.text, styles.shipping)}>
              Free shipping {destination}
            </p>
          )}
          <p className={css(styles.contents, styles.header)}>{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemUI;
