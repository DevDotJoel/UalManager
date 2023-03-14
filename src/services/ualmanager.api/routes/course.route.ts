import express from 'express'
import { courseService } from '../application/services/course/course.service'

const courseRouter = express.Router()
export default courseRouter

courseRouter.get('/', async (req, res) => {

  res.send(await courseService.getAllCourses())
})
courseRouter.post('/', async (req, res) => {
  res.send(await courseService.addCourse(req.body))
})
