import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StorageModule } from '@angular/fire/storage';
import { AuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatStepperModule } from '@angular/material/stepper';
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
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PostComponent } from './post/post.component';
import { OrderModule } from 'ngx-order-pipe';

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
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
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
        RouterModule.forRoot([], {}),
        MatTabsModule,
        MatStepperModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([
            AppState
        ], { developmentMode: !environment.production }),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        NgxsRouterPluginModule.forRoot(),
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        HttpClientModule,
        OrderModule
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatDialogModule, MatGridListModule, MatToolbarModule, MatCardModule, MatIconModule, MatTabsModule, MatStepperModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
