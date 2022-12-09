import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgminNavbarComponent } from './agmin-navbar.component';

describe('AgminNavbarComponent', () => {
  let component: AgminNavbarComponent;
  let fixture: ComponentFixture<AgminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgminNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
