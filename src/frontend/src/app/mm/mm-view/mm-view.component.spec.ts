import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMViewComponent } from './mm-view.component';

describe('MMViewComponent', () => {
  let component: MMViewComponent;
  let fixture: ComponentFixture<MMViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
