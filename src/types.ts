export interface TurfArena {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  address: string;
  city: string;
  image: string;
  pricePerHour: number;
  rating: number;
  reviewsCount: number;
  likesCount: string;
  bookmarkCount: string;
  areaSize: string;
  loungeSize: string;
  capacity: string;
  amenitiesCount: string;
  surfaceType: string;
  sportTypes: string[];
  description: string;
  fullSpecs: {
    dimensions: string;
    lighting: string;
    cushioning: string;
    parking: string;
    changingRooms: string;
  };
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  period: 'morning' | 'afternoon' | 'evening';
  price: number;
  isAvailable: boolean;
  isFastFilling?: boolean;
}

export interface BookingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

export interface BookingConfirmation {
  bookingId: string;
  turfName: string;
  location: string;
  date: string;
  slotTime: string;
  totalAmount: number;
  splitAmountPerPerson?: number;
  splitPlayersCount?: number;
  paymentMethod: string;
  qrCodeUrl: string;
  accessPin: string;
}
