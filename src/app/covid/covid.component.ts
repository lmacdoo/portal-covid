import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { data_covid_brasil } from '../../assets/db.json';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  @Input() casosConfirmados = 0;
  @Input() casosRecuperados = 0;
  @Input() casosAtivos = 0;
  @Input() casosObitos = 0;

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

    this.casosConfirmados = json[0].confirmed;
    this.casosRecuperados = json[0].recovered;
    this.casosAtivos = json[0].cases;
    this.casosObitos = json[0].deaths;
  }

}
