import * as categoriesService from '../services/categories.service';
import * as categoriesRepo from '../repositories/categories.repository';

jest.mock('../repositories/categories.repository');

describe('categories service', () => {

  it('returns all categories', async () => {
    (categoriesRepo.getAll as jest.Mock).mockResolvedValue([
      { id: '1', name: 'Sports' },
      { id: '2', name: 'Study' }
    ]);

    const result = await categoriesService.getAllCategories();

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Sports');
  });

  it('creates a category', async () => {
    (categoriesRepo.create as jest.Mock).mockResolvedValue({
      id: '123',
      name: 'Music'
    });

    const result = await categoriesService.createCategory({ name: 'Music' });

    expect(result.id).toBe('123');
    expect(result.name).toBe('Music');
  });

  it('updates a category', async () => {
    (categoriesRepo.update as jest.Mock).mockResolvedValue({
      id: '1',
      name: 'Updated Category'
    });

    const result = await categoriesService.updateCategory('1', {
      name: 'Updated Category'
    });

    expect(result?.name).toBe('Updated Category');
  });

  it('deletes a category', async () => {
    (categoriesRepo.remove as jest.Mock).mockResolvedValue(true);

    const result = await categoriesService.deleteCategory('1');

    expect(result).toBe(true);
  });
});
