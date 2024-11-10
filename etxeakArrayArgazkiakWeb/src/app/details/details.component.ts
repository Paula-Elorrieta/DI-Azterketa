import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interface/housinglocation';
import { EtxeakService } from '../services/etxeak.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']  
})
export class DetailsComponent {

  id : any = 0;

  firstName = "";
  lastName = "";
  email = "";
  parametro = this.getQueryParam('id');
  // Inyectar correctamente el servicio
  constructor(private housingService: EtxeakService, private route: ActivatedRoute) {
  }

  submitApplication() {
      // TODO
  }



  ngOnInit() {
    this.id = `${this.parametro}`;
    this.housingService.fetchHousingLocations();
    const data = this.housingService.housingLocation.find(housingLocation => housingLocation.id === this.id);
    
    
    /*
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
*/
  }

  getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
  
}
