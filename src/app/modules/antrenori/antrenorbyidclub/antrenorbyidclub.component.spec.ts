import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrenorbyidclubComponent } from './antrenorbyidclub.component';

describe('AntrenorbyidclubComponent', () => {
  let component: AntrenorbyidclubComponent;
  let fixture: ComponentFixture<AntrenorbyidclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrenorbyidclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntrenorbyidclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
