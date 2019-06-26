import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ModalComponent} from './components/modal/modal.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ModalComponent,
      ],
      imports: [
        FormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('modal should be closed by default', () => {
    const modal = fixture.debugElement.nativeElement.querySelector('#modal');
    expect(modal.classList.contains('show')).toBeFalsy();
  });

  it('should open modal, on click by button', () => {
    const openModalButton = fixture.debugElement.nativeElement.querySelector('.open-modal');
    openModalButton.click();

    fixture.detectChanges();

    const modal = fixture.debugElement.nativeElement.querySelector('#modal');
    expect(modal.classList.contains('show')).toBeTruthy();
  });
});
