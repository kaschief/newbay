import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';
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
      searched: false
    };
  }

  inputHandle = event => {
    let newTerm = event.target.value;
    this.setState({
      searchTerm: newTerm
    });
  };

  searchDispatch = () => {
    console.log('SEARCH CLICKED');
    // const api_key = 'pd58UnrmMGavr28zcKkMmtZmupnyHjzw';

    // if (this.state.searchTerm.trim() === '') {
    //   window.location.reload(false);
    // } else
    //   axios
    //     .get(
    //       `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm.trim()}&api_key=${api_key}`
    //     )
    //     .then(res => {
    //       let results = res.data.data;
    //       console.log('RESULTS', results);
    //       this.setState({
    //         searched: true,
    //         results: results
    //       });
    //     });
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
            search={this.state.searchTerm}
            change={e => this.inputHandle(e)}
            clicked={() => this.searchDispatch()}
            pressed={e => this.handleKeyPress(e)}
          />{' '}
          <ItemsContainer results={this.state.results}></ItemsContainer>
        </header>
      </div>
    );
  }
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: '',
//       results: [],
//       searched: false
//     };
//   }

//   componentDidMount() {
//     // axios
//     //   .get(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`)
//     //   .then(res => {
//     //     let trending = res.data.data;
//     //     console.log(trending);
//     //     this.setState({
//     //       trending: trending
//     //     });
//     //   });
//   }

//   inputHandle = event => {
//     let newTerm = event.target.value;
//     this.setState({
//       searchTerm: newTerm
//     });
//   };

//   searchDispatch = () => {
//     console.log('clicked');
//     // const api_key = 'pd58UnrmMGavr28zcKkMmtZmupnyHjzw';

//     // if (this.state.searchTerm.trim() === '') {
//     //   window.location.reload(false);
//     // } else
//     //   axios
//     //     .get(
//     //       `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm.trim()}&api_key=${api_key}`
//     //     )
//     //     .then(res => {
//     //       let results = res.data.data;
//     //       console.log('RESULTS', results);
//     //       this.setState({
//     //         searched: true,
//     //         results: results
//     //       });
//     //     });
//   };

//   handleKeyPress = e => {
//     if (e.key === 'Enter') {
//       this.searchDispatch();
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className="Action">
//           <Search
//             search={this.state.searchTerm}
//             change={e => this.inputHandle(e)}
//             clicked={() => this.searchDispatch()}
//             pressed={e => this.handleKeyPress(e)}
//           />
//           {/*
//           {this.state.searched === true && this.state.results.length === 0 ? (
//             <div className="SearchError">
//               <h5>Whoops!</h5>
//               <p>
//                 Looks like we don't have the Gif you wanted. Please try a
//                 different search.
//               </p>
//             </div>
//           ) : null} */}
//           {/*
//           <div className="Results">
//             {this.state.searched === false
//               ? this.state.trending.map((g, i) => {
//                   return (
//                     <Gif
//                       key={g.id}
//                       url={g.images.fixed_width.url}
//                       alt={g.title}
//                       link={g.images.original.url}
//                       width={g.images.fixed_width.width}
//                       height={g.images.fixed_width.height}
//                     />
//                   );
//                 })
//               : this.state.results.map((g, i) => {
//                   return (
//                     <Gif
//                       key={g.id}
//                       url={g.images.fixed_width.url}
//                       alt={g.title}
//                       link={g.images.original.url}
//                       width={g.images.fixed_width.width}
//                       height={g.images.fixed_width.height}
//                     />
//                   );
//                 })}
//           </div> */}
//         </div>
//       </div>
//     );
//   }
// }
