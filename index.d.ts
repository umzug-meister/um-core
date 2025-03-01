type WpEntity = {
  id: number;
  name: string;
};

export type OrderSrcType =
  | "express"
  | "individuelle"
  | "UmzugRuckZuck"
  | "Moebelliste"
  | "obi"
  | "check24"
  | "moebeltransport24"
  | "myhammer";

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
  /**
   * @deprecated
   */
  calculate?: boolean;
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

export type Order = {
  dataPrivacyAccepted: boolean;
  src: OrderSrcType;
  id?: number;
  customer: Customer;
  date: string;
  date_from: string;
  date_to: string;
  isDateFix: boolean;
  from: Address;
  secondaryFrom: Address;
  showSecondaryFrom: boolean;
  to: Address;
  secondaryTo: Address;
  showSecondaryTo: boolean;
  distance: number;
  leistungen: MLeistung[];
  services: OrderService[];
  items: Furniture[];
  workersNumber: number;
  transporterNumber: number;
  /**
   * @deprecated
   */
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
  /**
   * @deprecated
   */
  sum: number;
  timeBased: TimeBasedPrice;
  ownItems: string;
  rechnung?: Rechnung;
  gutschrift?: Gutschrift;
  costsAssumption: boolean;
  needPackings: boolean;
  bohrarbeiten: boolean;
  isCopyOf?: number;
  isCounted: boolean;
} & WpEntity;

export type Furniture = {
  categoryRefs: Category[];
  selectedCategory?: string;
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
} & WpEntity;

export type OrderService = AppPacking | AppService;

export type AppServiceTag =
  | "Bohrarbeiten"
  | "Price"
  | "Packmaterial"
  | "Counter";

export type AppPrice = {
  tag: "Price";
  hourPrice: number;
  t35?: number;
  /**
   * @deprecated
   */
  t75?: number;
  workers: number;
  includedHours: number;
  sum: number;
  ridingCosts: number;
  sort: number;
} & WpEntity;

export type AppPacking = {
  tag: "Packmaterial";
  id: number;
  name: string;
  price: string;
  colli: string;
  desc: string;
  media: string;
  show: true;
  sort: number;
} & WpEntity;

export type AppService = {
  tag: "Bohrarbeiten";
  price: string;
  colli: string;
  show: true;
} & WpEntity;

export type AppCounterType = "Lead" | "Offer";

export type AppCounter = {
  tag: "Counter";
  type: AppCounterType;
  data: any;
} & WpEntity;

export type Service = AppPacking | AppService | AppPrice | AppCounter;

export type Category = {
  slug: string;
  sort: number;
} & WpEntity;

export type ItemBlock = {
  category: string;
  furniture: Furniture[];
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
  orderId: string;
};

export type Gutschrift = {
  date: string;
  gNumber: string;
  entries: MLeistung[];
  text: string;
};
