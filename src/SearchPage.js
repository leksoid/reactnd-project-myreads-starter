import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import { Link } from 'react-router-dom'


class SearchPage extends Component {

    state = {
        query: '',
        result: []
    };

    updateQuery = (query)=>{
        this.setState({query: query});
        this.getBooksFromSearch(query);
    };

    getBooksFromSearch = (query)=>{
        if(query){
            BooksAPI.search(query).then((result)=> {
                if(result.error){
                    this.setState({result:[]})
                } else {
                    this.setState({result})
                }
            })
        } else {
            this.setState({result:[]})
        }
    };

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event)=> this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.result
                                .map(searchResult=> {
                                    let shelf = "none";
                                    this.props.books.map(book=>
                                    {
                                        book.id === searchResult.id ? shelf = book.shelf : ""
                                    });
                                    return (<li key={searchResult.id}>
                                        <Book
                                            book={searchResult}
                                            moveShelf={this.props.moveShelf}
                                            currentShelf={shelf}
                                        />
                                    </li>)
                                })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;