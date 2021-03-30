import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-hal4',
  templateUrl: './hal4.page.html',
  styleUrls: ['./hal4.page.scss'],
})
export class Hal4Page implements OnInit {

  constructor(private afStorage:AngularFireStorage, public fotoservice:FotoService,public aroute:ActivatedRoute) {}

  urlImageStorage:string[]=[]

  async ionViewDidEnter(){
    await this.fotoservice.loadFoto()
    this.tampilkanData()
  }
  link
  ngOnInit(){
    this.link=this.aroute.snapshot.paramMap.get('link')    
    console.log("linkkkk")
    console.log(this.link)
  }

  tampilkanData(){
    this.urlImageStorage=[]
    var refImage=this.afStorage.storage.ref('imgStorage')        
    refImage.listAll()
      .then((res)=>{
        res.items.forEach((itemRef)=>{          
          itemRef.getDownloadURL().then((url)=>{            
            this.urlImageStorage.unshift(url)            
          })
        })
      }).catch((error)=>{
        console.log(error)
      })
  }



}
