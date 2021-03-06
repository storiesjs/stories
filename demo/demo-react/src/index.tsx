import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stories from './stories/Stories';
import reportWebVitals from './reportWebVitals';

let app: ReactElement;

if (process.env.REACT_APP_STORIES) {
  app = <Stories/>;
} else {
  app = <App/>;
}

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
