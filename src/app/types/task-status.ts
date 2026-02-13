import { TaskStatusEnum } from "../enums/task-status.enum";

export type TaskStatus = TaskStatusEnum.TODO | TaskStatusEnum.DOING | TaskStatusEnum.DONE;
