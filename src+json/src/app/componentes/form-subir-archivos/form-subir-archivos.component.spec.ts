import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubirArchivosComponent } from './form-subir-archivos.component';

describe('FormSubirArchivosComponent', () => {
  let component: FormSubirArchivosComponent;
  let fixture: ComponentFixture<FormSubirArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubirArchivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubirArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
