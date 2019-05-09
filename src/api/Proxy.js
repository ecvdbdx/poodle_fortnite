export default class Proxy {

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

}