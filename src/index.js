// import React from 'react';
// 
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// //import ReactDOM from 'react-dom/client';
// //import './styles/globals.css';
// import {ConnectButton} from '@rainbow-me/rainbowkit';

// export default function Home() {
//   return (
   
//      <ConnectButton />
    
//   )
// }

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import MyApp from './App';

ReactDOM.render(
  <React.StrictMode>
    <title>My RainbowKit App</title>
    <MyApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

