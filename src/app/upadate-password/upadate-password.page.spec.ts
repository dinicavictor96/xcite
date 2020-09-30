import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpadatePasswordPage } from './upadate-password.page';

describe('UpadatePasswordPage', () => {
  let component: UpadatePasswordPage;
  let fixture: ComponentFixture<UpadatePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadatePasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpadatePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
