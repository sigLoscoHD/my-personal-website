import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/types/language';

export const locales = {
  'it': 'it-IT',
  'en': 'en-GB'
};

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit {

  languageList: string[] = [];
  languageSelected: string = '';


  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.getLanguages();
    this.languageSelected = this.translate.getDefaultLang();

  }

  onSwitchLanguage(language: string) {
    this.languageSelected = language;
    this.translate.use(language);
  }

  private getLanguages() {
    for (const langKey in Language) {
      this.languageList.push(Language[langKey]);
    }
  }

}
