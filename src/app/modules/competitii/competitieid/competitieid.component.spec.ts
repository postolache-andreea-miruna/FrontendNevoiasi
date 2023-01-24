import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitieidComponent } from './competitieid.component';

describe('CompetitieidComponent', () => {
  let component: CompetitieidComponent;
  let fixture: ComponentFixture<CompetitieidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitieidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitieidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
