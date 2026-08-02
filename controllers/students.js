const Student = require('../models/student')

const create = async (req, res) => {

    
    const studentData = {
        name: req.body.name,
        favoritFood: req.body.favoritFood,
        favoritEmoji: req.body.favoritEmoji
    }
    
   const createdStudent = await Student.create(studentData )
    res.json(createdStudent)
  
}

module.exports = {
    create,
}