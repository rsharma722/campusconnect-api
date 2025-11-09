import * as eventsService from '../services/events.service';
import * as eventsRepo from '../repositories/events.repository';

jest.mock('../repositories/events.repository');

describe('events service', () => {
  it('returns events', async () => {
    (eventsRepo.getAll as jest.Mock).mockResolvedValue([
      { id: '1', title: 'Test Event' }
    ]);

    const result = await eventsService.getAllEvents();
    const first = result[0] as { id: string; title: string };

    expect(result).toHaveLength(1);
    expect(first.title).toBe('Test Event');
  });

  it('creates an event', async () => {
    (eventsRepo.create as jest.Mock).mockResolvedValue({
      id: '1',
      title: 'New Event'
    });

    const result = await eventsService.createEvent({ title: 'New Event' });
    expect(result.id).toBe('1');
  });
});
