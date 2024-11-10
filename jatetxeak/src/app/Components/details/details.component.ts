import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Jatetxea } from '../../interfaces/jatetxea';
import { JatetxeaService } from '../../Service/jatetxea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  jatetxea?: Jatetxea;

  constructor(
    private route: ActivatedRoute,
    private jatetxeaService: JatetxeaService
  ) {}

  ngOnInit(): void {
    const municipality = this.route.snapshot.paramMap.get('municipality');
    if (municipality) {
      this.jatetxea = this.jatetxeaService.jatetxeKopia.find(
        jatetxea => jatetxea.municipality == municipality
      );
    }
  }
}