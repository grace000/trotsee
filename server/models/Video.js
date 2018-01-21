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
    	gayborhood: Boolean,
    	restaurants: Boolean,
    	sightseeing: Boolean,
    	events: Boolean,
    	nightlife: Boolean,
    	museum: Boolean,
    	festival: Boolean,
    	sports: Boolean,
    	shopping: Boolean
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

const Video = mongoose.model("videos", VideoSchema);
module.exports = Video;