import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmHolderComponent } from './mm-holder.component';

describe('MmHolderComponent', () => {
  let component: MmHolderComponent;
  let fixture: ComponentFixture<MmHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
