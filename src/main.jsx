import React from 'react'
import ReactDOM from 'react-dom/client'
import GamePlay from './GamePlay'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <NextUIProvider>
          <GamePlay />
        </NextUIProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
