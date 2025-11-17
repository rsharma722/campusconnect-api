import { Request, Response } from 'express';
import * as service from '../services/categories.service';

export const getCategories = async (_req: Request, res: Response) => {
  res.json(await service.getAllCategories());
};

export const createCategory = async (req: Request, res: Response) => {
  const result = await service.createCategory(req.body);
  return res.status(201).json(result);
};

export const updateCategory = async (req: Request, res: Response) => {
  const updated = await service.updateCategory(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Category not found' });
  return res.json(updated);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const ok = await service.deleteCategory(req.params.id);
  if (!ok) return res.status(404).json({ message: 'Category not found' });
  return res.status(204).send();
};
