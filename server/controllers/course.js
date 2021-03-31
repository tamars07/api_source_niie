//controller
//import mongoose from 'mongoose';
const Course = require ('../models/course');

// create new course
exports.course_create = async function (req, res) {
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

  //get all course
  exports.course_getAll = async function (req,res){
	Course.find()
    .select('_id title description')
    .then((allCourse) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all course',
        Course: allCourse,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
  }

  //get single course
  exports.course_getSingle = function getSingleCourse (req,res){
	const id = req.params.courseId;
  	Course.findById(id)
    .then((singleCourse) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleCourse.title}`,
        Course: singleCourse,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This course does not exist',
        error: err.message,
      });
   });
  }

  //update a course
  exports.course_update = function updateCourse(req, res) {
	const id = req.params.courseId;
	const updateObject = req.body;
	Course.update({ _id:id }, { $set:updateObject })
	  .exec()
	  .then(() => {
		res.status(200).json({
		  success: true,
		  message: 'Course is updated',
		  updateCourse: updateObject,
		});
	  })
	  .catch((err) => {
		res.status(500).json({
		  success: false,
		  message: 'Server error. Please try again.'
		});
	  });
  }

// delete a course
exports.course_delete = function deleteCourse(req, res) {
	const id = req.params.courseId;
	Course.findByIdAndRemove(id)
	  .exec()
	  .then(()=> res.status(204).json({
		success: true,
	  }))
	  .catch((err) => res.status(500).json({
		success: false,
	  }));
  }





