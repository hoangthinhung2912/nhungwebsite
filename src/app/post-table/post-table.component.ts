import { Component, OnInit } from '@angular/core';
import * as AspNetData from "devextreme-aspnet-data";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  
  ngOnInit(){
    
  }
  customersData: any;
  shippersData: any;
  dataSource: any;
  url: string;
  masterDetailDataSource: any;

  constructor() {
      this.url = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";
      
      this.dataSource = AspNetData.createStore({
          key: "OrderID",
          loadUrl: this.url + "/Orders",
          insertUrl: this.url + "/InsertOrder",
          updateUrl: this.url + "/UpdateOrder",
          deleteUrl: this.url + "/DeleteOrder",
          onBeforeSend: function(method, ajaxOptions) {
              ajaxOptions.xhrFields = { withCredentials: true };
          }
      });

      this.customersData = AspNetData.createStore({
          key: "Value",
          loadUrl: this.url + "/CustomersLookup",
          onBeforeSend: function(method, ajaxOptions) {
              ajaxOptions.xhrFields = { withCredentials: true };
          }
      });

      this.shippersData = AspNetData.createStore({
          key: "Value",
          loadUrl: this.url + "/ShippersLookup",
          onBeforeSend: function(method, ajaxOptions) {
              ajaxOptions.xhrFields = { withCredentials: true };
          }
      });
  }

  getMasterDetailGridDataSource(id: number) : any {   
      return {
          store: AspNetData.createStore({
              loadUrl: this.url + '/OrderDetails',
              loadParams: { orderID : id },
              onBeforeSend: function(method, ajaxOptions) {
                  ajaxOptions.xhrFields = { withCredentials: true };
              }
          })
      };                
  }

}
