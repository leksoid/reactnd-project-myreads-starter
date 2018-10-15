# MyReads Project

This is project for a "Building with React" part of the Front-End Nanodegree Programm

Functionality of the project is to have the ability for the user to search books, add them to the proper list (shelves), based whether the book was read, in proccess of reading, or one of "to read".

## How to run

* Clone the repository to your local machine
* Make sure you have npm installed
* Start the server with `npm start`

The app will be automatically opened in browser using local port 3000 (http://localhost:3000/)

## Use case scenarios

1. To add a book to shelves, click on [+] icon - Search page opens, in input field enter keyword, the list of books matching the pattern are displayed. Add any book to existing shelves
2. On Main Page, organize the book by using "book shelf changer" button (lower right icon). 
3. Books can be place either on "Currently Reading", "Want to Read", "Read" shelves.

## Project structure
```bash
├── CONTRIBUTING.md
├── README.md 
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css # Styles for the app
    ├── App.js # Root of the App. Renders the screen based on route, controls the shelves
    ├── App.test.js 
    ├── Book.js # Component for rendering the book item
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── MainPage.js # Component to render shelves and book contained in it
    └── SearchPage.js # Component to render search page and its functionality
```

## Backend Server

The porject uses pre-made API. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Dependencies

- Node.js
- npm
- react-router-dom
