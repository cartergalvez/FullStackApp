import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: MatSnackBar) { }

  successToast(message: string){
    this.toast.open(message, "", {
      panelClass: ['successToast'],
      verticalPosition: 'top'
    });
  }

    errorToast(error: string){
      this.toast.open(error, "", {
        panelClass: ['errorToast'],
        verticalPosition: 'top'
      })
    }
}
