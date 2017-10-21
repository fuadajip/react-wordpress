import DataStore from '../flux/stores/DataStores';
import React from 'react';
import BlogGrid from './BlogGrid';

class Home extends React.Component {
    render() {
			let post;
			let allData = DataStore.getAllPosts();
			if(allData){
				console.log('have blog post');
				post = allData.map(blogJSON => {
					console.log(blogJSON);
					return(
						<BlogGrid key={blogJSON.id} postdata={blogJSON} />)
				});
			}else{
				console.log('no blog post');
			}
			return (
					<div className="grid-layout">
					<h1>Fuad Aji Pratomo</h1>
					{post}
					</div>
			);
    }
}

export default Home;
