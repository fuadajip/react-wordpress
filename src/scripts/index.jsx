import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import DataActions from './flux/actions/DataActions';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import { render } from 'react-dom';
import Navbar from './components/Navbar';

class AppInitializer {
	buildRoutes(data){
		return data.posts.map((post, i) => {
            return(
                <Route
                    key={i}
                    component={ BlogDetail }
                    path={`/journey/:slug`}
                    exact
                />
            )
        })
    }
	run() {
		DataActions.getPages((response)=>{
				render(
					<Router>
						<div>
							<Navbar />
							<Switch>
									<Route path="/" component={ Home } exact />
									{this.buildRoutes(response)}
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
