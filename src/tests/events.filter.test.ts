import * as eventsService from '../services/events.service';
import * as eventsRepo from '../repositories/events.repository';

jest.mock('../repositories/events.repository');

describe('events filtering', () => {
  it('passes filter query to repo', async () => {
    (eventsRepo.getAll as jest.Mock).mockResolvedValue([]);

    await eventsService.getAllEvents({ categoryId: 'abc' });

    expect(eventsRepo.getAll).toHaveBeenCalledWith({ categoryId: 'abc' });
  });
});
