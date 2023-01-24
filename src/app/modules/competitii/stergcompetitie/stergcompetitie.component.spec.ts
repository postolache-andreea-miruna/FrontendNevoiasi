import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergcompetitieComponent } from './stergcompetitie.component';

describe('StergcompetitieComponent', () => {
  let component: StergcompetitieComponent;
  let fixture: ComponentFixture<StergcompetitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergcompetitieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergcompetitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
