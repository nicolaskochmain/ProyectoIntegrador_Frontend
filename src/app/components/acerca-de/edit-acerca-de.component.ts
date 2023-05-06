import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { BannerService } from 'src/app/services/banner.service';
import { ImageService } from 'src/app/services/image.service';
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
    private router: Router,
    public imageService: ImageService,
    public bannerService: BannerService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.personaService.detail(id).subscribe(
      (data) => (this.persona = data),
      (err) => {
        console.log('Error al modificar persona');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.persona.banner = this.bannerService.url;
    this.personaService.update(id, this.persona).subscribe(
      (data) => this.router.navigate(['']),
      (err) => {
        alert('Error al modificar la persona');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = `perfil_${id}`;
    this.imageService.uploadImage($event, name);
  }

  uploadBanner($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = `banner_${id}`;
    this.bannerService.uploadBanner($event, name);
  }
}
