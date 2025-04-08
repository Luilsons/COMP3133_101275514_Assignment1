import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./components/employee-list/employee-list.component').then(m => m.EmployeeListComponent)
  },
  {
    path: 'add-employee',
    loadComponent: () =>
      import('./components/employee-add/employee-add.component').then(m => m.EmployeeAddComponent)
  },
  {
    path: 'update-employee/:id',
    loadComponent: () =>
      import('./components/employee-update/employee-update.component').then(m => m.EmployeeUpdateComponent)
  },
  {
    path: 'view-employee/:id',
    loadComponent: () =>
      import('./components/employee-detail/employee-detail.component').then(m => m.EmployeeDetailComponent)
  }
];
