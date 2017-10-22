import React from 'react';
import DataStore from '../flux/stores/DataStores';
import BlogGridPanel from './BlogGridPanel';
import BlogDetail from './BlogDetail';

class BlogGrid extends React.Component {
	render (){
		let itemPost;
		let allData = DataStore.getAllPosts();
		if(allData){
			itemPost = allData.map(blogJSON => {
				return(
					<BlogGridPanel key={blogJSON.id} postdata={blogJSON} />
				)
			});
		}else{
			console.log('no blog post');
		}
		return (
			<div className="grid-main">
				<div className="container">
				<div className="row">
					{itemPost}
				</div>
				</div>

			</div>
		)
	}
}

export default BlogGrid;
