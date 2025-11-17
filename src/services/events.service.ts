import * as eventsRepo from '../repositories/events.repository';

export function getAllEvents() {
  return eventsRepo.getAll();
}

export function getEventById(id: string) {
  return eventsRepo.getById(id);
}

export function createEvent(payload: any) {
  return eventsRepo.create(payload);
}

export function updateEvent(id: string, payload: any) {
  return eventsRepo.update(id, payload);
}

export function deleteEvent(id: string) {
  return eventsRepo.remove(id);
}
