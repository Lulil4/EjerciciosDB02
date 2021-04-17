import { Component } from '@angular/core';
import { MensajesFirestoreService } from 'src/app/servicios/mensajes-firestore.service';
import {Mensajes} from 'src/app/modelos/mensajes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-firestore2021';
  unMensaje:Mensajes= new Mensajes();
}
