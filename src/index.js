import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloClient , ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:process.env.REACT_APP_GRAPCMS_URI,
  cache:new InMemoryCache(),
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
);


