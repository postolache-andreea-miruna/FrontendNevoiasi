import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevoiasidComponent } from './nevoiasid.component';

describe('NevoiasidComponent', () => {
  let component: NevoiasidComponent;
  let fixture: ComponentFixture<NevoiasidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevoiasidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevoiasidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
