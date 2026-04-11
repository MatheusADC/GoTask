import { generateUniqueIdWithTimestamp } from './../../utils/generate-unique-id-with-timestamp';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IComment } from '../../interfaces/comment.interface';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-comments-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-comments-modal.component.html',
  styleUrl: './task-comments-modal.component.css'
})
export class TaskCommentsModalComponent {
  taskCommentsChanged = false;
  commentControl = new FormControl('', [Validators.required]);

  @ViewChild('commentInput') commentInputRef!: ElementRef<HTMLInputElement>;

  readonly _task: ITask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<boolean> = inject(DialogRef);

  ondAddComment() {
    console.log('Comentário', this.commentControl.value);

    // Criar um comentário
    const newComment: IComment = {
      id: generateUniqueIdWithTimestamp(),
      description: this.commentControl.value ? this.commentControl.value : '',
    };

    // Adicionar o novo comentário na lista de comentários da tarefa
    this._task.comments.unshift(newComment);

    // Reset no form control
    this.commentControl.reset();

    // Atualizar a flag/prop se houve a alteração nos comentários
    this.taskCommentsChanged = true;

    // Focando no elemento de input
    this.commentInputRef.nativeElement.focus();
  }

  onCloseModal() {
    this._dialogRef.close(this.taskCommentsChanged);
  }
}
