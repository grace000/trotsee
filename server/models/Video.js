const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoSchema = new Schema ({
	title: {
		type: String
	},
	author : {
		type: String
	},
	categories: {
    	gayborhood: String,
    	restaurants: String,
    	sightseeing: String,
    	events: String,
    	nightlife: String,
    	museum: String,
    	festival: String
    }, 
	location: {
		type: String
	},
	url: {
		type: String
	},
  	meta: {
    	votes: Number,
    	favs:  Number
  	},
  	date : Date
});

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;