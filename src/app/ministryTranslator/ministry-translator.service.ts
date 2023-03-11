import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MinistryTranslatorService {
  public currentLang: string | undefined;

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) {
    translate.setDefaultLang('en');

    translate.setTranslation('en', {
      MINISTRYAPP: 'Ministryapp',
      KEEP_TRACK: 'Keep track of your service.',
      ANYTIME: 'At anytime.',
      USING_APP: 'with the capabilities of Ministryapp',
      WHY_HEADER: 'Why use Ministryapp?',
      REASON_1_TITLE: 'All-in-one',
      REASON_1_BODY:
        'Reports, notes, dailytexts, sample presentations und calendar - all in one app.',
      REASON_2_TITLE: 'Private',
      REASON_2_BODY: 'Keeps your data safe on your device',
      REASON_3_TITLE: 'Free',
      REASON_3_BODY: '"You received free, give free." (Mat. 10:8)',
      LETS_GO: 'Lets go!',
      WHY_WAIT: 'What are you waiting for?',
      DOWNLOAD_AT: 'Download the app on the app store.',
      SWITCH_ENGLISH: 'English page',
      SWITCH_GERMAN: 'German page',
      IMPRINT_TITLE: 'Imprint',
      IMPRINT_TMG: 'Liability and information according to § 5 TMG',
      IMPRINT_GERMANY: 'Germany'
    });

    translate.setTranslation('de', {
      MINISTRYAPP: 'Dienstapp',
      KEEP_TRACK: 'Behalte den Überblick.',
      ANYTIME: 'Immer.',
      USING_APP: 'mit den nützlichen Funktionen der Dienstapp',
      WHY_HEADER: 'Warum Dienstapp?',
      REASON_1_TITLE: 'Alles drin',
      REASON_1_BODY:
        'Bericht, Notizen, Tagestext, Empfehlungen und Dienstkalender - in nur einer App.',
      REASON_2_TITLE: 'Privat',
      REASON_2_BODY: 'Sicher, weil alle deine Daten auch bei dir bleiben.',
      REASON_3_TITLE: 'Kostenlos',
      REASON_3_BODY:
        '"Gratis habt ihr bekommen, gratis gebt weiter." (Mat. 10:8)',
      LETS_GO: "Also los geht's!",
      WHY_WAIT: 'Worauf wartest du?',
      DOWNLOAD_AT: 'Herunterladen in den gängigen App-Stores.',
      SWITCH_ENGLISH: 'Englische Seite',
      SWITCH_GERMAN: 'Deutsche Seite',
      IMPRINT_TITLE: 'Impressum',
      IMPRINT_TMG: 'Angaben gemäß § 5 TMG',
      IMPRINT_GERMANY: 'Deutschland'
    });

    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      this.setLanguage(browserLang);
    }
  }

  public setLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
    this.translate.get('MINISTRYAPP').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }

  public switchLanguage(){
    this.setLanguage(this.currentLang === 'de' ? 'en' : 'de');
  }
}
