import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAdresaComponent } from './dialog-add-adresa.component';

describe('DialogAddAdresaComponent', () => {
  let component: DialogAddAdresaComponent;
  let fixture: ComponentFixture<DialogAddAdresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAdresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAdresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
