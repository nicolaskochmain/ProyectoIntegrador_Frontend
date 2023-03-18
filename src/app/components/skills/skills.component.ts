import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/services/hys.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  hys: Hys[] = [];
  isLogged: boolean = false;

  constructor(private sHys: HysService, private sToken: TokenService) {}

  ngOnInit(): void {
    this.cargarHys();
    if (this.sToken.getToken()) this.isLogged = true;
    else this.isLogged = false;
  }

  cargarHys(): void {
    this.sHys.lista().subscribe((data) => (this.hys = data));
  }

  delete(id?: number): void {
    if (id != undefined)
      this.sHys.delete(id).subscribe(
        (data) => this.cargarHys(),
        (err) => alert('No se pudo borrar la Skill')
      );
  }
}
