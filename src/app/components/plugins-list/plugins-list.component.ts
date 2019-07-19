import { Component, OnInit } from '@angular/core';
import { HttpControlService } from '../../services/http-control.service';
import { Plugin } from '../../interfaces';

@Component({
  selector: 'plugins-list',
  templateUrl: './plugins-list.component.html',
  styleUrls: ['./plugins-list.component.scss']
})
export class PluginsListComponent implements OnInit {
  private plugins: Plugin[];
  private noDataView: boolean;

  constructor(private httpControlService: HttpControlService) { }

  ngOnInit(): void {
    this.loadPlugins();
  }

  private loadPlugins(): void {
    this.httpControlService.getPlugins()
      .subscribe(
        plugins => this.plugins = plugins,
        error => {
          this.noDataView = true;
          console.error('Load plugins failed', error);
        }
      );
  }

  public onPluginStatusChange(pluginStatus: {[key: string]: boolean}) {
    this.httpControlService.updatePluginStatus(pluginStatus);
  }

}
