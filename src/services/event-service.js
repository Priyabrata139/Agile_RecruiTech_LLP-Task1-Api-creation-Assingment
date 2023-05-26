const {StatusCodes} = require('http-status-codes');

const { EventRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const eventRepository = new EventRepository();

async function createEvent(data) {
    try {
        console.log(data);
        const event = await eventRepository.create(data);
        return event;
    } catch(error) {
        console.log(error)
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Event object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyEvent(id) {
    try {
        const response = await eventRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The event you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the events', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateEvent(data,id) {
    try {
       
        const event = await eventRepository.update(data,id);
        return event;
    } catch(error) { 
        console.log(error);
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The event you requested to update is not present', error.statusCode);
        }
        else if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot fetch data of all the events', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAllEvents(query) {
  
    
    if(query.event_id) {
       const id = query.event_id;
       try {
        const event = await eventRepository.get(id);
        return event;
       } catch (error) {
        throw new AppError('Cannot fetch data of all the events', StatusCodes.INTERNAL_SERVER_ERROR);
       }
    }
    else if (query.type && query.limit && query.page) {
        const letest = query.type;
        const limit = parseInt( query.limit);
        const page = query.page;
        const offset = (page - 1) * limit;
        try {
            const sortFilter = [['schedual', 'DESC']];
            const events = await eventRepository.getAllEvents(sortFilter,limit,offset);


            const totalPages = Math.ceil(events.length / limit);
           

           return  {
              events,
              currentPage: page,
              totalPages,
            };

            return events;
        } catch(error) {
            console.log(error);
            throw new AppError('Cannot fetch data of all the events', StatusCodes.INTERNAL_SERVER_ERROR);
        }

    }
    throw new AppError('Cannot fetch data of all the events', StatusCodes.INTERNAL_SERVER_ERROR);

}

module.exports = {
    createEvent,
    destroyEvent,
    updateEvent,
    getAllEvents
} 