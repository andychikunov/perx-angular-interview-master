import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perx-text-directive-page',
  templateUrl: './text-directive-page.component.html',
  styleUrls: ['./text-directive-page.component.scss']
})
export class TextDirectivePageComponent implements OnInit {
  public queryString = '';

  constructor() { }

  ngOnInit() {
  }

  public find(value) {
    this.queryString = value;
  }

}
