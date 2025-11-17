export interface Participant {
  id?: string;
  eventId: string;
  userId: string;
  status: 'joined' | 'cancelled';
  createdAt: string;
}
