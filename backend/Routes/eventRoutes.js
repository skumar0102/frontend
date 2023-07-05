import express from 'express';
import {createEvent,getEvents} from '../Controllers/EventController.js'

const router = express.Router();

router.post("/event",createEvent);
router.get("/events",getEvents);

export default router;
