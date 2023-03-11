import { MinistryTranslatorService } from './../../ministryTranslator/ministry-translator.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private ministryTranslator: MinistryTranslatorService
  ) {}

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark-theme', prefersDark.matches);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
