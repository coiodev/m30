import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmSourceComponent } from './mm-source.component';

describe('MmSourceComponent', () => {
  let component: MmSourceComponent;
  let fixture: ComponentFixture<MmSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
