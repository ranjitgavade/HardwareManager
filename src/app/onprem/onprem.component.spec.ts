import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpremComponent } from './onprem.component';

describe('OnpremComponent', () => {
  let component: OnpremComponent;
  let fixture: ComponentFixture<OnpremComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpremComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
