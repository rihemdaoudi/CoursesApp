import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddCoursePage } from './add-course.page';
import { IonicModule } from '@ionic/angular';

describe('AddCoursePage', () => {
  let component: AddCoursePage;
  let fixture: ComponentFixture<AddCoursePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AddCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
