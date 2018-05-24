import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public x = 0;
  public y = 0;
  public startX = 0;
  public startY = 0;

  @ViewChild('panItem') panItem: ElementRef;

  onPanStart(event) {
    event.preventDefault();
    this.startX = this.x;
    this.startY = this.y;

  }
  onPanMove(event) {
    console.log(event);
    event.preventDefault();
    this.x = this.startX + event.deltaX;
    this.y = this.startY + event.deltaY;

    this.panItem.nativeElement.style.left = this.x + 'px';
    this.panItem.nativeElement.style.top = this.y + 'px';
  }
}
