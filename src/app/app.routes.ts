import { Routes } from '@angular/router';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';

export const routes: Routes = [
    { path: 'todo', component: TodoListComponent },
    { path: '', redirectTo: '/todo', pathMatch: 'full' }
];
