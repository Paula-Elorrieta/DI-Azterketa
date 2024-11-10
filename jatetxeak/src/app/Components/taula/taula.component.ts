import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Jatetxea } from '../../interfaces/jatetxea';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { JatetxeaService } from '../../Service/jatetxea.service';
import { RouterLink, RouterModule } from '@angular/router';
import { HistorialaComponent } from '../historiala/historiala.component';

@Component({
  selector: 'app-taula',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, HistorialaComponent],
  templateUrl: './taula.component.html',
  styleUrl: './taula.component.css'
})
export class TaulaComponent {
  
  filteredJatetxeak: Jatetxea[] = [];
  jatetxeak: Jatetxea[] = [];
  lenght : number = 0;
  currentPage: number = 1;
  rowsPerPage: number = 15;
  Math : Math = Math;

  constructor(private jatetxeService : JatetxeaService) {}

  ngOnInit(): void {
      setTimeout(() => {
        this.jatetxeak = this.jatetxeService.jatetxeKopia;
        this.filteredJatetxeak = this.jatetxeak;
      }, 100);
  }

  get tamaina () {
    return this.filteredJatetxeak.length;
  }

  get totalItems() {
    return this.filteredJatetxeak.length;
  }

  nextPage() {
    if ((this.currentPage * this.rowsPerPage) < this.totalItems) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  resetPage() {
    this.currentPage = 1;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredJatetxeak = this.jatetxeak;
      return;
    }
    this.jatetxeService.bilaketaGehitu(text);
    this.filteredJatetxeak = this.jatetxeak.filter((Jatetxea) =>
      Jatetxea?.municipality.toLowerCase().includes(text.toLowerCase())
    );
  }

  get paginatedJatetxeak(): Jatetxea[] {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.filteredJatetxeak.slice(start, start + this.rowsPerPage);
  }
}
