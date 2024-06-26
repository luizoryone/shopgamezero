import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginzeroComponent } from './loginzero.component';

describe('LoginzeroComponent', () => {
  let component: LoginzeroComponent;
  let fixture: ComponentFixture<LoginzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginzeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
