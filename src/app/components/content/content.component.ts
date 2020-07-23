import { Component, Input} from '@angular/core';
import { BrewData, BrewersObj } from '../../models/brew.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() selectedBrewer: BrewersObj;
  @Input() brewData: BrewData;

  searchUrl = 'https://www.google.com/search?q=';

  handleBeerClick(beerName): void {
    window.open(this.searchUrl + this.selectedBrewer.name + ' ' + beerName, '_blank');
  }
}
