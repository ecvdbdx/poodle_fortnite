export default class Proxy {

  static getCommonHeaders() {
    return {
      'content-type': 'application/json',
      'Authorization': '8a1c5781147ca1218ffc653f4a3bae03' 
    }
  }

  async fetchPlayerId(name) {
    const response = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${name}`, {
      method: 'GET'
    })
    if (response.status === 200) {
      const responseJson = response.json()

      return responseJson
    }
    return {}
  }

  async fetchPlayerData(id) {
    const response = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${id}`, {
      method: 'GET'
    })
    if (response.status === 200) {
      const responseJson = response.json()

      return responseJson
    }
    return {}
  }

  async fetchPlayerItems() {
    const response = await fetch('https://fortnite-api.theapinetwork.com/store/get', {
      method: 'GET',
      headers: Proxy.getCommonHeaders()
    })
    if (response.status === 200) {
      const responseJson = response.json()

      return responseJson
    }
    return {}
  }
}