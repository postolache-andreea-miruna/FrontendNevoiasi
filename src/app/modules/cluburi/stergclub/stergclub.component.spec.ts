import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergclubComponent } from './stergclub.component';

describe('StergclubComponent', () => {
  let component: StergclubComponent;
  let fixture: ComponentFixture<StergclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StergclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
