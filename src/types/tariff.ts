export interface Tariff {
  uid: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export interface TariffsSectionProps {
  disabledDiscount: boolean;
}

export interface BackDroprops {
  isOpen: boolean;
}
