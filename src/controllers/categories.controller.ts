import { Response } from "express";
import * as service from "../services/categories.service";
import { AuthRequest } from "../middleware/auth.middleware";

export const getCategories = async (_req: AuthRequest, res: Response) => {
  res.json(await service.getAllCategories());
};

export const createCategory = async (req: AuthRequest, res: Response) => {
  try {
    const result = await service.createCategory(req.body);
    return res.status(201).json(result);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateCategory = async (req: AuthRequest, res: Response) => {
  try {
    const updated = await service.updateCategory(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Category not found" });
    return res.json(updated);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteCategory = async (req: AuthRequest, res: Response) => {
  const ok = await service.deleteCategory(req.params.id);
  if (!ok) return res.status(404).json({ message: "Category not found" });
  return res.status(204).send();
};
