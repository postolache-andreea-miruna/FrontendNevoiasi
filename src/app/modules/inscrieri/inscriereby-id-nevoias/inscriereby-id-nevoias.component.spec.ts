import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrierebyIdNevoiasComponent } from './inscriereby-id-nevoias.component';

describe('InscrierebyIdNevoiasComponent', () => {
  let component: InscrierebyIdNevoiasComponent;
  let fixture: ComponentFixture<InscrierebyIdNevoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrierebyIdNevoiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrierebyIdNevoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
