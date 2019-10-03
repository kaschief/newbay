import React from 'react';
import { Input } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';
import Filter from './Filter';

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    top: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '700px',
    margin: 'auto',
    height: '40px',
    borderRadius: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 0px 0px, rgba(0, 0, 0, 0.13) 0px 0px 0px;',
    overflow: 'hidden',
    backgroundColor: `fuchsia`
  },
  button: {
    height: '40px',
    backgroundColor: '#ba1818',
    color: 'white',
    borderRadius: '8px',
    fontSize: '14px',
    width: '80px'
  }
});

const SearchUI = ({
  searchTerm,
  change,
  pressed,
  clicked,
  numberInput,
  minPrice,
  maxPrice
}) => {
  return (
    <div className={css(styles.container)}>
      <Input
        type="text"
        name="searchTerm"
        placeholder="eBay Search"
        value={searchTerm}
        onChange={change}
        onKeyUp={pressed}
      />
      <Filter minPrice={minPrice} maxPrice={maxPrice} change={numberInput} />
      <button className={css(styles.button)} onClick={clicked}>
        Search
      </button>
    </div>
  );
};

export default SearchUI;
