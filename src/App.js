import React from 'react'
import './App.css'
import SearchPage from './searchPage'
import {Route} from 'react-router-dom'
import HomePage from './homePage'

class BooksApp extends React.Component {
  state = {
    books : [],
  }



  render() {
    
    return (
      <div className="app">
        <Route path="/search" render={() => (<SearchPage />)} />
        <Route exact path='/' render= {() => (<HomePage books={[]} />)} />
      </div>  
      )
    }
 }       

export default BooksApp
