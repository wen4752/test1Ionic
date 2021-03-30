import { Component } from '@angular/core';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public fotoService:FotoService) {}

  public checkBox=[]

  async tambahFoto(){
    await this.fotoService.tambahFoto()
    this.updateCheckbox()

  }

  async ngOnInit(){
    
    await this.fotoService.loadFoto()
    await this.updateCheckbox()
  }
  async updateCheckbox(){
    this.checkBox=[]
    for(var i=0;i<this.fotoService.getLength();i++){
      this.checkBox.push({
        webViewPath:this.fotoService.getWebViewPath(i),
        isChecked:false
      })
      
    }
  }

  
}
