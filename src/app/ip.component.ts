import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
    selector: 'app-ip',
    template: '<h3>Ip Component: <b>{{ ipAddress }}</b></h3>',
    //providers: [IpService] // moved to 'app.module.ts'
})

export class IpComponent implements OnInit{ 

    ipAddress: String;

    constructor(private ipService: IpService){
        
    }

    ngOnInit(): void {
        this.ipService.getIp()
        .then(res => this.ipAddress = res.ip)
        .catch(err => console.log(err));
    }

}