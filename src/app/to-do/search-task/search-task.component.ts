import { CommonModule } from '@angular/common';
import { Component, output} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-task',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatIconModule,  CommonModule, AddTaskComponent, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButton, MatIconButton],
  templateUrl: `./search-task.component.html`,
  styleUrl: `./search-task.component.scss`
})

export class SearchTaskComponent {
  searchTerm = output<string>();
  public titleTerm: string = ''

constructor() { }

  public searchTaskByTitle() {
    console.log(this.titleTerm)
    this.searchTerm.emit(this.titleTerm)
  }
}
