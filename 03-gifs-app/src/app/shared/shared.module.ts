import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule],
  // Lo exportamos porque vamos a querer usarlo en el módulo principal
  exports: [SidebarComponent],
})
export class SharedModule {}
