import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaredatadonComponent } from './donaredatadon.component';

describe('DonaredatadonComponent', () => {
  let component: DonaredatadonComponent;
  let fixture: ComponentFixture<DonaredatadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaredatadonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonaredatadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
