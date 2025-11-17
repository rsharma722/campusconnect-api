import { Request, Response } from 'express';
import * as participantsService from '../services/participants.service';

export const joinEvent = async (req: Request, res: Response) => {
  const user = (req as any).user || { uid: 'test-user', email: 'test@example.com' };

  try {
    const participant = await participantsService.joinEvent(
      req.params.id,
      user.uid,
      user.email
    );
    res.status(201).json(participant);
  } catch (err: any) {
    if (err.message === 'EVENT_NOT_FOUND') {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(500).json({ message: 'Could not join event' });
  }
};

export const getMyParticipants = async (req: Request, res: Response) => {
  const user = (req as any).user || { uid: 'test-user' };
  const list = await participantsService.getMyParticipants(user.uid);
  res.json(list);
};

export const updateParticipant = async (req: Request, res: Response) => {
  try {
    const updated = await participantsService.updateParticipant(req.params.id, req.body);
    res.json(updated);
  } catch (err: any) {
    if (err.message === 'PARTICIPANT_NOT_FOUND') {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.status(500).json({ message: 'Unexpected error' });
  }
};
