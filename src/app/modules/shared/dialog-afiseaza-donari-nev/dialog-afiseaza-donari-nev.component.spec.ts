import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfiseazaDonariNevComponent } from './dialog-afiseaza-donari-nev.component';

describe('DialogAfiseazaDonariNevComponent', () => {
  let component: DialogAfiseazaDonariNevComponent;
  let fixture: ComponentFixture<DialogAfiseazaDonariNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfiseazaDonariNevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfiseazaDonariNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
