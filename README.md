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

# About <a name = "about"></a>

Spotify Api.

# Api Reference<a name = "docs"></a>

Base address of api : `https://spotify-api-vflc.vercel.app/api`

## Search<a name = "docs_search"></a>

### search things on spotify

#### **Post** `/search`

|  FIELD  |    TYPE     | REQUIRED | DESCRIPTION                                                                             |
| :-----: | :---------: | :------: | :-------------------------------------------------------------------------------------- |
|  query  |   string    |   Yes    | `query` is the thing that goes into the search bar                                      |
|  types  |  string[]   |    No    | You can choose type(s) from "album", "artist", "playlist", "track", "show", "episode"]. |
| options | ¯\\_(ツ)_/¯ |    No    | Just read the docs http://michaelthelin.se/spotify-web-api-node/#search                 |

## Album<a name = "docs_album"></a>

### get album by id

#### **Get** `/album/{albumId}`

## Artist<a name = "docs_artist"></a>

### get artist by id

#### **Get** `/artist/{artistId}`

## Track<a name = "docs_track"></a>

### get track by id

#### **Get** `/track/{trackId}`

### get track preview

#### **Get** `/track/{trackId}/preview`
