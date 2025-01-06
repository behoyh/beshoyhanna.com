import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostComponent } from './post/post.component';
import { PostResolverService } from './post/post-resolver.service';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: () => PostResolverService
    }
  },
  { path: 'auth', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRouterModule { }
