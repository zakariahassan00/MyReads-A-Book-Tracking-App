import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
// import Shelfs from './shelfs'
// import ShelfChanger from './shelfChanger'

class Books extends Component {

    state = {

    }

    // componentWillUpdate(shelf, book) {
    //     BooksAPI.update(book, shelf)
    // }
    
    // componentDidUpdate() {

    // }
// **************************************************************************************
    render() {

      const {shelf, books} = this.props;
      const Component = this

return(
    books.map(function(book) {
        if(book.shelf === shelf.shelfName) {
            return(
                <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        
                        <select value={book.shelf} onChange={(event) => Component.props.shelfUpdate(event.target.value, book)}> 
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
            )
        }
    })
    )
}
}

export default Books 

