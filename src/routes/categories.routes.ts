/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Manage event categories (Admin only)
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a category (admin only)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category (admin only)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category (admin only)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Category deleted
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 */

import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.controller";
import { authenticate, requireRole } from "../middleware/auth.middleware";
import { validateBody } from "../middleware/validateBody";
import { createCategorySchema, updateCategorySchema } from "../validation/categories.validation";

const router = Router();

router.get("/", getCategories);

router.post("/", authenticate, requireRole("admin"), validateBody(createCategorySchema), createCategory);
router.put("/:id", authenticate, requireRole("admin"), validateBody(updateCategorySchema), updateCategory);
router.delete("/:id", authenticate, requireRole("admin"), deleteCategory);

export default router;
