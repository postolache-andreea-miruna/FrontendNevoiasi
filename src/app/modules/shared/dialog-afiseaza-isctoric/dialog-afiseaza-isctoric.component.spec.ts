import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfiseazaIsctoricComponent } from './dialog-afiseaza-isctoric.component';

describe('DialogAfiseazaIsctoricComponent', () => {
  let component: DialogAfiseazaIsctoricComponent;
  let fixture: ComponentFixture<DialogAfiseazaIsctoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfiseazaIsctoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfiseazaIsctoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
