import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseurl = 'http://ec2-3-1-83-220.ap-southeast-1.compute.amazonaws.com:5001/_search?size=0';
  constructor(private http: HttpClient) { }
  inputdata = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'play_complete'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata2 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'buffertime'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata3 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'playback_time'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata4 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'play'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata5 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'playback_time'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata6 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'buffertime'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata7 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': [
              'playback_time'
            ]
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-09',
              'lte': '2019-09-15'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata8 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': [
              'buffertime'
            ]
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-09',
              'lte': '2019-09-15'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata9 = {
    'query': {
      'bool': {
        'filter': [
          {
            'terms': {
              'kvr.e_n': [
                'play'
              ]
            }
          },
          {
            'range': {
              'reqtimestamp': {
                'gte': '2019-09-01',
                'lte': '2019-09-30'
              }
            }
          }
        ]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension3.keyword',
          'size': 10
        },
        'aggs': {
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata10 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': [
              'play'
            ]
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-01',
              'lte': '2019-09-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension5.keyword',
          'size': 30
        },
        'aggs': {
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata11 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-01',
              'lte': '2019-09-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'geoip.country_name.keyword',
          'size': 5
        },
        'aggs': {
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata12 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play_complete', 'buffertime', 'playback_time', 'play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-01',
              'lte': '2019-09-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension16.keyword',
          'size': 100
        },
        'aggs': {
          'Events': {
            'terms': {
              'field': 'kvr.e_n.keyword',
              'size': 10
            },
            'aggs': {
              'total_event_value': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          }
        }
      }
    }
  };
  inputdata13 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-01-01',
              'lte': '2019-12-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.e_n.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'calendar_interval': 'month'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata14 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play_complete', 'buffertime', 'playback_time', 'play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-01',
              'lte': '2019-09-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension3.keyword',
          'size': 100
        },
        'aggs': {
          'Events': {
            'terms': {
              'field': 'kvr.e_n.keyword',
              'size': 10
            },
            'aggs': {
              'total_event_value': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          }
        }
      }
    }
  };
  inputdata15 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-01-01',
              'lte': '2019-12-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension3.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata16 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-01-01',
              'lte': '2019-12-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension5.keyword',
          'size': 100
        },
        'aggs': {
          'historgram': {
            'date_histogram': {
              'field': 'reqtimestamp',
              'fixed_interval': '1d'
            },
            'aggs': {
              'total': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          },
          'total_event_value': {
            'sum': {
              'field': 'kvr.e_v'
            }
          }
        }
      }
    }
  };
  inputdata17 = {
    'query': {
      'bool': {
        'filter': [{
          'terms': {
            'kvr.e_n': ['play_complete', 'buffertime', 'playback_time', 'play']
          }
        }, {
          'range': {
            'reqtimestamp': {
              'gte': '2019-09-01',
              'lte': '2019-09-30'
            }
          }
        }]
      }
    },
    'aggs': {
      'events': {
        'terms': {
          'field': 'kvr.dimension5.keyword',
          'size': 100
        },
        'aggs': {
          'Events': {
            'terms': {
              'field': 'kvr.e_n.keyword',
              'size': 10
            },
            'aggs': {
              'total_event_value': {
                'sum': {
                  'field': 'kvr.e_v'
                }
              }
            }
          }
        }
      }
    }
  };
  getAllDashbordData(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordBufferTime(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata2, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlaybackTime(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata3, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlay(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata4, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlayAndComplete1(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata5, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlayAndComplete2(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata6, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlayback_time(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata7, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordBuffertime(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata8, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlaybyCategory(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata9, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordPlaybyGenres(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata10, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllDashbordTop5CountriesVideoViews(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata11, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllAnalyticsCategoryWiseAnalytics(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata12, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllAnalyticsVideoAnalyticsby(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata13, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllCategorywiseanalytics(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata14, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllCategorywiseanalyticsGraph(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata15, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllGenresWiseAnalyticsGraph(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata16, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getAllGenresWiseAnalyticsTable(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata17, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
