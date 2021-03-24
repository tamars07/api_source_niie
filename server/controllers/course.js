//controller
//import mongoose from 'mongoose';
const Course = require ('../models/course');

// create new course
exports.course_create = function createCourse (req, res) {
	const course = new Course({
	  title: req.body.title,
	  description: req.body.description,
	});
	
	return course
	  .save()
	  .then((newCourse) => {
		return res.status(201).json({
		  success: true,
		  message: 'New course created successfully',
		  Course: newCourse,
		});
	  })
	  .catch((error) => {
		  console.log(error);
		res.status(500).json({
		  success: false,
		  message: 'Server error. Please try again.',
		  error: error.message,
		});
	  });
  }