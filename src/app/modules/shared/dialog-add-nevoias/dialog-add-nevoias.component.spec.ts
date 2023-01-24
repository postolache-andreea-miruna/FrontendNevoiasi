import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNevoiasComponent } from './dialog-add-nevoias.component';

describe('DialogAddNevoiasComponent', () => {
  let component: DialogAddNevoiasComponent;
  let fixture: ComponentFixture<DialogAddNevoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddNevoiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddNevoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
