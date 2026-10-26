import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { MinistryTranslatorService } from '../../ministryTranslator/ministry-translator.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(
    public ministryTranslator: MinistryTranslatorService
    ) { }

  ngOnInit(): void {
  }

  changeLanguage(){
    this.ministryTranslator.switchLanguage();
  }

}
