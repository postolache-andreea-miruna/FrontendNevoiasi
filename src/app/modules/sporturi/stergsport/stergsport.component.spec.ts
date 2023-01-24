import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergsportComponent } from './stergsport.component';

describe('StergsportComponent', () => {
  let component: StergsportComponent;
  let fixture: ComponentFixture<StergsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergsportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
