import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import {Route} from 'react-router-dom'
import HomePage from './homePage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (
      <div className="app">
        <Route path="/create" render={() => (<SearchPage />)} />
        <Route exact path='/' render= {() => (<HomePage />)} />
      </div>  
      )
    }

 }       
          
          
          
      

export default BooksApp
