import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Items } from '../shared/mock-data-list';
import moment from 'moment';
import { TODO } from '../shared/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TaskSignalService {
  private tasks = signal<TODO[]>(Items)

  public getTodoList() {
    return this.tasks;
  }

  public addTask(title: string, description: string) {
    const item: TODO = {
      id: this.tasks().length + 1,
      title: title,
      status: false,
      dateCreated: moment(new Date()),
      description: description
    }
    this.tasks.update(todos => [...todos, item])
  }

  public editTask(id: number, newDescription: string) {
    console.log(id, newDescription)
    // update task()state and use map to iterarte over the todos array and update task that matches the id
    this.tasks.update((todos) =>
      todos.map((task) =>
                          //...create a new object with updates description or return task with no shanges if doesnt match
        task.id === id ? { ...task, description: newDescription } : task))

  }

  public updateTaskStatus(index: number) {
    this.tasks.update((todos) =>
      todos.map((a) => a.id === index ? { ...a, status: !a.status } : a
      )
    );
    console.log(this.tasks())
  }

  public deleteTask(index: number) {
    return this.tasks.update(todos => todos.filter(a => a.id !== index))
  }

   public filterTaskByCompletedStatus() {
    const completedTasks = this.tasks.update(todos => todos.filter(a => a.status === true))
    return completedTasks
  }

  public filterTaskByUncompletedStatus() {
    const unCompletedTasks = this.tasks.update(todos => todos.filter(a => !a.status))
    return unCompletedTasks;
  }

  public filterTaskByTitle(title: string) {
    // const searchReturn = this.tasks.update(todos => todos.filter(a => a.title === title))
    const searchReturn =  this.tasks().filter(task => task.title.includes(title));

    return this.tasks.update(()=>searchReturn);
  }










}