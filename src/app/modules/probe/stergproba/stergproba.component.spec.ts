import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergprobaComponent } from './stergproba.component';

describe('StergprobaComponent', () => {
  let component: StergprobaComponent;
  let fixture: ComponentFixture<StergprobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergprobaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergprobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
