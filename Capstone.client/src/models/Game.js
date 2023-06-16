export class Game{
   constructor(data){
      this.slug = data.slug
      this.name = data.name
      this.platform = data.platform
      this.images = data.short_screenshots
      this.genres = data.genres
      this.released = data.released
      this.rating = data.rating
      this.esrb_rating = data.esrb_rating
   }
}

