import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergnevoiasComponent } from './stergnevoias.component';

describe('StergnevoiasComponent', () => {
  let component: StergnevoiasComponent;
  let fixture: ComponentFixture<StergnevoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergnevoiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergnevoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
