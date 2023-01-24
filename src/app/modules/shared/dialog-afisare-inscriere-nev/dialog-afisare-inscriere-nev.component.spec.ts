import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfisareInscriereNevComponent } from './dialog-afisare-inscriere-nev.component';

describe('DialogAfisareInscriereNevComponent', () => {
  let component: DialogAfisareInscriereNevComponent;
  let fixture: ComponentFixture<DialogAfisareInscriereNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfisareInscriereNevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfisareInscriereNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
