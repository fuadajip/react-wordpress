import React from 'react';
import Navbar from './Navbar';
import BlogGrid from './BlogGrid';

class Home extends React.Component {
    render() {
			return (
					<div className="home">
					<Navbar />
						<BlogGrid />
					</div>
			);
    }
}

export default Home;
