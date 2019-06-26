import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import {AppComponent} from '../../app.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ModalComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide modal if click on background', () => {
    component.showModal = true;
    const background = fixture.debugElement.nativeElement.querySelector('#background');
    background.click();
    expect(component.showModal).toBeFalsy();
  });

  it('should emit - onCancel() after click', () => {
    spyOn(component.onCancel, 'emit');

    const cancelButton = fixture.debugElement.nativeElement.querySelector('#cancel');
    cancelButton.click();

    expect(component.onCancel.emit).toHaveBeenCalled();
  });

  it('should emit - onSubmit() after click', () => {
    spyOn(component.onSubmit, 'emit');

    const submitButton = fixture.debugElement.nativeElement.querySelector('#submit');
    submitButton.click();

    expect(component.onSubmit.emit).toHaveBeenCalled();
  });
});
