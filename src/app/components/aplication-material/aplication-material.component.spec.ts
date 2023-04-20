import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationMaterialComponent } from './aplication-material.component';

describe('AplicationMaterialComponent', () => {
  let component: AplicationMaterialComponent;
  let fixture: ComponentFixture<AplicationMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicationMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
