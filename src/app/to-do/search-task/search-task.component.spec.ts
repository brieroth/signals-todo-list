import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SearchTaskComponent } from './search-task.component';
import { TODO } from '../shared/models/todo.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchTaskComponent', () => {
  let component: SearchTaskComponent;
  let fixture: ComponentFixture<SearchTaskComponent>;
  let searchTermSpy: jasmine.Spy;
  let consoleSpy: jasmine.Spy;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,SearchTaskComponent, BrowserAnimationsModule],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTaskComponent);
    component = fixture.componentInstance;
    searchTermSpy = spyOn(component.searchTerm, 'emit');
    consoleSpy = spyOn(console, 'log');
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty term', () => {
    expect(component.titleTerm).toBe('');
  });

  it('should emit searchTerm with correct value when searchTaskByTitle() is called', () => {
    component.titleTerm = 'Find a realtor';
    component.searchTaskByTitle();
    expect(searchTermSpy).toHaveBeenCalledWith('Find a realtor');
  });


});
