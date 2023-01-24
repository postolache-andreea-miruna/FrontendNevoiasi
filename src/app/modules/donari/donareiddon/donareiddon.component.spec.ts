import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonareiddonComponent } from './donareiddon.component';

describe('DonareiddonComponent', () => {
  let component: DonareiddonComponent;
  let fixture: ComponentFixture<DonareiddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonareiddonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonareiddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
