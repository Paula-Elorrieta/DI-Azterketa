import { Component, OnInit } from '@angular/core';
import { Coche } from '../../interface/coche.interface';
import { SerbitzuaService } from '../../service/serbitzua.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-taula',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './taula.component.html',
  styleUrl: './taula.component.css'
})
export class TaulaComponent implements OnInit{

  coches : Coche[] = []
  cochesFiltrados : Coche[] = []

  constructor(private zerbitzua : SerbitzuaService) {}

  // Recuperar los arrays
  ngOnInit(): void {
    setTimeout(() => {
      this.coches = this.zerbitzua.cochesKopia;
      this.cochesFiltrados = this.coches
    }, 300);
  }

  // Hacer la busqueda
  bilaketaEgin(text: string) {
    if (!text) {
      this.cochesFiltrados = this.coches;
      return;
    }
    this.cochesFiltrados = this.coches.filter((Coche) =>
      Coche?.tipo.toLowerCase().includes(text.toLowerCase())
    );
  }










}
