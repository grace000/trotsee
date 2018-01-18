const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	username: {
		type: String, unique: true
	},
	password: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	email: {
		type: String
	},
	collectedtrots: {
		type: String
	},
	uploadedtrots: {
		type: String
	}
});

const User = mongoose.model("users", UserSchema);
module.exports = User;