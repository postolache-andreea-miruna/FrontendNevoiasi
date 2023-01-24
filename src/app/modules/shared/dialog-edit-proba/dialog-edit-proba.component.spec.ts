import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProbaComponent } from './dialog-edit-proba.component';

describe('DialogEditProbaComponent', () => {
  let component: DialogEditProbaComponent;
  let fixture: ComponentFixture<DialogEditProbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditProbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditProbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
