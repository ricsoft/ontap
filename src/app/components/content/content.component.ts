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
}
