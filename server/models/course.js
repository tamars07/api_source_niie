//model
const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true
		},
		description: {
			type: String
		},
	},
	{
		timestamps: true
	}
);

const Course = mongoose.model('Course', courseSchema)

module.exports = Course