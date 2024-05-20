import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuzeroComponent } from './menuzero.component';

describe('MenuzeroComponent', () => {
  let component: MenuzeroComponent;
  let fixture: ComponentFixture<MenuzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuzeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
