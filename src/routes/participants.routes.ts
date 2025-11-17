import { Router } from 'express';
import {
  joinEvent,
  getMyParticipants,
  updateParticipant
} from '../controllers/participants.controller';

const router = Router();

router.post('/:id/join', joinEvent);
router.get('/mine', getMyParticipants);
router.patch('/:id', updateParticipant);

export default router;
