import React from 'react';
import { Input, Container, Row, Col } from 'reactstrap';
import SearchButton from './SearchButton';
import { StyleSheet, css } from 'aphrodite/no-important';

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
    overflow: 'hidden'
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

const Search = ({ search, change, pressed, clicked }) => {
  return (
    <div className={css(styles.container)}>
      <Input
        type="text"
        name="search"
        placeholder="ebay Search"
        value={search}
        onChange={change}
        onKeyUp={pressed}
      />
      <button className={css(styles.button)}>Search</button>
    </div>
  );
};

export default Search;
