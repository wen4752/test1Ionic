import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastController } from '@ionic/angular';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public fotoService:FotoService, private afStorage:AngularFireStorage, public toastController:ToastController) {}

  public checkBox=[]

  async tambahFoto(){
    await this.fotoService.tambahFoto()
    this.updateCheckbox()

  }

  async uploadSelectedPhoto(){
      let cek=false
      for(var i=0;i<this.checkBox.length;i++){
        if(this.checkBox[i].isChecked){
          const imgFilePath=`imgStorage/${this.fotoService.dataFoto[i].filePath}`
          cek=true
          await this.afStorage.upload(imgFilePath,this.fotoService.dataFoto[i].dataImage).then(()=>{
            this.checkBox[i].isChecked=false
          })
        }
      }

      if(cek){
        this.presentToast("Upload Berhasil")
      }else{
        this.presentToast("Foto belum dipilih")
      }
      
      
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
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
