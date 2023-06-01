import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card/card.component';

import { PromotionsComponent } from './promotions.component';

describe('PromotionsComponent', () => {
  let component: PromotionsComponent;
  let fixture: ComponentFixture<PromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PromotionsComponent,
        CardComponent,
       ],
       imports: [
        HttpClientTestingModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
