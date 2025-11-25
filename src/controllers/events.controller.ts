import { Response } from "express";
import * as eventsService from "../services/events.service";
import { AuthRequest } from "../middleware/auth.middleware";

export const getAllEvents = async (req: AuthRequest, res: Response) => {
const { categoryId, sort, order } = req.query;

const events = await eventsService.getAllEvents({
    categoryId: categoryId as string | undefined,
    sort: sort as "date" | undefined,
    order: order as "asc" | "desc" | undefined,
});

res.json(events);
};

export const getEventById = async (req: AuthRequest, res: Response) => {
const event = await eventsService.getEventById(req.params.id);
if (!event) return res.status(404).json({ message: "Event not found" });
return res.json(event);
};

export const createEvent = async (req: AuthRequest, res: Response) => {
try {
    const event = await eventsService.createEvent(req.body);
    return res.status(201).json(event);
} catch {
    return res.status(500).json({ message: "Server error" });
}
};

export const updateEvent = async (req: AuthRequest, res: Response) => {
try {
    const event = await eventsService.updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.json(event);
} catch {
    return res.status(500).json({ message: "Server error" });
}
};

export const deleteEvent = async (req: AuthRequest, res: Response) => {
const ok = await eventsService.deleteEvent(req.params.id);
if (!ok) return res.status(404).json({ message: "Event not found" });
return res.status(204).send();
};
