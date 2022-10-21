import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let totalSeasons = 0;
      series.forEach(serie => {
        totalSeasons += serie.seasons;
      });
      this.averageSeasons = totalSeasons / series.length;
    });

  }

  ngOnInit() {
    this.getSeries();
  }

}
