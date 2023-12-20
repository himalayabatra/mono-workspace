import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {
    path: "todo-list", 
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: "http://localhost:4300/remoteEntry.js",
        remoteName: "mfeApp1",
        exposedModule: "./TodoListModule"
      }).then(m=>m.TodoListModule).catch(err=> console.log(err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [HomeComponent]
