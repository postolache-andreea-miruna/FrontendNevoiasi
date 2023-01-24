import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonareidnevComponent } from './donareidnev.component';

describe('DonareidnevComponent', () => {
  let component: DonareidnevComponent;
  let fixture: ComponentFixture<DonareidnevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonareidnevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonareidnevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
