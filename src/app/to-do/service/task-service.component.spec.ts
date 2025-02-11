import { TestBed } from '@angular/core/testing';
import { TaskSignalService } from './task-signal.service';

describe('TaskSignalService', () => {
  let service: TaskSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAllTasks()', () => {
    // return mockdata values and match length
  });

  it('should add a task to the list', () => {
    // implementing the addTaskCOmponent, add task to a list
  });

  it('should edit a task from the list', () => {
    // edit a task via task.id
  });

  it('should delete a task from the list', () => {
    // delete a task via task.id
  });

});
