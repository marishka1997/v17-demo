import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Injectable,
  Input,
} from '@angular/core';
import {
  BehaviorSubject,
  delay,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  tap,
} from 'rxjs';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { UppercaseParagraphComponent } from './uppercase-paragraph.component';

@Component({
  selector: 'rxjs-component',
  template: `
    <h1 style="color: blue;">RxJS DEMO</h1>
    <h3 style="color: red;">Current user: {{ userProfile$ | async }}</h3>
    <!-- TODO 1 fix compiler error -->
    <!-- <uppercase-paragraph [text]="userProfile$ | async" /> -->
    <!-- <uppercase-paragraph [text]="(userProfile$ | async) ?? ''" /> -->

    <button
      style="background-color: green; color: white; border: none; text-decoration: none; font-size: 16px; padding: 10px 20px;"
      (click)="updateProfile()"
    >
      Update Profile
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, UpperCasePipe, UppercaseParagraphComponent],
  standalone: true,
})
export class RxJsComponent {
  public userProfile$ = inject(UserProfileService)
    .loadUserProfile()
    .pipe
    // TODO 2 fix profile is loaded twice
    // shareReplay(),

    // TODO 4 add start with
    // startWith('UNKNOWN')
    ();
  cdr: any;

  public updateProfile() {
    // TODO 5 how to get current user profile here
    // as method argument with third async pipe or BehaviorSubject in class
  }
}

@Injectable({ providedIn: 'root' })
class UserProfileService {
  loadUserProfile(): Observable<string> {
    return of('User 1').pipe(
      tap(() => console.log('Loaded: User 1'))
      // TODO 3 add some network delay
      // delay(2000)
    );
  }
}
