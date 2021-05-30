import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GodzillaVskongPage } from './godzilla-vskong.page';

describe('GodzillaVskongPage', () => {
  let component: GodzillaVskongPage;
  let fixture: ComponentFixture<GodzillaVskongPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GodzillaVskongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GodzillaVskongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
