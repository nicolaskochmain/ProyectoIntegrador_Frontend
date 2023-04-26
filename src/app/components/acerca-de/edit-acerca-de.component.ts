import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css'],
})
export class EditAcercaDeComponent implements OnInit {
  persona!: Persona;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => (this.persona = data),
      (err) => {
        alert('Error al modificar persona');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {}

  uploadImage($event: any): void {}
}
