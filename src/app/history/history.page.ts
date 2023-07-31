import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  formData: { nama: string, nik: string, alamat: string, message: string, latitude: number, longitude: number }[] = [];

  constructor() {}

  ngOnInit() {
    // Memuat data histori pesan dari penyimpanan lokal saat komponen diinisialisasi
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }

    // Tampilkan data pada peta
    this.showDataOnMap();
  }

  showDataOnMap() {
    // Inisialisasi peta menggunakan Google Maps API
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -6.1754, lng: 106.8272 }, // Koordinat awal peta
      zoom: 12 // Tingkat zoom awal peta
    });

    // Tambahkan marker untuk setiap data pada peta
    this.formData.forEach((data: any) => {
      const latitude = parseFloat(data.latitude);
      const longitude = parseFloat(data.longitude);

      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: data.nama // Tambahkan judul (title) untuk menampilkan nama saat mengarahkan kursor ke marker
      });
    });
  }

  hapusHistori(data: any) {
    const index = this.formData.indexOf(data);
    if (index > -1) {
      this.formData.splice(index, 1);
      // Simpan perubahan ke penyimpanan lokal atau server
      this.simpanHistoriKePenyimpanan();
    }
  }

  simpanHistoriKePenyimpanan() {
    // Logika untuk menyimpan formData ke penyimpanan lokal atau mengirim permintaan ke server
    // Contoh penyimpanan lokal menggunakan localStorage:
    localStorage.setItem('formData', JSON.stringify(this.formData));
  }
}
