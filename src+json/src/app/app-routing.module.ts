import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFirestoreComponent } from './pages/chat-firestore/chat-firestore.component';
import { ListadoFirestoreComponent } from './pages/listado-firestore/listado-firestore.component';
import { ListadoRealtimeComponent } from './pages/listado-realtime/listado-realtime.component';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatFirestoreComponent },
  { path: 'listadoFireStore', component: ListadoFirestoreComponent },
  { path: 'listadoRealtime', component: ListadoRealtimeComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
