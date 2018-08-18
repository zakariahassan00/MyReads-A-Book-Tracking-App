import React, { Component } from 'react';
import Books from './books'
import * as BooksAPI from './BooksAPI'


class Shelfs extends Component {
    state = {
        
        books : []
    }

    componentWillMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
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
        console.log(books);


        if(books[0] === undefined) {
            return(
                <Shelfs shelfs={shelfs} />
            )
        }
        else {

        }



        return(
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
        )
    














    }
}

export default Shelfs



























