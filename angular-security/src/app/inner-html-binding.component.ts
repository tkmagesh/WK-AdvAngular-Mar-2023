import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
})
export class InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>this is injected</b>';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/