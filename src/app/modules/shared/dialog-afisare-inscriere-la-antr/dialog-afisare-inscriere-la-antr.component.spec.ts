import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfisareInscriereLaAntrComponent } from './dialog-afisare-inscriere-la-antr.component';

describe('DialogAfisareInscriereLaAntrComponent', () => {
  let component: DialogAfisareInscriereLaAntrComponent;
  let fixture: ComponentFixture<DialogAfisareInscriereLaAntrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfisareInscriereLaAntrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfisareInscriereLaAntrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
