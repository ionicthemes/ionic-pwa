import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ViewChild, OnChanges, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'preload-image',
  templateUrl: './preload-image.component.html',
  styleUrls: [
    './preload-image.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PreloadImageComponent implements OnChanges {
  _src = '';
  _ratio: { w: number, h: number };

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  @Input() set src(val: string) {
    this._src = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set ratio(ratio: { w: number, h: number }) {
    this._ratio = ratio || {w: 1, h: 1};
  }

  ngOnChanges() {
    const ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
    // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
    this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
    this._update();
  }

  _update() {
    this._loaded(false);
  }

  _loaded(isLoaded: boolean) {
    if (isLoaded) {
      setTimeout(() => {
        this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
      }, 1000);
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
    }
  }
}
