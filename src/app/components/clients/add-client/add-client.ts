import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
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
    const email = this.clientForm.get("email");
    const phoneNumber = this.clientForm.get("phoneNumber");

    const firstName = this.clientForm.get("firstName");
    const lastName = this.clientForm.get("lastName");
    const fiscalCodePrivate = this.clientForm.get("fiscalCodePrivate");
    const birthDate = this.clientForm.get("birthDate");
    const birthPlace = this.clientForm.get("birthPlace");
    const nationality = this.clientForm.get("nationality");
    const billingAddressPrivate = this.clientForm.get("billingAddressPrivate");

    const companyName = this.clientForm.get("companyName");
    const vatNumber = this.clientForm.get("vatNumber");
    const fiscalCodeBusiness = this.clientForm.get("fiscalCodeBusiness");
    const legalAddress = this.clientForm.get("legalAddress");
    const billingAddressBusiness = this.clientForm.get(
      "billingAddressBusiness"
    );
    const operationalAddresses = this.clientForm.get("operationalAddresses");
    const sdiCode = this.clientForm.get("sdiCode");
    const pecEmail = this.clientForm.get("pecEmail");

    if (isBusiness) {
      firstName?.disable();
      lastName?.disable();
      fiscalCodePrivate?.disable();
      birthDate?.disable();
      birthPlace?.disable();
      nationality?.disable();
      billingAddressPrivate?.disable();

      companyName?.enable();
      vatNumber?.enable();
      fiscalCodeBusiness?.enable();
      legalAddress?.enable();
      billingAddressBusiness?.enable();
      operationalAddresses?.enable();
      sdiCode?.enable();
      pecEmail?.enable();

      companyName?.setValidators(Validators.required);
      vatNumber?.setValidators(Validators.required);
      fiscalCodeBusiness?.setValidators(Validators.required);
      legalAddress?.setValidators(Validators.required);
      billingAddressBusiness?.setValidators(Validators.required);

      email?.setValidators([Validators.required, Validators.email]);
      phoneNumber?.setValidators(Validators.required);
    } else {
      firstName?.enable();
      lastName?.enable();
      fiscalCodePrivate?.enable();
      birthDate?.enable();
      birthPlace?.enable();
      nationality?.enable();
      billingAddressPrivate?.enable();

      companyName?.disable();
      vatNumber?.disable();
      fiscalCodeBusiness?.disable();
      legalAddress?.disable();
      billingAddressBusiness?.disable();
      operationalAddresses?.disable();
      sdiCode?.disable();
      pecEmail?.disable();

      firstName?.setValidators(Validators.required);
      lastName?.setValidators(Validators.required);
      fiscalCodePrivate?.setValidators(Validators.required);
      birthDate?.setValidators(Validators.required);
      birthPlace?.setValidators(Validators.required);
      nationality?.setValidators(Validators.required);
      billingAddressPrivate?.setValidators(Validators.required);

      email?.setValidators([Validators.required, Validators.email]);
      phoneNumber?.setValidators(Validators.required);
    }

    email?.updateValueAndValidity();
    phoneNumber?.updateValueAndValidity();
    firstName?.updateValueAndValidity();
    lastName?.updateValueAndValidity();
    fiscalCodePrivate?.updateValueAndValidity();
    birthDate?.updateValueAndValidity();
    birthPlace?.updateValueAndValidity();
    nationality?.updateValueAndValidity();
    billingAddressPrivate?.updateValueAndValidity();
    companyName?.updateValueAndValidity();
    vatNumber?.updateValueAndValidity();
    fiscalCodeBusiness?.updateValueAndValidity();
    legalAddress?.updateValueAndValidity();
    billingAddressBusiness?.updateValueAndValidity();
    operationalAddresses?.updateValueAndValidity();
    sdiCode?.updateValueAndValidity();
    pecEmail?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      if (this.isBusinessClient.value) {
        const businessClient: BusinessClient = {
          email: this.clientForm.value.email,
          phoneNumber: this.clientForm.value.phoneNumber,
          companyName: this.clientForm.value.companyName,
          vatNumber: this.clientForm.value.vatNumber,
          fiscalCode: this.clientForm.value.fiscalCodeBusiness,
          legalAddress: this.clientForm.value.legalAddress,
          billingAddress: this.clientForm.value.billingAddressBusiness,
          operationalAddresses: this.clientForm.value.operationalAddresses,
          sdiCode: this.clientForm.value.sdiCode,
          pecEmail: this.clientForm.value.pecEmail,
        };
        this.clientsService.createBusinessClient(businessClient).subscribe(
          (response) => console.log("Business Client Created:", response),
          (error) => console.error("Error creating business client:", error)
        );
      } else {
        const privateClient: PrivateClient = {
          email: this.clientForm.value.email,
          phoneNumber: this.clientForm.value.phoneNumber,
          userId: 0, // TODO: Recuperare l'ID utente in modo appropriato
          firstName: this.clientForm.value.firstName,
          lastName: this.clientForm.value.lastName,
          fiscalCode: this.clientForm.value.fiscalCodePrivate,
          birthDate: this.clientForm.value.birthDate,
          birthPlace: this.clientForm.value.birthPlace,
          nationality: this.clientForm.value.nationality,
          billingAddress: this.clientForm.value.billingAddressPrivate,
        };
        this.clientsService.createPrivateClient(privateClient).subscribe(
          (response) => console.log("Private Client Created:", response),
          (error) => console.error("Error creating private client:", error)
        );
      }
    } else {
      console.log("Form is invalid");
    }
  }
}
