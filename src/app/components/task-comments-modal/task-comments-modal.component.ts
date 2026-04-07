import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.component.html',
  styleUrl: './task-comments-modal.component.css'
})
export class TaskCommentsModalComponent {
  commentControl = new FormControl('', [Validators.required]);

  readonly _task = inject(DIALOG_DATA);

  ondAddComment() {
    console.log('Comentário', this.commentControl.value);
  }
}
