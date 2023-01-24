import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrenorbyidComponent } from './antrenorbyid.component';

describe('AntrenorbyidComponent', () => {
  let component: AntrenorbyidComponent;
  let fixture: ComponentFixture<AntrenorbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrenorbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntrenorbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
