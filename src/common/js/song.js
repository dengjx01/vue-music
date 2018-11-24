export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://dl.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=38`
    url: `http://dl.stream.qqmusic.qq.com/M500${musicData.songmid}.mp3?guid=2095717240&vkey=74819C895A712D3B6B64F65F1FE19640D57ABCB02DA1E9C249B3C58B87C58C7FA9753255F1A1C4267E11AE943A702B1BF2CD689B375B1EDD&uin=0&fromtag=53`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
}
