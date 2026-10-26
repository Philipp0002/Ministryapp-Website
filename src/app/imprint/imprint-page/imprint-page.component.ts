import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-imprint-page',
    templateUrl: './imprint-page.component.html',
    styleUrls: ['./imprint-page.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ImprintPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
