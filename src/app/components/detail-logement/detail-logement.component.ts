import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class DetailLogementComponent implements OnInit {
  @Input() logement: any;
  ratings = [1, 2, 3, 4, 5];
  inputValue = true;
  inputValue2 = true;
  constructor() { }

  ngOnInit(): void {
    console.log(this.logement);
  }

  handleClick2(value: boolean): void {
    this.inputValue2 = value;
  }

  handleClick(value: boolean): void {
    this.inputValue = value;
  }
  parsInt1(value: string): number {
    return parseInt(value, 10);
  }
}
