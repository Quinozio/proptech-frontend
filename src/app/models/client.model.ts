export interface Address {
  street: string;
  number: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
}

export interface PrivateClient {
  email: string;
  phoneNumber: string;
  userId: number;
  firstName: string;
  lastName: string;
  fiscalCode: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  billingAddress: Address;
}

export interface BusinessClient {
  email: string;
  phoneNumber: string;
  companyName: string;
  vatNumber: string;
  fiscalCode: string;
  legalAddress: Address;
  billingAddress: Address;
  operationalAddresses: Address[];
  sdiCode: string;
  pecEmail: string;
}
