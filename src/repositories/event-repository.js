const CrudRepository = require('./crud-repository');
const { Event } = require('../models');


class EventRepository extends CrudRepository {
    constructor() {
        super(Event);
    }


    async getAllEvents(sort,limit,offset) {
        const response = await Event.findAll({
            order: sort,
            limit,
            offset
        });
        return response;
    }
}

module.exports = EventRepository;