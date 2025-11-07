import { Component } from '@angular/core';
import { TableComponent } from '@proptech/components/ui/table/table.component';
import { ButtonComponent } from '@proptech/components/ui/button/button.component';
 
@Component({
  selector: 'app-prenotazioni',
  standalone: true,
  imports: [TableComponent, ButtonComponent],
  templateUrl: './prenotazioni.component.html',
  styleUrl: './prenotazioni.component.scss'
})
export class PrenotazioniComponent {
  tableData = [
    { id: 1, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 16:35', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 2, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 16:29', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 3, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 14:35', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 4, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.in@gmail.com', data: '25 feb 2023, 14:30', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 5, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 14:30', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 6, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 14:30', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 7, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchi.n@gmail.com', data: '25 feb 2023, 14:25', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 8, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.as.facchin@gmail.com', data: '25 feb 2023, 14:25', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 9, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchin@gmail.com', data: '25 feb 2023, 14:19', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 10, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchin@gmail.com', data: '25 feb 2023, 14:18', dataRimborso: '--', motivoRifiuto: '--' },
    { id: 11, importo: '120,00 €', valuta: 'EUR', stato: 'Riuscito', modalita: 'VISA .... 4242', descrizione: 'Subscription update', cliente: 'nicholas.facchin@gmail.com', data: '25 feb 2023, 14:18', dataRimborso: '--', motivoRifiuto: '--' },
  ];

  tableColumns = [
    // { field: 'importo', header: 'Importo' },
    // { field: 'modalita', header: 'Modalità di pagamento' },
    // { field: 'descrizione', header: 'Descrizione' },
    // { field: 'cliente', header: 'Cliente' },
    // { field: 'data', header: 'Data' },
    // { field: 'dataRimborso', header: 'Data rimborso' },
    // { field: 'motivoRifiuto', header: 'Motivo del rifiuto' },
  ];

  currentPage: number = 1;

  onPageChange(page: number): void {
    this.currentPage = page;
    // Qui puoi aggiungere la logica per caricare i dati della nuova pagina
    console.log('Pagina cambiata a:', this.currentPage);
  }
}
