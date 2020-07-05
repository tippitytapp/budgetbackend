const db = require('../data/dbConfig.js');


async function add(vendor){
    try{
        const [id] = await db('vendors')
                      .insert(vendor, 'id')
                      return findById(id)
    } catch(error){
        throw error;
    }
}

function findById(id){
    return db('vendors')
            .where({id})
}

module.exports = {
    add,
    findById
}