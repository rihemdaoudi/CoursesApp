import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DetailsCoursePage } from './details-course.page';
import { IonicModule } from '@ionic/angular';

describe('DetailsCoursePage', () => {
  let component: DetailsCoursePage;
  let fixture: ComponentFixture<DetailsCoursePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DetailsCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
