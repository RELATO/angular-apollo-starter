import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {
  text = 'A man, a plan a canal: Panama';
  solution = 'solution1';

  result = null;

  constructor() {
  }

  ngOnInit() {

  }

  validate() {
    if (['solution1', 'solution2'].includes(this.solution)) {
      this.result = this[this.solution](this.text);
    }
  }

  /**
   * Regex and for-loop
   *
   * Time: O(n)
   * Space: O(1)
   */
  solution1(str: string): boolean {
    const string = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < string.length / 2; i += 1) {
      if (string[i] !== string[string.length - i - 1]) {
        return false;
      }
    }

    return true;
  }

  /**
   * "Two pointers" technique
   *
   * Time: O(n)
   * Space: O(1)
   */
  solution2(str: string): boolean {
    const string = str.toLowerCase();

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      const isLeftValid = this.isValidChar(string[left]);
      const isRightValid = this.isValidChar(string[right]);

      if (!isLeftValid) {
        left += 1;
      } else if (!isRightValid) {
        right -= 1;
      } else {
        if (string[left] !== string[right]) {
          return false;
        }

        left += 1;
        right -= 1;
      }
    }

    return true;
  }

  private isValidChar(char: string): boolean {
    const code = char.charCodeAt(0);

    const isLetter = 'a'.charCodeAt(0) <= code && code <= 'z'.charCodeAt(0);
    const isNumber = '0'.charCodeAt(0) <= code && code <= '9'.charCodeAt(0);

    return isLetter || isNumber;
  }
}
