import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Items } from '../shared/mock-data-list';
import moment from 'moment';
import { TODO } from '../shared/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TaskSignalService {
  private tasks = signal<TODO[]>(Items)
  public completedCount = signal<number>(this.tasks().filter(task => task.status).length);
  public pendingCount = signal<number>(this.tasks().filter(task => !task.status).length);

  constructor(){}

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
    this.tasks.update(tasks => [...tasks, item])
  }

  public editTask(id: number, newDescription: string) {
    console.log(id, newDescription)
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task))
  }

  public updateTaskStatus(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task) => task.id === index ? { ...task, status: !task.status } : task
      )
    );
    console.log(this.tasks())
    this.updateTaskCount()
  }

  public updateTaskCount() {
    this.completedCount.set(this.tasks().filter(task => task.status).length);
    this.pendingCount.set(this.tasks().filter(task => !task.status).length);
  }

  public deleteTask(index: number) {
    const taskToRemove =this.tasks.update(tasks => tasks.filter(task => task.id !== index))
    this.updateTaskCount()
    return taskToRemove
  }

  public filterTaskByCompletedStatus() {
    const completedTasks = this.tasks.update(tasks => tasks.filter(task => task.status))
    this.updateTaskCount();
    return completedTasks
  }

  public filterTaskByUncompletedStatus() {
    const unCompletedTasks = this.tasks.update(tasks => tasks.filter(task => !task.status))
    this.updateTaskCount();
    return unCompletedTasks;
  }

  public filterTaskByTitle(title: string) {
    const searchReturn = this.tasks().filter(task => task.title.includes(title));
    return this.tasks.update(() => searchReturn);
  }

}