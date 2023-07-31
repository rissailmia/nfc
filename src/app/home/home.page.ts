import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countrycode: string = "62";
  wanumber: string = "895386567080";
  whatsappUrl: string = "https://wa.me/";

  nama: string = "";
  nik: string = "";
  alamat: string = "";
  message: string = "";
  sendTo: string = "whatsapp"; // Default to WhatsApp
  telegramUsername: string = "Rissailmiaagustin";

  latitude: number = 0;
  longitude: number = 0;

  constructor(private alertController: AlertController) {}

  async konfirmasiKirim() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you have filled in your data correctly?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Send',
          handler: () => {
            this.sendMessage();
          },
        },
      ],
    });

    await alert.present();
  }

  sendMessage() {
    let directUrl = "";

    if (this.sendTo === "whatsapp") {
      const whatsappMessage = `Hi, my name is ${this.nama}. NIK: ${this.nik}. Address: ${this.alamat}. ${this.message}`;
      const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
      directUrl = `${this.whatsappUrl}${this.countrycode}${this.wanumber}?text=${encodedWhatsappMessage}`;
    }

    if (directUrl !== "") {
      window.open(directUrl, '_blank');
    }

    // Simpan data ke localStorage
    const formData = {
      nama: this.nama,
      nik: this.nik,
      alamat: this.alamat,
      message: this.message,
      latitude: this.latitude,
      longitude: this.longitude
    };
    this.saveFormData(formData);
  }

  saveFormData(formData: {
    nama: string,
    nik: string,
    alamat: string,
    message: string,
    latitude: number,
    longitude: number
  }) {
    const storedData = localStorage.getItem('formData');
    let savedData: {
      nama: string,
      nik: string,
      alamat: string,
      message: string,
      latitude: number,
      longitude: number
    }[] = [];

    if (storedData) {
      savedData = JSON.parse(storedData);
    }

    savedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(savedData));
  }

  trackLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, (error) => {
        console.log('Error getting location:', error);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
}