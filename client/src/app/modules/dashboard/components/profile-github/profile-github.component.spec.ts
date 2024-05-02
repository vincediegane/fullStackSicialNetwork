import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGithubComponent } from './profile-github.component';

describe('ProfileGithubComponent', () => {
  let component: ProfileGithubComponent;
  let fixture: ComponentFixture<ProfileGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
