import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
// import * as serviceWorker from './serviceWorker'

import App from './App';

// const root = createRoot(document.getElementById('app'));

ReactDom.render(<App />, document.getElementById('app'));

// serviceWorker.unregistor();

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
