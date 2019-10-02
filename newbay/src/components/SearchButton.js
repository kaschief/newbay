import React from 'react';
import { Button } from 'reactstrap';

const SearchButton = props => {
  return (
    <div>
      <Button className="Button" onClick={props.clicked} color="primary">
        Search
      </Button>{' '}
    </div>
  );
};

export default SearchButton;
