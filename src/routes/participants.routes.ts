import { Router } from 'express';

const router = Router();

router.post('/:id/join', (_req, res) => res.status(201).json({ message: 'joined' }));
router.get('/mine', (_req, res) => res.json([]));
router.patch('/:id', (_req, res) => res.json({}));

export default router;
