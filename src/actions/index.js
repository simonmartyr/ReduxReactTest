export function selectBook(book){
    //select book is an actionCreator, it needs to return an action.
    //an object with a type property. 
    console.log(book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}