import { CommonModule } from '@angular/common';
import { Component, computed, output, Signal, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Items } from '../mock-data-list';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-todo-list-input',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: `./todo-list-input.component.html`
})

export class TodoListInputComponent {
    // public sendTask : Signal<any> = signal;

    public tasks  : WritableSignal<Array<any>> = signal(Items);
    public newTaskTitle : WritableSignal<string>= signal('');


    constructor(public signalService: SignalService){}

    public addTodo(){
          this.signalService.addTask(this.newTaskTitle())
            console.log(this.tasks())
            this.newTaskTitle.set('')

    }

}
