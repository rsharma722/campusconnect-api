import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import {
  joinEvent,
  getMyParticipants,
  updateParticipant
} from '../controllers/participants.controller';

const router = Router();

router.post('/:id/join', authenticate, joinEvent);
router.get('/mine', authenticate, getMyParticipants);
router.patch('/:id', authenticate, updateParticipant);

export default router;
