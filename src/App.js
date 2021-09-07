import './App.css';
import Home from '../src/pages/Home/Home'
import CodeEditor from '../src/pages/Editor/CodeEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/online-code-editor" component={CodeEditor} />
    </Router>
  );
}

export default App;
