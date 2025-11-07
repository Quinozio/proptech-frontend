import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClientsService } from "@proptech/services/clients.service";
import { BusinessClient, PrivateClient } from "@proptech/models/client.model";
import { DialogService } from "@proptech/services/dialog.service";
import { DialogFooterDirective } from "@proptech/components/ui/dialog/dialog-footer.directive";
import { ButtonComponent } from "@proptech/components/ui/button/button.component";
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.html",
  styleUrl: "./add-client.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "add-client-container",
  },
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogFooterDirective,
    ButtonComponent,
    AddressFormComponent,
  ],
})
export class AddClient {
  private fb = inject(FormBuilder);
  private clientsService = inject(ClientsService);
  private dialogService = inject(DialogService);

  isLoading = signal(false);
  isBusinessClient = new FormControl(false);

  clientForm: FormGroup;

  constructor() {
    this.clientForm = this.fb.group({
      isBusiness: this.isBusinessClient,
      email: [
        "test.privato@example.com",
        [Validators.required, Validators.email],
      ],
      phoneNumber: ["1234567890", Validators.required],
      // Campi per cliente privato
      firstName: ["Mario"],
      lastName: ["Rossi"],
      fiscalCodePrivate: ["RSSMRA80A01H501U"],
      birthDate: ["1980-01-01"],
      birthPlace: ["Roma"],
      nationality: ["Italiana"],
      billingAddressPrivate: this.fb.group({
        street: ["Via Roma"],
        number: ["10"],
        postalCode: ["00100"],
        city: ["Roma"],
        province: ["RM"],
        country: ["IT"],
      }),
      // Campi per cliente aziendale
      companyName: [""],
      vatNumber: [""],
      fiscalCodeBusiness: [""],
      legalAddress: this.fb.group({
        street: ["Via Roma"],
        number: ["10"],
        postalCode: ["00100"],
        city: ["Roma"],
        province: ["RM"],
        country: ["IT"],
      }),
      billingAddressBusiness: this.fb.group({
        street: ["Via Roma"],
        number: ["10"],
        postalCode: ["00100"],
        city: ["Roma"],
        province: ["RM"],
        country: ["IT"],
      }),
      operationalAddresses: this.fb.array([]),
      sdiCode: [""],
      pecEmail: ["", [Validators.email]],
    });

    this.isBusinessClient.valueChanges.subscribe((isBusiness) => {
      this.toggleClientType(isBusiness);
    });

    // Imposta il tipo di cliente di default come privato
    this.toggleClientType(false);
  }

  close(): void {
    this.dialogService.close();
  }

  toggleClientType(isBusiness: boolean | null): void {
    const privateClientFields = [
      "firstName", "lastName", "fiscalCodePrivate", "birthDate",
      "birthPlace", "nationality", "billingAddressPrivate"
    ];
    const businessClientFields = [
      "companyName", "vatNumber", "fiscalCodeBusiness", "legalAddress",
      "billingAddressBusiness", "operationalAddresses", "sdiCode", "pecEmail"
    ];

    const emailControl = this.clientForm.get("email");
    const phoneNumberControl = this.clientForm.get("phoneNumber");

    const setValidatorsAndValidity = (fields: string[], required: boolean) => {
      fields.forEach(field => {
        const control = this.clientForm.get(field);
        if (required) {
          control?.setValidators(field === 'pecEmail' ? [Validators.required, Validators.email] : [Validators.required]);
        } else {
          control?.clearValidators();
        }
        control?.updateValueAndValidity();
      });
    };

    if (isBusiness) {
      setValidatorsAndValidity(businessClientFields, true);
      setValidatorsAndValidity(privateClientFields, false);
    } else {
      setValidatorsAndValidity(privateClientFields, true);
      setValidatorsAndValidity(businessClientFields, false);
    }

    emailControl?.setValidators([Validators.required, Validators.email]);
    phoneNumberControl?.setValidators([Validators.required]);

    emailControl?.updateValueAndValidity();
    phoneNumberControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    this.isLoading.set(true);
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      this.isLoading.set(false);
      return;
    }

    const clientData = this.clientForm.value;
    const handleSubscription = {
      next: () => {
        this.dialogService.close();
        this.isLoading.set(false);
      },
      error: (error: any) => {
        console.error("Error adding client:", error);
        this.isLoading.set(false);
      },
    };

    if (this.isBusinessClient.value) {
      const businessClient: BusinessClient = {
        companyName: clientData.companyName,
        vatNumber: clientData.vatNumber,
        fiscalCode: clientData.fiscalCodeBusiness,
        legalAddress: clientData.legalAddress,
        billingAddress: clientData.billingAddressBusiness,
        operationalAddresses: clientData.operationalAddresses,
        sdiCode: clientData.sdiCode,
        pecEmail: clientData.pecEmail,
        email: clientData.email,
        phoneNumber: clientData.phoneNumber,
      };
      this.clientsService.addBusinessClient(businessClient).subscribe(handleSubscription);
    } else {
      const privateClient: PrivateClient = {
        firstName: clientData.firstName,
        lastName: clientData.lastName,
        userId: 0,
        fiscalCode: clientData.fiscalCodePrivate,
        birthDate: clientData.birthDate,
        birthPlace: clientData.birthPlace,
        nationality: clientData.nationality,
        billingAddress: clientData.billingAddressPrivate,
        email: clientData.email,
        phoneNumber: clientData.phoneNumber,
      };
      this.clientsService.addPrivateClient(privateClient).subscribe(handleSubscription);
    }
  }
}
