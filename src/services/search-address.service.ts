import axios from "axios";

class SearchAddressService {
  public async searchAddressByCep(cep: string) {
    return axios({
      method: "get",
      url: `http://localhost:3000/cep/${cep}`,  
    });
  } 
}

export default new SearchAddressService();