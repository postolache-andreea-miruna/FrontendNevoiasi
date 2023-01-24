import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAntrenorComponent } from './dialog-add-antrenor.component';

describe('DialogAddAntrenorComponent', () => {
  let component: DialogAddAntrenorComponent;
  let fixture: ComponentFixture<DialogAddAntrenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAntrenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAntrenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
