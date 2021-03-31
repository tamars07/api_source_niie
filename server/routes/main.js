//router
const express = require('express');
const Course = require ('../controllers/course');

const router = express.Router();

//CRUD course
//create a new course
router.post('/courses', Course.course_create);
//get all courses
router.get('/courses', Course.course_getAll);
//get single course
router.get('/courses/:courseId', Course.course_getSingle);
//update course
router.patch('/courses/:courseId', Course.course_update);
//delete course
router.delete('/courses/:courseId', Course.course_delete);

module.exports = router