import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pacienteAtendide]'
})
export class PacienteAtendideDirective implements OnInit {

  @Input() pacienteAtendide: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.pacienteAtendide) {
      this.el.nativeElement.style.color = "green";
    }
  }

}