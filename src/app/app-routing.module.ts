import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPageComponent} from './src/app/containers/list-page/list-page.component';
import {FormPageComponent} from './src/app/containers/form-page/form-page.component';

const routes: Routes = [
  {path: '', component: ListPageComponent, pathMatch: 'full'},
  {path: 'book/add', component: FormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
