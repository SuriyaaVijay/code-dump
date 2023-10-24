import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './screens/App';
import AuthContext,{AuthData} from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContext>
    <App />
   </AuthContext>

  </React.StrictMode>
);


