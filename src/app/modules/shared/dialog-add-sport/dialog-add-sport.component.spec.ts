import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSportComponent } from './dialog-add-sport.component';

describe('DialogAddSportComponent', () => {
  let component: DialogAddSportComponent;
  let fixture: ComponentFixture<DialogAddSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
