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
  brewer: object = {
    yellowdog: {
      index: 0,
      name: 'Yellow Dog',
      imageUrl: 'https://yellowdogbeer.com/yellowpress/wp-content/uploads/2019/11/yellow-dog-brewing_home-page_collage-icon@2x.png'
    },
    moodyales: {
      index: 1,
      name: 'Moody Ales',
      imageUrl: 'http://www.moodyales.com/img/social-logo.jpg'
    },
    parkside: {
      index: 2,
      name: 'The Parkside',
      imageUrl: 'https://www.theparksidebrewery.com/wp-content/themes/parkside/images/circle-logo.png'
    },
    twinsails: {
      index: 3,
      name: 'Twin Sails',
      imageUrl: 'https://twinsailsbrewing.com/wp-content/uploads/2019/04/TS-Logo-9-03-1.png'
    }
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
