import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MinistryTranslatorService } from 'src/app/ministryTranslator/ministry-translator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
