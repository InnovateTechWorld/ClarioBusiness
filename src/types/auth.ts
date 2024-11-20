export type AccountType = 'brand' | 'retailer';

export interface BasicFormData {
  email: string;
  password: string;
  confirmPassword: string;
  accountType: AccountType;
}

export interface BusinessRegistration {
  registrationNumber: string;
  taxId: string;
}

export interface BrandFormData {
  businessName: string;
  businessRegistration: BusinessRegistration;
}

export interface RetailerFormData {
  storeName: string;
  storeLocation: string;
  storeType: string;
}

export interface SignUpState {
  step: number;
  basicInfo: BasicFormData;
  brandInfo: BrandFormData;
  retailerInfo: RetailerFormData;
}
