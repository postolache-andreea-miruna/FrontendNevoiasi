import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrierebyIdAntrenorComponent } from './inscriereby-id-antrenor.component';

describe('InscrierebyIdAntrenorComponent', () => {
  let component: InscrierebyIdAntrenorComponent;
  let fixture: ComponentFixture<InscrierebyIdAntrenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrierebyIdAntrenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrierebyIdAntrenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
