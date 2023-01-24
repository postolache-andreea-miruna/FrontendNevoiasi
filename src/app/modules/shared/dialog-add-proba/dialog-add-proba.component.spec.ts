import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProbaComponent } from './dialog-add-proba.component';

describe('DialogAddProbaComponent', () => {
  let component: DialogAddProbaComponent;
  let fixture: ComponentFixture<DialogAddProbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddProbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddProbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
