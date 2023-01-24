import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditClubComponent } from './dialog-edit-club.component';

describe('DialogEditClubComponent', () => {
  let component: DialogEditClubComponent;
  let fixture: ComponentFixture<DialogEditClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
