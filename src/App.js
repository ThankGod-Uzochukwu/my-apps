import './App.css';
import {Data} from './components/Data'
// import {store} from './store'
// import {Provider} from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/apiSlice';

function App() {
  return (
    // <Provider store={store}>
    <ApiProvider api={apiSlice}>
      <div className="App">
        <Data />
      </div>
    </ApiProvider>
      
    // {/* </Provider> */}
    
  );
}

export default App;
