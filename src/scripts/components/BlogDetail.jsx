import React from 'react';

class BlogDetail extends React.Component {
	render() {
		return(
			<h3>{this.props.match.params.slug }</h3>
		)
	}
}

export default BlogDetail;
