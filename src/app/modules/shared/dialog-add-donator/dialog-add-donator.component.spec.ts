import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDonatorComponent } from './dialog-add-donator.component';

describe('DialogAddDonatorComponent', () => {
  let component: DialogAddDonatorComponent;
  let fixture: ComponentFixture<DialogAddDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDonatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
