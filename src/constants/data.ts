import { Album } from "@/modules/core/lib/types";
import { Post } from "@/modules/core/lib/types_tracks";

export const genres = [
  "Pop",
  "Rock",
  "Indie",
  "Jazz",
  "Hip Hop",
  "Rap",
  "Reggaeton",
  "Country",
  "Blues",
  "Metal",
  "Punk",
  "Folk",
  "Soul",
  "R&B",
  "Electronic",
  "Dance",
  "Reggae",
  "Classical",
  "Opera",
  "Flamenco",
  "Ska",
  "Funk",
  "Disco",
  "Techno",
  "House",
  "Trance",
  "Dubstep",
  "Drum and bass",
  "Hardcore",
];

export const dataPlaylist = [
  {
    id: 1,
    name: "For girls",
    image:
      "https://cdns-images.dzcdn.net/images/cover/967ac8605268db88a1e597394115365d/1900x1900-000000-80-0-0.jpg",
  },
  {
    id: 2,
    name: "Motivación extrema",
    image:
      "https://imgs.search.brave.com/hUWULsSUWd_TKSEVBYTMGVDsSU218E8ssqvkkbS4Srs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9kb3dubG9h/ZHMvNTdmNTVkNjIt/ZDhmMC00MzE3LTlh/MDEtY2FlYzc0NGM1/YjdiXzQ1MC5qcGVn",
  },
  {
    id: 3,
    name: "Motivación",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGVofFKvHcFkiM16u-Gu2gYLJAi_dHZkCAQ&s",
  },
  {
    id: 4,
    name: "Clásicos",
    image:
      "https://img.apmcdn.org/d7541cad306c0066445ba32c484471f299122ca6/uncropped/7a648c-20200911-top-89-cover-songs-03.jpg",
  },
  {
    id: 5,
    name: "Depresión",
    image: "https://i.redd.it/w86hly5tslx71.jpg",
  },
  {
    id: 6,
    name: "Chill",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7d49262051957.5b11743c7cf40.jpg",
  },
];

export const dataArtist = [
  {
    id: "264e1f6c-52ec-48ea-bfb1-13100f8b5cf3",
    profile_picture:
      "https://imgs.search.brave.com/UHHkHar9E432pXtQXSpKmTMjZDl0dU7lLAzhrwqbsxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/LzIyNTkyMWY5ZTY4/NGI0ODA0YjQ3ZGJm/MjdkM2MzZmZh",
  },
  {
    id: "5d5e1b6c-71ec-49ea-bfb1-19100f7d5cf7",
    profile_picture:
      "https://imgs.search.brave.com/w-WKBymTu-iwhTTBj2JOewo5WznKjkuqEz5JoT7YfBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFy/dHMtc3RhdGljLmJp/bGxib2FyZC5jb20v/aW1nLzE5OTgvMTAv/YnJpdG5leS1zcGVh/cnMtOG5sLTM0NHgz/NDQuanBn",
  },
  {
    id: "9d8205b2-80a8-46e3-8555-0439c8d9b846",
    profile_picture:
      "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/profileIcons%2Fdefault-avatar.png?alt=media&token=09e84995-6605-4b4f-9131-5b99ace4395d",
  },
  {
    id: 4,
    profile_picture:
      "https://imgs.search.brave.com/MjPoLKFq7of6lFg_atPpxPY3xCGLb0tk5B85yRRBKqE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlL2Zj/L2Q3LzhlZmNkNzMw/MmU0MWE2MjZiYmNj/YzZmZmE0MWE1MmNk/LmpwZw",
  },
  {
    id: 5,
    profile_picture:
      "https://imgs.search.brave.com/OiCkBUVt1zO9jzLVN7wGpt3kZXp2y3P1v9pAhWh1jPk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS8zMDB4MzAwLzgy/ZmI2YWM4NTQ5N2Mz/ZThjYTlkODRjY2My/Y2I0Y2MxLmpwZw",
  },
];

export const dataAlbums: Album[] = [
  {
    id: 1,
    title: "Album One",
    year: 2020,
    icon: "https://lastfm.freetls.fastly.net/i/u/300x300/136966ce3225f90e17f0e1f273c48835.jpg",
    type: "Album",
    artist_name: "Artist1",
  },
  {
    id: 2,
    title: "Album Two",
    year: 2019,
    icon: "https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/500x500.jpg",
    type: "Album",
    artist_name: "Artist2",
  },
  {
    id: 3,
    title: "Album Three",
    year: 2021,
    icon: "https://akamai.sscdn.co/uploadfile/letras/albuns/8/8/a/f/192201695664406.jpg",
    type: "Album",
    artist_name: "Artist3",
  },
  {
    id: 4,
    title: "Album Four",
    year: 2018,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCBtNDxSmuGoIDqZjhaCIZ72rPioivqbTow&s",
    type: "Album",
    artist_name: "Artist4",
  },
  {
    id: 5,
    title: "Album Five",
    year: 2022,
    icon: "https://i.scdn.co/image/ab6761610000e5eb3a49b0a3954e460a8a76ed90",
    type: "Album",
    artist_name: "Artist5",
  },
];

export const dataPost: Post[] = [
  {
    id: 1,
    from: "King Crimson",
    message: "Check out this new album!",
    created_time: "2023-10-01T10:00:00Z",
    album_attachment: null,
    isLiked: false,
  },
  {
    id: 2,
    from: "King Crimson",
    message: "Loving this song!",
    created_time: "2023-10-02T11:00:00Z",
    isLiked: false,
  },
  {
    id: 3,
    from: "King Crimson",
    message: "Hi fans!! Tomorrow we travel to alemania for meeting girls!!!!",
    created_time: "2023-10-03T12:00:00Z",
    album_attachment: dataAlbums[3],
    isLiked: false,
  },
  {
    id: 4,
    from: "King Crimson",
    message: "Can't stop listening to this song!",
    created_time: "2023-10-04T13:00:00Z",
    isLiked: false,
    song_attachment: {
      id: 4,
      title: "Time is running out",
      artist: "Muse",
      image: "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
      url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20JOYRIDE.mp3?alt=media&token=2d7fd7e9-434a-4435-a8b0-db93152a13a0",
    },
  },
  {
    id: 5,
    from: "King Crimson",
    message: "New album release!",
    created_time: "2023-10-05T14:00:00Z",
    album_attachment: dataAlbums[4],
    isLiked: false,
  },
];

export const dataSongs = [
  {
    id: 1,
    title: "I love lt guy",
    artist: "Tyler the creator",
    image:
      "https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg?w=600",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20Gimme%20More.mp3?alt=media&token=9ad7676d-9118-44d8-85c6-f97c67d3ec5a",
  },
  {
    id: 2,
    title: "Just white and curly girls",
    artist: "Nirvana",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF3_2_mVdY5B9Tgh96dj3iJ_r66xhP0di7g&s",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20365.mp3?alt=media&token=5997d717-0a04-4ff7-95f4-f23da1284137",
  },
  {
    id: 3,
    title: "Fearless",
    artist: "Taylor swift",
    image:
      "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/18/USAT/73369581007-001-taylor-swift-2006.jpeg?width=700&height=700&fit=crop&format=pjpg&auto=webp",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20...Baby%20One%20More%20Time.mp3?alt=media&token=5977094d-59c6-4fcc-bfb4-30d46f3b6f81",
  },
  {
    id: 4,
    title: "Time is running out",
    artist: "Muse",
    image: "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20Outrageous.mp3?alt=media&token=a1caf51f-2212-4775-8c56-182bf5102881",
  },
  {
    id: 5,
    title: "Juno",
    artist: "Sabrina Carpenter",
    image:
      "https://images.genius.com/6ecbc2e64e62b35ee2fadf8532056f72.1000x1000x1.png",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20Oops!...I%20Did%20It%20Again.mp3?alt=media&token=3f9b9f5f-861b-4288-b979-0275f91ce954",
  },
  {
    id: 6,
    title: "Joyride",
    artist: "Kesha",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Kesha_%E2%80%93_Joyride_%28official_single_cover%29.png",
    url: "https://firebasestorage.googleapis.com/v0/b/liryca-c9f2e.appspot.com/o/songs%2Fspotifydown.com%20-%20JOYRIDE.mp3?alt=media&token=2d7fd7e9-434a-4435-a8b0-db93152a13a0",
  },
];
