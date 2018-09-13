import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
// import sortBy from 'sort-by'

class SearchPage extends Component {

    state ={
        books : []
    }

    searchBooks(query) {
        BooksAPI.search(query).then((books) => {
            this.setState({books})
        })
    }

    addBook(shelf, book) {
        BooksAPI.update(book, shelf)
    }

    componentDidUpdate() {

    }


    render() {
        const {books} = this.state
        const Component = this
        console.log(books);
        if (books === undefined || books.error === "empty query") {
            return(
              <div>
                <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => Component.searchBooks(event.target.value)}/>
                    </div>
                </div>
                </div>
                <div className="search-books-results"><b>Showing 0 Resaults</b></div>
                </div>
        )
        }

        else{
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => Component.searchBooks(event.target.value)}/>
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">

                    {books.map((book) => (
                        <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">

                            <select value="none" onChange={(event) => Component.addBook(event.target.value, book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>

                    ))}

                    </ol>
                </div>
            </div>
        )
    }
    }
}
export default SearchPage
