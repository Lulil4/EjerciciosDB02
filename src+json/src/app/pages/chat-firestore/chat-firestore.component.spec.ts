import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFirestoreComponent } from './chat-firestore.component';

describe('ChatFirestoreComponent', () => {
  let component: ChatFirestoreComponent;
  let fixture: ComponentFixture<ChatFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
