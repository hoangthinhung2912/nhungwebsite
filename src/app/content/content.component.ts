import { Component, OnInit, Inject } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { DxListModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
    it = ['sdsd', 'ssasa', 'sdsd'];
    listDataSource: any = {};
    constructor(@Inject(Http) http: Http) {
        this.listDataSource = new DataSource({
            store: new CustomStore({
                loadMode: 'raw',
                load: function () {
                    return http.get('https://jsonplaceholder.typicode.com/posts')
                                .toPromise()
                                .then(response => {
                                    return response.json();
                                });
                }
            }),
            paginate: true,
            pageSize: 5
        });
    }

onContentReady(e) {

}

  ngOnInit() {
  }

}
