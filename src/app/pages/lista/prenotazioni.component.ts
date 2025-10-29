import { Component } from '@angular/core';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';

@Component({
  selector: 'app-prenotazioni',
  standalone: true,
  imports: [GenericTableComponent],
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
    { key: 'importo', label: 'Importo' },
    { key: 'modalita', label: 'Modalità di pagamento' },
    { key: 'descrizione', label: 'Descrizione' },
    { key: 'cliente', label: 'Cliente' },
    { key: 'data', label: 'Data' },
    { key: 'dataRimborso', label: 'Data rimborso' },
    { key: 'motivoRifiuto', label: 'Motivo del rifiuto' },
  ];
}
