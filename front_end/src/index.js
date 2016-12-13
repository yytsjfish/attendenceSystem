import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MainPage from './custom_pages/MainPage';
// import MainPage1 from './custom_pages/MainPage1';
import Content from './custom_components/Content';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <div>
  	<MainPage> 
  		<Content />
  	</MainPage>
  </div>,
  document.getElementById('root')
);
