import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;

  constructor( private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id =+ params['id'];
        this.editMode = params ['id'] != null;

        //untuk mengecek mode dari edit mode
        //jika /new maka nilainya akan false
        //jika /0/edit (idya/edit) maka nilainya true
        console.log(this.editMode);
      }
    )
  }

}
