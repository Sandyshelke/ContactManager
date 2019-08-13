import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemContactComponent } from './rem-contact.component';

describe('RemContactComponent', () => {
  let component: RemContactComponent;
  let fixture: ComponentFixture<RemContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
