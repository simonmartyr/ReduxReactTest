import React from 'react'; 
import {Component}  from 'react';
import { connect } from 'react-redux'; 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList(){
        return this.props.books.map((book) => {
            return(
                <li 
                onClick= {() => this.props.selectBook(book)} 
                className="list-group-item" 
                key={book.title}>
                {book.title}
                </li>
            );
        }); 
    }
}

function mapStateToProps(state){
    //what is returned will show up as props
    //inside booklist
    return {
        books: state.books
    };
}

//anything reutrned from this function will end up as props
// on the booklist container. 
function mapDispatchtoProps(dispatch){
    //whenever select book is called, result should be passed
    //to all reducers. 
    return bindActionCreators({selectBook: selectBook}, dispatch); 
}

// promote BookList from a component to a container. 
export default connect(mapStateToProps, mapDispatchtoProps)(BookList); 