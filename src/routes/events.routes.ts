/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Events CRUD + filtering + sorting
 */

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events (supports filtering & sorting)
 *     tags: [Events]
 *     parameters:
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         description: Filter events by categoryId
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [date]
 *         description: Sort events by date
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *     responses:
 *       200:
 *         description: A list of events
 */

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get one event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event found
 *       404:
 *         description: Event not found
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event (logged-in users)
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update an event by ID (logged-in users)
 *     tags: [Events]
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
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Event updated
 *       404:
 *         description: Event not found
 */

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Delete event by ID (admin only)
 *     tags: [Events]
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
 *         description: Event deleted
 *       403:
 *         description: Forbidden (not admin)
 *       404:
 *         description: Event not found
 */
import { Router } from "express";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller";
import { authenticate, requireRole } from "../middleware/auth.middleware";
import { validateBody } from "../middleware/validateBody";
import { createEventSchema, updateEventSchema } from "../validation/events.validation";

const router = Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.post("/", authenticate, validateBody(createEventSchema), createEvent);
router.put("/:id", authenticate, validateBody(updateEventSchema), updateEvent);

router.delete("/:id", authenticate, requireRole("admin"), deleteEvent);

export default router;
