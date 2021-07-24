import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image:any
  @Output() backOut:EventEmitter<string>= new EventEmitter();
  
  constructor() { }

  backHandler(){
    this.backOut.emit();
  }
  ngOnInit() {
  }

}
