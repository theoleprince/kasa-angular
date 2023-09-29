import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = '';
  banner2 = 'assets/banner2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
