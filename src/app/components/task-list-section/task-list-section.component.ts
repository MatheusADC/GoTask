import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent, CdkDropList, CdkDrag],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {
  todoTasks: ITask[] = [];
  doingTasks: ITask[] = [];
  doneTasks: ITask[] = [];

  private readonly _taskService = inject(TaskService);

  ngOnInit(): void {
    this._taskService.todoTasks.subscribe((todoList) => {
      this.todoTasks = todoList;
    });
    this._taskService.doingTasks.subscribe((doingList) => {
      this.doingTasks = doingList;
    });
    this._taskService.doneTasks.subscribe((doneList) => {
      this.doneTasks = doneList;

    });
  }

  drop(event: CdkDragDrop<ITask[]>) {
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
