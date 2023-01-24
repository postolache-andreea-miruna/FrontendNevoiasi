import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfiseazaDonariDataComponent } from './dialog-afiseaza-donari-data.component';

describe('DialogAfiseazaDonariDataComponent', () => {
  let component: DialogAfiseazaDonariDataComponent;
  let fixture: ComponentFixture<DialogAfiseazaDonariDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfiseazaDonariDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfiseazaDonariDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
