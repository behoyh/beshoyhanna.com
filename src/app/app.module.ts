import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StorageModule, getStorage, provideStorage } from '@angular/fire/storage';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDialogComponent } from './forms/post-dialog/post-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.router.module';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './shared/app.state';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PostComponent } from './post/post.component';
import { OrderByPipe } from './shared/pipes/order-by.pipe';

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
        CommonModule,
        FirestoreModule,
        AuthModule,
        StorageModule,
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
        MatTabsModule,
        MatStepperModule,
        ReactiveFormsModule,
        OrderByPipe,
        NgxsModule.forRoot([
            AppState
        ], { developmentMode: !environment.production }),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        HttpClientModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatStepperModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        DatePipe,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
