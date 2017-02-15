import{Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({

    selector:'app-root',
    template:'hello there'
})
export class SignUp{
    this.userForm=this.formBuilder.group({

        'name':['',Validators.required],
     
    });
}
