import axios from "axios";

const url = 'https://localhost:44369/api/';

//Book
const bookApi ='book';

export const fetchBooks = (queryString) => axios.get(`${url + bookApi}${queryString}`);
export const getBookById =(id) => axios.get(`${url + bookApi}/${id}`);
export const createBook = (newBook) => axios.post(url + bookApi, newBook);
export const updateBook = (id, updateBook) => axios.put(`${url + bookApi}/${id}`, updateBook);
export const deleteBook = (id) => axios.delete(`${url + bookApi}/${id}`);

//Author
const authorApi ='author';

export const fetchAuthors = () => axios.get(url + authorApi);
export const createAuthor = (newAuthor) => axios.post(url + authorApi, newAuthor);
export const updateAuthor = (id, updateAuthor) => axios.put(`${url + authorApi}/${id}`, updateAuthor);
export const deleteAuthor = (id) => axios.delete(`${url + authorApi}/${id}`);
export const getAuthorById = (id) => axios.get(`${url + authorApi}/${id}`);

//Category
const categoryApi ='category';

export const fetchCategories = () => axios.get(url + categoryApi);
export const createCaterory = (newCaterory) => axios.post(url + categoryApi, newCaterory);
export const updateCaterory = (id, updateCaterory) => axios.put(`${url + categoryApi}/${id}`, updateCaterory);
export const deleteCaterory = (id) => axios.delete(`${url + categoryApi}/${id}`);

//Authentication
const authApi = "authenticate";

export const login = (loginModel) => axios.post(`${url + authApi}/login`, loginModel);
export const register = (profileUser) => axios.post(`${url + authApi}/register`, profileUser);

//User & Cart
const userApi='user';
export const addBookInCart = (data) => axios.post(`${url+userApi}/addbookintocart`,data);
export const getBookInCart = (id) => axios.get(`${url+userApi}/booksincart/${id}`);
export const deleteBookInCart = (id) => axios.delete(`${url+userApi}/deletebookfromcart/${id}`);