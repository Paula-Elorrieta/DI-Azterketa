import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../interface/housinglocation';
import {EtxeakService} from '../services/etxeak.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeComponent, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {


  constructor(private etxeakService: EtxeakService) {
  }

  get housingLocation(): HousingLocation[] {
    return this.etxeakService.housingLocation;
  }
}
