import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../interface/housinglocation';
import { EtxeakService } from '../services/etxeak.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {

  // El @Input es un decorador que nos permite pasar datos a un componente desde el componente padre.
  @Input() housingLocation!: HousingLocation;

  

}
