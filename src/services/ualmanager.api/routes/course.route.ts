import express from 'express'

const courseRouter = express.Router()

// GET /route1/foo
courseRouter.get('/', (req, res) => {
  res.send({name:"joel"})
})

export default courseRouter