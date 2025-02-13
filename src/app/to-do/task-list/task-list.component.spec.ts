import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TODO } from '../shared/models/todo.model';
import { SearchTaskComponent } from '../search-task/search-task.component';
import { TaskListComponent } from './task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let searchComponent: SearchTaskComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let searchDebugElement: DebugElement;


    let mockData: TODO[] = [
        {
            id: 56,
            title: 'Call doctor',
            status: false,
            description: 'make appointment'
        },
        {
            id: 57,
            title: 'chores day',
            status: true,
            description: 'clean house'
        },
    ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, TaskListComponent, SearchTaskComponent, BrowserAnimationsModule],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;

    // access search comp 
    searchDebugElement = fixture.debugElement.query(By.directive(SearchTaskComponent));
    searchComponent = searchDebugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(searchComponent).toBeTruthy();
  });

  it('should get length of mock data tasks', () => {
    expect(mockData.length).toEqual(2);
  });


    it('should find item in mock data with searchTerm from SearchTaskComponent', () => {
        const mockterm = 'Call doctor';
        searchComponent.titleTerm = mockterm;

        searchComponent.searchTaskByTitle();
        console.log('terms', mockterm, component.searchTerm())

        expect(component.searchTerm()).toBe(mockterm);
    });
});
