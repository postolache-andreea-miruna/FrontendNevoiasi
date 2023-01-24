import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergantrenorComponent } from './stergantrenor.component';

describe('StergantrenorComponent', () => {
  let component: StergantrenorComponent;
  let fixture: ComponentFixture<StergantrenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergantrenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergantrenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
