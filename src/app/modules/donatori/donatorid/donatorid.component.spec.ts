import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatoridComponent } from './donatorid.component';

describe('DonatoridComponent', () => {
  let component: DonatoridComponent;
  let fixture: ComponentFixture<DonatoridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatoridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatoridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
