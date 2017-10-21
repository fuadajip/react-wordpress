import alt from '../alt/alt';
import DataActions from '../actions/DataActions';

class DataStore {
  constructor() {
    this.data = {};

    this.bindListeners({
      // listen to the getSuccess() in DataActions.js
      handleSuccess: DataActions.GET_SUCCESS,
    });

    this.exportPublicMethods({
      getAll: this.getAll,
      getAllPages: this.getAllPages,
      getAllPosts: this.getAllPosts,
			getPageBySlug: this.getPageBySlug,
			getAllCategories: this.getAllCategories,
			getPostCategories: this.getPostCategories,
    });
  }

  // store data returned by getSuccess() in DataActions.js
  handleSuccess(data) {
    this.setState({ data });
  }

  // returns all pages and posts
  getAll() {
    return this.getState().data;
  }

  // returns all Pages
  getAllPages() {
    return this.getState().data.pages;
  }

  // returns all Posts
  getAllPosts() {
    return this.getState().data.posts;
  }

  // returns a Page by provided slug
  getPageBySlug(slug) {
    const pages = this.getState().data.pages;
    return pages[Object.keys(pages).find((page, i) => pages[page].slug === slug)] || {};
	}

	getAllCategories(){
		return this.getState().data.categories;
	}

	getPostCategories(id){
		const categories = this.getState().data.categories;
		return categories[Object.keys(categories).find((category, i) =>
			categories[category].id == id)] || {};
	}
}

export default alt.createStore(DataStore, 'DataStore');
