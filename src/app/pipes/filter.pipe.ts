import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: keyof Post= 'title'): Post[] {
    if (!search) {
      return posts
    }

    return posts.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase())
    });
  }

}
