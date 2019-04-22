import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    updateBook = (event) => {
     BooksAPI.update(this.props.id, event.target.value)
    }

    render(){
        return (
            <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                <div className="book-shelf-changer">
                <select onChange={this.updateBook} defaultValue={this.props.shelf}> 
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>

                </select>
                </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
            </div>
            </li>
        )
    }
}

export default Book;