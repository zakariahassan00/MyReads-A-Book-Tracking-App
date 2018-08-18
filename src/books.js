import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Books extends Component {
    state = {
        books : []
    }

    componentWillMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
    }

    render() {
        return (
            console.log(this.state.books)
        )
    }
}

export default Books