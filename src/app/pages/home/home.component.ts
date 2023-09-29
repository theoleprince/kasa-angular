import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/Data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  title = 'Chez vous, partout et ailleurs';
  banner = 'assets/banner.jpg'

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData()
  }
  async fetchData() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    console.log(response)
    });

  }
}
