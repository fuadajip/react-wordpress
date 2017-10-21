import React from 'react';

class BlogGrid extends React.Component {
	render (){
		// console.log(this.props.postdata);
		return (
			<div className="panel-blog">
				<div dangerouslySetInnerHTML={{ __html: this.props.postdata.excerpt.rendered }}>
				</div>

			</div>
		)
	}
}

export default BlogGrid;
