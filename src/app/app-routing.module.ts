import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './features/form-builder/form-builder.component';

const routes: Routes = [

  { path: 'en-US/Form/FormBuilder/:id', component: FormBuilderComponent },
  { path: 'fr-FR/Form/FormBuilder/:id', component: FormBuilderComponent },
  { path: 'zh-CN/Form/FormBuilder/:id', component: FormBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
