
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromotionsFormaComponent } from './promotions-forma.component';
import { Storage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';

describe('PromotionsFormaComponent', () => {
  let component: PromotionsFormaComponent;
  let fixture: ComponentFixture<PromotionsFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsFormaComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: Storage, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
