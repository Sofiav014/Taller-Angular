
export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  summary: string;
  link: string;
  image: string;

  constructor(id: number, name: string, channel: string, seasons: number, summary: string, link: string, image: string) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.summary = summary;
    this.link = link;
    this.image = image;

  }
}
