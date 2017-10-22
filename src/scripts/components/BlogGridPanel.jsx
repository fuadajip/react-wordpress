import React from 'react';
import DataStore from '../flux/stores/DataStores';
import { Link } from 'react-router-dom';

class BlogGridPanel extends React.Component {
	render() {
		// console.log(this.props.postdata);
		let blogJSON = this.props.postdata;
		let thumbnailImage = blogJSON._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
		let linkArticle = blogJSON.slug;
		console.log(blogJSON);
		return(
			<Link to={'journey/' + linkArticle}>
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="panel panel-default">
				<div className="panel-header">
					<img className="img-responsive" src={thumbnailImage}/>
				</div>
					<div className="panel-body">
						<h5>{blogJSON.title.rendered}</h5>
						{
							blogJSON.categories.map(categoriesArr => {
								let blogCategory = DataStore.getPostCategories(categoriesArr).name;
								return(
									<span className="label label-success" style={{marginRight:10 + 'px'}} key={categoriesArr}> {blogCategory}</span>
								);
							})
						}
						<p>{blogJSON.date}</p>
						<div dangerouslySetInnerHTML={{ __html: blogJSON.excerpt.rendered }}>
					</div>
					</div>
				</div>
			</div>
			</Link>
		)
	}
}
export default BlogGridPanel;
