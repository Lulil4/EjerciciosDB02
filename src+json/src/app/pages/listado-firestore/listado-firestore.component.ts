import { Component, OnInit } from '@angular/core';
import { MensajesFirestoreService } from 'src/app/servicios/mensajes-firestore.service';
import { Mensajes } from "./../../modelos/mensajes";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listado-firestore',
  templateUrl: './listado-firestore.component.html',
  styleUrls: ['./listado-firestore.component.css']
})
export class ListadoFirestoreComponent implements OnInit {

  listadoMensajes?: Mensajes[];
  currentTutorial?: Mensajes;
  currentIndex = -1;
  title = '';
  

  constructor(private serviceFirestore: MensajesFirestoreService) {
   serviceFirestore.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({  ...c.payload.doc.data() })
      )
    )
  ).subscribe(data=>{
      this.listadoMensajes=data;
    });
   }

  ngOnInit(): void {
  }

}
