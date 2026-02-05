import { inject, Injectable } from "@angular/core";
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModalComponent } from "../components/task-form-modal/task-form-modal.component";
import { TaskCommentsModalComponent } from "../components/task-comments-modal/task-comments-modal.component";

@Injectable({
  providedIn: 'root',
})
export class ModalControllerService {
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  }

  private readonly _dialog = inject(Dialog);

  openNewTaskModal() {
    return this._dialog.open(TaskFormModalComponent, {
      ...this.modalSizeOptions,
    });
  }

  openEditTaskModal() {
    return this._dialog.open(TaskFormModalComponent, {
      ...this.modalSizeOptions,
    });
  }

  openTaskCommentsModal() {
    return this._dialog.open(TaskCommentsModalComponent, {
      ...this.modalSizeOptions,
    });
  }
}
