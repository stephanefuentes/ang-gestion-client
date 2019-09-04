import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  // editMode = true;
  client;

  constructor(private service: ClientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('identifaint :', id);

    // if(id === "new")
    // {
    //   this.editMode = false;
    // }else{
    //   this.client = this.service.getClient(+id);
    // }

    if( id !== "new")
    {
      this.client = this.service.getClient(+id);
    }

  }

  onSubmit(form: NgForm)
  {

    if (form.valid) {

      if(this.client){
        //update
        const updatedClient = { ...this.client, ...form.value };
        this.service.updateClient(updatedClient);

      }else{
        //create
        // 1. Appeler le service qui gère les clients pour ajouter ce nouveau client
        this.service.addClient(form.value);

      }

      console.log(form.value);

      // 2. Rediriger sur la liste des clients
      this.router.navigateByUrl("/clients");
    }
  }
  

}
