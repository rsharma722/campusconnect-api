/**
 * @swagger
 * tags:
 *   name: Participants
 *   description: Join events + receive Nodemailer confirmation email
 */

/**
 * @swagger
 * /participants/{id}/join:
 *   post:
 *     summary: Join an event and receive email confirmation
 *     tags: [Participants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userEmail]
 *             properties:
 *               userEmail:
 *                 type: string
 *                 example: student@gmail.com
 *     responses:
 *       201:
 *         description: Participant created and email sent
 *       404:
 *         description: Event not found
 */

/**
 * @swagger
 * /participants/mine:
 *   get:
 *     summary: Get all events the current user joined
 *     tags: [Participants]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of participants for user
 */

/**
 * @swagger
 * /participants/{id}:
 *   patch:
 *     summary: Update participant status (cancel/join)
 *     tags: [Participants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Participant ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [joined, cancelled]
 *     responses:
 *       200:
 *         description: Participant updated
 *       404:
 *         description: Participant not found
 */

import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import {
  joinEvent,
  getMyParticipants,
  updateParticipant
} from '../controllers/participants.controller';

const router = Router();

router.post('/:id/join', authenticate, joinEvent);
router.get('/mine', authenticate, getMyParticipants);
router.patch('/:id', authenticate, updateParticipant);

export default router;
