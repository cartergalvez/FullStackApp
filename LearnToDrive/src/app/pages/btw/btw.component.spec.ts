import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTWComponent } from './btw.component';

describe('BTWComponent', () => {
  let component: BTWComponent;
  let fixture: ComponentFixture<BTWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
