import { Component, Inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-load-detail-dialog',
  templateUrl: './load-detail-dialog.component.html',
  styleUrls: ['./load-detail-dialog.component.sass'], 
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
})
export class LoadDetailDialogComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  constructor(
    public dialogRef: MatDialogRef<LoadDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
