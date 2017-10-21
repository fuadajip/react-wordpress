import React from 'react';

class BlogGridPanel extends React.Component {
	render() {
		// console.log(this.props.postdata);
		return(
			<div className="col-md-4 col-sm-6 col-xs-12">
				<div className="panel panel-default">
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
