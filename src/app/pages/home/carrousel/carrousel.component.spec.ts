import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { CarrouselComponent } from './carrousel.component';

describe('CarrouselComponent', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselComponent ],
      imports: [
        HttpClientTestingModule,
        CarouselModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
