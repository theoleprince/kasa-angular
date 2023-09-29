import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css']
})
export class DetailLogementComponent implements OnInit {
@Input() logement: any;
  constructor() { }

  ngOnInit(): void {
  }

}
