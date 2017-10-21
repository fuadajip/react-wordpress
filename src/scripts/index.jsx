import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';


const React = require('react');
const ReactDOM = require('react-dom');

class AppInitializer extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<AppInitializer />, document.getElementById('app'));
