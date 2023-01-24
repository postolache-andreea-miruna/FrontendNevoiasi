import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergdonatorComponent } from './stergdonator.component';

describe('StergdonatorComponent', () => {
  let component: StergdonatorComponent;
  let fixture: ComponentFixture<StergdonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergdonatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergdonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
