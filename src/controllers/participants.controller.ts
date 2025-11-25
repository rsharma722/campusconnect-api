import { Response } from "express";
import * as participantsService from "../services/participants.service";
import { AuthRequest } from "../middleware/auth.middleware";

export const joinEvent = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user!;
    const participant = await participantsService.joinEvent(
      req.params.id,
      user.uid,
      user.email || ""
    );

    res.status(201).json(participant);
  } catch (err: any) {
    if (err.message === "EVENT_NOT_FOUND") {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyParticipants = async (req: AuthRequest, res: Response) => {
  const user = req.user!;
  res.json(await participantsService.getMyParticipants(user.uid));
};

export const updateParticipant = async (req: AuthRequest, res: Response) => {
  try {
    const updated = await participantsService.updateParticipant(
      req.params.id,
      req.body
    );
    res.json(updated);
  } catch (err: any) {
    if (err.message === "PARTICIPANT_NOT_FOUND") {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
};
  