import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { EtxeakService } from './services/etxeak.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AngularSvgIconModule, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';

  
  constructor(private etxeakService: EtxeakService) {
    this.etxeakService.fetchHousingLocations();
  }
}
