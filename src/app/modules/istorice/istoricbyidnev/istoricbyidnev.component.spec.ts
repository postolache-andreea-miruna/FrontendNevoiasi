import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstoricbyidnevComponent } from './istoricbyidnev.component';

describe('IstoricbyidnevComponent', () => {
  let component: IstoricbyidnevComponent;
  let fixture: ComponentFixture<IstoricbyidnevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstoricbyidnevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IstoricbyidnevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
