import { ComponentFixture, TestBed} from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadCrumbsComponent } from './bread-crumbs.component';

xdescribe('BreadCrumbsComponent', () => {
  let component: BreadCrumbsComponent;
  let fixture: ComponentFixture<BreadCrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
