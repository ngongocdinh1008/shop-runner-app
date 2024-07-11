import axios, { AxiosError, type AxiosInstance } from 'axios'

export class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    
  }
 
}
const http = new Http().instance
export default http
