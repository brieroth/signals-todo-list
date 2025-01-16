import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Items } from '../mock-data-list';
import { TodoListInputComponent } from '../todo-list-input/todo-list-input.component';
import { SignalService } from '../signal.service';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TodoListInputComponent],
  templateUrl: `./todo-list.component.html`
})

export class TodoListComponent implements OnInit {
    public tasks  : WritableSignal<any[]> = signal(Items);


    public newTask : WritableSignal<string>= signal('');
    public getNewTask = signal([]);

    constructor(public signalService: SignalService){}

    public ngOnInit(): void {
        this.tasks = this.signalService.getTodoList();
    }
    public getTask(task:any){
        console.log('task',this.tasks)
        this.tasks.update(currentItems => [...currentItems,task])
    }

    public deleteTask(index:number){
        this.tasks.update(currentItems => currentItems.filter(a => a.id !== index))
    }

}
