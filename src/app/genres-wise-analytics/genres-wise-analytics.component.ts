import { Component, OnInit } from '@angular/core';

import '../../assets/charts/amchart/amcharts.js';
import '../../assets/charts/amchart/gauge.js';
import '../../assets/charts/amchart/pie.js';
import '../../assets/charts/amchart/serial.js';
import '../../assets/charts/amchart/light.js';
import '../../assets/charts/amchart/ammap.js';
import '../../assets/charts/amchart/worldLow.js';
import { ApiService } from '../api.service';
import * as moment from 'moment';


declare const AmCharts: any;
declare const $: any;


@Component({
  selector: 'app-genres-wise-analytics',
  templateUrl: './genres-wise-analytics.component.html',
  styleUrls: ['./genres-wise-analytics.component.scss']
})
export class GenresWiseAnalyticsComponent implements OnInit {


  GenresWiseAnalyticsA = [];
  GenresWiseAnalyticsB = [];
  GenresWiseAnalyticsC = [];
  GenresWiseAnalyticsD = [];
  GenresWiseAnalyticsE = [];


  getGenresWiseAnalyticsTableGraph = () => {
    this.myservice.getAllGenresWiseAnalyticsGraph().subscribe(
      data => {
        this.GenresWiseAnalyticsB = data.aggregations.events.buckets;
        for (let i = 0; i < this.GenresWiseAnalyticsB.length; i++) {
          this.GenresWiseAnalyticsC = this.GenresWiseAnalyticsB[i].historgram.buckets;
          for (let j = 0; j < this.GenresWiseAnalyticsC.length; j++) {
            this.GenresWiseAnalyticsD.push(
              {
                year: moment(this.GenresWiseAnalyticsC[j].key_as_string).format('MMM'),
                value: this.GenresWiseAnalyticsC[j].total.value
              }
            );
          }
        }
      },
      error => {
        console.log(error + ' Error getGenresWiseAnalyticsTableGraph');
      }
    );
  }


  getGenresWiseAnalyticsTable = () => {
    this.myservice.getAllGenresWiseAnalyticsTable().subscribe(
      data => {
        this.GenresWiseAnalyticsA = data.aggregations.events.buckets;
      },
      error => {
        console.log(error + ' Error getGenresWiseAnalyticsTable');
      }
    );
  }

  constructor(private myservice: ApiService) { }

  ngOnInit() {

    this.getGenresWiseAnalyticsTableGraph();
    this.getGenresWiseAnalyticsTable();

    setTimeout(() => {
      AmCharts.makeChart('statistics-chart3', {
        type: 'serial',
        marginTop: 30,
        marginRight: 20,
        dataProvider: this.GenresWiseAnalyticsD,
        valueAxes: [{
          axisAlpha: 0,
          dashLength: 6,
          gridAlpha: 0.1,
          position: 'left'
        }],
        graphs: [{
          id: 'g1',
          bullet: 'round',
          bulletSize: 9,
          lineColor: '#4680ff',
          lineThickness: 2,
          negativeLineColor: '#4680ff',
          type: 'smoothedLine',
          valueField: 'value'
        }],
        chartCursor: {
          cursorAlpha: 0,
          valueLineEnabled: false,
          valueLineBalloonEnabled: true,
          valueLineAlpha: false,
          color: '#fff',
          cursorColor: '#FC6180',
          fullWidth: true
        },
        categoryField: 'year',
        categoryAxis: {
          gridAlpha: 0,
          axisAlpha: 0,
          fillAlpha: 1,
          fillColor: '#FAFAFA',
          minorGridAlpha: 0,
          minorGridEnabled: true
        },
        'export': {
          enabled: true
        }
      });
    }, 2000);

  }

}
