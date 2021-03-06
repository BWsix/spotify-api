# Spotify Api

A rest api implementation of [thelinmichael][thelinmichael]'s [spotify-web-api-node][spotify-web-api-node]

[thelinmichael]: https://github.com/thelinmichael
[spotify-web-api-node]: https://github.com/thelinmichael/spotify-web-api-node

# Table of Contents

- [About](#about)
- [Api Reference](#docs)
  - [Search](#docs_search)
  - [Album](#docs_artist)
  - [Artist](#docs_album)
  - [Track](#docs_track)
  - [User](#docs_user)

# About <a name = "about"></a>

Spotify Api.

# Api Reference<a name = "docs"></a>

Base address of api : `https://spotify-api-vflc.vercel.app/api`

## Search<a name = "docs_search"></a>

### search things on spotify

#### **Get** `/search/{query string}`

or

#### **Post** `/search`

|  FIELD  |    TYPE     | REQUIRED | DESCRIPTION                                                                             |
| :-----: | :---------: | :------: | :-------------------------------------------------------------------------------------- |
|  query  |   string    |   Yes    | `query` is the thing that goes into the search bar                                      |
|  types  |  string[]   |    No    | You can choose type(s) from "album", "artist", "playlist", "track", "show", "episode"]. |
| options | ¯\\_(ツ)_/¯ |    No    | Just read the docs http://michaelthelin.se/spotify-web-api-node/#search                 |

## Album<a name = "docs_album"></a>

### get album

#### **Get** `/album/{albumId}`

### get cover

#### **Get** `/album/{albumId}/cover`

return : cover image in `jpeg` format

### get tracks in album

#### **Post** `/album/{albumId}/tracks`

## Artist<a name = "docs_artist"></a>

### get artist

#### **Get** `/artist/{artistId}`

### get artist's albums

#### **Post** `/artist/{artistId}/albums`

### get artist's related artists

#### **Get** `/artist/{artistId}/relatedArtists`

### get artist's top tracks

#### **Post** `/artist/{artistId}/topTracks`

## Track<a name = "docs_track"></a>

### get track

#### **Get** `/track/{trackId}`

### get preview

#### **Get** `/track/{trackId}/preview`

### get cover

#### **Get** `/track/{trackId}/cover`

return : cover image in `jpeg` format

### get audio analysis

#### **Get** `/track/{trackId}/audioAnalysis`

### get audio features

#### **Get** `/track/{trackId}/features`

## User<a name = "docs_user"></a>

### get user

#### **Get** `/user/{userId}`

### get user playlists

#### **Post** `/user/{userId}/playlists`
