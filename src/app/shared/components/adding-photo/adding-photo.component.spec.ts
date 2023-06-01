import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@angular/fire/storage';
import { ToastrService } from "ngx-toastr";
import { AddingPhotoComponent } from './adding-photo.component';

describe('AddingPhotoComponent', () => {
  let component: AddingPhotoComponent;
  let fixture: ComponentFixture<AddingPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingPhotoComponent ],
      providers: [
        { provide: Storage, useValue: {} },
        { provide: ToastrService, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
