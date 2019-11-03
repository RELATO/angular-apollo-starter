import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';


describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalindromeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('solution1 should work correctly', () => {
    expect(component.solution1('')).toBeTruthy();
    expect(component.solution1('123321')).toBeTruthy();
    expect(component.solution1('12321')).toBeTruthy();
    expect(component.solution1('abcdcba')).toBeTruthy();
    expect(component.solution1('abcd')).toBeFalsy();
    expect(component.solution1(`lo   l`)).toBeTruthy();
    expect(component.solution1('A man, a plan a canal: Panama')).toBeTruthy();
  });

  it('solution2 should work correctly', () => {
    expect(component.solution2('')).toBeTruthy();
    expect(component.solution2('123321')).toBeTruthy();
    expect(component.solution2('12321')).toBeTruthy();
    expect(component.solution2('abcdcba')).toBeTruthy();
    expect(component.solution2('abcd')).toBeFalsy();
    expect(component.solution2(`lo   l`)).toBeTruthy();
    expect(component.solution2('A man, a plan a canal: Panama')).toBeTruthy();
  });
});
