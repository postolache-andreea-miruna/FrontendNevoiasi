import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergadresaComponent } from './stergadresa.component';

describe('StergadresaComponent', () => {
  let component: StergadresaComponent;
  let fixture: ComponentFixture<StergadresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergadresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergadresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
