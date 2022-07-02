import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    // Array from
    const arrayFrom = Array.from('Barry');
    console.log(arrayFrom);

    const arrayOf = Array.of(42, 53, 49);
    console.log(arrayOf);

    const copyWithin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(1, 3, 5);
    console.log(copyWithin);

    const findArray = [5, 22, 19, 54, 24];
    const findResult = findArray.find(z => z > 22);
    console.log(findResult);

    const index = findArray.findIndex(x => x === 54);
    console.log(index);

    const colors = ['red', 'green', 'blue'];
    const showColors = colors.entries();
    console.log(showColors);

    for (let i of showColors) {
      console.log(i);
    }

    const a
  }

}
