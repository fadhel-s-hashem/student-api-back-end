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
    res.status(400).json({ message: error.message })
} 
}

const index = async (req, res) => {
    try {
        // this sort({ createdAt: -1 }) to arrange the api content by ceated time
      const students = await  Student.find().sort({ createdAt: -1 })
      res.status(200).json(students)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    
}

const show = async (req,res) => {
    try {
        const student = await Student.findById(req.params.studentId)
        if(!student) {
           return res.status(404).json({ message: 'Student not found' })
        }
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    create, 
    index,
    show,
    
}

// were gonna use it in all the function
//  try {
        
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }