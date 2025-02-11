import { Routes } from '@angular/router';
import { TodoListComponent } from './to-do/todo.component';

export const routes: Routes = [
    { path: 'todo', component: TodoListComponent },
    { path: '', redirectTo: '/todo', pathMatch: 'full' }
];
