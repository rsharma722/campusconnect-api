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
import { authenticate, requireRole } from '../middleware/auth.middleware';
import { validateBody } from '../middleware/validateBody';
import { createEventSchema, updateEventSchema } from '../validation/events.validation';


const router = Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);

router.post('/', authenticate, validateBody(createEventSchema), createEvent);
router.put('/:id', authenticate, validateBody(updateEventSchema), updateEvent);
router.delete('/:id', authenticate, requireRole('admin'), deleteEvent);

export default router;
