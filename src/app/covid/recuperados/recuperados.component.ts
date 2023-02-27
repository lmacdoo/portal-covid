import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-recuperados',
  templateUrl: './recuperados.component.html',
  styleUrls: ['./recuperados.component.scss']
})
export class RecuperadosComponent implements OnInit {

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
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '21'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartColors: Color[] = [
    {
      backgroundColor: '#2196F3'
    }
  ];

  public barChartData: ChartDataSets[] = [
    {
      data: [1254, 159, 980, 1081, 556, 1255, 1340, 1254, 159, 980, 1081, 556, 1255, 1340, 1254, 159, 980, 1081, 556, 1255, 1340], 
      label: 'Recuperados'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
  .then(res => {
    res.json().then(data => {
      console.log(data);
    });
  })
  .catch(error => {
    console.log('Erro na requisição');
  });
}

async function doFetchAsync() {
  // API Covid-19 Governo mortes
  const res = await fetch('https://brasil.io/api/dataset/covid19/obito_cartorio/data');
  const json = await res.json();

  console.log(json);

}
