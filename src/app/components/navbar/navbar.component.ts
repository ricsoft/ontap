import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BrewersObj } from '../../models/brew.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() brewers: BrewersObj;
  @Output() brewerClicked: EventEmitter<any> = new EventEmitter();

  handleBrewerClick(brewer): void {
    this.brewerClicked.emit(brewer);
  }
}
