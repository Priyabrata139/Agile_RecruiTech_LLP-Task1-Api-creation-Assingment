const { StatusCodes } = require('http-status-codes');

const { EventService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /api/v3/app/events/ 
 * req-body 
 *     { 
 *          name: req.body.name,
            uid: req.body.uid,
            type: req.body.type,
            tagline: req.body.tagline,
            schedual: req.body.schedual,
            description: req.body.description,
            files: req.body.files,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank,
            attendees: req.body.attendees, 
        }
 */
async function createEvent(req, res) {
    try {
        const event = await EventService.createEvent({
            name: req.body.name,
            uid: req.body.uid,
            type: req.body.type,
            tagline: req.body.tagline,
            schedual: req.body.schedual,
            description: req.body.description,
            files: req.body.files,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank,
            attendees: req.body.attendees,
            
            
        });
        SuccessResponse.data = event;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}



/**
 * DELETE : /api/v3/app/events/:id
 * req-body {}
 */
async function destroyEvent(req, res) {
    try {
        const events = await EventService.destroyEvent(req.params.id);
        SuccessResponse.data = events;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}



/**
 * PUT : /api/v3/app/events/:id
 * req-body 
 *     { 
 *          name: req.body.name,
            uid: req.body.uid,
            type: req.body.type,
            tagline: req.body.tagline,
            schedual: req.body.schedual,
            description: req.body.description,
            files: req.body.files,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank,
            attendees: req.body.attendees, 
        }
 */
async function updateEvent(req, res) {
    try {
      
        const events = await EventService.updateEvent(
            {
                name: req.body.name,
            uid: req.body.uid,
            type: req.body.type,
            tagline: req.body.tagline,
            schedule: req.body.schedule,
            description: req.body.description,
            files: req.body.files,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank,
            attendees: req.body.attendees,

            },
            req.params.id
        );
        SuccessResponse.data = events;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
/*
*     GET: /api/v3/app/events?id=:event_id
*     GET: /api/v3/app/events?type=latest&limit=5&page=1
*     req-body {}
*/

async function getAllEvents(req, res) {
    try {
        const events = await EventService.getAllEvents(req.query);
        SuccessResponse.data = events;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
module.exports = {
    createEvent,
    destroyEvent,
    updateEvent,
    getAllEvents
}