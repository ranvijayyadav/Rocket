import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickrArgs = {
    params: {
      api_key : environment.flickrToken,
      sort: "interestingness-desc",
      privacy_filter : '1',
      safe_search : '1',
      content_type : '1',
      media: 'photos',
      format : 'json',
      nojsoncallback: '1',
      per_page : '1',
      extras:'date_upload, date_taken, owner_name,views,url_q',
    }
  }

  
  constructor(private http : HttpClient) { }

  getImages( queryString : string) : Observable<any> {
    const API_URL = environment.flickrUrl;
    this.flickrArgs.params['method'] = 'flickr.photos.search';
    this.flickrArgs.params['tags'] = queryString;
    this.flickrArgs.params['text'] = queryString;
    return this.http.get<any>(API_URL,this.flickrArgs);
  }
}
