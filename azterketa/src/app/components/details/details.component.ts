import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Coche } from '../../interface/coche.interface';
import { SerbitzuaService } from '../../service/serbitzua.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../interface/persona.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  _coche? : Coche
  interesados : Persona[] = []
  modelo : any = "";

  persona: Persona = {
    izena: '',
    abizena: '',
    telefonoa: 0,
    cocheInteresado: this.modelo
  };

  constructor(
    private route: ActivatedRoute,
    private zerbitzua: SerbitzuaService
  ) {}

  ngOnInit(): void {
    this.modelo = this.route.snapshot.paramMap.get('modelo') || '';

    // Mostrar solo las personas que están interesadas en ese coche
    this.interesados = this.zerbitzua.personasKopia.filter(persona => persona.cocheInteresado === this.modelo);
  }

  // Buscar en el array el coche que corresponde con su modelo (id)
  get coche () {
    if (this.modelo) {
      return this.zerbitzua.cochesKopia.find(
        coche => coche.modelo == this.modelo
      );
    }
    else {
      return undefined;
    }
  }

  // Al añadir la persona, guardo como dato en la interfaz el modelo (id) del coche
  anadirInteresados() {
    this.persona.cocheInteresado = this.modelo
    this.zerbitzua.anadirInteresados(this.persona)
  }

}




