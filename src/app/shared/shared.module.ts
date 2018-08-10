import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { ValidateParameterService } from 'voxel-mb-services/validate-required-parameter.service';
// import { VoxelMbHeaderComponent } from 'voxel-mb-header/voxel-mb-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    // VoxelMbHeaderComponent,
  ],
  providers: [
    // ValidateParameterService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // VoxelMbHeaderComponent,
  ]
})
export class SharedModule { }
