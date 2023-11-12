export interface StreetPrefix {
  id: number;
  name?: string;
  shortName?: string;
}

export interface Street {
  id: number;
  name?: string;
  cityId: number;
  city?: string;
  nameWithPrefix: string;
  prefix?: StreetPrefix;
}

export interface House {
  id: number;
  name?: string;
  type: HouseType;
}

export interface HouseType {
  id: number;
  text?: string;
}

export interface Apartment {
  addressId: number;
  streetId: number;
  houseId: number;
  streetName?: string;
  building?: string;
  corpus?: string;
  flat?: string;
}

export interface Client {
  id: number;
  name?: string;
  phone?: string;
  email?: string;
  bindId?: number;
}

export type ClientCreateDto = Required<
  Pick<Client, "name" | "phone" | "email">
>;

export interface ClientCreateResult {
  id: number;
  result: string;
  message: string;
}

export interface Api {
  fetchStreets(): Promise<Street[]>;
  fetchHousesByStreet(streetId: number): Promise<House[]>;
  fetchApartmentsByHouse(houseId: number): Promise<Apartment[]>;
  createHabitant(client: ClientCreateDto): Promise<ClientCreateResult>;
  populateHabitant(clientId: string, addressId: number): Promise<void>;
  evictHabitant(bindId: number): Promise<Client>;
}
