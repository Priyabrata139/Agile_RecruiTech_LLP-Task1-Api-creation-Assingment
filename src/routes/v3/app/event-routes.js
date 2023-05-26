const express = require('express');

const { EventController } = require('../../../controllers');
const { EventMiddlewares } = require('../../../middlewares');
const router = express.Router();
/*
* POST : /api/v3/app/events/ 
*/
router.post('/',
EventMiddlewares.validateCreateRequest,
EventController.createEvent);
/*
*   DELETE : /api/v3/app/events/:id
*/
router.delete('/:id',
EventController.destroyEvent);
/*
*   PUT : /api/v3/app/events/:id
*/
router.put('/:id',
EventMiddlewares.validateUpdateRequest,
EventController.updateEvent);
/*
*     GET: /api/v3/app/events?id=:event_id
*     GET: /api/v3/app/events?type=latest&limit=5&page=1
*/

router.get('/',EventController.getAllEvents);
module.exports=router;