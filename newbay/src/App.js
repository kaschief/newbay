import React, { Component } from 'react';
import './App.css';
import ItemsContainer from './components/ItemsContainer';
import Search from './components/Search';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      items: [],
      minPrice: '',
      maxPrice: ''
    };
  }

  componentDidMount(props) {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=iphone&RESPONSE-DATA-FORMAT=JSON&itemFilter(0).name=MaxPrice&itemFilter(0).value=10.0`
      )
      .then(
        response => {
          this.setState({
            items:
              response.data.findItemsByKeywordsResponse[0].searchResult[0].item
          });
        },
        error => {
          console.log('ERROR', error);
        }
      );
  }

  inputHandle = event => {
    let newTerm = event.target.value;
    this.setState({
      searchTerm: newTerm
    });
  };

  numberInputHandle = event => {
    let newTerm = event.target.value;
    this.setState({
      [event.target.name]: parseInt(newTerm, 10) || 0
    });
  };

  searchDispatch = () => {
    let minPrice;
    let maxPrice;
    if (this.state.searchTerm.trim() === '') {
      window.location.reload(false);
    } else minPrice = this.state.minPrice === '' ? 0 : this.state.minPrice;
    maxPrice = this.state.maxPrice === '' ? 10000 : this.state.maxPrice;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=${this.state.searchTerm}&RESPONSE-DATA-FORMAT=JSON&itemFilter(0).name=MaxPrice&itemFilter(0).value=${maxPrice}&itemFilter(1).name=MinPrice&itemFilter(1).value=${minPrice}`
      )
      .then(
        response => {
          let searchCount =
            response.data.findItemsByKeywordsResponse[0].searchResult[0][
              '@count'
            ];

          if (searchCount === 0) {
            this.setState({
              items: null
            });
          } else
            this.setState({
              items:
                response.data.findItemsByKeywordsResponse[0].searchResult[0]
                  .item
            });
        },
        error => {
          console.log('ERROR', error);
        }
      );
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.searchDispatch();
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search
            searchTerm={this.state.searchTerm}
            change={e => this.inputHandle(e)}
            numberInput={e => this.numberInputHandle(e)}
            clicked={() => this.searchDispatch()}
            pressed={e => this.handleKeyPress(e)}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
          />{' '}
          <ItemsContainer items={this.state.items}></ItemsContainer>
        </header>
      </div>
    );
  }
}
