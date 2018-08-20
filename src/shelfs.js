import React, { Component } from 'react';
import Books from './books'
import * as BooksAPI from './BooksAPI'


class Shelfs extends Component {
    state = {

        
    }

    componentWillMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books  })
        })
    }

    shelfUpdate(shelf, book) {
        BooksAPI.update(book, shelf)
    }

    componentDidUpdate() {
        BooksAPI.getAll().then(books => {
            this.setState({ books  })
        })
    }
    
    render() {
        const { books } = this.state
        const shelfs = [
            {
                renderName : 'Currently Reading',
                shelfName : 'currentlyReading'
            },
            {
                renderName : 'Want to Read',
                shelfName : 'wantToRead'
            },
            {
                renderName : 'Read',
                shelfName : 'read'
            }
        ]

        const Component = this
        
        return(
            
            shelfs.map(function(shelf) {
                
                if (books === undefined) {
                    return(    
                    <div className="bookshelf" key={shelf.renderName}>
                        <h2 className="bookshelf-title">{shelf.renderName}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                
                            </ol>
                        </div>  
                    </div>
                    )
                }

                else  {
                    return(    
                    <div className="bookshelf" key={shelf.renderName}>
                        <h2 className="bookshelf-title">{shelf.renderName}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Books books={books} shelf={shelf} shelfUpdate={Component.shelfUpdate} />
                            </ol>
                        </div>  
                    </div>
                    )
                }  
                
            }
        ))                     
    }
}

export default Shelfs



























