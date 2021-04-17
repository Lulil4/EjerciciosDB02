import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFirestoreComponent } from './listado-firestore.component';

describe('ListadoFirestoreComponent', () => {
  let component: ListadoFirestoreComponent;
  let fixture: ComponentFixture<ListadoFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
