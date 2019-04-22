import React from 'react'

class Book extends React.Component {
    render(){
        return (
            <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    {[{value: "currentlyReading", text: "Currently Reading"},{value: "wantToRead", text: "Want To Read"},{value: "read", text: "Read"},{value: "none", text: "None"}].map((selector) =>
                       <option selected={ selector.value === this.props.shelf ? true : false} value={selector.value}>{selector.text}</option>
                    )}
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