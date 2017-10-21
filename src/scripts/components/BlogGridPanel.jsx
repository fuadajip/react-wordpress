import React from 'react';

class BlogGridPanel extends React.Component {
	render() {
		// console.log(this.props.postdata);
		let thumbnailImage = this.props.postdata._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;
		return(
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="panel panel-default">
				<div className="panel-header">
					<img className="img-responsive" src={thumbnailImage}/>
				</div>
					<div className="panel-body">
						<h5>{this.props.postdata.title.rendered}</h5>
						<p>{this.props.postdata.date}</p>
						<div dangerouslySetInnerHTML={{ __html: this.props.postdata.excerpt.rendered }}>
					</div>
					</div>
				</div>
			</div>
		)
	}
}
export default BlogGridPanel;
