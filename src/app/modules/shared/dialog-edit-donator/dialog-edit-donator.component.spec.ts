import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditDonatorComponent } from './dialog-edit-donator.component';

describe('DialogEditDonatorComponent', () => {
  let component: DialogEditDonatorComponent;
  let fixture: ComponentFixture<DialogEditDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditDonatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
