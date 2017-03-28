import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor() {


    $(document).ready(function () {

      $('.tree-toggle').click(function () {
        $(this).parent().children('ul.tree').toggle(200);
      });

    });


  }


}
