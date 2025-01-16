import { Injectable, signal } from '@angular/core';
import { Items } from './mock-data-list';
import { TODO } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private tasks = signal<TODO[]>(Items)


  //get mock data
  public getTodoList() {
      return this.tasks;
  }

  public addTask(title: string) {
    const item: TODO = {
      id: this.tasks().length + 1,
      title,
      status: false
    }
    this.tasks.update(todos => [...todos, item])
  }
















}