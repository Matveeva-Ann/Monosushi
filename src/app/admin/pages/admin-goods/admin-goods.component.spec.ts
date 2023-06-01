import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '../table/table.component';

import { AdminGoodsComponent } from './admin-goods.component';
import { GoodsFormComponent } from './goods-form/goods-form.component';
import { GoodsTableComponent } from './goods-table/goods-table.component';

describe('AdminGoodsComponent', () => {
  let component: AdminGoodsComponent;
  let fixture: ComponentFixture<AdminGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AdminGoodsComponent,
        TableComponent,
        GoodsTableComponent,
        GoodsFormComponent,
       ],
       imports: [
        HttpClientTestingModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
