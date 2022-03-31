import { Component, OnInit } from '@angular/core';

interface Menu {
  about?: boolean;
  skills?: boolean;
  resume?: boolean;
  works?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  menu: Menu = { about: true, skills: false, resume: false, works: false };

  constructor() { }

  ngOnInit() {
  }

  goTo(section: string) {
    this.setActiveMenu(section);
    const sectionId = `${section}-section`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  setActiveMenu(section: string) {
    for (const key of Object.keys(this.menu)) {
      if (key === section) this.menu[key] = true;
      else this.menu[key] = false;
    }
  }

}
