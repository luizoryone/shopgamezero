import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapezeroComponent } from './rodapezero.component';

describe('RodapezeroComponent', () => {
  let component: RodapezeroComponent;
  let fixture: ComponentFixture<RodapezeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapezeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RodapezeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
