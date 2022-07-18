import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import apiMockClient from './mock'
import apiLiveClient from './live'

let env: string = 'mock'
    if (process.env && process.env.VUE_APP_API_CLIENT) {
    }
// return either the live or the mock client
let apiClient: ApiClientInterface
    if (env === 'live') {
    apiClient = apiLiveClient
    } else {
    apiClient = apiMockClient
    }
export default apiClient