# Spotify Api

A rest api implementation of [thelinmichael][thelinmichael]'s [spotify-web-api-node][spotify-web-api-node]

[thelinmichael]: https://github.com/thelinmichael
[spotify-web-api-node]: https://github.com/thelinmichael/spotify-web-api-node

## Table of Contents

- [About](#about)
- [Api Reference](#docs)
  - [Search](#docs-search)

## About <a name = "about"></a>

Spotify Api.

## Api Reference<a name = "docs"></a>

Base address of api : https://spotify-api.vercel.app/api

### Search<a name = "docs-search"></a>

#### **Post** `/search`

|  FIELD  |    TYPE     | REQUIRED | DESCRIPTION                                                                              |
| :-----: | :---------: | :------: | :--------------------------------------------------------------------------------------- |
|  query  |   string    |   Yes    | `query` is the thing that goes into the search bar                                       |
|  types  |  string[]   |    No    | You can choose `type`(s) from "album", "artist", "playlist", "track", "show", "episode"] |
| options | ¯\\_(ツ)_/¯ |    No    | Just read the docs http://michaelthelin.se/spotify-web-api-node/#search                  |
