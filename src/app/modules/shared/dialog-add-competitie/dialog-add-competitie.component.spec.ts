import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCompetitieComponent } from './dialog-add-competitie.component';

describe('DialogAddCompetitieComponent', () => {
  let component: DialogAddCompetitieComponent;
  let fixture: ComponentFixture<DialogAddCompetitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCompetitieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCompetitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
