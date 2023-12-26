export type OrderSrcType = "express" | "individuelle" | "UmzugRuckZuck";

export type Order = {
  dataPrivacyAccepted: boolean;
  src: OrderSrcType;
  check24: boolean;
  myhammer: boolean;
  id?: string;
  /**
   * @deprecated
   */
  rid: string;
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
  kleiderboxNumber: number;
  text: string;
  disposalFlag: boolean;
  disposalText: string;
  /**
   * @deprecated
   */
  creationTime: string;
  timestamp: number;
  lupd: number;
  time: string;
  expensive: boolean;
  /**
   * @deprecated
   */
  expensiveText: string;
  expensiveItems: CustomItem[];
  bulky: boolean;
  bulkyItems: CustomItem[];
  heavy: boolean;
  heavyItems: CustomItem[];
  /**
   * @deprecated
   */
  images: string[];
  bucketImages: BucketObject[];
  prices: Prices;
  discount: number;
  discountValue: number;
  rideCosts: number;
  volume: number;
  sum: number;
  timeBased: TimeBasedPrice;
  ownItems: string;
  rechnung?: Rechnung;
  gutschrift?: Gutschrift;
  costsAssumption: boolean;
  needPackings: boolean;
  bohrarbeiten: boolean;
};

export type BucketObject = {
  /**
   * URL of the uploaded object.
   */
  Location: string;
  /**
   * Bucket to which the object was uploaded.
   */
  Bucket: string;
  /**
   * Key to which the object was uploaded.
   */
  Key: string;
  ETag: string;
};

export type CustomItem = {
  name: string;
  weight: number;
  breite: number;
  tiefe: number;
  hoehe: number;
  colli: number;
  itemVolume: number;
};

export type MLeistung = {
  desc: string;
  price?: string;
  sum: string | number;
  colli?: number;
  calculate: boolean;
  hidden?: boolean;
  red?: boolean;
  disabled?: boolean;
};

export type TimeBasedPrice = {
  hours: string | number;
  basis: string | number;
  extra: string | number;
};

export type Prices = {
  halteverbotszonen?: number;
  services?: number;
  verpackung?: number;
  other?: number;
};

export type Address = {
  floor: string;
  isAltbau: boolean;
  roomsNumber: string;
  parkingSlot: boolean;
  area: string;
  liftType: string;
  runningDistance: string;
  address: string;
  address_street: string;
  address_number: string;
  address_city: string;
  address_zip: string;
  movementObject?: string;
  hasLoft: boolean;
  packservice: boolean;
  demontage: boolean;
  montage: boolean;
  stockwerke: string[];
  roomsToRelocate: number;
  hasBasement: boolean;
  hasGarage: boolean;
  kitchenWidth: number;
  wardrobeWidth: number;
  bedNumber: number;
  bulky: boolean;
};

export type Customer = {
  firstName: string;
  lastName: string;
  salutation: string;
  company: string;
  telNumber: string;
  email?: string;
  emailCopy?: string;
};

export type Furniture = {
  categoryRefs: Category[];
  selectedCategory?: string;
  name: string;
  id: string;
  colli: number;
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
};

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

export type Category = {
  id: string;
  name: string;
  slug: string;
  sort: number;
};

export type ItemBlock = {
  category: string;
  furniture: Furniture[];
};

/**
 * @deprecated
 */
export type JFAnswer = {
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
};

export type DueDate = {
  date: string;
  index: number;
  costs?: number;
  sum: number;
  text: string;
};

export type Rechnung = {
  date: string;
  firma: string;
  customerName: string;
  customerStreet: string;
  customerPlz: string;
  rNumber: string;
  entries: MLeistung[];
  text: string;
  dueDates: DueDate[];
};

export type Gutschrift = {
  date: string;
  gNumber: string;
  entries: MLeistung[];
  text: string;
};
