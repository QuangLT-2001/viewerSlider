import React, {ReactElement} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewer from './Container/viewer';
import "./App.css"
import "rsuite/dist/rsuite.min.css";
const App = () => {

  return <div className="viewer-container">
    <Viewer />
  </div>
}
export default App;
