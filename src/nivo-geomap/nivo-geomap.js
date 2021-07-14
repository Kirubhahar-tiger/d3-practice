// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "id": "AFG",
      "value": 335813
    },
    {
      "id": "AGO",
      "value": 553732
    },
    {
      "id": "ALB",
      "value": 977208
    },
    {
      "id": "ARE",
      "value": 156943
    },
    {
      "id": "ARG",
      "value": 906638
    },
    {
      "id": "ARM",
      "value": 759017
    },
    {
      "id": "ATA",
      "value": 972437
    },
    {
      "id": "ATF",
      "value": 335540
    },
    {
      "id": "AUT",
      "value": 293099
    },
    {
      "id": "AZE",
      "value": 488488
    },
    {
      "id": "BDI",
      "value": 481268
    },
    {
      "id": "BEL",
      "value": 680487
    },
    {
      "id": "BEN",
      "value": 540076
    },
    {
      "id": "BFA",
      "value": 864062
    },
    {
      "id": "BGD",
      "value": 484339
    },
    {
      "id": "BGR",
      "value": 269820
    },
    {
      "id": "BHS",
      "value": 438455
    },
    {
      "id": "BIH",
      "value": 659579
    },
    {
      "id": "BLR",
      "value": 563669
    },
    {
      "id": "BLZ",
      "value": 923379
    },
    {
      "id": "BOL",
      "value": 851042
    },
    {
      "id": "BRN",
      "value": 268862
    },
    {
      "id": "BTN",
      "value": 681448
    },
    {
      "id": "BWA",
      "value": 61551
    },
    {
      "id": "CAF",
      "value": 23781
    },
    {
      "id": "CAN",
      "value": 476216
    },
    {
      "id": "CHE",
      "value": 482426
    },
    {
      "id": "CHL",
      "value": 236023
    },
    {
      "id": "CHN",
      "value": 775506
    },
    {
      "id": "CIV",
      "value": 623294
    },
    {
      "id": "CMR",
      "value": 970213
    },
    {
      "id": "COG",
      "value": 634375
    },
    {
      "id": "COL",
      "value": 563443
    },
    {
      "id": "CRI",
      "value": 662361
    },
    {
      "id": "CUB",
      "value": 522964
    },
    {
      "id": "-99",
      "value": 955411
    },
    {
      "id": "CYP",
      "value": 324596
    },
    {
      "id": "CZE",
      "value": 557871
    },
    {
      "id": "DEU",
      "value": 443282
    },
    {
      "id": "DJI",
      "value": 520851
    },
    {
      "id": "DNK",
      "value": 30398
    },
    {
      "id": "DOM",
      "value": 879021
    },
    {
      "id": "DZA",
      "value": 462458
    },
    {
      "id": "ECU",
      "value": 274028
    },
    {
      "id": "EGY",
      "value": 554872
    },
    {
      "id": "ERI",
      "value": 238699
    },
    {
      "id": "ESP",
      "value": 154025
    },
    {
      "id": "EST",
      "value": 440121
    },
    {
      "id": "ETH",
      "value": 896014
    },
    {
      "id": "FIN",
      "value": 169566
    },
    {
      "id": "FJI",
      "value": 422257
    },
    {
      "id": "FLK",
      "value": 165836
    },
    {
      "id": "FRA",
      "value": 328524
    },
    {
      "id": "GAB",
      "value": 60711
    },
    {
      "id": "GBR",
      "value": 607827
    },
    {
      "id": "GEO",
      "value": 828177
    },
    {
      "id": "GHA",
      "value": 504791
    },
    {
      "id": "GIN",
      "value": 526645
    },
    {
      "id": "GMB",
      "value": 638886
    },
    {
      "id": "GNB",
      "value": 532069
    },
    {
      "id": "GNQ",
      "value": 728156
    },
    {
      "id": "GRC",
      "value": 383523
    },
    {
      "id": "GTM",
      "value": 334540
    },
    {
      "id": "GUY",
      "value": 909962
    },
    {
      "id": "HND",
      "value": 818003
    },
    {
      "id": "HRV",
      "value": 256029
    },
    {
      "id": "HTI",
      "value": 9541
    },
    {
      "id": "HUN",
      "value": 450988
    },
    {
      "id": "IDN",
      "value": 362851
    },
    {
      "id": "IND",
      "value": 884474
    },
    {
      "id": "IRL",
      "value": 151463
    },
    {
      "id": "IRN",
      "value": 625404
    },
    {
      "id": "IRQ",
      "value": 706491
    },
    {
      "id": "ISL",
      "value": 957076
    },
    {
      "id": "ISR",
      "value": 150874
    },
    {
      "id": "ITA",
      "value": 691450
    },
    {
      "id": "JAM",
      "value": 221780
    },
    {
      "id": "JOR",
      "value": 179411
    },
    {
      "id": "JPN",
      "value": 530608
    },
    {
      "id": "KAZ",
      "value": 705096
    },
    {
      "id": "KEN",
      "value": 898802
    },
    {
      "id": "KGZ",
      "value": 92240
    },
    {
      "id": "KHM",
      "value": 138662
    },
    {
      "id": "OSA",
      "value": 563870
    },
    {
      "id": "KWT",
      "value": 604944
    },
    {
      "id": "LAO",
      "value": 357417
    },
    {
      "id": "LBN",
      "value": 280929
    },
    {
      "id": "LBR",
      "value": 138156
    },
    {
      "id": "LBY",
      "value": 373669
    },
    {
      "id": "LKA",
      "value": 8450
    },
    {
      "id": "LSO",
      "value": 513988
    },
    {
      "id": "LTU",
      "value": 686634
    },
    {
      "id": "LUX",
      "value": 662534
    },
    {
      "id": "LVA",
      "value": 451218
    },
    {
      "id": "MAR",
      "value": 411247
    },
    {
      "id": "MDA",
      "value": 952489
    },
    {
      "id": "MDG",
      "value": 894935
    },
    {
      "id": "MEX",
      "value": 132689
    },
    {
      "id": "MKD",
      "value": 470000
    },
    {
      "id": "MLI",
      "value": 905150
    },
    {
      "id": "MMR",
      "value": 522478
    },
    {
      "id": "MNE",
      "value": 788043
    },
    {
      "id": "MNG",
      "value": 25163
    },
    {
      "id": "MOZ",
      "value": 922929
    },
    {
      "id": "MRT",
      "value": 721256
    },
    {
      "id": "MWI",
      "value": 836234
    },
    {
      "id": "MYS",
      "value": 821952
    },
    {
      "id": "NAM",
      "value": 447623
    },
    {
      "id": "NCL",
      "value": 58161
    },
    {
      "id": "NER",
      "value": 185381
    },
    {
      "id": "NGA",
      "value": 258967
    },
    {
      "id": "NIC",
      "value": 569067
    },
    {
      "id": "NLD",
      "value": 415058
    },
    {
      "id": "NOR",
      "value": 937949
    },
    {
      "id": "NPL",
      "value": 902264
    },
    {
      "id": "NZL",
      "value": 49496
    },
    {
      "id": "OMN",
      "value": 726772
    },
    {
      "id": "PAK",
      "value": 446743
    },
    {
      "id": "PAN",
      "value": 941151
    },
    {
      "id": "PER",
      "value": 564559
    },
    {
      "id": "PHL",
      "value": 455901
    },
    {
      "id": "PNG",
      "value": 6587
    },
    {
      "id": "POL",
      "value": 821243
    },
    {
      "id": "PRI",
      "value": 31031
    },
    {
      "id": "PRT",
      "value": 791998
    },
    {
      "id": "PRY",
      "value": 324333
    },
    {
      "id": "QAT",
      "value": 685966
    },
    {
      "id": "ROU",
      "value": 304190
    },
    {
      "id": "RUS",
      "value": 640404
    },
    {
      "id": "RWA",
      "value": 590930
    },
    {
      "id": "ESH",
      "value": 322758
    },
    {
      "id": "SAU",
      "value": 658123
    },
    {
      "id": "SDN",
      "value": 713471
    },
    {
      "id": "SDS",
      "value": 956711
    },
    {
      "id": "SEN",
      "value": 366004
    },
    {
      "id": "SLB",
      "value": 940435
    },
    {
      "id": "SLE",
      "value": 745213
    },
    {
      "id": "SLV",
      "value": 908338
    },
    {
      "id": "ABV",
      "value": 460674
    },
    {
      "id": "SOM",
      "value": 310756
    },
    {
      "id": "SRB",
      "value": 904564
    },
    {
      "id": "SUR",
      "value": 650434
    },
    {
      "id": "SVK",
      "value": 360096
    },
    {
      "id": "SVN",
      "value": 350767
    },
    {
      "id": "SWZ",
      "value": 510953
    },
    {
      "id": "SYR",
      "value": 904134
    },
    {
      "id": "TCD",
      "value": 433393
    },
    {
      "id": "TGO",
      "value": 617163
    },
    {
      "id": "THA",
      "value": 487235
    },
    {
      "id": "TJK",
      "value": 353774
    },
    {
      "id": "TKM",
      "value": 809627
    },
    {
      "id": "TLS",
      "value": 189817
    },
    {
      "id": "TTO",
      "value": 485306
    },
    {
      "id": "TUN",
      "value": 362706
    },
    {
      "id": "TUR",
      "value": 847243
    },
    {
      "id": "TWN",
      "value": 223184
    },
    {
      "id": "TZA",
      "value": 450231
    },
    {
      "id": "UGA",
      "value": 573731
    },
    {
      "id": "UKR",
      "value": 374021
    },
    {
      "id": "URY",
      "value": 680226
    },
    {
      "id": "USA",
      "value": 11544
    },
    {
      "id": "UZB",
      "value": 599347
    },
    {
      "id": "VEN",
      "value": 113479
    },
    {
      "id": "VNM",
      "value": 865320
    },
    {
      "id": "VUT",
      "value": 162104
    },
    {
      "id": "PSE",
      "value": 706421
    },
    {
      "id": "YEM",
      "value": 464823
    },
    {
      "id": "ZAF",
      "value": 998717
    },
    {
      "id": "ZMB",
      "value": 311121
    },
    {
      "id": "ZWE",
      "value": 401738
    },
    {
      "id": "KOR",
      "value": 562159
    }
  ]

const MyResponsiveChoropleth = () => (
    <ResponsiveChoropleth
        data={data}
        features="/* please have a look at the description for usage */"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)