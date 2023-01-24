import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresaidComponent } from './adresaid.component';

describe('AdresaidComponent', () => {
  let component: AdresaidComponent;
  let fixture: ComponentFixture<AdresaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdresaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
