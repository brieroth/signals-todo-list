import { CommonModule } from '@angular/common';
import { Component,inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TODO } from '../shared/models/todo.model';
import { Items } from '../shared/mock-data-list';
import { TaskSignalService } from '../service/task-signal.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { SearchTaskComponent } from '../search-task/search-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterOutlet, MatTooltipModule, SearchTaskComponent, MatDialogModule, FormsModule, MatListModule, CommonModule, MatIconModule, AddTaskComponent, MatDividerModule, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButton, MatIconButton],
  templateUrl: `./task-list.component.html`,
  styleUrl: `./task-list.component.scss`
})

export class TaskListComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  public tasks: WritableSignal<any[]> = signal(Items);

  public searchTerm: WritableSignal<string> = signal('') //store searchterm


  public selectedTask: TODO[] = [];
  public allTasks = [...this.tasks()]; // Store the all tasks to reset when needed

  constructor(public signalService: TaskSignalService) { }

  public ngOnInit(): void {
    this.tasks = this.signalService.getTodoList();
  }

  public addTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: [],
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('added:', result);
    });
  }

  public editTask(task: any) {
    this.selectedTask = task.id
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: {
        id: task.id,
        newTaskTitle: task.title,
        newTaskDescription: task.description
      },
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(updateRes => {
      console.log('updated', updateRes)
    });
  }

  public deleteTask(task: number) {
    this.signalService.deleteTask(task)
  }

  public getSearchTerm(term: string) {
    this.searchTerm.update(() => term); // Update the search term signal
    if (this.searchTerm()) {
      this.signalService.filterTaskByTitle(this.searchTerm())
    } else {
      this.tasks.set([...this.allTasks])
    }
  }

  public toggleTaskCompletion(task: number) {
    this.signalService.updateTaskStatus(task)
  }
}
