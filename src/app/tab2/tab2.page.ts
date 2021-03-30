import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public fotoService:FotoService) {}
  tambahFoto(){
    this.fotoService.tambahFoto()    
  }

  async ngOnInit(){
    await this.fotoService.loadFoto()
  }
}
