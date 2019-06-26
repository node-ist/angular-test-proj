import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal', { static: false })
  modal;

  @ViewChild('nestedDialog', { static: false })
  nestedDialog;

  text = '';

  modalCanceled() {
    alert('Canceled');
  }

  modalSubmitted() {
    alert(this.text.length ? this.text : 'Submitted');
  }
}
