import * as categoriesService from '../services/categories.service';
import * as categoriesRepo from '../repositories/categories.repository';

jest.mock('../repositories/categories.repository');

describe('categories service', () => {
  it('returns categories', async () => {
    (categoriesRepo.getAll as jest.Mock).mockResolvedValue([
      { id: '1', name: 'Study Group' },
    ]);

    const result = await categoriesService.getAllCategories();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Study Group');
  });
});
