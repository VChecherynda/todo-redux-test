import { mockServerDB } from "./mocks/mockServerDB";
import { Issue } from "../../shared/types";

export const queryIssues = async (): Promise<Issue[]> => {
    return await new Promise((resolve) => setTimeout(() => resolve(mockServerDB.issues as Issue[]), 1000));
};


