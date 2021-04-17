import { Component, OnInit } from '@angular/core';
import { MensajesFirestoreService } from 'src/app/servicios/mensajes-firestore.service';
import { Mensajes } from "./../../modelos/mensajes";
import { MensajesRealtimeService } from 'src/app/servicios/mensajes-realtime.service';


@Component({
  selector: 'app-chat-firestore',
  templateUrl: './chat-firestore.component.html',
  styleUrls: ['./chat-firestore.component.css']
})
export class ChatFirestoreComponent implements OnInit {
  nuevoMensaje: Mensajes;
  constructor(private servicioFirestore:MensajesFirestoreService,private servicioRealTime:MensajesRealtimeService) {
    this.nuevoMensaje = new Mensajes();
  }

  ngOnInit(): void {
  }
  EnviarMensaje() {
    this.servicioFirestore.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje Fire");
    });
    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
    });

  }
}
