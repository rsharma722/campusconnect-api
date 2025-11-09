import { Request, Response } from 'express';
import * as eventsService from '../services/events.service';

export const getAllEvents = async (_req: Request, res: Response) => {
    res.json(await eventsService.getAllEvents());
};

export const getEventById = async (req: Request, res: Response) => {
    const event = await eventsService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    return res.json(event);
};

export const createEvent = async (req: Request, res: Response) => {
    const event = await eventsService.createEvent(req.body);
    return res.status(201).json(event);
};

export const updateEvent = async (req: Request, res: Response) => {
    const event = await eventsService.updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    return res.json(event);
};

export const deleteEvent = async (req: Request, res: Response) => {
    const ok = await eventsService.deleteEvent(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Event not found' });
    return res.status(204).send();
};
