import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostsService, Post} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit   {

  post!: Post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {

    this.route.data.subscribe((data) => this.post= data['post'])
       /* this.route.params.subscribe((params: Params) => {
          // @ts-ignore
          this.post = this.postsService.getById(+params['id'])
        })*/
    }

    loadPost() {
      this.router.navigate(['/posts', 44])
    }

    back() {
      this.router.navigate(['/posts'])
    }
}
