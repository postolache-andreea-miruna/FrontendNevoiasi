import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrenorbyidsportComponent } from './antrenorbyidsport.component';

describe('AntrenorbyidsportComponent', () => {
  let component: AntrenorbyidsportComponent;
  let fixture: ComponentFixture<AntrenorbyidsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrenorbyidsportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntrenorbyidsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
