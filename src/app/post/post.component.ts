import { Component, OnInit, SecurityContext, AfterViewInit } from '@angular/core';
import { PostService } from '../posts/post.service';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../shared/app.state';
import { RouterNavigation } from '@ngxs/router-plugin';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import * as Prism from 'prismjs';

// Import Prism languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-docker';

// Import Prism plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerContent', [
      transition(':enter', [
        query('.animate-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PostComponent implements OnInit, AfterViewInit {

  post: any;

  @Select(AppState) user$;

  constructor(private store: Store, private service: PostService, private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.router.params.subscribe(post =>
      {
        this.LoadPost(post.id);
      });
        
  }

  LoadPost(post: string): any {
    this.service.GetPost(post).then((post) => {
      this.post = post.data();
      // Process and sanitize content
      const processedContent = this.processContent(this.post.body);
      this.post.body = this.sanitizer.bypassSecurityTrustHtml(processedContent);
      
      // After content is loaded, initialize syntax highlighting
      setTimeout(() => {
        Prism.highlightAll();
        this.executeScripts();
      }, 100);
    });
  }

  private processContent(content: string): string {
    // Add copy button to code blocks
    return content.replace(
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
      (match, lang, code) => `
        <div class="code-block">
          <div class="code-header">
            <span class="language">${lang}</span>
            <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${code.trim()}\`)">
              Copy
            </button>
          </div>
          <pre><code class="language-${lang}">${code}</code></pre>
        </div>
      `
    );
  }

  private executeScripts(): void {
    const scripts = document.querySelectorAll('.post-content script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = script.textContent;
      script.parentNode.replaceChild(newScript, script);
    });
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

}
