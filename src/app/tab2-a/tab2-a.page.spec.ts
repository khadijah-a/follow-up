import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2APage } from './tab2-a.page';

describe('Tab2APage', () => {
  let component: Tab2APage;
  let fixture: ComponentFixture<Tab2APage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2APage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2APage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
