import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database/database.service';
import { BrewData } from './models/brewdata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brewData: BrewData;
  brewer = {
    yellowdog: 0,
    moodyales: 1,
    parkside: 2,
    twinsails: 3
  };

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.databaseService.getData().subscribe(dbData => {
      this.brewData = dbData;
    });
  }
}
