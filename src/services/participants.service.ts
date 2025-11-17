import * as participantsRepo from '../repositories/participants.repository';
import { Participant } from '../models/participant';
import * as eventsService from './events.service';
import { sendJoinEmail } from '../utils/mailer';

export const joinEvent = async (
  eventId: string,
  userId: string,
  userEmail: string
): Promise<Participant> => {
  const event = await eventsService.getEventById(eventId);
  if (!event) throw new Error('EVENT_NOT_FOUND');

  const participant: Participant = {
    eventId,
    userId,
    status: 'joined',
    createdAt: new Date().toISOString(),
  };

  const created = await participantsRepo.create(participant);

  await sendJoinEmail(userEmail, (event as any).title, (event as any).date);

  return created;
};

export const getMyParticipants = (userId: string): Promise<Participant[]> => {
  return participantsRepo.findByUser(userId);
};

export const updateParticipant = async (
  id: string,
  data: Partial<Participant>
): Promise<Participant> => {
  const updated = await participantsRepo.update(id, data);
  if (!updated) throw new Error('PARTICIPANT_NOT_FOUND');
  return updated;
};
