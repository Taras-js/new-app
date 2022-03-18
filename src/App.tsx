import * as React from 'react'
import Navbar from "./Components/navbar/Navbar";
import RoutesContent from './Components/content/RoutesContent'
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
function App () {
    return (
      <BrowserRouter>
          <Provider store={store}>
              <Navbar/>
              <RoutesContent />
          </Provider>
      </BrowserRouter>
  );
}
export default App;
