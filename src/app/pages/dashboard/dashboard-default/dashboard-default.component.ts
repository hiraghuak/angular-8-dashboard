import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

import { ApiService } from '../../../api.service';

import { from } from 'rxjs';

import * as moment from 'moment';


declare const AmCharts: any;
declare const $: any;

import '../../../../../node_modules/peity/jquery.peity.min.js';


@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.scss',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})

export class DashboardDefaultComponent implements OnInit {



  // Play Complete Start
  AnalyticsData = [];
  PlayComplete = [];
  PlayCompleteHistorgram = [];
  PlayCompleteHistorgramValue = [];
  totalValueGraphData1;


  // Buffer Time
  BAnalyticsData = [];
  BBufferTimeValue = [];
  CBufferTimeHistorgram = [];
  DBufferTimeHistorgramValue = [];
  totalValueGraphData2;


  // Playback Time
  APlaybackTime = [];
  BPlaybackTimeValue = [];
  CPlaybackTimeHistorgram = [];
  DPlaybackTimeHistorgramValue = [];
  totalValueGraphData3;


  // Play
  APlay = [];
  BPlayValue = [];
  CPlayHistorgram = [];
  DPlayHistorgramValue = [];
  totalValueGraphData4;

  // play & complete (play)
  APlayGraphic = [];
  APlayGraphic1 = [];
  APlayGraphic2 = [];
  APlayGraphic3 = [];
  APlayGraphic4 = [];
  APlayGraphic5 = [];
  APlayGraphic6 = [];

  // play & complete (complete)
  BPlayGraphic = [];
  BPlayGraphic1 = [];
  BPlayGraphic2 = [];
  BPlayGraphic3 = [];
  BPlayGraphic4 = [];
  BPlayGraphic5 = [];
  BPlayGraphic6 = [];

  // PlayBack Week Wise
  playBackWeekWiseA = [];
  playBackWeekWiseB = [];
  playBackWeekWiseC = [];
  playBackWeekWiseD = [];
  playBackWeekWiseE = [];
  playBackWeekWiseF = [];
  playBackWeekWiseG = [];
  playBackWeekWiseH: string;
  playBackWeekWiseI: string;


  // PlaybyCategory
  PlaybyCategoryA = [];
  PlaybyCategoryB = [];

  // Play by Genres
  PlaybyGenresA = [];
  PlaybyGenresB = [];
  PlaybyGenresC = [];
  PlaybyGenresD: number;
  PlaybyGenresE = [];

  // Top 5 Countries Video Views
  Top5CountriesVideoViewsA = [];
  Top5CountriesVideoViewsB = [];
  Top5CountriesVideoViewsC = [];
  Top5CountriesVideoViewsD = [];
  Top5CountriesVideoViewsE = [];
  Top5CountriesVideoViewsF = [];

  today: string;

  getAnalytics = () => {
    this.myservice.getAllDashbordData().subscribe(
      data => {
        this.AnalyticsData = data.aggregations.events.buckets;
        for (let i = 0; i < this.AnalyticsData.length; i++) {

          // dd
          this.PlayComplete = this.AnalyticsData[i].total_event_value.value;

          this.PlayCompleteHistorgram = this.AnalyticsData[i].historgram.buckets;
          for (let j = 0; j < this.PlayCompleteHistorgram.length; j++) {

            // ee
            this.PlayCompleteHistorgramValue.push(this.PlayCompleteHistorgram[j].total.value);
          }
        }
      },
      error => {
        console.log(error + ' Error');
      }
    );
  }
  PlayCompleteHistorgraValue() {
    this.totalValueGraphData1 = buildChartJS('#fff', this.PlayCompleteHistorgramValue, '#3a73f1', 'transparent');

  }
  // Play Complete end

  // Buffer Time Start

  getBufferTime = () => {
    this.myservice.getAllDashbordBufferTime().subscribe(
      data => {

        console.log('ok');

        this.BAnalyticsData = data.aggregations.events.buckets;
        for (let i = 0; i < this.BAnalyticsData.length; i++) {

          // Buffer Time
          this.BBufferTimeValue = this.BAnalyticsData[i].total_event_value.value;

          this.CBufferTimeHistorgram = this.BAnalyticsData[i].historgram.buckets;
          for (let j = 0; j < this.CBufferTimeHistorgram.length; j++) {

            // Buffer Time Value
            this.DBufferTimeHistorgramValue.push(this.CBufferTimeHistorgram[j].total.value);
          }
        }
      },
      error => {
        console.log(error + ' Error 2');
      }
    );
  }
  BufferTimeHistorgraValue() {
    this.totalValueGraphData2 = buildChartJS('#fff', this.DBufferTimeHistorgramValue, '#3a73f1', 'transparent');
  }
  // Buffer Time end

  // Playback Time Start
  getPlaybackTime = () => {
    this.myservice.getAllDashbordPlaybackTime().subscribe(
      data => {
        this.APlaybackTime = data.aggregations.events.buckets;
        for (let i = 0; i < this.APlaybackTime.length; i++) {

          // Playback Time
          this.BPlaybackTimeValue = this.APlaybackTime[i].total_event_value.value;

          this.CPlaybackTimeHistorgram = this.APlaybackTime[i].historgram.buckets;
          for (let j = 0; j < this.CPlaybackTimeHistorgram.length; j++) {

            // Playback Time Value
            this.DPlaybackTimeHistorgramValue.push(this.CPlaybackTimeHistorgram[j].total.value);
          }
        }
      },
      error => {
        console.log(error + ' Error 2');
      }
    );
  }
  PlaybackTimeHistorgraValue() {
    this.totalValueGraphData3 = buildChartJS('#fff', this.DPlaybackTimeHistorgramValue, '#3a73f1', 'transparent');
  }
  // Playback Time end


  // Play Start
  getPlay = () => {
    this.myservice.getAllDashbordPlay().subscribe(
      data => {
        this.APlay = data.aggregations.events.buckets;
        for (let i = 0; i < this.APlay.length; i++) {

          // Play
          this.BPlayValue = this.APlay[i].total_event_value.value;

          this.CPlayHistorgram = this.APlay[i].historgram.buckets;
          for (let j = 0; j < this.CPlayHistorgram.length; j++) {

            // Play Value
            this.DPlayHistorgramValue.push(this.CPlayHistorgram[j].total.value);
          }
        }
      },
      error => {
        console.log(error + ' Error 2');
      }
    );
  }
  PlayHistorgraValue() {
    this.totalValueGraphData4 = buildChartJS('#fff', this.DPlayHistorgramValue, '#3a73f1', 'transparent');
  }
  // Play end


  // Plays and Completion Start
  getPlayDetailsData = () => {
    this.myservice.getAllDashbordPlayAndComplete1().subscribe(
      data => {

        this.APlayGraphic = data.aggregations.events.buckets;
        for (let i = 0; i < this.APlayGraphic.length; i++) {
          this.APlayGraphic1 = this.APlayGraphic[i].historgram.buckets;
          this.APlayGraphic6 = this.APlayGraphic[i].total_event_value.value;
          for (let j = 0; j < this.APlayGraphic1.length; j++) {
            this.APlayGraphic2.push(this.APlayGraphic1[j].key_as_string);
            this.APlayGraphic3.push(this.APlayGraphic1[j].total.value);
            this.APlayGraphic4.push(
              {
                'date': this.APlayGraphic1[j].key_as_string,
                'value': this.APlayGraphic1[j].total.value
              }
            ); // end
            this.APlayGraphic5 = this.APlayGraphic4.slice(1);
          }
        }

      },
      error => {
        console.log(error + ' Error 2');
      }
    );
  }


  getPlayDetailsData2 = () => {
    this.myservice.getAllDashbordPlayAndComplete2().subscribe(
      data => {
        this.BPlayGraphic = data.aggregations.events.buckets;
        for (let i = 0; i < this.BPlayGraphic.length; i++) {
          this.BPlayGraphic1 = this.BPlayGraphic[i].historgram.buckets;
          this.BPlayGraphic6 = this.BPlayGraphic[i].total_event_value.value;
          for (let j = 0; j < this.BPlayGraphic1.length; j++) {
            this.BPlayGraphic2.push(this.BPlayGraphic1[j].key_as_string);
            this.BPlayGraphic3.push(this.BPlayGraphic1[j].total.value);
            this.BPlayGraphic4.push(
              {
                'date': this.BPlayGraphic1[j].key_as_string,
                'value': this.BPlayGraphic1[j].total.value
              }
            ); // end
            this.BPlayGraphic5 = this.BPlayGraphic4.slice(1);
          }
        }
      },
      error => {
        console.log(error + ' Error getPlayDetailsData2');
      }
    );
  }

  getPlayDetailsDataGraphic() {
    AmCharts.makeChart('area-custom', {
      'type': 'serial',
      'theme': 'light',
      'marginRight': 20,
      'marginLeft': 100,
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#ffffff',
          'type': 'smoothedLine'
        },
        'fillAlphas': 0.2,
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'type': 'smoothedLine',
        'lineColor': '#4680ff',
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style="font-size:12px;">[[value]]</span>'
      }],
      'chartCursor': {
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false,
        'valueZoomable': false,
        'valueLineAlpha': 0.5
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': false,
        'dashLength': 1,
        'minorGridEnabled': false,
        'axisAlpha': 0,
        'fontSize': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'dataProvider': this.APlayGraphic5
    }); // end

    AmCharts.makeChart('area-custom-2', {
      'type': 'serial',
      'theme': 'light',
      'marginRight': 10,
      'marginLeft': 100,
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#ffffff',
          'type': 'smoothedLine'
        },
        'fillAlphas': 0.2,
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'type': 'smoothedLine',
        'lineColor': '#FC6180',
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style="font-size:10px;">[[value]]</span>'
      }],
      'chartCursor': {
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false,
        'valueZoomable': false,
        'valueLineAlpha': 0.5
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': false,
        'dashLength': 1,
        'minorGridEnabled': false,
        'axisAlpha': 0,
        'fontSize': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'dataProvider': this.BPlayGraphic5

    });

  }

  getPlayBackWeekWise = () => {
    this.myservice.getAllDashbordPlayback_time().subscribe(
      data => {
        this.playBackWeekWiseA = data.aggregations.events.buckets;
        for (let k = 0; k < this.playBackWeekWiseA.length; k++) {

          // Playback Time
          this.playBackWeekWiseF = this.playBackWeekWiseA[k].total_event_value.value;

          this.playBackWeekWiseB = this.playBackWeekWiseA[k].historgram.buckets;

          for (let l = 0; l < this.playBackWeekWiseB.length; l++) {
            this.playBackWeekWiseC.push(moment(this.playBackWeekWiseB[l].key_as_string).format('dddd'));
            this.playBackWeekWiseD.push(this.playBackWeekWiseB[l].total.value);
            this.playBackWeekWiseE.push(
              {
                'name': moment(this.playBackWeekWiseB[l].key_as_string).format('ddd'),
                'points': this.playBackWeekWiseB[l].total.value,
                'color': '#cddc39',
              }
            );
          }
        }
      },
      error => {
        console.log(error + ' Error getPlayBackWeekWise');
      }
    );
  }


  getPlaybyCategory = () => {
    this.myservice.getAllDashbordPlaybyCategory().subscribe(
      data => {
        this.PlaybyCategoryA = data.aggregations.events.buckets;
      },
      error => {
        console.log(error + ' Error getPlaybyCategory');
      }
    );
  }

  getPlaybyGenres = () => {
    this.myservice.getAllDashbordPlaybyGenres().subscribe(
      data => {
        this.PlaybyGenresA = data.aggregations.events.buckets;
        this.PlaybyGenresB = data.aggregations.events.buckets;
        // this.PlaybyGenresB  = Math.max();
        for (let i = 0; i < this.PlaybyGenresB.length; i++) {
          this.PlaybyGenresC.push(this.PlaybyGenresB[i].total_event_value.value);
          this.PlaybyGenresD = Math.max.apply(null, this.PlaybyGenresC);
        }
      },
      error => {
        console.log(error + ' Error getPlaybyCategory');
      }
    );
  }

  getTop5CountriesVideoViews = () => {
    this.myservice.getAllDashbordTop5CountriesVideoViews().subscribe(
      data => {
        this.Top5CountriesVideoViewsA = data.aggregations.events.buckets;
      },
      error => {
        console.log(error + ' Error getPlaybyCategory');
      }
    );
  }


  // Seconds to HH-MM-SS start
  secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? ',' : ':') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ',' : ':') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? '' : '') : '';
    return hDisplay + mDisplay + sDisplay;
  }
  // Seconds to HH-MM-SS end

  // Plays and Completion End
  totalValueGraphOption = buildChartOption();
  constructor(private myservice: ApiService) { }


  ngOnInit() {


    this.getTop5CountriesVideoViews();
    this.getPlaybyGenres();
    this.getPlaybyCategory();

    this.playBackWeekWiseH = moment('1419076').format('h:mm:ss');

    this.getAnalytics();

    this.getBufferTime();

    this.getPlaybackTime();

    this.getPlay();


    setTimeout(() => {
      this.PlayCompleteHistorgraValue();
      this.BufferTimeHistorgraValue();
      this.PlaybackTimeHistorgraValue();
      this.PlayHistorgraValue();
    }, 2000);


    this.getPlayDetailsData();
    this.getPlayDetailsData2();

    setTimeout(() => {
      this.getPlayDetailsDataGraphic();
      this.playBackWeekWiseI = this.secondsToHms(this.playBackWeekWiseF);
    }, 2000);

    this.getPlayBackWeekWise();


    // Map start
    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067';
    targetSVG += ',5.5,9,5.5 S12.5,7.067,12.5,9z';

    AmCharts.makeChart('world-map-visitors', {
      'type': 'map',
      'projection': 'winkel3',
      'theme': 'light',
      'imagesSettings': {
        'rollOverColor': '#FC6180',
        'rollOverScale': 4,
        'selectedScale': 4,
        'selectedColor': '#FC6180',
        'color': '#FC6180'
      },
      'areasSettings': {
        'unlistedAreasColor': '#4680ff',
        'outlineThickness': 0.3
      },

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 30,
        'zoomLatitude': 10,
        'areas': [
          { 'id': 'IN', 'color': '#1abc9c' },
          { 'id': 'US', 'color': '#f1c40f' },
          { 'id': 'BD', 'color': '#c0392b' },
          { 'id': 'MU', 'color': '#e67e22' },
          { 'id': 'PK', 'color': '#9b59b6' }
        ]
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': true,
        'homeButtonEnabled': true
      },
      'export': {
        'enabled': true
      }
    });
    // Map End


    AmCharts.makeChart('statistics-chart', {
      type: 'serial',
      marginTop: 0,
      marginRight: 0,
      dataProvider: [{
        year: 'Jan',
        value: 0.98
      }, {
        year: 'Feb',
        value: 1.87
      }, {
        year: 'Mar',
        value: 0.97
      }, {
        year: 'Apr',
        value: 1.64
      }, {
        year: 'May',
        value: 0.4
      }, {
        year: 'Jun',
        value: 2.9
      }, {
        year: 'Jul',
        value: 5.2
      }, {
        year: 'Aug',
        value: 0.77
      }, {
        year: 'Sap',
        value: 3.1
      }],
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

    // raghu 2
    AmCharts.makeChart('solid-gauge1', {
      type: 'gauge',
      theme: 'light',
      axes: [{
        axisAlpha: 0,
        tickAlpha: 0,
        labelsEnabled: false,
        startValue: 0,
        endValue: 100,
        startAngle: 0,
        endAngle: 360,
        bands: [{
          color: '#dadada',
          startValue: -35,
          endValue: 35,
          radius: '100%',
          innerRadius: '92%'
        }, {
          color: '#93BE52',
          startValue: -35,
          endValue: 20,
          radius: '100%',
          innerRadius: '92%'
        }]
      }],
      'export': {
        enabled: true
      }
    });

    AmCharts.makeChart('email-sent', {
      type: 'serial',
      theme: 'light',
      dataDateFormat: 'YYYY-MM-DD',
      precision: 2,
      valueAxes: [
        {
          id: 'v1',
          title: 'Sales',
          position: 'left',
          autoGridCount: false,
          labelFunction: function (g) {
            return Math.round(g);
          }
        },
        {
          id: 'v2',
          title: '',
          gridAlpha: 0,
          fontSize: 0,
          axesAlpha: 0,
          position: 'left',
          autoGridCount: false
        }
      ],
      graphs:
        [
          {
            id: 'g3',
            valueAxis: 'v1',
            lineColor: '#4680ff',
            fillColors: '#4680ff',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g4',
            valueAxis: 'v1',
            lineColor: '#FC6180',
            fillColors: '#FC6180',
            fillAlphas: 1,
            type: 'column',
            title: 'Target Sales',
            valueField: 'sales1',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
          },
          {
            id: 'g1',
            valueAxis: 'v2',
            bullet: 'round',
            bulletBorderAlpha: 0,
            bulletColor: 'transparent',
            bulletSize: 0,
            hideBulletsCount: 50,
            lineThickness: 3,
            dashLength: 10,
            lineColor: '#93BE52',
            type: 'smoothedLine',
            title: 'Market Days',
            useLineColorForBulletBorder: true,
            valueField: 'market1',
            balloonText: '[[title]]<br /><b style="font-size: 130% ">[[value]]</b>'
          },
          {
            id: 'v3',
            valueAxis: 'v1',
            lineColor: '#FFB64D',
            fillColors: '#FFB64D',
            fillAlphas: 1,
            type: 'column',
            title: 'Actual Sales',
            valueField: 'sales2',
            clustered: true,
            columnWidth: 0.4,
            legendValueText: '$[[value]]M',
            balloonText: '[[title]]<br /><b style="font-size: 130%>$[[value]]M</b>'
          }
        ],
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 0,
        valueLineAlpha: 0.2
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        dashLength: 0,
        axisAlpha: 0,
        GridAlpha: 0,
        minorGridEnabled: true
      },
      legend: {
        useGraphSettings: true,
        position: 'top'
      },
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      'export': {
        enabled: true
      },
      dataProvider: [
        {
          date: '2013-01-16',
          market1: 91,
          market2: 75,
          sales1: 5,
          sales2: 8
        },
        {
          date: '2013-01-17',
          market1: 74,
          market2: 78,
          sales1: 4,
          sales2: 6
        },
        {
          date: '2013-01-18',
          market1: 78,
          market2: 88,
          sales1: 5,
          sales2: 2
        },
        {
          date: '2013-01-19',
          market1: 85,
          market2: 89,
          sales1: 8,
          sales2: 9
        },
        {
          date: '2013-01-20',
          market1: 82,
          market2: 89,
          sales1: 9,
          sales2: 6
        },
        {
          date: '2013-01-21',
          market1: 83,
          market2: 85,
          sales1: 3,
          sales2: 5
        },
        {
          date: '2013-01-22',
          market1: 78,
          market2: 92,
          sales1: 5,
          sales2: 7
        }
      ]
    });




    setTimeout(() => {
      AmCharts.makeChart('Servey-chart', {
        'type': 'serial',
        'theme': 'light',
        'dataProvider': this.playBackWeekWiseE,
        'valueAxes': [{
          'maximum': 400000,
          'minimum': 0,
          'axisAlpha': 0,
          'gridAlpha': 0,
          'position': 'left'
        }],
        'startDuration': 1,
        'graphs': [{
          'balloonText': '<span style="font-size:10px;">[[category]]: <b>[[value]]</b></span>',
          'bulletOffset': 10,
          'bulletSize': 52,
          'colorField': 'color',
          'cornerRadiusTop': 12,
          'fillAlphas': 0.8,
          'columnWidth': 0.5,
          'lineAlpha': 0,
          'type': 'column',
          'valueField': 'points'
        }],
        'marginTop': 0,
        'marginRight': 0,
        'marginLeft': 0,
        'marginBottom': 20,
        'autoMargins': false,
        'categoryField': 'name',
        'categoryAxis': {
          'axisAlpha': 0,
          'gridAlpha': 0,
          'inside': false,
          'tickLength': 0
        },
      });
    }, 2000);

    //raghu 1



  } // init end


  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}

function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}
