import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTestComponent } from './p-test.component';

describe('PTestComponent', () => {
  let component: PTestComponent;
  let fixture: ComponentFixture<PTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
