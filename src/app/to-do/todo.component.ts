import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent,MatTooltipModule, MatDialogModule, FormsModule, MatListModule, CommonModule, MatIconModule, MatDividerModule, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButton, MatIconButton],
  templateUrl: `./todo.component.html`,
  styleUrl: `./todo.component.scss`
})

export class TodoListComponent {
  constructor() { }

}
