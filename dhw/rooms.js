
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/

var rooms = [
{suite: "M100",office: undefined,hoods: undefined,type: "Office",footage: "Devon",rate: undefined,tenant: "Innovation Depot"},
{suite: "M103",office: undefined,hoods: undefined,type: "Office",footage: "Kevin",rate: undefined,tenant: "Innovation Depot"},
{suite: "M104",office: undefined,hoods: undefined,type: "Office",footage: "Desiree",rate: undefined,tenant: "Innovation Depot"},
{suite: "M105",office: undefined,hoods: undefined,type: "Office",footage: "Susan",rate: undefined,tenant: "Innovation Depot"},
{suite: "R128",office: "D12",hoods: undefined,type: "Gym/Think Room",footage: "Gym",rate: undefined,tenant: undefined},
{suite: "C108",office: "D08",hoods: undefined,type: "Office",footage: "Blake",rate: undefined,tenant: "Innovation Depot"},
{suite: "L111",office: undefined,hoods: undefined,type: "Lab",footage: "Shared Lab",rate: undefined,tenant: "Innovation Depot"},
{suite: "A101",office: "A05",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Winter Industry Piping"},
{suite: "A102",office: "B01",hoods: undefined,type: "Office",footage: 565,rate: undefined,tenant: "Sanguard Security"},
{suite: "A103",office: "A06",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Winter Industry Piping"},
{suite: "A105",office: "A08",hoods: undefined,type: "Office",footage: 3265,rate: undefined,tenant: "MedSnap"},
{suite: "A106",office: "B02",hoods: undefined,type: "Office",footage: 540,rate: undefined,tenant: "MedSnap"},
{suite: "A107",office: "A08",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "MedSnap"},
{suite: "A109",office: "A09",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "MedSnap"},
{suite: "A110",office: "B03",hoods: undefined,type: "Office",footage: 550,rate: undefined,tenant: "MedSnap"},
{suite: "A111",office: "A10",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "MedSnap"},
{suite: "A112",office: "B04",hoods: undefined,type: "Office",footage: 480,rate: undefined,tenant: "Panorama Public Relations"},
{suite: "A113",office: "A11",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "MedSnap"},
{suite: "A119",office: "A12",hoods: undefined,type: "Office",footage: 3345,rate: undefined,tenant: "Southeastern Commercial Finance"},
{suite: "B101",office: "B12",hoods: undefined,type: "Office",footage: 235,rate: undefined,tenant: "Birmingham Business Resource Center"},
{suite: "B102",office: "C04",hoods: undefined,type: "Office",footage: 455,rate: undefined,tenant: "Educator Technologies"},
{suite: "B103",office: "B11",hoods: undefined,type: "Office",footage: 235,rate: undefined,tenant: "Printwise"},
{suite: "B105",office: "B10",hoods: undefined,type: "Office",footage: 235,rate: undefined,tenant: "Printwise"},
{suite: "B106",office: "C03",hoods: undefined,type: "Office",footage: 850,rate: undefined,tenant: "Birmingham Business Resource Center"},
{suite: "B107",office: "B09",hoods: undefined,type: "Office",footage: 235,rate: undefined,tenant: "Stringfellow Technologies"},
{suite: "B108",office: "C16",hoods: undefined,type: "Office",footage: 1250,rate: undefined,tenant: "Chronicle Studios"},
{suite: "B109",office: "B08",hoods: undefined,type: "Office",footage: 235,rate: undefined,tenant: undefined},
{suite: "B111",office: "B07",hoods: undefined,type: "Office",footage: 380,rate: undefined,tenant: "Chronicle Studios"},
{suite: "B112",office: "C17",hoods: undefined,type: "Office",footage: 410,rate: undefined,tenant: "Women's Imaging Solutions"},
{suite: "B117",office: "J06",hoods: undefined,type: "Office",footage: 2820,rate: undefined,tenant: "Vista Engineering"},
{suite: "B124",office: "J07",hoods: undefined,type: "Office",footage: 710,rate: undefined,tenant: "Advanced Systems Unlimited"},
{suite: "B125",office: "J09",hoods: undefined,type: "Office",footage: 685,rate: undefined,tenant: "Instagift"},
{suite: "B126",office: "J10",hoods: undefined,type: "Office",footage: 955,rate: undefined,tenant: "Instagift"},
{suite: "C109",office: "C26",hoods: undefined,type: "Office",footage: 590,rate: undefined,tenant: "Adit4Less"},
{suite: "C110",office: "D09",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Congruent Solutions"},
{suite: "C112",office: "D10",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: undefined},
{suite: "C114",office: "D11",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "iSeek Solutions"},
{suite: "C118",office: "G06",hoods: undefined,type: "Office",footage: 820,rate: undefined,tenant: "IPG Photonics"},
{suite: "C123",office: "G14",hoods: undefined,type: "Office",footage: 2750,rate: undefined,tenant: "BioGX"},
{suite: "C124",office: "G18",hoods: undefined,type: "Office",footage: 2125,rate: undefined,tenant: "IPG Photonics"},
{suite: "C129 / E125",office: "G09",hoods: undefined,type: "Office",footage: 2220,rate: undefined,tenant: undefined},
{suite: "C130",office: "G20",hoods: undefined,type: "Office",footage: 810,rate: undefined,tenant: "BioDtech"},
{suite: "C132",office: "G10",hoods: undefined,type: "Office",footage: 675,rate: undefined,tenant: "FireRock"},
{suite: "D101",office: "D31",hoods: undefined,type: "Office",footage: 195,rate: undefined,tenant: "ThoughtJet"},
{suite: "D102",office: "D22",hoods: undefined,type: "Office",footage: 295,rate: undefined,tenant: "No I.D."},
{suite: "D103",office: "D30",hoods: undefined,type: "Office",footage: 195,rate: undefined,tenant: "Malcovery"},
{suite: "D104",office: "D20",hoods: undefined,type: "Office",footage: 295,rate: undefined,tenant: undefined},
{suite: "D105",office: "D29",hoods: undefined,type: "Office",footage: 840,rate: undefined,tenant: "Malcovery"},
{suite: "D106",office: "D24",hoods: undefined,type: "Office",footage: 305,rate: undefined,tenant: "Projects Unlimited"},
{suite: "D107",office: "D28",hoods: undefined,type: "Office",footage: 200,rate: undefined,tenant: "Essnova"},
{suite: "D108",office: "D25",hoods: undefined,type: "Office",footage: 300,rate: undefined,tenant: "Projects Unlimited"},
{suite: "E101",office: "F09",hoods: undefined,type: "Office",footage: 1810,rate: undefined,tenant: undefined},
{suite: "E102",office: "F36",hoods: undefined,type: "Office",footage: 340,rate: undefined,tenant: "Lifestages Publishing"},
{suite: "E103",office: "E17",hoods: undefined,type: "Office",footage: 260,rate: undefined,tenant: "E-Data Solutions"},
{suite: "E104",office: "F35",hoods: undefined,type: "Office",footage: 220,rate: undefined,tenant: "Eco Three"},
{suite: "E105",office: "E16",hoods: undefined,type: "Office",footage: 260,rate: undefined,tenant: "WM Mortgage"},
{suite: "E106/F101",office: "F34",hoods: undefined,type: "Office",footage: 365,rate: undefined,tenant: "Blue Ocean Technologies"},
{suite: "E107",office: "E15",hoods: undefined,type: "Office",footage: 260,rate: undefined,tenant: undefined},
{suite: "E108",office: "F09",hoods: undefined,type: "Office",footage: 315,rate: undefined,tenant: "LawFit"},
{suite: "E109",office: "D19",hoods: undefined,type: "Office",footage: 1160,rate: undefined,tenant: "VEAR"},
{suite: "E110",office: "F10",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Select My Space"},
{suite: "E111",office: "D18",hoods: undefined,type: "Office",footage: 835,rate: undefined,tenant: "Zappend"},
{suite: "E112",office: "F11",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Alignment Simple Solutions"},
{suite: "E114",office: "F12",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Fleetio"},
{suite: "E115",office: "D17",hoods: undefined,type: "Office",footage: 420,rate: undefined,tenant: "Class Action Capital"},
{suite: "E116",office: "F13",hoods: undefined,type: "Office",footage: 475,rate: undefined,tenant: "ComplyMD"},
{suite: "E117",office: "D16",hoods: undefined,type: "Office",footage: 420,rate: undefined,tenant: undefined},
{suite: "E118",office: "F14",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "ComplyMD"},
{suite: "E120",office: "F15",hoods: undefined,type: "Office",footage: 210,rate: undefined,tenant: "Kelly Green Marketing"},
{suite: "E121",office: "G10",hoods: undefined,type: "Office",footage: 200,rate: undefined,tenant: "FireRock"},
{suite: "E123",office: "G10",hoods: undefined,type: "Office",footage: 195,rate: undefined,tenant: "FireRock"},
{suite: "E122",office: "F16",hoods: undefined,type: "Office",footage: 315,rate: undefined,tenant: "Knight Eady Sports & Entertainment"},
{suite: "E124",office: "F17",hoods: undefined,type: "Office",footage: 1650,rate: undefined,tenant: undefined},
{suite: "E126",office: "F18",hoods: undefined,type: "Office",footage: 1900,rate: undefined,tenant: undefined},
{suite: "F102",office: "F37",hoods: undefined,type: "Office",footage: 640,rate: undefined,tenant: "Blue Ocean Technologies"},
{suite: "F103",office: "F33",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: "Blue Ocean Technologies"},
{suite: "F104",office: "F02",hoods: undefined,type: "Office",footage: 670,rate: undefined,tenant: undefined},
{suite: "F105",office: "F32",hoods: undefined,type: "Office",footage: 385,rate: undefined,tenant: "Blue Ocean Technologies"},
{suite: "G102",office: "F30",hoods: undefined,type: "Office",footage: 390,rate: undefined,tenant: "Salesity"},
{suite: "G104",office: "F29",hoods: undefined,type: "Office",footage: 420,rate: undefined,tenant: "Salesity"},
{suite: "G105",office: "F27",hoods: undefined,type: "Office",footage: 1170,rate: undefined,tenant: "Talent Quest"},
{suite: "G106",office: "F28",hoods: undefined,type: "Office",footage: 430,rate: undefined,tenant: "Massive Media"},
{suite: "H101",office: "F23",hoods: undefined,type: "Office",footage: 200,rate: undefined,tenant: "2B Solutions"},
{suite: "H102",office: "F22",hoods: undefined,type: "Office",footage: 1130,rate: undefined,tenant: "2B Solutions"},
{suite: "H103",office: "F19",hoods: undefined,type: "Office",footage: 1495,rate: undefined,tenant: "ComplyMD"},
{suite: "L101",office: "M01",hoods: false,type: "Lab",footage: 685,rate: undefined,tenant: "BioDtech"},
{suite: "L102",office: "L05",hoods: false,type: "Lab",footage: 885,rate: undefined,tenant: undefined},
{suite: "L103",office: "M02",hoods: false,type: "Lab",footage: 825,rate: undefined,tenant: undefined},
{suite: "L105",office: "M03",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: undefined},
{suite: "L106",office: "L06",hoods: false,type: "Lab",footage: 545,rate: undefined,tenant: "IceBox Coffee"},
{suite: "L107",office: "M04",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: "ADV Bioscience"},
{suite: "L108",office: "L07",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: undefined},
{suite: "L109",office: "M05",hoods: false,type: "Lab",footage: 835,rate: undefined,tenant: undefined},
{suite: "L110",office: "L08",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: undefined},
{suite: "L112",office: "L09",hoods: false,type: "Lab",footage: 555,rate: undefined,tenant: "Advanced Skin Technology"},
{suite: "L113",office: "M07",hoods: true,type: "Lab",footage: 845,rate: undefined,tenant: "Immunocreate"},
{suite: "L114",office: "N03",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: "ADV Bioscience"},
{suite: "L115",office: "M08",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: "Soluble Therapeutics"},
{suite: "L116",office: "N02",hoods: true,type: "Lab",footage: 835,rate: undefined,tenant: "Soluble Therapeutics"},
{suite: "L117",office: "M09",hoods: false,type: "Lab",footage: 835,rate: undefined,tenant: "Soluble Therapeutics"},
{suite: "L118",office: "N01",hoods: false,type: "Lab",footage: 1000,rate: undefined,tenant: "Soluble Therapeutics"},
{suite: "L121",office: "N04",hoods: false,type: "Lab",footage: 970,rate: undefined,tenant: "BioGX"},
{suite: "L123",office: "N05",hoods: true,type: "Lab",footage: 970,rate: undefined,tenant: "BioGX"},
{suite: "L125",office: "N06",hoods: true,type: "Lab",footage: 660,rate: undefined,tenant: "BioGX"},
{suite: "L131",office: "L15",hoods: true,type: "Lab",footage: 625,rate: undefined,tenant: "GTI"},
{suite: "L133",office: "L14",hoods: true,type: "Lab",footage: 1050,rate: undefined,tenant: "NuCell"},
{suite: "L134",office: "P01",hoods: undefined,type: "Office",footage: 1580,rate: undefined,tenant: "GTI"},
{suite: "L135",office: "L13",hoods: false,type: "Lab",footage: 695,rate: undefined,tenant: "Choice Research"},
{suite: "L136",office: "P03",hoods: undefined,type: "Office",footage: 310,rate: undefined,tenant: "Endomimetics"},
{suite: "L138",office: "P04",hoods: undefined,type: "Office",footage: 310,rate: undefined,tenant: "BioGX"},
{suite: "L140",office: "P05",hoods: undefined,type: "Office",footage: 1410,rate: undefined,tenant: "ThinkData"},
{suite: "L142",office: "P06",hoods: undefined,type: "Office",footage: 975,rate: undefined,tenant: "ThinkData"},
{suite: "M126",office: "E01",hoods: undefined,type: "Cafe",footage: 3750,rate: undefined,tenant: "Culinard Cafe"},
{suite: "M128",office: "E04",hoods: undefined,type: "Office",footage: 3140,rate: undefined,tenant: "Atlas RFID"},
{suite: "M129",office: "D02",hoods: undefined,type: "Office",footage: 690,rate: undefined,tenant: "Runtime Computing"},
{suite: "M130",office: "E06",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: "Timberline Investments"},
{suite: "M132",office: "E07",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: "Metrocket"},
{suite: "M133",office: "D03",hoods: undefined,type: "Office",footage: 880,rate: undefined,tenant: "Birmingham International Center"},
{suite: "M134",office: "E08",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: "My Supply Chain Group"},
{suite: "M135",office: "D04",hoods: undefined,type: "Office",footage: 360,rate: undefined,tenant: "Appsolute Genius"},
{suite: "M136",office: "E09",hoods: undefined,type: "Office",footage: 2350,rate: undefined,tenant: "Atlas RFID"},
{suite: "M138",office: "E10",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: "Suture Health"},
{suite: "M141",office: "D20",hoods: undefined,type: "Office",footage: 550,rate: undefined,tenant: "Innovative Home Builders"},
{suite: "M142",office: "E12",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: undefined},
{suite: "M144",office: "E13",hoods: undefined,type: "Office",footage: 225,rate: undefined,tenant: undefined},
{suite: "M146",office: "E14",hoods: undefined,type: "Office",footage: 320,rate: undefined,tenant: undefined},
{suite: "R103",office: "K01",hoods: undefined,type: "Office",footage: 1400,rate: undefined,tenant: "Remtech"},
{suite: "R107",office: "J01",hoods: undefined,type: "Office",footage: 265,rate: undefined,tenant: "Zertis"},
{suite: "R108",office: "C18",hoods: undefined,type: "Office",footage: 420,rate: undefined,tenant: "Magnolia River Services"},
{suite: "R109",office: "J02",hoods: undefined,type: "Office",footage: 270,rate: undefined,tenant: "Internet Broadcasting Corporation"},
{suite: "R112",office: "C19",hoods: undefined,type: "Office",footage: 835,rate: undefined,tenant: "VIPAAR"},
{suite: "R115",office: "J05",hoods: undefined,type: "Office",footage: 350,rate: undefined,tenant: "Slade LETP"},
{suite: "R117",office: "H01",hoods: undefined,type: "Office",footage: 825,rate: undefined,tenant: "FreeTextbooks.com"},
{suite: "R118",office: "C21",hoods: undefined,type: "Office",footage: 1970,rate: undefined,tenant: "ASBDC"},
{suite: "R123",office: "H02",hoods: undefined,type: "Office",footage: 1430,rate: undefined,tenant: "Advanced Skin Technology"},
{suite: "R125",office: "G01",hoods: undefined,type: "Office",footage: 280,rate: undefined,tenant: "IPG Photonics"},
{suite: "R127",office: "G02",hoods: undefined,type: "Office",footage: 220,rate: undefined,tenant: "IPG Photonics"},
{suite: "R129",office: "G03",hoods: undefined,type: "Office",footage: 220,rate: undefined,tenant: "IPG Photonics"},
{suite: "R131",office: "G04G",hoods: undefined,type: "Office",footage: 190,rate: undefined,tenant: "IPG Photonics"},
{suite: "R133",office: "G04E",hoods: undefined,type: "Office",footage: 190,rate: undefined,tenant: "IPG Photonics"},
{suite: "R134",office: "D13",hoods: undefined,type: "Office",footage: 800,rate: undefined,tenant: "Strada Professional Services"},
{suite: "R135",office: "G04D",hoods: undefined,type: "Office",footage: 190,rate: undefined,tenant: "IPG Photonics"},
{suite: "R136",office: "D27",hoods: undefined,type: "Office",footage: 330,rate: undefined,tenant: "Concert Care"},
{suite: "R137",office: "G04B",hoods: undefined,type: "Office",footage: 190,rate: undefined,tenant: "IPG Photonics"},
{suite: "R142",office: "D26",hoods: undefined,type: "Office",footage: 500,rate: undefined,tenant: "IT Rockstars"},
{suite: "R145",office: "G05",hoods: undefined,type: "Office",footage: 860,rate: undefined,tenant: "Integrated Media Systems"}
];



var this_svg = document.getElementById('innovation-depot-map');
this_svg.addEventListener (
    'load',
    function (e) {
        process_innovation_depot_svg();
    });

var global_svg_doc = undefined;
var global_svg_element = undefined;

function process_innovation_depot_svg() {
    var i,id_room;
    svg_element = document.getElementById('innovation-depot-map');
    global_svg_element = svg_element;
    svg_doc = svg_element.contentDocument;
    global_svg_doc = svg_doc;
//    prepare_map(svg_doc);
    our_layer = svg_doc.getElementById('layer1');
    for(i = 0;i< rooms.length;i++) {
        id_room = svg_doc.getElementById(rooms[i].office);
        if(id_room != undefined) {
            attach_tenant_data(id_room, rooms[i],our_layer);
        }
    }
}

function attach_tenant_data(room_element, tenant_data,our_layer) {
    var i;
    var icon_index = 0;
    var icons = [];
    var initial_pt_size = 10;
    room_element.style.fill = "#f00";
    room_element.style.opacity = ".2";
    element_bbox = room_element.getBBox();
    element_y = room_element.y;
    if(tenant_data.tenant != undefined ) {
        room_element.style.fill = "#0f0";
        fo_element = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        fo_element.id = "fo_" + room_element.id;
        fo_element.setAttribute('style',"overflow: visible;text-anchor: middle;font-size:8pt;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:#000000;font-family:Sans");
        fo_element.setAttribute('x',element_bbox.x);
        fo_element.setAttribute('y',element_bbox.y + (element_bbox.height / 10));
        fo_element.setAttribute('width',element_bbox.width);
        fo_element.setAttribute('height',element_bbox.height / 2);
        div_element = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        div_element.setAttribute('style',"text-align: center");
        text_node = document.createTextNode(tenant_data.tenant);
        div_element.appendChild(text_node);
        fo_element.appendChild(div_element);
        room_element.parentNode.appendChild(fo_element);
        fo_bbox = fo_element.getBBox();
        while(fo_bbox.width > element_bbox.width || fo_bbox.height > element_bbox.height || initial_pt_size == 0) {
            alert("smaller");
            initial_pt_size--;
            fo_element.style.fontSize = "" + initial_pt_size + "pt";
            fo_bbox = fo_element.getBBox();
        }
    }
    if(tenant_data.hoods) {
        var title;
        icons[icon_index] = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icons[icon_index].setAttributeNS("http://www.w3.org/1999/xlink",'xlink:href','hoods.png')
        icons[icon_index].setAttribute('x',element_bbox.x + 4 + (16 * icon_index));
        icons[icon_index].setAttribute('y',element_bbox.y + (element_bbox.height - 20));
        icons[icon_index].setAttribute('width',16);
        icons[icon_index].setAttribute('height',16);
        icons[icon_index].style.opacity = 1;
        icons[icon_index].style.stroke = "#000000";
        icons[icon_index].style.opacity = 1;
        icons[icon_index].setAttribute("preserveAspectRatio","xMinYMin meet");
        icons[icon_index].set
        title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.appendChild(document.createTextNode("Hoods"));
        icons[icon_index].appendChild(title);
        icon_index++;
    }
    if(tenant_data.type == 'Lab') {
        var title;
        icons[icon_index] = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icons[icon_index].setAttributeNS("http://www.w3.org/1999/xlink",'xlink:href','lab.png')
        icons[icon_index].setAttribute('x',element_bbox.x + 4 + (16 * icon_index));
        icons[icon_index].setAttribute('y',element_bbox.y + (element_bbox.height - 20));
        icons[icon_index].setAttribute('width',16);
        icons[icon_index].setAttribute('height',16);
        icons[icon_index].style.opacity = 1;
        icons[icon_index].style.stroke = "#000000";
        icons[icon_index].style.opacity = 1;
        icons[icon_index].setAttribute("preserveAspectRatio","xMinYMin meet");
        icons[icon_index].set
        title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.appendChild(document.createTextNode("Lab"));
        icons[icon_index].appendChild(title);
        icon_index++;
    } else if(tenant_data.type == 'Office') {
        var title;
        icons[icon_index] = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icons[icon_index].setAttributeNS("http://www.w3.org/1999/xlink",'xlink:href','office.png')
        icons[icon_index].setAttribute('x',element_bbox.x + 4 + (16 * icon_index));
        icons[icon_index].setAttribute('y',element_bbox.y + (element_bbox.height - 20));
        icons[icon_index].setAttribute('width',16);
        icons[icon_index].setAttribute('height',16);
        icons[icon_index].style.opacity = 1;
        icons[icon_index].style.stroke = "#000000";
        icons[icon_index].style.opacity = 1;
        icons[icon_index].setAttribute("preserveAspectRatio","xMinYMin meet");
        icons[icon_index].set
        title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.appendChild(document.createTextNode("Office"));
        icons[icon_index].appendChild(title);
        icon_index++;
    }
    if(tenant_data.tenant == undefined) {
        var title;
        icons[icon_index] = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icons[icon_index].setAttributeNS("http://www.w3.org/1999/xlink",'xlink:href','no_tenant.png')
        icons[icon_index].setAttribute('x',element_bbox.x + 4 + (16 * icon_index));
        icons[icon_index].setAttribute('y',element_bbox.y + (element_bbox.height - 20));
        icons[icon_index].setAttribute('width',16);
        icons[icon_index].setAttribute('height',16);
        icons[icon_index].style.opacity = 1;
        icons[icon_index].style.stroke = "#000000";
        icons[icon_index].style.opacity = 1;
        icons[icon_index].setAttribute("preserveAspectRatio","xMinYMin meet");
        icons[icon_index].set
        title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.appendChild(document.createTextNode("No Tenant"));
        icons[icon_index].appendChild(title);
        icon_index++;
    }
    for(i = 0;i<icons.length;i++) {
        our_layer.appendChild(icons[i]);
    }

}

function prepare_map(svg_doc) {
    var svg = svg_doc.getElementById("svg2");
    global_svg_doc = svg_doc;
    var width  = svg.getAttribute("width");
    var height = svg.getAttribute("height");

    svg.setAttribute("viewBox", "0 0 " + width + ' ' + height);
    svg.setAttribute('preserveAspectRatio', 'xMidYmid meet')
    window_resize();
}

function window_resize() {
    return;
    var svg = global_svg_doc.getElementById("svg2");
//    svg.setAttribute("width", $(".map-container").width());
    svg.setAttribute("height",$(global_svg_element).parent().height());
   }

