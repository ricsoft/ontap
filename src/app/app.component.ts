import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database/database.service';
import { BrewData, BrewersObj } from './models/brew.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brewData: BrewData;
  selectedBrewer: BrewersObj;

  brewers: Array<BrewersObj> = [
    {
      index: 0,
      name: 'Yellow Dog',
      imageUrl: 'https://yellowdogbeer.com/yellowpress/wp-content/uploads/2019/11/yellow-dog-brewing_home-page_collage-icon@2x.png'
    },
    {
      index: 1,
      name: 'Moody Ales',
      imageUrl: 'http://www.moodyales.com/img/social-logo.jpg'
    },
    {
      index: 2,
      name: 'The Parkside',
      imageUrl: 'https://www.theparksidebrewery.com/wp-content/themes/parkside/images/circle-logo.png'
    },
    {
      index: 3,
      name: 'Twin Sails',
      imageUrl: 'https://pbs.twimg.com/profile_images/813493559739359232/DhM6ZA8F_400x400.jpg'
    }
  ];

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.getData();
    this.setDefaultBrewer();
  }

  getData(): void {
    this.databaseService.getData().subscribe(dbData => {
      this.brewData = dbData;
    });
  }

  setDefaultBrewer(): void {
    this.selectedBrewer = this.brewers.find(brewer => brewer.index === 0);
  }

  brewerClicked(brewer): void {
    this.selectedBrewer = brewer;
    // console.log(this.brewData.Data[this.selectedBrewer.index]);
  }
}
