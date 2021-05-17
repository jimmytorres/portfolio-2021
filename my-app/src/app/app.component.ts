import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'my-app';

  outputPath:string = 'www.linkedin.com/in/jimmy-torres-3224621b5';
  outputPath2:string = 'www.github.com/jimmytorres'

  onLinkedin(){
    window.location.href = "www.linkedin.com/in/jimmy-torres-3224621b5"
  }

}
