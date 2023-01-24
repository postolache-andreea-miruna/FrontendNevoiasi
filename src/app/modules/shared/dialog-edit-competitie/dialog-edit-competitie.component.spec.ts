import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCompetitieComponent } from './dialog-edit-competitie.component';

describe('DialogEditCompetitieComponent', () => {
  let component: DialogEditCompetitieComponent;
  let fixture: ComponentFixture<DialogEditCompetitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditCompetitieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCompetitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
