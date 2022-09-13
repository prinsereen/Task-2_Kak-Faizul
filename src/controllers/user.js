const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user} = require('../models')

exports.register = async(req, res, next) => {
    try { 
        const {firstName, lastName, userName, email, pasasword} = req.body

        if (firstName && lastName && userName && email && pasasword === "") {
            return res.status(200).send({
                message: 'field should not empty'
            })
        }

        const hashedPassword = bcrypt.hashSync(pasasword, 8)
        let insertUser = await user.create({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            pasasword: hashedPassword
        })

        // const token = jwt.sign({
        //     id: regis[0]
        // }, process.env.JWT_KEY, {expiresIn: 86400})

        return res.status(200).send({
            message: 'register succes',
            data: insertUser
            // token: token
        })
        
    } catch (error) {
        return res.status(500).send({
            message: error.error,
            code: 500
        })
    }
}

exports.readAll = async(req, res, next) => {
    try {
        const data = await user.findAll()

        return res.status(200).send({
            message: 'retrieve data succses',
            data : data
        })
    } catch (error) {
        return res.status(500).send({
            message: error.error,
            code: 500      
        })
    }
}

exports.readMe = async(req, res, next) => {
    try {
        const id = req.params.id
        
        const data = await user.findOne({
            where: {id: id}
        })

        return res.status(200).sen({
            message: 'retrieve data succses',
            data : data
        })
    } catch (error) {
        return res.status(500).send({
            message: error.error,
            code: 500      
        })
    }
}

exports.update = async(req, res, next) => {
    try {
        const id = req.params.id
        const {firstName, lastName,  email} = req.body

        const updateData = await user.update({
            firstName: firstName,
            lastName: lastName,
            email: email
        }, {
            where: {id: req.user.id}
        })


        return res.status(201).send({
            message: 'user updated',
            result:updateData
        })
    } catch (error) {
        return res.status(500).send({
            message: error.error,
            code: 500      
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id


        const deleteUser = await user.destroy({
            where : {id:id}
        })

        return res.status(200).send({
            message : 'data has been deleted'
        })
        
    } catch (error) {
        return res.status(500).send({
            message: error.error,
            code: 500      
        })
    }
}