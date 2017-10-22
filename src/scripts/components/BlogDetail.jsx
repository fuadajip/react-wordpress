import React from 'react';
import DataStore from '../flux/stores/DataStores';

class BlogDetail extends React.Component {
	render() {
		let slug = this.props.match.params.slug;
		let post = DataStore.getPostBySlug(slug);
		let thumbnailImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;

		return(
			<div className="blogdetail-main">
				<div className="container">
					<div className="row">
					<h3 style={{textAlign: 'center'}}>{post.title.rendered }</h3>
						<div className="col-md-8 col-sm-8 col-xs-12 col-centered">
							<div className="post-featured-image">
								<img src={thumbnailImage} className="img-responsive"/>
							</div>
							<div className="post-main-article" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default BlogDetail;
