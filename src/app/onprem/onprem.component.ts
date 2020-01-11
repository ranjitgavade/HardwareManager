import { Component, OnInit } from '@angular/core';
import Ping from 'ping.js';
declare var require: any;
var ping = require('ping');
var sys = require('sys')

var exec = require('child_process')
//var ping = require ("net-ping");
/*const ranges = [
  '192.168.0.123',
  '192.168.0.1-192.168.0.100'
];*/
//const SubnetsPinger = require('ping-subnet');

//var assert = require('assert');
//var ds = require('device-status');

declare var $: any;
@Component({
  selector: 'app-onprem',
  templateUrl: './onprem.component.html',
  styleUrls: ['./onprem.component.css']
})
export class OnpremComponent implements OnInit {
data:any;
session: any;

  constructor() {
    this.data=[
      {
        "machineName": "pwdcsv-inspub1",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview1",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-insdb1",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview2",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub2",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview3",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub3",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview4",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub4",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview5",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub5",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview6",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub6",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview7",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub7",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview8",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub8",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview9",
        "machineStatus": "OFF"
      },
      {
        "machineName": "pwdcsv-inspub9",
        "machineStatus": "ON"
      },
      {
        "machineName": "pwdcsv-insview10",
        "machineStatus": "OFF"
      }
    ]
   }

  ngOnInit() {
    /*var p = new Ping();
    p.ping('127.0.0.1', function(err, data) {
      // Also display error if err is returned.
      debugger;
      if (err) {
        console.log("error loading resource")
        data = data + " " + err;
      }
      document.getElementById("ping-github").innerHTML = data;
    });*/

    /*const subnetPinger = new SubnetsPinger(ranges);
    subnetPinger.on('host:alive', ip => {
      console.log('alive', ip);
    });*/

    /*ds("127.0.0.1").on("change", function (host, status) {
      console.log(ds.status);
  });*/

  /*var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
 
hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
            console.log(res);
        });
});*/


function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ping -c 3 localhost", puts);

  }

  showModal():void {
    $("#myModal").modal('show');
  }
}
