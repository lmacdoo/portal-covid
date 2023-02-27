import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObitosComponent } from './obitos.component';

describe('ObitosComponent', () => {
  let component: ObitosComponent;
  let fixture: ComponentFixture<ObitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
