import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule,StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatGridListModule, MatToolbarModule, MatCardModule, MatIconModule, MatTabsModule, MatRippleModule, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDialogComponent } from './forms/post-dialog/post-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.router.module';
import { APP_BASE_HREF } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './shared/app.state';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PostDialogComponent,
    ProfileComponent,
    PostsComponent,
    AuthenticationComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'blog-client'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    AppRouterModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    MatRippleModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      AppState
    ],{ developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    OrderModule,
    HttpModule
  ],
  entryComponents: [PostDialogComponent],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatGridListModule, MatToolbarModule, MatCardModule, MatIconModule, MatTabsModule, MatRippleModule, MatStepperModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
