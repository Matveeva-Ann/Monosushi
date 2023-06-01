import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotionsComponent } from './admin-promotions.component';
import { PromotionsTableComponent } from './promotions-table/promotions-table.component';
import { PromotionsFormaComponent } from './promotions-forma/promotions-forma.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminPromotionsComponent', () => {
  let component: AdminPromotionsComponent;
  let fixture: ComponentFixture<AdminPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdminPromotionsComponent,
        PromotionsTableComponent,
        PromotionsFormaComponent,
       ],
       imports: [
        HttpClientTestingModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
