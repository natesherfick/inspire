export default class Image{

constructor (data) {
  this.id = data.id
  this.url = data.url
  this.large_url = data.large_url
  this.source_id = data.source_id || null
  this.copyright = data.copyright ||""
  this.site = data.site || ""
}





}