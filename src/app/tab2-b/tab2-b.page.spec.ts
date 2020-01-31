import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2BPage } from './tab2-b.page';

describe('Tab2BPage', () => {
  let component: Tab2BPage;
  let fixture: ComponentFixture<Tab2BPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2BPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2BPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
