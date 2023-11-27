export interface Order {
  dataPrivacyAccepted: boolean;
  src?: "express" | "individuelle";
  check24?: boolean;
  myhammer?: boolean;
  id: string | undefined;
  rid?: string;
  status: string;
  customer: Customer;
  date: string;
  date_from: string;
  date_to: string;
  isDateFix: boolean;
  from: Address;
  to: Address;
  distance: number;
  leistungen: MLeistung[];
  services: OrderService[];
  items: Furniture[];
  workersNumber: number;
  transporterNumber: number;
  t75: number;
  boxNumber: number;
  text: string;
  disposalFlag: boolean;
  disposalText: string;
  creationTime: string;
  lupd: number;
  time: string;
  expensive: boolean;
  expensiveItems: CustomItem[];
  bulky: boolean;
  bulkyItems: CustomItem[];
  heavy: boolean;
  heavyItems: CustomItem[];
  images: string[];
  sendData: SendData[];
  prices: Prices;
  discount: string | number;
  discountValue: string | number;
  rideCosts: string | number;
  volume: string | number;
  sum: string | number;
  timeBased: TimeBasedPrice;
  ownItems: string;
  rechnung?: Rechnung;
  gutschrift?: Gutschrift;
  costsAssumption: boolean;
  needPackings: boolean;
  bohrarbeiten: boolean;
}

export interface SendData {
  /**
   * URL of the uploaded object.
   */
  Location: string;
  /**
   * ETag of the uploaded object.
   */
  ETag: string;
  /**
   * Bucket to which the object was uploaded.
   */
  Bucket: string;
  /**
   * Key to which the object was uploaded.
   */
  Key: string;
}

export interface CustomItem {
  name: string;
  weight: number;
  breite: number;
  tiefe: number;
  hoehe: number;
  colli: number;
  itemVolume: number;
}

export interface MLeistung {
  desc: string;
  price?: string;
  sum: string | number;
  colli?: number;
  calculate: boolean;
  hidden?: boolean;
  red?: boolean;
  disabled?: boolean;
}

export interface TimeBasedPrice {
  hours: string | number;
  basis: string | number;
  extra: string | number;
}

export interface Prices {
  halteverbotszonen?: number;
  services?: number;
  verpackung?: number;
  other?: number;
}

export interface MovementDates {
  date: string;
  date_from: string;
  date_to: string;
}

export interface Address {
  floor: string;
  isAltbau: boolean;
  roomsNumber: string;
  parkingSlot: boolean;
  area: string;
  liftType: string;
  runningDistance: string;
  address: string;
  movementObject?: string;
  hasLoft: boolean;
  packservice: boolean;
  demontage?: boolean;
  montage?: boolean;
  stockwerke?: string[];
  roomsToRelocate: number;
  hasBasement: boolean;
  hasGarage: boolean;
  kitchenWidth: number;
  wardrobeWidth: number;
  bedNumber: number;
  bulky: boolean;
}

export interface Customer {
  firstName: string;
  lastName: string;
  salutation: string;
  company: string;
  telNumber: string;
  email?: string;
  emailCopy?: string;
}

export interface Furniture {
  categoryRefs: Category[];
  selectedCategory?: string;
  name: string;
  id: string;
  colli: string | number;
  volume: number;
  weight?: string;
  demontage?: boolean;
  notDismountable?: boolean;
  bulky?: boolean;
  montage?: boolean;
  m100?: boolean;
  m150?: boolean;
  extraPrice?: string;
  montagePrice: string;
  sortOrder: number;
  step?: number;
}

export type OrderService = AppPacking | AppService;

export type AppServiceTag = "Bohrarbeiten" | "Price" | "Packmaterial";

export type AppPrice = {
  id: string;
  tag: "Price";
  hourPrice: number;
  t35?: number;
  t75?: number;
  workers: number;
  includedHours: number;
  sum: number;
  ridingCosts: number;
  sort: number;
};

export type AppPacking = {
  tag: "Packmaterial";
  id: string;
  name: string;
  price: string;
  colli: string;
  desc: string;
  media: string;
  show: true;
  sort: number;
};

export type AppService = {
  tag: "Bohrarbeiten";
  id: string;
  name: string;
  price: string;
  colli: string;
  show: true;
};

export type Service = AppPacking | AppService | AppPrice;

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort: number;
}

export interface ItemBlock {
  category: string;
  furniture: Furniture[];
}

export interface JFAnswer {
  /**
   * field name
   */
  name: string;
  order: number;
  /**
   * field question
   */
  text: string;
  answer: any;
  prettyFormat?: string;
}

export interface DueDate {
  date: string;
  index: number;
  costs?: number;
  sum: number;
  text: string;
}

export interface Rechnung {
  date: string;
  firma: string;
  customerName: string;
  customerStreet: string;
  customerPlz: string;
  rNumber: string;
  entries: MLeistung[];
  text: string;
  dueDates: DueDate[];
}

export interface Gutschrift {
  date: string;
  gNumber: string;
  entries: MLeistung[];
  text: string;
}
