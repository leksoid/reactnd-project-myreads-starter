import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import MainPage from './MainPage';


class BooksApp extends React.Component {

  state = {
    books: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  moveShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);
    BooksAPI.getAll().then((books)=> {
        this.setState({books:books})
    })
  };


  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp
