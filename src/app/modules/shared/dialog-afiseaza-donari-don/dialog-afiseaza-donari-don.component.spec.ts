import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfiseazaDonariDonComponent } from './dialog-afiseaza-donari-don.component';

describe('DialogAfiseazaDonariDonComponent', () => {
  let component: DialogAfiseazaDonariDonComponent;
  let fixture: ComponentFixture<DialogAfiseazaDonariDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfiseazaDonariDonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfiseazaDonariDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
