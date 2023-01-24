import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfisareAntrenoriSportComponent } from './dialog-afisare-antrenori-sport.component';

describe('DialogAfisareAntrenoriSportComponent', () => {
  let component: DialogAfisareAntrenoriSportComponent;
  let fixture: ComponentFixture<DialogAfisareAntrenoriSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfisareAntrenoriSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfisareAntrenoriSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
