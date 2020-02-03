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
  selector: 'app-categorywiseanalytics',
  templateUrl: './categorywiseanalytics.component.html',
  styleUrls: ['./categorywiseanalytics.component.scss']
})
export class CategorywiseanalyticsComponent implements OnInit {
  categorywiseanalyticsA = [];
  categorywiseanalyticsB = [];
  categorywiseanalyticsC = [];
  categorywiseanalyticsD = [];
  categorywiseanalyticsE = [];
  getCategorywiseanalyticsDataTableView = () => {
    this.myservice.getAllCategorywiseanalytics().subscribe(
      data => {
        this.categorywiseanalyticsA = data.aggregations.events.buckets;
      },
      error => {
        console.log(error + ' Error getCategorywiseanalyticsDataTableView');
      }
    );
  }
  getCategorywiseanalyticsDataGraph = () => {
    this.myservice.getAllCategorywiseanalyticsGraph().subscribe(
      data => {
        this.categorywiseanalyticsB = data.aggregations.events.buckets;
        for (let i = 0; i < this.categorywiseanalyticsB.length; i++) {
          this.categorywiseanalyticsC = this.categorywiseanalyticsB[i].historgram.buckets;
          for (let j = 0; j < this.categorywiseanalyticsC.length; j++) {
            this.categorywiseanalyticsD.push(
              {
                year: moment(this.categorywiseanalyticsC[j].key_as_string).format('MMM'),
                value: this.categorywiseanalyticsC[j].total.value
              }
            );
          }
        }
      },
      error => {
        console.log(error + ' Error getCategorywiseanalyticsDataGraph');
      }
    );
  }
  constructor(private myservice: ApiService) { }
  ngOnInit() {
    this.getCategorywiseanalyticsDataGraph();
    this.getCategorywiseanalyticsDataTableView();
    setTimeout(() => {
      AmCharts.makeChart('statistics-chart1', {
        type: 'serial',
        marginTop: 30,
        marginRight: 20,
        dataProvider: this.categorywiseanalyticsD,
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
