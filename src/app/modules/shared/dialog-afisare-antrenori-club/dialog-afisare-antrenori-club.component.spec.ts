import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfisareAntrenoriClubComponent } from './dialog-afisare-antrenori-club.component';

describe('DialogAfisareAntrenoriClubComponent', () => {
  let component: DialogAfisareAntrenoriClubComponent;
  let fixture: ComponentFixture<DialogAfisareAntrenoriClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfisareAntrenoriClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfisareAntrenoriClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
