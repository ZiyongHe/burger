const orm = require('../config/orm.js')

class Burger {
    constructor ({burger_name, devoured = false}){
        if (burger_name.length< 50) this.burger_name = burger.name
        else throw new Error ('Maximum 50 characters for burger name')
        this.devoured = devoured
    }

    async selectAll(){
        return await orm.selectAll()
    }

    async insertOne(name){
        return await orm.insertOne(name)
    }

    async updateOne(id){
        return await orm.updateOne(id)
    }

    async deleteOne(id){
        return await orm.deleteOne(id)
    }
}

module.exports = Burger