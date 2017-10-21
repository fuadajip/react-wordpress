import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import DataActions from './flux/actions/DataActions';
import Home from './components/Home';
import { render } from 'react-dom';

class AppInitializer {
	run() {
		DataActions.getPages((response)=>{
				render(
						<Router>
								<div>
										<Switch>
												<Route path="/" component={ Home } exact />
												<Route render={() => { return <Redirect to="/" /> }} />
										</Switch>
								</div>
						</Router>

						, document.getElementById('root')
				);
		});
	}
}
new AppInitializer().run();
