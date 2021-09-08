import Home from '../src/pages/Home/Home'
import CodeEditor from '../src/pages/Editor/CodeEditor';
import FullPageView from '../src/pages/Editor/FullPageView';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/online-code-editor" component={CodeEditor} />
      <Route exact path="/new" component={FullPageView} />
    </Router>
  );
}

export default App;
