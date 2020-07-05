const db = require('../data/dbConfig.js')


async function add(trans){
    try{
        const [id] = await db('transactions')
                            .insert(trans, 'id')
                            return findById(id)
    } catch (error){
        throw error;
    }
}

function findByUser(id){
    return db('transactions')
            .where('user_id', id)
}

function findById(id){
    return db('transactions')
            .where({id})
}

function findByVendorByUser(vid, uid){
    return db('transactions')
            .where('vendor_id', vid)
            .join('users', 'user_id', "users.id")
            .andWhere('users.id', uid)

}

module.exports = {
    add,
    findByUser,
    findById,
    findByVendorByUser
}