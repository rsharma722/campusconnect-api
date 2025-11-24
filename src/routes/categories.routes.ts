/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: List of categories
 */
import { Router } from 'express';
import { authenticate, requireRole } from '../middleware/auth.middleware';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categories.controller';

const router = Router();

router.get('/', getCategories);

router.post('/', authenticate, requireRole('admin'), createCategory);
router.put('/:id', authenticate, requireRole('admin'), updateCategory);
router.delete('/:id', authenticate, requireRole('admin'), deleteCategory);


export default router;
