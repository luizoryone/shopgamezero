import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciozeroComponent } from './iniciozero.component';

describe('IniciozeroComponent', () => {
  let component: IniciozeroComponent;
  let fixture: ComponentFixture<IniciozeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciozeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciozeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
