import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer
    //   .setStyle(
    // this.elRef.nativeElement,
    // 'background-color ',
    // 'blue',
    // RendererStyleFlags2.Important
    // )
  }
  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    // this.elRef.nativeElement,
    //   'background-color ',
    //   'blue',
    //   RendererStyleFlags2.Important;
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave', ['$event']) mouseleave(eventData: Event) {
    // this.elRef.nativeElement,
    //   'background-color ',
    //   'yellow',
    //   RendererStyleFlags2.Important;
    this.backgroundColor = this.defaultColor;
  }
}
