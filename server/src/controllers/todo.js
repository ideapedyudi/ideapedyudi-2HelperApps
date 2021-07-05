const { todo } = require('../../models')

// get semua todo
exports.todos = async (req, res) => {
    try {
        const todos = await todo.findAll({
            attributes: {
                exclude: ['createdAt']
            },
            order: [['id', 'DESC']]
        })

        res.send({
            status: 'success',
            message: 'Todos Successfully Get',
            data: {
                todos
            }
        })
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

// get todo paramater
exports.todo = async (req, res) => {
    try {

        const { id } = req.params

        const dataTodo = await todo.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            },
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: 'User Successfully Get Detail',
            todos: [
                dataTodo
            ]
        })
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

// tambah data todo
exports.addTodo = async (req, res) => {
    try {
        const { body } = req

        await todo.create(body)

        res.send({
            status: 'success',
            message: 'Todo Successfully Add'
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

// edit data todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const checkId = await todo.findOne({
            where: {
                id
            }
        })

        // check id user
        if (!checkId) {
            return res.send({
                status: 'failed',
                message: `User with id: ${id} not found`
            })
        }

        // Proses update
        await todo.update(body,
            {
                where: {
                    id
                }
            })

        const dataUpdate = await todo.findOne(
            {
                where: {
                    id
                }
            })

        res.send({
            status: 'success',
            message: 'User Successfully Add',
            todos: dataUpdate
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

// delete todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params

        await todo.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: 'User successfully Delete',
            data: {
                id
            }
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}