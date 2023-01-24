import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAdresaComponent } from './dialog-edit-adresa.component';

describe('DialogEditAdresaComponent', () => {
  let component: DialogEditAdresaComponent;
  let fixture: ComponentFixture<DialogEditAdresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditAdresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAdresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
