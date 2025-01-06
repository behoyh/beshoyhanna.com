import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { Store } from '@ngxs/store';
import { PostService } from '../posts/post.service';
import { mergeMap, take, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {
  constructor(private postService: PostService, private store: Store) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    
    if (!id) {
      this.store.dispatch(new Navigate(['/posts']));
      return EMPTY;
    }

    return of(this.postService.GetPost(id)).pipe(
      mergeMap(postPromise => 
        postPromise.then(post => {
          if (post) {
            return post;
          } else {
            this.store.dispatch(new Navigate(['/posts']));
            return EMPTY;
          }
        })
      ),
      catchError(() => {
        this.store.dispatch(new Navigate(['/posts']));
        return EMPTY;
      })
    );
  }
}
