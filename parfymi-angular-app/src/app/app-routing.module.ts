import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FragListComponent } from './frag-list/frag-list.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'frag-list', component: FragListComponent },
  { path: 'faq', component: FaqComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
