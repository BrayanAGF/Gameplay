import React from 'react'
import ReactDOM from 'react-dom/client'
import GamePlay from './GamePlay'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NextUIProvider>
          <GamePlay />
        </NextUIProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
