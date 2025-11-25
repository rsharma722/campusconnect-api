import * as participantsService from "../services/participants.service";
import * as participantsRepo from "../repositories/participants.repository";
import * as eventsService from "../services/events.service";
import { sendJoinEmail } from "../utils/mailer";

jest.mock("../repositories/participants.repository");
jest.mock("../services/events.service");
jest.mock("../utils/mailer");

describe("participants service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("joins an event (creates participant + sends email)", async () => {
    (eventsService.getEventById as jest.Mock).mockResolvedValue({
      id: "e1",
      title: "Hackathon",
      date: "2025-01-01T10:00:00Z",
    } as any);

    (participantsRepo.create as jest.Mock).mockResolvedValue({
      id: "p1",
      eventId: "e1",
      userId: "u1",
      status: "joined",
      createdAt: "now",
    } as any);

    const result = await participantsService.joinEvent(
      "e1",
      "u1",
      "test@gmail.com"
    );

    expect(result.id).toBe("p1");
    expect(result.status).toBe("joined");
    expect(sendJoinEmail).toHaveBeenCalled(); 
  });

  it("throws EVENT_NOT_FOUND if event does not exist", async () => {
    (eventsService.getEventById as jest.Mock).mockResolvedValue(null);

    await expect(
      participantsService.joinEvent("bad-id", "u1", "test@gmail.com")
    ).rejects.toThrow("EVENT_NOT_FOUND");
  });

  it("returns participants for a user", async () => {
    (participantsRepo.findByUser as jest.Mock).mockResolvedValue([
      { id: "p1", userId: "u1", status: "joined" },
    ] as any);

    const result = await participantsService.getMyParticipants("u1");

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("joined");
  });

  it("updates participant status", async () => {
    (participantsRepo.update as jest.Mock).mockResolvedValue({
      id: "p1",
      status: "cancelled",
    } as any);

    const result = await participantsService.updateParticipant("p1", {
      status: "cancelled",
    });

    expect(result.status).toBe("cancelled");
  });

  it("throws PARTICIPANT_NOT_FOUND if update fails", async () => {
    (participantsRepo.update as jest.Mock).mockResolvedValue(null);

    await expect(
      participantsService.updateParticipant("bad-id", { status: "cancelled" })
    ).rejects.toThrow("PARTICIPANT_NOT_FOUND");
  });
});
