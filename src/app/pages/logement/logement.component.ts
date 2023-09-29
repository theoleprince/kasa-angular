import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_services/Data.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  data: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.fetchData(id);
  }
  async fetchData(id: any): Promise<void> {
    this.dataService.getDataById(id).subscribe(response => {
      this.data = response;
      console.log(response);
    });
  }
}
