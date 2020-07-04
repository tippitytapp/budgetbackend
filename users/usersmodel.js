const db = require('../data/dbConfig.js')

async function add(user){
    try{
        const [id] = await db('users')
                            .insert(user, 'id')
                            return findById(id)
    } catch (error) {
        throw error;
    }
}

function getAll(){
    return db('users')
}

function findById(id){
    return db('users')
            .where({id})
            .first()
}

function findByFilter(filter){
    return db('users')
            .where(filter)
}
module.exports = {
    add,
    getAll,
    findById,
    findByFilter
}