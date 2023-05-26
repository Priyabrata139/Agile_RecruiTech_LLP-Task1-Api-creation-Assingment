

const AppError = require('../utils/errors/app-error');

const { StatusCodes } = require('http-status-codes');



class CrudRepository {
    constructor(model) {
        this.model = model;
    }
 
    async create(data) {
        const response = await this.model.create(data);
        return response;
    }
 

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }


    async update(data,id) { 
        console.log(data);
        console.log(id);
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })
        
        if(!response[0]) {
            throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }
}




module.exports = CrudRepository;