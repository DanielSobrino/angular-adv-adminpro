import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent{

  @Input() titulo = 'Sin título';
  @Input() labels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input() data: MultiDataSet = [
    [50, 50, 50]
  ];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059']},
  ];

}
