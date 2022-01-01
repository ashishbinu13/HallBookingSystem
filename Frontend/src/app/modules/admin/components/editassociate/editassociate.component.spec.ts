import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassociateComponent } from './editassociate.component';

describe('EditassociateComponent', () => {
  let component: EditassociateComponent;
  let fixture: ComponentFixture<EditassociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditassociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
