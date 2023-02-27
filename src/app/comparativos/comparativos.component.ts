import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { data_covid_brasil } from '../../assets/db.json';

@Component({
  selector: 'app-comparativos',
  templateUrl: './comparativos.component.html',
  styleUrls: ['./comparativos.component.scss']
})
export class ComparativosComponent implements OnInit {

  @Input() mortesCovid = 0;
  casosConfirmados = 0;
  casosRecuperados = 0;
  casosAtivos = 0;
  casosObitos = 0;

  constructor(private router: Router) { }

  ngOnInit(): void{
    this.buscarDadosCovid();
  }

  async buscarDadosCovid() {
    // JSON API no localhost 3000
    // const res = await fetch('http://localhost:3000/data_covid_brasil');
    // const json = await res.json();

    // JSON API local para publicação
    const json = data_covid_brasil;

    this.mortesCovid = json[0].deaths;

    this.casosConfirmados = json[0].confirmed;
    this.casosRecuperados = json[0].recovered;
    this.casosAtivos = json[0].cases;
    this.casosObitos = json[0].deaths;
  }

}
