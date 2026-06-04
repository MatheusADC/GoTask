import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../../../core/services/task.service';
import { ITask } from '../../../../domain/tasks/interfaces/task.interface';
import { TaskStatus } from '../../../../domain/tasks/types/task-status';
import { TaskStatusEnum } from '../../../../domain/tasks/enums/task-status.enum';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent, CdkDropList, CdkDrag, AsyncPipe],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {
  readonly _taskService = inject(TaskService);

  onCardDrop(event: CdkDragDrop<ITask[]>) {
    this.moveCardToColumn(event);

    const taskId = event.item.data.id;
    const taskCurrentStatus = event.item.data.status;
    const droppedColumn = event.container.id;

    this.updateTaskStatus(taskId, taskCurrentStatus, droppedColumn);
  }

  private updateTaskStatus(
    taskId: string,
    taskCurrentStatus: TaskStatus,
    droppedColumn: string,
  ) {
    let taskNextStatus: TaskStatus;
    switch (droppedColumn) {
      case 'to-do-column':
        taskNextStatus = TaskStatusEnum.TODO;
        break;
      case 'doing-column':
        taskNextStatus = TaskStatusEnum.DOING;
        break;
      case 'done-column':
        taskNextStatus = TaskStatusEnum.DONE;
        break;
      default:
        throw new Error('Coluna não identificada');
    }

    this._taskService.updateTaskStatus(
      taskId,
      taskCurrentStatus,
      taskNextStatus,
    );
  }

  private moveCardToColumn(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
