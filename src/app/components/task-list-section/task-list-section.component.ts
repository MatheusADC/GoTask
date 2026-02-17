import { Component, inject } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {
  private readonly _taskService = inject(TaskService);

  ngOnInit(): void {
    this._taskService.todoTasks.subscribe((todoList) => {
      console.log('Lista de TODOS: ', todoList);
    });
  }
}
