import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public date: Date = new Date();
  @Input() activateImprint = true;

  constructor() { }

  ngOnInit(): void {
  }

}
