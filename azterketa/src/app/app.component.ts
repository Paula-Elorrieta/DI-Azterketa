import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SerbitzuaService } from './service/serbitzua.service';
import { TaulaComponent } from './components/taula/taula.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'azterketa';

  constructor(private zerbitzua : SerbitzuaService) {}

  ngOnInit(): void {
    console.log(this.zerbitzua.fetchCoches())
    console.log(this.zerbitzua.cargarInteresados())
  }

}
