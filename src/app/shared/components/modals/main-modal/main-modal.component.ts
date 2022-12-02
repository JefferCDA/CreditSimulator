import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent implements OnInit {
  @Input() title = '';
  @ViewChild('modalBack') modalback: ElementRef;
  public  show = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window','click', (e: Event)=>{
      if (this.modalback && e.target === this.modalback.nativeElement){
        this.show = false;
      }
    })
   }

  ngOnInit(): void {
  }
  showModal(){
    this.show = true;
  }
  hideModal(){
    this.show = false;
  }

}
