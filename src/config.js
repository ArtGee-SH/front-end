

export default {
  WS_PROVIDER: 'wss://cryptoindus.xyz/',

  TYPES : {
    "ArtistId": "u32",
    "ArtvenusId": "Hash",
    "Address": "AccountId",
    "Gender": {
      "_enum": [
        "Male",
        "Female"
      ]
    },
    "ArtistInfo": {
      "name": "Text",
      "gender": "Gender"
    },
    "ArtvenusInfo": {
      "origin": "ArtistId",
      "time": "BlockNumber",
      "name": "Text",
      "desc": "Text"
    },
    "OnSellState": {
      "_enum": [
        "VirginSell",
        "Sell",
        "Bidding"
      ]
    },
    "OnSellInfo": {
      "state": "OnSellState",
      "price": "Balance",
      "time": "BlockNumber"
    },
    "OnSellInfoForRpc": {
      "state": "OnSellState",
      "price": "String",
      "time": "BlockNumber"
    }
  },
  RPCS: {
    artists: {
      getArtists: {
        description: 'get all artist list',
        params: [
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'BTreeMap<ArtistId, AccountId>'
      },
    },
    artvenuses: {
      getArtvenuses: {
        description: 'get all artvenus list',
        params: [
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Vec<ArtvenusId>'
      },
      getArtvenusesByArtist: {
        description: 'get all artvenus for an artist',
        params: [
          {
            name: 'artist_id',
            type: 'ArtistId'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'BTreeMap<u64, ArtvenusId>'
      },
      getArtvenusesByHolder: {
        description: 'get all artvenus for a holder',
        params: [
          {
            name: 'account_id',
            type: 'AccountId'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'BTreeMap<u64, AccountId>'
      },
    },
    market: {
      getOnSells: {
        description: 'get all on sell infos',
        params: [
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'BTreeMap<ArtvenusId, OnSellInfoForRpc>'
      },
    },
  }
}
