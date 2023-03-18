import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/services/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css'],
})
export class NewHysComponent {
  nombre!: string;
  porcentaje!: number;

  constructor(private sHys: HysService, private router: Router) {}

  onCreate(): void {
    const hys = new Hys(this.nombre, this.porcentaje);
    this.sHys.save(hys).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al agregar skill');
        this.router.navigate(['']);
      }
    );
  }
}
