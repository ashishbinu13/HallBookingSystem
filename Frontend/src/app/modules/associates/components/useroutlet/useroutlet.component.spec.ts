import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroutletComponent } from './useroutlet.component';

describe('UseroutletComponent', () => {
  let component: UseroutletComponent;
  let fixture: ComponentFixture<UseroutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseroutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
