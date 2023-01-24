import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditSportComponent } from './dialog-edit-sport.component';

describe('DialogEditSportComponent', () => {
  let component: DialogEditSportComponent;
  let fixture: ComponentFixture<DialogEditSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
