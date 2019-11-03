import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedNumberComponent } from './missed-number.component';


describe('MissedNumberComponent', () => {
  let component: MissedNumberComponent;
  let fixture: ComponentFixture<MissedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissedNumberComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('solution1 should work correctly', () => {
    expect(component.solution1([1, 4, 3])).toBe(2);
    expect(component.solution1([1, 4, 3, 2])).toBe(5);
    expect(component.solution1([3, 4, 5, 2])).toBe(1);
  });

  it('solution2 should work correctly', () => {
    expect(component.solution2([1, 4, 3])).toBe(2);
    expect(component.solution2([1, 4, 3, 2])).toBe(5);
    expect(component.solution2([3, 4, 5, 2])).toBe(1);
  });
});
