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
}

export default alt.createStore(DataStore, 'DataStore');
