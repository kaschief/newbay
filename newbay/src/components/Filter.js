import React from 'react';
import { Input } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '700px',
    margin: 'auto',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: `fuchsia`
  }
});

const FilterUI = ({ change, minPrice, maxPrice }) => {
  return (
    <div className={css(styles.container)}>
      <Input
        type="number"
        name="minPrice"
        placeholder="min price"
        value={minPrice}
        onChange={change}
      />
      -
      <Input
        type="number"
        name="maxPrice"
        placeholder="max price"
        value={maxPrice}
        onChange={change}
      />
    </div>
  );
};

export default FilterUI;
