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
      IMPRINT_GERMANY: 'Germany',

      PP_TITLE: "Privacy Policy",
      PP_INTRO: "Ministryapp is a free app. This page is used to inform visitors regarding the policies with the collection, use and disclosure of personal information. By clicking accept you agree to the policy provided below.",
      PP_INFO_TITLE: "Information collection and use",
      PP_INFO_DESC: "Ministryapp does not collect personally identifiable information about its users. However the app uses third party services to provide its core features and for further development of the app. Those services provide their own privacy policies:",
      PP_INFO_GPS: "Google Play Services",
      PP_INFO_GPS_DESC: "(used for providing core functionality)",
      PP_INFO_GAFF: "Google Analytics for Firebase",
      PP_INFO_GAFF_DESC: "(used for collecting information about app crashes)",
      PP_INFO_JW: "Official website of Jehovah's Witnesses",
      PP_INFO_JW_DESC: "(used for providing news, sample presentations and daily text)",
      PP_LOG_TITLE: "Log data",
      PP_LOG_INFO: "Ministryapp will connect to the Ministryapp servers in order to provide features like \"Daily text\", \"Sample Presentations\" and \"Videos\". Those servers save device specific data (IP-Address, User-Agent, Date and time of access) for 14 days. This data will not be processed in any way.",
      PP_LINK_TITLE: "Links to other sites",
      PP_LINK_DESC: "This service may contain links to other sites. Note that these external sites are not operated by Philipp Hahn. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
      PP_ASSOCIATION_TITLE: "Association to jw.org and its services",
      PP_ASSOCIATION_DESC: "Ministryapp is not officially affiliated with jw.org, wol.jw.org or any other websites run by \"Watch Tower Bible and Tract Society of Pennsylvania\".",
      PP_CONTACT_TITLE: "Contact",
      PP_CONTACT_DESC: "Ministryapp is run by:",
      PP_POLICY_EFFECTIVE: "This policy is effective as of 2020-06-27."
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
      IMPRINT_GERMANY: 'Deutschland',

      PP_TITLE: "Datenschutzerklärung",
      PP_INTRO: "Die Dienstapp wird kostenfrei zur Verfügung gestellt. Diese Seite bietet Informationen darüber, wie die Dienstapp Daten sammelt, nutzt und personenbezogene Daten verarbeitet. Mit dem Klick auf akzeptieren stimmen Sie den unten aufgeführten Bestimmungen zu.",
      PP_INFO_TITLE: "Sammlung und Nutzung von Informationen",
      PP_INFO_DESC: "Die Dienstapp sammelt selbst keine personenbezogenen Daten über seine Nutzer. Jedoch verwendet die App Drittanbieterdienste um essenzielle Basisfunktionen zur Verfügung stellen zu können und die App weiterzuentwickeln. Diese Dienste stellen ihre eigenen Datenschutzerklärungen bereit:",
      PP_INFO_GPS: "Google Play Services",
      PP_INFO_GPS_DESC: "(wird verwendet um Basisfunktionen zur Verfügung zu stellen)",
      PP_INFO_GAFF: "Google Analytics for Firebase",
      PP_INFO_GAFF_DESC: "(wird verwendet um mögliche App-Abstürze zu dokumentieren und auszuwerten)",
      PP_INFO_JW: "Offizielle Webseite der Zeugen Jehovas",
      PP_INFO_JW_DESC: "(wird verwendet, um Nachrichten, Gesprächsvorschläge und Tagestext bereitzustellen)",
      PP_LOG_TITLE: "Protokolldateien",
      PP_LOG_INFO: "Die Dienstapp stellt eine Verbindung zum Dienstappserver her um - unter anderem - die Funktionen „Tagestext“, „Gesprächsvorschläge“ und „Videos“ bereitzustellen. Dieser Server speichert gerätespezifische Daten (IP-Addresse, User-Agent, Zeitpunkt des Zugriffs) für 14 Tage. Diese Daten werden jedoch nicht ausgewertet.",
      PP_LINK_TITLE: "Verlinkungen zu anderen Webseiten",
      PP_LINK_DESC: "Die App enthält möglicherweise Links zu anderen Webseiten. Bitte beachten Sie, dass diese Seiten nicht von Philipp Hahn bereitgestellt werden. Deshalb wird empfohlen, die Datenschutzerklärungen der verlinkten Webseiten zu lesen. Haftung für diese Inhalte wird nicht übernommen.",
      PP_ASSOCIATION_TITLE: "Zusammenhang zu jw.org und dessen Diensten",
      PP_ASSOCIATION_DESC: "Die Dienstapp steht in keinem offiziellen Verhältnis zu jw.org, wol.jw.org oder anderen Webseiten, welche von der ‚Watch Tower Bible and Tract Society of Pennsylvania‘ betrieben werden.",
      PP_CONTACT_TITLE: "Kontakt",
      PP_CONTACT_DESC: "Dienstapp wird bereitgestellt von:",
      PP_POLICY_EFFECTIVE: "Diese Datenschutzerklärung ist wirksam seit dem 27.06.2020."
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
