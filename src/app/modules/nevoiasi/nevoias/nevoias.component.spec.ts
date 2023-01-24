import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevoiasComponent } from './nevoias.component';

describe('NevoiasComponent', () => {
  let component: NevoiasComponent;
  let fixture: ComponentFixture<NevoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevoiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
