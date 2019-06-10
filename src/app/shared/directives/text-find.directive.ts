import {AfterViewInit, ElementRef, Directive, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[prexTextFind]'
})
export class TextFindDirective implements AfterViewInit, OnChanges {

  @Input() query = '';
  innerHTML: string;

  constructor(private elem: ElementRef) {
  }

  ngAfterViewInit() {
    this.innerHTML = this.elem.nativeElement.innerHTML;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.query.firstChange) {
      return;
    }
    if (this.query) {
      const queryRegExp = new RegExp(this.query, 'gi');
      const newHtml = this.getHtmlWithQuery(queryRegExp);
      this.elem.nativeElement.innerHTML = newHtml;
    } else {
      this.elem.nativeElement.innerHTML = this.innerHTML;
    }
  }

  private getHtmlWithQuery(queryRegExp) {
    return this.innerHTML.replace(queryRegExp, (str: string) => {
      return `<span style="background-color: yellow;">${str}</span>`;
    });
  }
}
