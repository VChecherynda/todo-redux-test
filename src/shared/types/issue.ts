export type IssueStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Issue = {
    id: string;
    selected?: boolean;
    summary: string;
    status: IssueStatus;
};