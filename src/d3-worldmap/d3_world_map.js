import React, { useState, useEffect } from "react"
import * as d3 from 'd3';
import { geoEqualEarth, geoPath, geoGnomonic, geoMercator } from "d3-geo"
import { feature } from "topojson-client";
import Tooltip from '@material-ui/core/Tooltip';

import './d3_world_map.css';

const cities = [
    { name: "Tokyo", coordinates: [139.6917, 35.6895], population: 37843000 },
    { name: "Jakarta", coordinates: [106.8650, -6.1751], population: 30539000 },
    { name: "Delhi", coordinates: [77.1025, 28.7041], population: 24998000 },
    { name: "Manila", coordinates: [120.9842, 14.5995], population: 24123000 },
    { name: "Seoul", coordinates: [126.9780, 37.5665], population: 23480000 },
    { name: "Shanghai", coordinates: [121.4737, 31.2304], population: 23416000 },
    { name: "Karachi", coordinates: [67.0099, 24.8615], population: 22123000 },
    { name: "Beijing", coordinates: [116.4074, 39.9042], population: 21009000 },
    { name: "New York", coordinates: [-74.0059, 40.7128], population: 20630000 },
    { name: "Guangzhou", coordinates: [113.2644, 23.1291], population: 20597000 },
    { name: "Sao Paulo", coordinates: [-46.6333, -23.5505], population: 20365000 },
    { name: "Mexico City", coordinates: [-99.1332, 19.4326], population: 20063000 },
    { name: "Mumbai", coordinates: [72.8777, 19.0760], population: 17712000 },
    { name: "Osaka", coordinates: [135.5022, 34.6937], population: 17444000 },
    { name: "Moscow", coordinates: [37.6173, 55.7558], population: 16170000 },
    { name: "Dhaka", coordinates: [90.4125, 23.8103], population: 15669000 },
    { name: "Greater Cairo", coordinates: [31.2357, 30.0444], population: 15600000 },
    { name: "Los Angeles", coordinates: [-118.2437, 34.0522], population: 15058000 },
    { name: "Bangkok", coordinates: [100.5018, 13.7563], population: 14998000 },
    { name: "Kolkata", coordinates: [88.3639, 22.5726], population: 14667000 },
    { name: "Buenos Aires", coordinates: [-58.3816, -34.6037], population: 14122000 },
    { name: "Tehran", coordinates: [51.3890, 35.6892], population: 13532000 },
    { name: "Istanbul", coordinates: [28.9784, 41.0082], population: 13287000 },
    { name: "Lagos", coordinates: [3.3792, 6.5244], population: 13123000 },
    { name: "Shenzhen", coordinates: [114.0579, 22.5431], population: 12084000 },
    { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068], population: 11727000 },
    { name: "Kinshasa", coordinates: [15.2663, -4.4419], population: 11587000 },
    { name: "Tianjin", coordinates: [117.3616, 39.3434], population: 10920000 },
    { name: "Paris", coordinates: [2.3522, 48.8566], population: 10858000 },
    { name: "Lima", coordinates: [-77.0428, -12.0464], population: 10750000 },
]

const data = [
    {
        "name,total,percent,code": "Albania,2,0.000730727073438,ALB"
    },
    {
        "name,total,percent,code": "Algeria,2,0.000730727073438,DZA"
    },
    {
        "name,total,percent,code": "Antigua And Barbuda,3,0.00109609061016,ATG"
    },
    {
        "name,total,percent,code": "Argentina,52,0.0189989039094,ARG"
    },
    {
        "name,total,percent,code": "Armenia,1,0.000365363536719,ARM"
    },
    {
        "name,total,percent,code": "Australia,34,0.0124223602484,AUS"
    },
    {
        "name,total,percent,code": "Austria,6,0.00219218122031,AUT"
    },
    {
        "name,total,percent,code": "Azerbaijan,3,0.00109609061016,AZE"
    },
    {
        "name,total,percent,code": "Bangladesh,3,0.00109609061016,BGD"
    },
    {
        "name,total,percent,code": "Belarus,2,0.000730727073438,BLR"
    },
    {
        "name,total,percent,code": "Belgium,13,0.00474972597735,BEL"
    },
    {
        "name,total,percent,code": "Belize,1,0.000365363536719,BLZ"
    },
    {
        "name,total,percent,code": "Bermuda,1,0.000365363536719,BMU"
    },
    {
        "name,total,percent,code": "\"Bolivia, Plurinational State Of\",3,0.00109609061016,BOL"
    },
    {
        "name,total,percent,code": "Bosnia And Herzegovina,1,0.000365363536719,BIH"
    },
    {
        "name,total,percent,code": "Botswana,1,0.000365363536719,BWA"
    },
    {
        "name,total,percent,code": "Brazil,319,0.116550968213,BRA"
    },
    {
        "name,total,percent,code": "Bulgaria,2,0.000730727073438,BGR"
    },
    {
        "name,total,percent,code": "Burundi,1,0.000365363536719,BDI"
    },
    {
        "name,total,percent,code": "Cambodia,1,0.000365363536719,KHM"
    },
    {
        "name,total,percent,code": "Cameroon,3,0.00109609061016,CMR"
    },
    {
        "name,total,percent,code": "Canada,62,0.0226525392766,CAN"
    },
    {
        "name,total,percent,code": "Chile,23,0.00840336134454,CHL"
    },
    {
        "name,total,percent,code": "China,26,0.00949945195469,CHN"
    },
    {
        "name,total,percent,code": "Colombia,32,0.011691633175,COL"
    },
    {
        "name,total,percent,code": "Costa Rica,9,0.00328827183047,CRI"
    },
    {
        "name,total,percent,code": "Croatia,1,0.000365363536719,HRV"
    },
    {
        "name,total,percent,code": "Cuba,3,0.00109609061016,CUB"
    },
    {
        "name,total,percent,code": "Czechia,6,0.00219218122031,CZE"
    },
    {
        "name,total,percent,code": "Denmark,5,0.0018268176836,DNK"
    },
    {
        "name,total,percent,code": "Dominican Republic,5,0.0018268176836,DOM"
    },
    {
        "name,total,percent,code": "Ecuador,21,0.0076726342711,ECU"
    },
    {
        "name,total,percent,code": "Egypt,13,0.00474972597735,EGY"
    },
    {
        "name,total,percent,code": "El Salvador,5,0.0018268176836,SLV"
    },
    {
        "name,total,percent,code": "Ethiopia,1,0.000365363536719,ETH"
    },
    {
        "name,total,percent,code": "Fiji,2,0.000730727073438,FJI"
    },
    {
        "name,total,percent,code": "Finland,9,0.00328827183047,FIN"
    },
    {
        "name,total,percent,code": "France,23,0.00840336134454,FRA"
    },
    {
        "name,total,percent,code": "Georgia,3,0.00109609061016,GEO"
    },
    {
        "name,total,percent,code": "Germany,63,0.0230179028133,DEU"
    },
    {
        "name,total,percent,code": "Ghana,9,0.00328827183047,GHA"
    },
    {
        "name,total,percent,code": "Greece,14,0.00511508951407,GRC"
    },
    {
        "name,total,percent,code": "Guatemala,13,0.00474972597735,GTM"
    },
    {
        "name,total,percent,code": "Guyana,1,0.000365363536719,GUY"
    },
    {
        "name,total,percent,code": "Haiti,1,0.000365363536719,HTI"
    },
    {
        "name,total,percent,code": "Honduras,6,0.00219218122031,HND"
    },
    {
        "name,total,percent,code": "Hong Kong,20,0.00730727073438,HKG"
    },
    {
        "name,total,percent,code": "Hungary,9,0.00328827183047,HUN"
    },
    {
        "name,total,percent,code": "India,70,0.0255754475703,IND"
    },
    {
        "name,total,percent,code": "Indonesia,7,0.00255754475703,IDN"
    },
    {
        "name,total,percent,code": "Iraq,2,0.000730727073438,IRQ"
    },
    {
        "name,total,percent,code": "Ireland,7,0.00255754475703,IRL"
    },
    {
        "name,total,percent,code": "Israel,3,0.00109609061016,ISR"
    },
    {
        "name,total,percent,code": "Italy,26,0.00949945195469,ITA"
    },
    {
        "name,total,percent,code": "Jamaica,1,0.000365363536719,JAM"
    },
    {
        "name,total,percent,code": "Japan,8,0.00292290829375,JPN"
    },
    {
        "name,total,percent,code": "Jordan,4,0.00146145414688,JOR"
    },
    {
        "name,total,percent,code": "Kazakhstan,1,0.000365363536719,KAZ"
    },
    {
        "name,total,percent,code": "Kenya,10,0.00365363536719,KEN"
    },
    {
        "name,total,percent,code": "\"Korea, Republic Of\",11,0.00401899890391,KOR"
    },
    {
        "name,total,percent,code": "Kyrgyzstan,1,0.000365363536719,KGZ"
    },
    {
        "name,total,percent,code": "Latvia,2,0.000730727073438,LVA"
    },
    {
        "name,total,percent,code": "Lebanon,3,0.00109609061016,LBN"
    },
    {
        "name,total,percent,code": "Liberia,2,0.000730727073438,LBR"
    },
    {
        "name,total,percent,code": "Libya,1,0.000365363536719,LBY"
    },
    {
        "name,total,percent,code": "Malawi,5,0.0018268176836,MWI"
    },
    {
        "name,total,percent,code": "Malaysia,12,0.00438436244063,MYS"
    },
    {
        "name,total,percent,code": "Mexico,81,0.0295944464742,MEX"
    },
    {
        "name,total,percent,code": "Mongolia,1,0.000365363536719,MNG"
    },
    {
        "name,total,percent,code": "Morocco,3,0.00109609061016,MAR"
    },
    {
        "name,total,percent,code": "Mozambique,4,0.00146145414688,MOZ"
    },
    {
        "name,total,percent,code": "Myanmar,2,0.000730727073438,MMR"
    },
    {
        "name,total,percent,code": "Nepal,3,0.00109609061016,NPL"
    },
    {
        "name,total,percent,code": "Netherlands,26,0.00949945195469,NLD"
    },
    {
        "name,total,percent,code": "New Zealand,10,0.00365363536719,NZL"
    },
    {
        "name,total,percent,code": "Nicaragua,4,0.00146145414688,NIC"
    },
    {
        "name,total,percent,code": "Nigeria,39,0.014249177932,NGA"
    },
    {
        "name,total,percent,code": "Norway,10,0.00365363536719,NOR"
    },
    {
        "name,total,percent,code": "Pakistan,11,0.00401899890391,PAK"
    },
    {
        "name,total,percent,code": "\"Palestine, State Of\",3,0.00109609061016,PSE"
    },
    {
        "name,total,percent,code": "Panama,2,0.000730727073438,PAN"
    },
    {
        "name,total,percent,code": "Paraguay,3,0.00109609061016,PRY"
    },
    {
        "name,total,percent,code": "Peru,18,0.00657654366094,PER"
    },
    {
        "name,total,percent,code": "Philippines,14,0.00511508951407,PHL"
    },
    {
        "name,total,percent,code": "Poland,3,0.00109609061016,POL"
    },
    {
        "name,total,percent,code": "Portugal,22,0.00803799780782,PRT"
    },
    {
        "name,total,percent,code": "Puerto Rico,2,0.000730727073438,PRI"
    },
    {
        "name,total,percent,code": "Romania,10,0.00365363536719,ROU"
    },
    {
        "name,total,percent,code": "Russian Federation,14,0.00511508951407,RUS"
    },
    {
        "name,total,percent,code": "Rwanda,2,0.000730727073438,RWA"
    },
    {
        "name,total,percent,code": "Réunion,1,0.000365363536719,REU"
    },
    {
        "name,total,percent,code": "Saudi Arabia,1,0.000365363536719,SAU"
    },
    {
        "name,total,percent,code": "Senegal,1,0.000365363536719,SEN"
    },
    {
        "name,total,percent,code": "Serbia,3,0.00109609061016,SRB"
    },
    {
        "name,total,percent,code": "Sierra Leone,2,0.000730727073438,SLE"
    },
    {
        "name,total,percent,code": "Singapore,11,0.00401899890391,SGP"
    },
    {
        "name,total,percent,code": "Slovakia,3,0.00109609061016,SVK"
    },
    {
        "name,total,percent,code": "Somalia,1,0.000365363536719,SOM"
    },
    {
        "name,total,percent,code": "South Africa,18,0.00657654366094,ZAF"
    },
    {
        "name,total,percent,code": "South Sudan,1,0.000365363536719,SSD"
    },
    {
        "name,total,percent,code": "Spain,104,0.0379978078188,ESP"
    },
    {
        "name,total,percent,code": "Sri Lanka,2,0.000730727073438,LKA"
    },
    {
        "name,total,percent,code": "Sudan,1,0.000365363536719,SDN"
    },
    {
        "name,total,percent,code": "Sweden,20,0.00730727073438,SWE"
    },
    {
        "name,total,percent,code": "Switzerland,9,0.00328827183047,CHE"
    },
    {
        "name,total,percent,code": "Taiwan,18,0.00657654366094,TWN"
    },
    {
        "name,total,percent,code": "\"Tanzania, United Republic Of\",1,0.000365363536719,TZA"
    },
    {
        "name,total,percent,code": "Thailand,2,0.000730727073438,THA"
    },
    {
        "name,total,percent,code": "Timor-Leste,1,0.000365363536719,TLS"
    },
    {
        "name,total,percent,code": "Togo,1,0.000365363536719,TGO"
    },
    {
        "name,total,percent,code": "Trinidad And Tobago,5,0.0018268176836,TTO"
    },
    {
        "name,total,percent,code": "Tunisia,3,0.00109609061016,TUN"
    },
    {
        "name,total,percent,code": "Turkey,7,0.00255754475703,TUR"
    },
    {
        "name,total,percent,code": "Uganda,1,0.000365363536719,UGA"
    },
    {
        "name,total,percent,code": "Ukraine,30,0.0109609061016,UKR"
    },
    {
        "name,total,percent,code": "United Arab Emirates,1,0.000365363536719,ARE"
    },
    {
        "name,total,percent,code": "United Kingdom,87,0.0317866276946,GBR"
    },
    {
        "name,total,percent,code": "United States,1064,0.388746803069,USA"
    },
    {
        "name,total,percent,code": "Uruguay,4,0.00146145414688,URY"
    },
    {
        "name,total,percent,code": "\"Venezuela, Bolivarian Republic Of\",28,0.0102301790281,VEN"
    },
    {
        "name,total,percent,code": "Viet Nam,1,0.000365363536719,VNM"
    },
    {
        "name,total,percent,code": "Zimbabwe,3,0.00109609061016,ZWE"
    }
]

const projection = geoMercator()
    .scale(160)
    .translate([750 / 2, 350 / 2])

export default function D3WorldMap(props) {
    const [geographies, setGeographies] = useState([]);

    const [toolTip, setToolTip] = useState('');

    var colorScheme = d3.schemeReds[6];
    colorScheme.unshift("#eee")
    var colorScale = d3.scaleThreshold()
        .domain([1, 6, 11, 26, 101, 1001])
        .range(colorScheme);

    useEffect(() => {
        fetch("/world-110m.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                console.log("response : ", response);
                response.json().then(worlddata => {
                    setGeographies(feature(worlddata, worlddata.objects.countries).features)
                })
            })
    }, [])

    const handleCountryClick = (data, countryIndex) => {
        console.log("Clicked on country: ", data, geographies[countryIndex])
    }

    const handleMouseEnter = (data, countryIndex) => {
        console.log("Mouse Enter: ", data.properties.name, geographies[countryIndex])
        setToolTip(data.properties.name);
    }

    const handleMouseLeave = (data, countryIndex) => {
        console.log("Mouse Leave: ", data, geographies[countryIndex])
        setToolTip('');
    }

    const handleMarkerClick = i => {
        console.log("Marker: ", cities[i])
    }

    const fillHeatMapColor = (data) => {
        console.log("fillHeatMapColor: ", `rgba(8, 48, 107,${3 / data})`)
        return `rgba(8, 48, 107,${3 / data})`;
    }

    return (
        <div className="rootDiv">
            <svg width={750} height={350} viewBox="0 0 750 350">
                <g className="countries">
                    {
                        geographies.map((d, i) => (
                            <Tooltip title={toolTip} arrow>
                                <path
                                    key={`path-${i}`}
                                    d={geoPath().projection(projection)(d)}
                                    className="country"
                                    // fill={fillHeatMapColor(geographies.length * i)}
                                    fill={`rgba(8, 48, 107,${3 / geographies.length * i})`}
                                    stroke="#FFFFFF"
                                    strokeWidth={0.5}
                                    onClick={() => handleCountryClick(d, i)}
                                    onMouseEnter={() => handleMouseEnter(d, i)}
                                    onMouseLeave={() => handleMouseLeave(d, i)}
                                />
                            </Tooltip>
                        ))
                    }
                </g>
                <g className="markers">
                    {
                        cities.map((city, i) => (
                            <circle
                                key={`marker-${i}`}
                                cx={projection(city.coordinates)[0]}
                                cy={projection(city.coordinates)[1]}
                                r={city.population / 3000000}
                                fill="#E91E63"
                                stroke="#FFFFFF"
                                className="marker"
                                onClick={() => handleMarkerClick(i)}
                            />
                        ))
                    }
                </g>
            </svg>
        </div>
    );
}