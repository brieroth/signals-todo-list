# SignalsTodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Task
Create todo list app using signals for state management. 
Focus on modulartiy, reusablility....

-Structure
    -main component where the todo list is displayed
        -each task to have a title and status (complete/not complete)
        -each item should have a delete, edit button and status displayed
    **Using Reactive Forms(implement validation)
        -form to add new tasks
        -form to edit task description only
        -form to search for tasks

State Management using Signals
    -store and manage the tasks array
    **Service Class (logic) **Component (handle interaction w/ service class to UI)
    -add task,
    -mark as complete, 
    -delete task, 
    -search tasks by title,
    -filter tasks (completed, uncompleted...)

Styling
- Focus on responsiveness & accessability


