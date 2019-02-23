
const weather = {
    "documentation": "https://opencagedata.com/api",
    "licenses": [
        {
            "name": "CC-BY-SA",
            "url": "https://creativecommons.org/licenses/by-sa/3.0/"
        },
        {
            "name": "ODbL",
            "url": "https://opendatacommons.org/licenses/odbl/summary/"
        }
    ],
    "rate": {
        "limit": 2500,
        "remaining": 2499,
        "reset": 1550448000
    },
    "results": [
        {
            "annotations": {
                "DMS": {
                    "lat": "38° 15' 15.25536'' N",
                    "lng": "85° 45' 33.86520'' W"
                },
                "FIPS": {
                    "county": "21111",
                    "state": "21"
                },
                "MGRS": "16SFH0854534751",
                "Maidenhead": "EM78cg81ua",
                "Mercator": {
                    "x": -9546693.518,
                    "y": 4588944.577
                },
                "OSM": {
                    "edit_url": "https://www.openstreetmap.org/edit?relation=1804307#map=17/38.25424/-85.75941",
                    "url": "https://www.openstreetmap.org/?mlat=38.25424&mlon=-85.75941#map=17/38.25424/-85.75941"
                },
                "callingcode": 1,
                "currency": {
                    "alternate_symbols": [
                        "US$"
                    ],
                    "decimal_mark": ".",
                    "disambiguate_symbol": "US$",
                    "html_entity": "$",
                    "iso_code": "USD",
                    "iso_numeric": 840,
                    "name": "United States Dollar",
                    "smallest_denomination": 1,
                    "subunit": "Cent",
                    "subunit_to_unit": 100,
                    "symbol": "$",
                    "symbol_first": 1,
                    "thousands_separator": ","
                },
                "flag": "🇺🇸",
                "geohash": "dng187zzhfxrf7c12p7b",
                "qibla": 50.58,
                "sun": {
                    "rise": {
                        "apparent": 1550406540,
                        "astronomical": 1550401260,
                        "civil": 1550404920,
                        "nautical": 1550403120
                    },
                    "set": {
                        "apparent": 1550445780,
                        "astronomical": 1550364720,
                        "civil": 1550447400,
                        "nautical": 1550362860
                    }
                },
                "timezone": {
                    "name": "America/Kentucky/Louisville",
                    "now_in_dst": 0,
                    "offset_sec": -18000,
                    "offset_string": -500,
                    "short_name": "EST"
                },
                "what3words": {
                    "words": "shine.lions.movies"
                },
                "wikidata": "Q43668"
            },
            "bounds": {
                "northeast": {
                    "lat": 38.3801391,
                    "lng": -85.4051
                },
                "southwest": {
                    "lat": 37.9971,
                    "lng": -85.9470644
                }
            },
            "components": {
                "ISO_3166-1_alpha-2": "US",
                "ISO_3166-1_alpha-3": "USA",
                "_type": "city",
                "city": "Louisville",
                "country": "USA",
                "country_code": "us",
                "county": "Jefferson County",
                "state": "Kentucky",
                "state_code": "KY"
            },
            "confidence": 2,
            "formatted": "Louisville, KY, United States of America",
            "geometry": {
                "lat": 38.2542376,
                "lng": -85.759407
            }
        }
    ],
    "status": {
        "code": 200,
        "message": "OK"
    },
    "stay_informed": {
        "blog": "https://blog.opencagedata.com",
        "twitter": "https://twitter.com/opencagedata"
    },
    "thanks": "For using an OpenCage Data API",
    "timestamp": {
        "created_http": "Sun, 17 Feb 2019 21:08:47 GMT",
        "created_unix": 1550437727
    },
    "total_results": 1
}
export default weather;