const Student = require('../models/student')

const create = async (req, res) => {

    try{ const studentData = {
        name: req.body.name,
        favoriteFood: req.body.favoriteFood,
        favoriteEmoji: req.body.favoriteEmoji
    }

const createdStudent = await Student.create(studentData )
    res.status(201).json(createdStudent)
} catch(error) {
    res.status(401).json({ message: error.message })
}

   
    
   
  
}

module.exports = {
    create,
}