import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coche } from '../interface/coche.interface';
import { Persona } from '../interface/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class SerbitzuaService {

  isLoading = true;

  // Para hacer la conexion
  httpClient : HttpClient;

  // Creacción de Arrays
  _coches : Coche[] = []
  _personas : Persona[] = []

  // Url para el JSON
  Url = "http://localhost:3000/coches";

  // Constructor de httpClient
  constructor(httpclient : HttpClient) {
    this.httpClient = httpclient;
  }

  get cochesKopia () {
    return [...this._coches]
  }

  get personasKopia() {
    return [...this._personas]
  }

  fetchCoches() {
    this.httpClient.get<Coche[]>(this.Url).subscribe({
      next: (resp: Coche[]) => {
        this._coches = resp;
        console.log('Kotxeak fetched:', this.cochesKopia);
      },
      error: (error) => {
        console.error('Error fetching kotxeak:', error);
      }
    });
  }

  anadirInteresados(persona : Persona) {
    console.log(persona)
    this._personas.push(persona)
    localStorage.setItem('personas', JSON.stringify(this._personas));
  }

  cargarInteresados() {
    const personas = localStorage.getItem('personas');
    if (personas) {
      this._personas = JSON.parse(personas);
    }
  }
}




