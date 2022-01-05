import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAngularComponent } from './stories-angular.component';

describe('StoriesAngularComponent', () => {
  let component: StoriesAngularComponent;
  let fixture: ComponentFixture<StoriesAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
