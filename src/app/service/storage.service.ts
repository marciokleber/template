import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async save(key: string, value: string){
    await Preferences.set({
      key: key,
      value: value
    })
  }

  async find(key: string){
    return await Preferences.get({key: key})
  }

  async remove(key: string){
    await Preferences.remove({key: key})
  }

}
