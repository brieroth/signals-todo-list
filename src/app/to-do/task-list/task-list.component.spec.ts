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

//     it('should display results found when match found', () => {
//         const mockterm = 'Call doctor';
//         searchComponent.titleTerm = mockterm;

//         searchComponent.searchTaskByTitle();

//         component.signalService.filterTaskByTitle()


//         component.searchTerm = 'Pear';
//         component.onSearch();
//         fixture.detectChanges();

//         const noResultsMessage = fixture.debugElement.query(By.css('.no-results')).nativeElement;
//         expect(noResultsMessage).toBeTruthy();
//         expect(noResultsMessage.textContent).toContain('No results found');
//   });


//   it('should call onSearch when the search button is clicked', () => {
//     spyOn(component, 'onSearch');
    
//     const input = fixture.debugElement.query(By.css('input')).nativeElement;
//     input.value = 'Apple';
//     input.dispatchEvent(new Event('input'));
//     fixture.detectChanges();

//     const button = fixture.debugElement.query(By.css('button')).nativeElement;
//     button.click();

//     expect(component.onSearch).toHaveBeenCalled();
//   });

//   it('should return results when a valid search term is provided', () => {
//     component.searchTerm = 'Apple';
//     component.onSearch();

//     fixture.detectChanges();

//     expect(component.searchResult).toEqual(['Apple']);
//     expect(component.noResults).toBeFalse();
//   });

//   it('should handle no results for invalid search term', () => {
//     component.searchTerm = 'Pear';
//     component.onSearch();

//     fixture.detectChanges();

//     expect(component.searchResult).toBeNull();
//     expect(component.noResults).toBeTrue();
//   });

//   it('should display no results found when there are no search matches', () => {
//     component.searchTerm = 'Pear';
//     component.onSearch();
//     fixture.detectChanges();

//     const noResultsMessage = fixture.debugElement.query(By.css('.no-results')).nativeElement;
//     expect(noResultsMessage).toBeTruthy();
//     expect(noResultsMessage.textContent).toContain('No results found');
//   });

//   it('should display search results when a match is found', () => {
//     component.searchTerm = 'Apple';
//     component.onSearch();
//     fixture.detectChanges();

//     const resultItems = fixture.debugElement.queryAll(By.css('.search-result li'));
//     expect(resultItems.length).toBeGreaterThan(0);
//     expect(resultItems[0].nativeElement.textContent).toContain('Apple');
//   });
});
