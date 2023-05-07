import { v4 as uuidv4 } from "uuid";

export const mockServerDB = {
    issues: [
      {
        id: uuidv4(),
        summary: "Create simple todo list",
        status: "TODO"
      },
      {
        id: uuidv4(),
        summary: "Fix the bathroom door lock",
        status: "DONE"
      },
      {
        id: uuidv4(),
        summary: "Pick up laundry",
        status: "IN_PROGRESS"
      },
      {
        id: uuidv4(),
        summary: "Buy flowers for the girlfriend",
        status: "TODO"
      }
    ]
};