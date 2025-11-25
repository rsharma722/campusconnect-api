import * as eventsService from "../services/events.service";
import * as eventsRepo from "../repositories/events.repository";

jest.mock("../repositories/events.repository");

describe("Events Service - Milestone 3 Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns events from repo", async () => {
    (eventsRepo.getAll as jest.Mock).mockResolvedValue([
      { id: "1", title: "Test Event" } as any
    ]);

    const result = (await eventsService.getAllEvents()) as any[];

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Test Event");
  });

  it("creates an event", async () => {
    (eventsRepo.create as jest.Mock).mockResolvedValue({
      id: "1",
      title: "Created Event",
    } as any);

    const result = (await eventsService.createEvent({ title: "Created Event" })) as any;

    expect(result.id).toBe("1");
    expect(result.title).toBe("Created Event");
  });

  it("passes filter query to repo", async () => {
    (eventsRepo.getAll as jest.Mock).mockResolvedValue([] as any);

    await eventsService.getAllEvents({ categoryId: "abc123" });

    expect(eventsRepo.getAll).toHaveBeenCalledWith({
      categoryId: "abc123",
    });
  });

  it("passes sorting query to repo", async () => {
    (eventsRepo.getAll as jest.Mock).mockResolvedValue([] as any);

    await eventsService.getAllEvents({ sort: "date", order: "desc" });

    expect(eventsRepo.getAll).toHaveBeenCalledWith({
      sort: "date",
      order: "desc",
    });
  });

  it("updates an event", async () => {
    (eventsRepo.update as jest.Mock).mockResolvedValue({
      id: "1",
      title: "Updated Title",
    } as any);

    const result = (await eventsService.updateEvent("1", {
      title: "Updated Title",
    })) as any;

    expect(result.title).toBe("Updated Title");
  });

  it("deletes an event", async () => {
    (eventsRepo.remove as jest.Mock).mockResolvedValue(true);

    const result = await eventsService.deleteEvent("1");
    expect(result).toBe(true);
  });
});
