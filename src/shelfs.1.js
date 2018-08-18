import React, { Component } from 'react';
import Books from './books'
import * as BooksAPI from './BooksAPI'


class Shelfs extends Component {
    render() {
        const { shelfs} = this.props
            shelfs.map(function(shelf) {
                return(
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.renderName}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                            </ol>
                        </div>  
                    </div>
                )
            })
    }
}

export default Shelfs



























