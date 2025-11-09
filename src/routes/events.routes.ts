/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     responses:
 *       200:
 *         description: A list of events
 */
import { Router } from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/events.controller';

const router = Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
