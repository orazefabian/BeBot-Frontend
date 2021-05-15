import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less'],
})
export class ChartComponent implements OnInit {
  constructor(private service: ResourceService) {}

  myChart: Chart;
  backgroundColors = [
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];
  borderColors = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  ngOnInit(): void {
    this.myChart = new Chart('prevStats', {
      type: 'bar',
      data: {
        labels: ['last 7 days', 'last 14 days', 'last 30 days'],
        datasets: [
          {
            label: 'won predictions',
            data: [12, 34, 49],
            backgroundColor: 'rgba(233,0,0,0.8)',
          },
          {
            label: 'lost predictions',
            data: [8, 30, 34],
            backgroundColor: 'rgba(0,255,0,1)',
          },
          {
            label: 'pending predictions',
            data: [2, 3, 6],
            backgroundColor: 'rgba(0,0,255,1)',
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
  }
}
