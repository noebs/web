import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWidgetComponent } from './service-widget.component';

describe('ServiceWidgetComponent', () => {
  let component: ServiceWidgetComponent;
  let fixture: ComponentFixture<ServiceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
