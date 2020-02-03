import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  message = 'Hola Mundo!';
  AnalyticsDataA = [];
  AnalyticsDataB = [];

  VideoAnalyticsbyA = [];
  VideoAnalyticsbyB = [];
  VideoAnalyticsbyC = [];
  VideoAnalyticsbyD = [];
  VideoAnalyticsbyE = [];
  VideoAnalyticsbyF = [];

  edited = true;
  selectedDevice: string;


  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  getAnalyticsData = () => {
    this.myservice.getAllAnalyticsCategoryWiseAnalytics().subscribe(
      data => {
        this.AnalyticsDataA = data.aggregations.events.buckets;
        for (let i = 0; i < this.AnalyticsDataA.length; i++) {
          this.AnalyticsDataB.push(this.AnalyticsDataA[i].Events);
        }
      },
      error => {
        console.log(error + ' Error getAnalyticsData');
      }
    );
  }


  getAnalyticsVideoAnalyticsby = () => {
    this.myservice.getAllAnalyticsVideoAnalyticsby().subscribe(
      data => {
        this.VideoAnalyticsbyA = data.aggregations.events.buckets;
        for (let i = 0; i < this.VideoAnalyticsbyA.length; i++) {
          this.VideoAnalyticsbyB = this.VideoAnalyticsbyA[i].historgram.buckets;
          for (let j = 0; j < this.VideoAnalyticsbyB.length; j++) {
            this.VideoAnalyticsbyE.push(
              {
                year: moment(this.VideoAnalyticsbyB[j].key_as_string).format('MMM'),
                value: this.VideoAnalyticsbyB[j].total.value
              }
            );
          }
        }
      },
      error => {
        console.log(error + ' Error getAnalyticsVideoAnalyticsby');
      }
    );
  }


  constructor(private myservice: ApiService) { }

  handleChange = ($event) => {
    console.log(this.selectedDevice + ' test');
  }

  ngOnInit() {

    this.getAnalyticsVideoAnalyticsby();

    setTimeout(() => {
      AmCharts.makeChart('statistics-chart', {
        type: 'serial',
        marginTop: 30,
        marginRight: 20,
        dataProvider: this.VideoAnalyticsbyE,
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

    this.getAnalyticsData();
  }

}
