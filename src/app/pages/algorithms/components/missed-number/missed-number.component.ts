import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-missed-number',
  templateUrl: './missed-number.component.html',
  styleUrls: ['./missed-number.component.scss']
})
export class MissedNumberComponent implements OnInit {
  length = 100;
  removedNumber = 40;

  array = [];

  solution = 'solution1';
  result = null;

  constructor() {
  }

  ngOnInit() {
  }

  findMissedNumber() {
    if (['solution1', 'solution2'].includes(this.solution)) {
      this.array = [];

      let len = this.length;
      while (len-- > 0) {
        if (len + 1 !== this.removedNumber) {
          this.array.push(len + 1);
        }
      }

      this.shuffle(this.array);
      console.log(this.array);

      this.result = this[this.solution](this.array);
    }
  }


  /**
   * Trivial solution
   *
   * Time: O(n)
   * Space: O(n)
   */
  solution1(nums: number[]): number {
    const seen = new Uint8Array(nums.length + 1);

    for (const n of nums) {
      seen[n - 1] = 1;
    }

    for (let i = 0; i < seen.length; i += 1) {
      if (seen[i] === 0) {
        return i + 1;
      }
    }
  }

  /**
   * Using Gauss formula
   *
   * Time: O(n)
   * Space: O(1)
   */
  solution2(nums: number[]): number {
    const N = nums.length + 1;

    const actualSum = nums.reduce((n, acc) => acc + n, 0);
    const expectedSum = N * (N + 1) / 2;

    return expectedSum - actualSum;
  }


  /**
   * Shuffles array in place.
   * Modern Fisher–Yates algorithm
   */
  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
}
