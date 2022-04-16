export default class FetchItems {
  constructor(url){
    this.origin = window.location.origin
    this.url = `${this.origin}/assets/api/${url}`
  }
  initFetch() {
    return fetch(this.url).then( r => r.json()).then(json => json)
  }
}