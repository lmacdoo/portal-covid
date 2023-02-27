import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-obitos',
  templateUrl: './obitos.component.html',
  styleUrls: ['./obitos.component.scss']
})
export class ObitosComponent implements OnInit {

  isMobile = false;
  estados: string[] = [];
  casos: number[] = [];
  mortes: number[] = [];

  //@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = this.estados;
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartColors: Color[] = [
    {
      backgroundColor: '#3fa6ec',
    },
    {
      backgroundColor: '#ff6384',
    }
  ];

  public barChartData: ChartDataSets[] = [
    {
      data: this.casos,
      label: 'Casos'
    },
    {
      data: this.mortes,
      label: 'Óbitos'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.calcularObitos();
  }

  async calcularObitos() {

    //const res = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
    const res = await fetch('http://localhost:3000/data_covid_estados');
    const json = await res.json();

    console.log(json.length);
    console.log(json[0].uf);

    if(this.isMobile) {
      for (let index = 0; index < 7; index++) {
        this.estados.push(json[index].uf);
        this.casos.push(json[index].cases);
        this.mortes.push(json[index].deaths);
      }
    }else{
      json.forEach(element => {
        this.estados.push(element.uf);
        this.casos.push(element.cases);
        this.mortes.push(element.deaths);
      });
    }


    //console.log(this.estados);
    //console.log(this.casos);
    //console.log(this.mortes);


    const res2 = await fetch('https://brasil.io/api/dataset/covid19/obito_cartorio/data/');
    const json2 = await res2.json();

    const res3 = await fetch('https://brasil.io/api/dataset/covid19/obito_cartorio/data/?page=2');
    const json3 = await res3.json();

    //console.log(json2);
    //console.log(json3);

    //json3.concat(json2);


    
    //console.log(json3);

  }

  
  

}
