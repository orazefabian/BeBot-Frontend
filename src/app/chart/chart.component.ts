import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import Chart from 'chart.js/auto';
import { PreviousStats } from '../../data/previousStats';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less'],
})
export class ChartComponent implements OnInit {
  constructor(private service: ResourceService) {}

  prevData: PreviousStats;
  myChart: Chart;

  ngOnInit(): void {
    this.service.getPreviousStats().subscribe((result) => {
      this.prevData = result;

      this.myChart = new Chart('prevStats', {
        type: 'bar',
        data: {
          labels: ['last 7 days', 'last 14 days', 'last 30 days'],
          datasets: [
            {
              label: 'lost predictions',
              data: [
                this.prevData.data.details.last_7_days.lost,
                this.prevData.data.details.last_14_days.lost,
                this.prevData.data.details.last_30_days.lost,
              ],
              backgroundColor: 'rgba(255,0,0,0.5)',
              borderColor: 'rgba(255,0,0)',
              borderWidth: 3,
              borderSkipped: false,
            },
            {
              label: 'won predictions',
              data: [
                this.prevData.data.details.last_7_days.won,
                this.prevData.data.details.last_14_days.won,
                this.prevData.data.details.last_30_days.won,
              ],
              backgroundColor: 'rgba(0,255,0,0.5)',
              borderColor: 'rgba(0,255,0)',
              borderWidth: 3,
              borderSkipped: false,
            },
            {
              label: 'pending predictions',
              data: [
                this.prevData.data.details.last_7_days.pending,
                this.prevData.data.details.last_14_days.pending,
                this.prevData.data.details.last_30_days.pending,
              ],
              backgroundColor: 'rgba(0,0,255,0.5)',
              borderColor: 'rgba(0,0,255)',
              borderWidth: 3,
              borderSkipped: false,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked',
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    });
  }
}
