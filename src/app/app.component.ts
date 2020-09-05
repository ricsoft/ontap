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
      name: 'Dageraad',
      imageUrl: 'https://pbs.twimg.com/profile_images/1001512837137678336/sBmwWJDa_400x400.jpg',
      isRounded: false
    },
    {
      index: 1,
      name: 'Yellow Dog',
      imageUrl: 'https://yellowdogbeer.com/yellowpress/wp-content/uploads/2019/11/yellow-dog-brewing_home-page_collage-icon@2x.png',
      isRounded: false
    },
    {
      index: 2,
      name: 'Moody Ales',
      imageUrl: 'http://www.moodyales.com/img/social-logo.jpg',
      isRounded: false
    },
    {
      index: 3,
      name: 'Parkside',
      imageUrl: 'https://www.theparksidebrewery.com/wp-content/themes/parkside/images/circle-logo.png',
      isRounded: true
    },
    {
      index: 4,
      name: 'Twin Sails',
      imageUrl: 'https://pbs.twimg.com/profile_images/813493559739359232/DhM6ZA8F_200x200.jpg',
      isRounded: true
    },
    {
      index: 5,
      name: 'Fraser Mills',
      imageUrl: 'https://pbs.twimg.com/profile_images/921620804197957632/lztMFt4S_200x200.jpg',
      isRounded: false
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
  }
}
