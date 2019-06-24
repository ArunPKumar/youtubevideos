import axios from 'axios';

// const KEY = "AIzaSyCGqXYSnfy2BmWGmxxbAg20YrfR7VKqYH4";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3"
});
