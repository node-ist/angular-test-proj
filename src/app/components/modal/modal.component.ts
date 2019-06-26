import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output()
  onCancel = new EventEmitter();

  @Output()
  onSubmit = new EventEmitter();

  showModal = false;

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  cancel() {
    this.close();
    this.onCancel.emit();
  }

  submit() {
    this.close();
    this.onSubmit.emit();
  }
}
