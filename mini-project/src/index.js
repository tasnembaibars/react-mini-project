import React from 'react'
import  ReactDOM from 'react-dom'
import App from './App';
import Store from './app/Store';
import {Provider} from 'react-redux'
import {createSlice} from '@reduxjs/toolkit'
ReactDOM.render(
<Provider store={Store}>
    <App/>
</Provider>
,document.getElementById("root"));
