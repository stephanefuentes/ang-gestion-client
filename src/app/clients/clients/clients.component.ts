import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  //  clients = [
  //   {
  //     "id": 0,
  //     "totalAmount": "1190.05",
  //     "invoices": 7,
  //     "firstName": "Tania",
  //     "lastName": "Roman",
  //     "company": "ZILENCIO",
  //     "email": "tania.roman@zilencio.org"
  //   },
  //   {
  //     "id": 1,
  //     "totalAmount": "3767.43",
  //     "invoices": 4,
  //     "firstName": "Duffy",
  //     "lastName": "Mckinney",
  //     "company": "GINKOGENE",
  //     "email": "duffy.mckinney@ginkogene.info"
  //   },
  //   {
  //     "id": 2,
  //     "totalAmount": "3575.07",
  //     "invoices": 3,
  //     "firstName": "Wagner",
  //     "lastName": "Oneil",
  //     "company": "ORBIXTAR",
  //     "email": "wagner.oneil@orbixtar.ca"
  //   },
  //   {
  //     "id": 3,
  //     "totalAmount": "1194.23",
  //     "invoices": 10,
  //     "firstName": "Todd",
  //     "lastName": "Walton",
  //     "company": "ZOID",
  //     "email": "todd.walton@zoid.us"
  //   },
  //   {
  //     "id": 4,
  //     "totalAmount": "2897.67",
  //     "invoices": 8,
  //     "firstName": "Rosemary",
  //     "lastName": "Hutchinson",
  //     "company": "ECOSYS",
  //     "email": "rosemary.hutchinson@ecosys.net"
  //   },
  //   {
  //     "id": 5,
  //     "totalAmount": "2691.46",
  //     "invoices": 7,
  //     "firstName": "Lourdes",
  //     "lastName": "Harvey",
  //     "company": "ACUSAGE",
  //     "email": "lourdes.harvey@acusage.me"
  //   },
  //   {
  //     "id": 6,
  //     "totalAmount": "3116.91",
  //     "invoices": 2,
  //     "firstName": "Bryan",
  //     "lastName": "Cooke",
  //     "company": "KIDSTOCK",
  //     "email": "bryan.cooke@kidstock.com"
  //   }
  // ];

  clients =[];

  constructor(private service: ClientsService) { }

  ngOnInit() {

    this.clients = this.service.getClients();

  }

}
