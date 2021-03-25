import React from 'react'
import ReactDOM from 'react-dom'
/* BrowserRouterをimportすることによりreact-router-domのswitchなどが使用できる */
import { BrowserRouter } from 'react-router-dom';
/*  */
import App from '../components/App'
/* importしたBrowserRouterで囲うことによりその中のAppもswitchやlinkなどが使えるようになる */
/* rootという要素を取得してきてAppを描画している */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.querySelector('#root'),
  );
});