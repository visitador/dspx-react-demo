import axios from "axios";
import {
  Apartment,
  Api,
  Client,
  ClientCreateDto,
  ClientCreateResult,
  House,
  Street,
} from "./api";

export const API_BASE_URL = "https://dispex.org/api/vtest";

export class BackendApi implements Api {
  async fetchStreets(): Promise<Street[]> {
    return axios.get(`${API_BASE_URL}/Request/streets`).then((res) => res.data);
  }

  async fetchHousesByStreet(streetId: number): Promise<House[]> {
    return axios
      .get(`${API_BASE_URL}/Request/houses/${streetId}`)
      .then((res) => res.data);
  }

  async fetchApartmentsByHouse(houseId: number): Promise<Apartment[]> {
    return axios
      .get(`${API_BASE_URL}/HousingStock`, {
        params: {
          houseId,
        },
      })
      .then((res) => res.data);
  }

  async createHabitant(client: ClientCreateDto): Promise<ClientCreateResult> {
    return axios
      .post(`${API_BASE_URL}/HousingStock/client`, client)
      .then((res) => res.data);
  }

  async populateHabitant(clientId: string, addressId: number): Promise<void> {
    return axios.put(`${API_BASE_URL}​/HousingStock​/bind_client`, {
      AddressId: addressId,
      ClientId: clientId,
    });
  }
  async evictHabitant(bindId: number): Promise<Client> {
    return axios
      .delete(`${API_BASE_URL}/HousingStock/bind_client/${bindId}`)
      .then((res) => res.data);
  }
}
