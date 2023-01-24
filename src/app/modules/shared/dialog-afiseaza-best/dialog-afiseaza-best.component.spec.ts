import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfiseazaBestComponent } from './dialog-afiseaza-best.component';

describe('DialogAfiseazaBestComponent', () => {
  let component: DialogAfiseazaBestComponent;
  let fixture: ComponentFixture<DialogAfiseazaBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAfiseazaBestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfiseazaBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
