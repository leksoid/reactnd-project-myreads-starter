import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import {Route} from 'react-router-dom'



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
    BooksAPI.update(book,shelf).then(()=>{
        BooksAPI.getAll().then((books)=> {
            this.setState({books:books})
        })
    })
  };


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <MainPage
              books={this.state.books}
              moveShelf={this.moveShelf}
            />)}
        />
        <Route path="/search" render={()=>(
            <SearchPage
                books={this.state.books}
                moveShelf={this.moveShelf}
            />)}
        />

      </div>
    )
  }
}

export default BooksApp
