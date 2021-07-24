import { Component } from '@angular/core';
import { FlickrService } from './flickr.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-flickr-photo-search';

  public inputImages : any = new Array();
  public inputQuery = new FormControl('');
  public inputResult: string = "";
  public selectedImg = null;
  public isLoading : boolean = false;
  public selectedImage: any = null;
  public showImageDetail: boolean= false;

  constructor(private _flickrService : FlickrService, private router : Router) { }

 


  backHandler(event:any){
    this.showImageDetail = false;
  }
  selectImage(image:any){
    console.log(image);
    this.selectedImage = image 
    this.showImageDetail = true;
  }
  resetInput(){

    this.isLoading = false;
      this.inputImages = [];
        this.inputResult = '';
        this.isLoading = false;
        this.inputQuery =new FormControl('');
  }

  searchQuery() {
    if (this.inputQuery.value == "") {
      alert("Please enter valid tag");
    } else {
      this.isLoading = true;
      this._flickrService.getImages( this.inputQuery.value).subscribe(result => {
        debugger
        if(result && result.photos && result.photos.photo.length>0){
        this.inputImages.push({searchTag:this.inputQuery.value, image: result.photos.photo[0]})// .concat(result.photos.photo);
        this.inputResult = this.inputQuery.value;
        this.inputQuery =new FormControl('');
        this.isLoading = false;
        } else{
          alert("No image found")
        }
      })
    }
  }

  imageInfo(id : number) {
    // this._flickrService.getImageInfo(id).subscribe(result => {
    //   this.selectedImg = result.photo;
    //   $('#selectedModal').modal('show');
    // })
  }

  showImage() {
    // return this._flickrService.displayImage(this.selectedImg);
  }

  // getImageUrl(input : any) : string {
  //   // return this._flickrService.displayImage(input);
  // }
}
