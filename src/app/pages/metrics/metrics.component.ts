import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citizen } from '../../models/Citizen.model';
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {
  citizens: Citizen[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://crypto-spring-boot.herokuapp.com/citizen')
      .subscribe((res: Citizen[]) => {
        console.table(res);
        this.citizens = res;
      });
  }
}
