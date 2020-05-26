import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainComponent } from './main.component';
import { StoreService } from 'src/app/services/store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: false,
        })
      ],
      declarations: [
        MainComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [StoreService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('showsuccess', () => {
    const x = TestBed.get(ToastrService);
    spyOn(x, 'success');
    component.showSuccess();
  });

  it('voteForSubject 1', () => {
    const x = TestBed.get(ToastrService);
    spyOn(x, 'success');
    component.voteForSubject(JSON.stringify({ subject: { id: 12 }, type: 'like' }));
  });

  it('voteForSubject 2', () => {
    const x = TestBed.get(ToastrService);
    spyOn(x, 'success');
    component.voteForSubject(JSON.stringify({ subject: { id: 12 }, type: 'dislike' }));
  });

  it('voteForSubject 3', () => {
    localStorage.clear();
    const x = TestBed.get(ToastrService);
    spyOn(x, 'success');
    component.voteForSubject(JSON.stringify({ subject: { id: 12 }, type: 'like' }));
  });

  it('closeAlert', () => {
    component.closeAlert();
  });

  it('goToBlank', () => {
    component.goToBlank();
  });
});
