import { Component, OnInit } from '@angular/core';
import { EnvConfigService } from 'src/app/services/env-config/env-config.service';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {
  config: any;

  constructor(private envConfigService: EnvConfigService) { }

  ngOnInit() {
    this.config = this.envConfigService.getConfig();
    this.buildPage();
  }

  private buildPage() {
    this.config.mainColumn.forEach(config => {
      const panel = document.createElement(config.tag);
      panel.panelTitle = config.panelTitle;
      config.children.forEach(childConfig => {
        const domElement = document.createElement(childConfig.tag);
        domElement.label = childConfig.label;
        panel.append(domElement);
      });
      document.body.append(panel);
    });
  }

}
