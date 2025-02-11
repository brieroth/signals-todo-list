import { CommonModule } from '@angular/common';
import { Component, Inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskSignalService } from '../service/task-signal.service';

@Component({
  selector: 'app-todo-list-input',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButton, MatIconButton, CommonModule],
  templateUrl: `./todo-list-input.component.html`,
  styleUrl: `./todo-list-input.component.scss`
})

export class TodoListInputComponent {

  public newTaskTitle: WritableSignal<string> = signal('');
  public newTaskDescription: WritableSignal<string> = signal('');

  public form: FormGroup;
  public activeTaskId: WritableSignal<number> = signal<number>(0);


  constructor(public signalService: TaskSignalService, public dialogRef: MatDialogRef<TodoListInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = new FormGroup({
      id: new FormControl(data.id), // Store the taskId from the data passed
      newTodo: new FormControl(data.newTaskTitle, Validators.required),
      newTodoDescription: new FormControl(data.newTaskDescription)
    });
  }

  public ngOnInit() {
    this.activeTaskId.set(this.form.get('id')?.value)
  }

  public get newTodo() {
    return this.form.get('newTodo')
  }

  public submit() {
    if (this.activeTaskId() !== null) {
      this.signalService.editTask(this.activeTaskId(), this.form.get('newTodoDescription')?.value)
    }
    else {
      const newTodoTitle = this.form.get('newTodo')?.value?.trim();
      const newTodoDescription = this.form.get('newTodoDescription')?.value;
      this.signalService.addTask(newTodoTitle, newTodoDescription)
    }
    this.dialogRef.close(this.form.value)
    this.form?.reset()
  }

}
