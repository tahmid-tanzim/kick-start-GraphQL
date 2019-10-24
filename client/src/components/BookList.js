import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries';

import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBookId: null
        };
    }

    displayBooks() {
        const {data} = this.props;

        if (data.loading) return 'Loading...';

        return (<ul id="book-list">
            {data.books.map(book => <li key={book.id}
                                        onClick={(e) => this.setState({selectedBookId: book.id})}
                                        style={ {cursor: 'pointer'} }>{book.name}</li>)}
        </ul>);
    }

    render() {
        return (
            <div>
                {this.displayBooks()}
                <hr/>
                <BookDetails bookId={this.state.selectedBookId}/>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
