import * as repo from '../repositories/categories.repository';
import { Category } from '../models/category';

export function getAllCategories() {
  return repo.getAll();
}

export function createCategory(payload: Category) {
  return repo.create(payload);
}

export function updateCategory(id: string, payload: Partial<Category>) {
  return repo.update(id, payload);
}

export function deleteCategory(id: string) {
  return repo.remove(id);
}
