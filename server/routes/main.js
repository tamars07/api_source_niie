//router
const express = require('express');
const createCourse = require ('../controllers/course');

const router = express.Router();
//create a new course
router.post('/courses', createCourse.course_create);

module.exports = router