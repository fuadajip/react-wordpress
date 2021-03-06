import axios from 'axios';
import alt from '../alt/alt';

class DataActions {
  constructor() {
    const appUrl = 'http://fuadajip.com/wordpress'; // wordpress instalation
    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // endpoint for wordpress pages
		this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?_embed`; // endpoint for wordpress posts
		this.categoriesEndPoint = `${appUrl}/wp-json/wp/v2/categories`; // endpoint for categories
  }

  // method to get data from endpoint
  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // method for getting Pages data
  getPages(cb) {
    this.api(this.pagesEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
    return true;
  }

  // Method for getting Posts data
	getPosts(pages, cb){
		this.api(this.postsEndPoint).then((response)=>{
			this.getCategories(pages, response, cb);
		});
		return true;
	}

	getCategories(pages, posts, cb){
		this.api(this.categoriesEndPoint).then((response) => {
			const categories = response;
			const payload   = { pages, posts, categories};
			this.getSuccess(payload); // Pass returned data to the store
			cb(payload); // This callback will be used for dynamic rout building
		});
		return true;
	}

  // this returnes an object with Pages and Posts data together
  // the Alt Store will listen for this method to fire and will store the returned data
  getSuccess(payload) {
    return payload;
  }
}

export default alt.createActions(DataActions);
