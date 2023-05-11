import { mockServerDB } from "./mocks/mockServerDB";
import { Issue } from "../../entities/issue";

export const queryIssues = async (): Promise<Issue[]> => {
    return await new Promise((resolve) => setTimeout(() => resolve(mockServerDB.issues as Issue[]), 1000));
};
// TODO: Немає іншого методу для оновлення задачі. Імітація сервера не повна. В завданні був приклад з 2-ма методами + збереження в localStorage.

