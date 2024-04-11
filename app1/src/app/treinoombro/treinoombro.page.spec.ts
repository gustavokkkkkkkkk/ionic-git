import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinoombroPage } from './treinoombro.page';

describe('TreinoombroPage', () => {
  let component: TreinoombroPage;
  let fixture: ComponentFixture<TreinoombroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TreinoombroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
