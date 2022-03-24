
function changeGradient(heatmap, wt) {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', gradient[wt]);
}
function initMap() {
  const dwarkaLatLng = { lat: 28.6, lng: 77.00 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11.5,
    center: dwarkaLatLng,
    //   mapTypeId: "satellite"
  });
  // Create the initial InfoWindow.

  // infoWindow.open(map);
  // Configure the click listener.
  // map.addListener("click", (mapsMouseEvent) => {
  //   // Close the current InfoWindow.
  //   infoWindow.close();
  //   // Create a new InfoWindow.
  //   infoWindow = new google.maps.InfoWindow({
  //     position: mapsMouseEvent.latLng,
  //   });
  //   infoWindow.setContent(
  //     JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
  //   );
  //   infoWindow.open(map);
  //   console.log(mapsMouseEvent.latLng.toJSON()
  //   )
  // });

  //0-10
  //11-20
  //21-30
  //31-40
  //41-50
  //51-60
  //61-70
  //71-80
  //81-90
  //91-100
  var heatMapData = [
    { location: new google.maps.LatLng(28.582, 76.947), weight: 1 },
    // new google.maps.LatLng(28.782, 77.347),
    // new google.maps.LatLng(28.552, 77.097),
    { location: new google.maps.LatLng(28.592, 77.087), weight: 5 },
    { location: new google.maps.LatLng(28.542, 76.907), weight: 5 },

    { location: new google.maps.LatLng(28.582, 77.247), weight: 2 },
    { location: new google.maps.LatLng(28.552, 77.087), weight: 2 },
    // new google.maps.LatLng(28.582, 77.027),
    { location: new google.maps.LatLng(28.580, 77.061), weight: 7 }
  ];

  var heatMapDataRed = [
    { location: new google.maps.LatLng(28.6012, 77.047), weight: 4 },
    { location: new google.maps.LatLng(28.592, 77.047), weight: 4 },
    { location: new google.maps.LatLng(28.572, 76.887), weight: 5 },
    { location: new google.maps.LatLng(28.562, 76.987), weight: 5 },
    { location: new google.maps.LatLng(28.532, 76.887), weight: 5 },
    { location: new google.maps.LatLng(28.592, 77.147), weight: 4 },
    { location: new google.maps.LatLng(28.599, 77.049), weight: 6 },
    // new google.maps.LatLng(28.589, 77.040),
    { location: new google.maps.LatLng(28.612, 77.054), weight: 7 },

  ];
  var heatmapRed = new google.maps.visualization.HeatmapLayer({
    data: heatMapDataRed
  });
  heatmapRed.setMap(map);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData
  });
  heatmap.setMap(map);
  //   changeGradient(heatmap,1);
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(255, 0, 0, 1)',
  ]
  heatmap.set('gradient', gradient);
  generateBoundaries(map);

  var heatMapDataBlue = [
    { location: new google.maps.LatLng(28.5912, 77.0047), weight: 4 },
    { location: new google.maps.LatLng(28.58082, 76.9947), weight: 4 },
    { location: new google.maps.LatLng(28.583667198249596, 76.942021820305175), weight: 4 },
    { location: new google.maps.LatLng(28.583677198249596, 76.942023820305175), weight: 4 },
    { location: new google.maps.LatLng(28.583687198249596, 76.942026820305175), weight: 4 },
    { location: new google.maps.LatLng(28.583697198249596, 76.942028820305175), weight: 4 },
    { location: new google.maps.LatLng(28.5836997198249596, 76.942043820305175), weight: 4 },
      { location: new google.maps.LatLng(28.56092, 77.380), weight: 5 },
    { location: new google.maps.LatLng(28.56092, 77.383), weight: 5 },
    { location: new google.maps.LatLng(28.56072, 77.383), weight: 5 },
    { location: new google.maps.LatLng(28.5952, 77.087), weight: 5 },
    { location: new google.maps.LatLng(28.6909, 77.0887), weight: 5 },
    { location: new google.maps.LatLng(28.58042, 77.0847), weight: 4 },
    { location: new google.maps.LatLng(28.589, 77.00849), weight: 6 },
    // new google.maps.LatLng(28.589, 77.040),
    { location: new google.maps.LatLng(28.602, 76.904), weight: 7 },

  ];
  
  var heatmapBlue = new google.maps.visualization.HeatmapLayer({
    data: heatMapDataBlue
  });
  heatmapBlue.setMap(map);
 

  var gradientBlue = [
    'rgba(0, 0, 255, 0)',
    'rgba(0, 0, 255, 1)',
    
  ]
  heatmapBlue.set('gradient', gradient);

  
}

function generateBoundaries(map) {
  const zone1 = [
    { lat: 28.607800292239215, lng: 76.97523523825967 },
    { lat: 28.608226593827027, lng: 76.9461002244475 },
    { lat: 28.61419463440623, lng: 76.93153271754143 },
    { lat: 28.619736082730654, lng: 76.93104713397791 },
    { lat: 28.624424772135665, lng: 76.91987871201658 },
    { lat: 28.63252292425031, lng: 76.91745079419891 },
    { lat: 28.637211042519656, lng: 76.90822470649174 },
    { lat: 28.634227718763423, lng: 76.90142653660223 },
    { lat: 28.635506296473487, lng: 76.88831578038675 },
    { lat: 28.633375324968682, lng: 76.87908969267957 },
    { lat: 28.621867331144422, lng: 76.87374827348067 },
    { lat: 28.603537181218915, lng: 76.86355101864642 },
    { lat: 28.59586314549794, lng: 76.85723843232043 },
    { lat: 28.59032043787711, lng: 76.84072859116024 },
    { lat: 28.576249175360907, lng: 76.837815089779 },
    { lat: 28.563455484907468, lng: 76.84218534185084 },
    { lat: 28.555352009789058, lng: 76.84509884323207 },
    { lat: 28.54810100332058, lng: 76.85723843232043 },
    { lat: 28.541276070560492, lng: 76.86112310082875 },
    { lat: 28.534024094991583, lng: 76.87374827348067 },
    { lat: 28.527198250282016, lng: 76.884916695442 },
    { lat: 28.519518646595884, lng: 76.8781185255525 },
    { lat: 28.512691862605674, lng: 76.87569060773482 },
    { lat: 28.506718064109457, lng: 76.88248877762432 },
    { lat: 28.506718064109457, lng: 76.88977253107734 },
    { lat: 28.512691862605674, lng: 76.89414278314918 },
    { lat: 28.512265173932864, lng: 76.90482562154698 },
    { lat: 28.516531982979895, lng: 76.91550845994476 },
    { lat: 28.514825280076366, lng: 76.92327779696133 },
    { lat: 28.50970500564664, lng: 76.92959038328732 },
    { lat: 28.51439860003474, lng: 76.93104713397791 },
    { lat: 28.522931872854247, lng: 76.91793637776243 },
    { lat: 28.530184611739692, lng: 76.90822470649174 },
    { lat: 28.530184611739692, lng: 76.90482562154698 },
    { lat: 28.536583672776988, lng: 76.90871029005525 },
    { lat: 28.532744282783668, lng: 76.9189075448895 },
    { lat: 28.559190575764067, lng: 76.93735972030386 },
    { lat: 28.577954883214087, lng: 76.95338397790057 },
    { lat: 28.59884755931176, lng: 76.96795148480665 },
    { lat: 28.604389817261467, lng: 76.97232173687844 },
    { lat: 28.611636944250563, lng: 76.97620640538675 },
  ];

  const zone2 = [{ lat: 28.60967200977133, lng: 76.98203340814918 },
  { lat: 28.6058352859942, lng: 76.98980274516575 },
  { lat: 28.606687903387275, lng: 77.00242791781767 },
  { lat: 28.606687903387275, lng: 77.0121395890884 },
  { lat: 28.617345036927574, lng: 77.0203945096685 },
  { lat: 28.604556346930888, lng: 77.01456750690609 },
  { lat: 28.599440435001465, lng: 77.01699542472376 },
  { lat: 28.595176984804702, lng: 77.01068283839777 },
  { lat: 28.59219246676553, lng: 77.00776933701658 },
  { lat: 28.58963424100318, lng: 77.013596339779 },
  { lat: 28.590060616286678, lng: 77.01796659185084 },
  { lat: 28.585370393064743, lng: 77.01699542472376 },
  { lat: 28.57940071547633, lng: 77.03544760013811 },
  { lat: 28.57897429696772, lng: 77.03981785220994 },
  { lat: 28.56106315871521, lng: 77.02427917817681 },
  { lat: 28.518831988119427, lng: 77.013596339779 },
  { lat: 28.515845305054494, lng: 77.0082549205801 },
  { lat: 28.515845305054494, lng: 76.99660091505525 },
  { lat: 28.515418629139777, lng: 76.97232173687844 },
  // { lat: 28.5343907997227, lng: 76.90832053178978 },
  { lat: 28.52675496120727, lng: 76.90091727251244 },
  { lat: 28.53589888656661, lng: 76.9093505000515 },
  { lat: 28.532279441881087, lng: 76.92068015093041 },
  { lat: 28.547962804223292, lng: 76.9309798335476 },
  { lat: 28.58806539298879, lng: 76.96222220415306 },
  { lat: 28.603137600353374, lng: 76.97355185503197 },
  ];

  const zone3 = [{ lat: 28.63154973889773, lng: 76.91428969878616 }
    , { lat: 28.623111852005373, lng: 76.91806624907913 }
    , { lat: 28.619796782304885, lng: 76.92630599517288 }
    , { lat: 28.605028382192714, lng: 76.94793532866898 }
    , { lat: 28.605028382192714, lng: 76.96304152984085 }
    , { lat: 28.604425546246162, lng: 76.97574447173538 }
    , { lat: 28.658246693200223, lng: 77.00321029204788 }
    , { lat: 28.660656779926835, lng: 76.98879073638382 }
    , { lat: 28.66909164708893, lng: 76.96201156157913 }
    , { lat: 28.673308826085695, lng: 76.94793532866898 }
    , { lat: 28.67089903030009, lng: 76.94244216460648 }
    , { lat: 28.670597801929834, lng: 76.93076919097366 }
    , { lat: 28.66547678714418, lng: 76.92561934966507 }
    , { lat: 28.659150482215978, lng: 76.9218427993721 }
    , { lat: 28.65342635352594, lng: 76.92012618560257 }
    , { lat: 28.643483703091313, lng: 76.92802260894241 }
    , { lat: 28.63715607117453, lng: 76.93488906402054 }
    , { lat: 28.630828057642482, lng: 76.93420241851273 }
    , { lat: 28.62781458375321, lng: 76.9276792861885 }
    , { lat: 28.62781458375321, lng: 76.92424605864944 }
    , { lat: 28.632937437884834, lng: 76.91909621734085 }
    , { lat: 28.636553419659723, lng: 76.91360305327835 }
    , { lat: 28.630828057642482, lng: 76.91222976226273 }
  ];

  const zone4 = [
    { lat: 28.65312507493798, lng: 76.9998969375557 }
    , { lat: 28.61433472928577, lng: 76.98059463042679 }
    , { lat: 28.604425546246162, lng: 76.99085067290726 }
    , { lat: 28.604850945241913, lng: 76.99565719146194 }
    , { lat: 28.60995515116727, lng: 77.01042006987991 }//
    , { lat: 28.621303645144263, lng: 77.02243636626663 }
    , { lat: 28.63335776926826, lng: 77.02483962554398 }
    , { lat: 28.64209614357995, lng: 77.02758620757523 }
    , { lat: 28.646615706776753, lng: 77.03548263091507 }
    , { lat: 28.649929929352222, lng: 77.04200576323929 }
    , { lat: 28.65414787933287, lng: 77.04097579497757 }
    , { lat: 28.655955520242422, lng: 77.03857253570023 }
    , { lat: 28.64330137947284, lng: 77.01728652495804 }

  ];

  const zone5 = [{ lat: 28.648457676700033, lng: 77.03981785220994 }
    , { lat: 28.657406179443786, lng: 77.0422457700276 }
    , { lat: 28.662519266689138, lng: 77.04807277279008 }
    , { lat: 28.662519266689138, lng: 77.0524430248619 }
    , { lat: 28.65825837797051, lng: 77.06506819751382 }
    , { lat: 28.65783227957307, lng: 77.07380870165748 }
    , { lat: 28.65783227957307, lng: 77.08157803867402 }
    , { lat: 28.668910275005278, lng: 77.08206362223758 }
    , { lat: 28.66337142364896, lng: 77.09226087707184 }
    , { lat: 28.65825837797051, lng: 77.09128970994476 }
    , { lat: 28.642065421514662, lng: 77.10391488259668 }
    , { lat: 28.629279742611452, lng: 77.0704096167127 }
    , { lat: 28.620755091275694, lng: 77.02476476174033 }
    , { lat: 28.64109896523175, lng: 77.02573592886742 }
    , { lat: 28.645474672758496, lng: 77.03787551795583 }
    , { lat: 28.648031538474143, lng: 77.04176018646409 }];

    const zone6 = [
      {lat: 28.63834390371585, lng: 77.09905904696133}
,{lat: 28.63183700302006, lng: 77.11265538674033}
,{lat: 28.616492506037392, lng: 77.11216980317681}
,{lat: 28.60881941659698, lng: 77.11216980317681}
,{lat: 28.603703712239714, lng: 77.11168421961325}
,{lat: 28.60754051386087, lng: 77.10100138121548}
,{lat: 28.609245714049152, lng: 77.09420321132599}
,{lat: 28.611803462432228, lng: 77.08691945787292}
,{lat: 28.61095088655796, lng: 77.08060687154698}
,{lat: 28.606687903387275, lng: 77.07720778660223}
,{lat: 28.599440435001465, lng: 77.0660393646409}
,{lat: 28.60498266168179, lng: 77.0485583563536}
,{lat: 28.60498266168179, lng: 77.03884668508286}
,{lat: 28.618623820285663, lng: 77.02767826312157}
    ];

  const zone7 =[{lat: 28.630132169670823, lng: 77.1145977209945}
    ,{lat: 28.626296193386082, lng: 77.13402106353591}
    ,{lat: 28.612229747774244, lng: 77.13790573204419}
    ,{lat: 28.606687903387275, lng: 77.14373273480665}
    ,{lat: 28.60157209524144, lng: 77.16267049378452}
    ,{lat: 28.595603337607045, lng: 77.16606957872926}
    ,{lat: 28.59219246676553, lng: 77.15975699240333}
    ,{lat: 28.590486989840947, lng: 77.15441557320442}
    ,{lat: 28.594750630272944, lng: 77.14227598411601}
    ,{lat: 28.60071943633434, lng: 77.13402106353591}
    ,{lat: 28.581106372222553, lng: 77.12625172651934}
    ,{lat: 28.572151365726064, lng: 77.12479497582875}
    ,{lat: 28.582385596629102, lng: 77.08983295925415}
    ,{lat: 28.590486989840947, lng: 77.08400595649174}
    ,{lat: 28.597308731521846, lng: 77.06118352900552}
    ,{lat: 28.60498266168179, lng: 77.07623661947515}
    ,{lat: 28.609245714049152, lng: 77.08352037292818}
    ,{lat: 28.613082313268073, lng: 77.087890625}
    ,{lat: 28.603277392299496, lng: 77.10488604972376}
    ,{lat: 28.603277392299496, lng: 77.11216980317681}
    ,{lat: 28.628001089041852, lng: 77.11508330455801}];


    const zone8 =[
      {lat: 28.616492506037392, lng: 77.02816384668509}
,{lat: 28.617661534803414, lng: 77.02019973800459}
,{lat: 28.61344211801695, lng: 77.01813980148115}
,{lat: 28.609523936357, lng: 77.01367660568037}
,{lat: 28.603797100264853, lng: 77.01024337814131}
,{lat: 28.59837138865531, lng: 77.01367660568037}
,{lat: 28.5941511970675, lng: 77.00921340987959}
,{lat: 28.590835213378245, lng: 77.01127334640303}
,{lat: 28.590835213378245, lng: 77.01813980148115}
,{lat: 28.58510735882666, lng: 77.01882644698897}
,{lat: 28.580886634757977, lng: 77.03290267989912}
,{lat: 28.576364242425367, lng: 77.0373658756999}
,{lat: 28.583925888249794, lng: 77.04136617202649}
,{lat: 28.588447955428038, lng: 77.04102284927258}
,{lat: 28.58935234552568, lng: 77.04651601333508}
,{lat: 28.590859645066782, lng: 77.0530391456593}
,{lat: 28.596888627113568, lng: 77.0588756324757}
,{lat: 28.59899868913158, lng: 77.06162221450695}
,{lat: 28.601108708784253, lng: 77.0640254737843}
,{lat: 28.606534279056437, lng: 77.04651601333508}
,{lat: 28.606534279056437, lng: 77.03827626724133}
,{lat: 28.615274886267123, lng: 77.03209645767102}
,{lat: 28.61768596025481, lng: 77.02625997085461}
,{lat: 28.61919285338604, lng: 77.02145345229992}
    ];
  
    const zone9 = [
      {lat: 28.56106315871521, lng: 77.02719267955801}
,{lat: 28.573857140023705, lng: 77.03641876726519}
,{lat: 28.57897429696772, lng: 77.04078901933701}
,{lat: 28.584943998760917, lng: 77.04407277279008}
,{lat: 28.58963424100318, lng: 77.0484430248619}
,{lat: 28.59933973176177, lng: 77.05972677831492}
,{lat: 28.59833973176177, lng: 77.06312586325967}
,{lat: 28.598060616286678, lng: 77.06798169889501}
,{lat: 28.589959190222502, lng: 77.0825492058011}
,{lat: 28.58897429696772, lng: 77.08886179212708}
,{lat: 28.548267622125294, lng: 77.06264027969615}
,{lat: 28.52053862617516, lng: 77.04418810428176}
,{lat: 28.52267188489826, lng: 77.03253409875691}
,{lat: 28.530351258881932, lng: 77.02622151243094}
,{lat: 28.53163110015141, lng: 77.01311075621548}
,{lat: 28.53717689937803, lng: 77.01893775897791}
,{lat: 28.559783675036485, lng: 77.02622151243094}
    ];
    
    const boundary1 = new google.maps.Polygon({
    paths: zone1,
    strokeColor: "#FFFF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.2,
  });

  boundary1.setMap(map);

  const boundary2 = new google.maps.Polygon({
    paths: zone2,
    strokeColor: "#00FFFF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FFFF",
    fillOpacity: 0.2,
  });

  boundary2.setMap(map);


  const boundary3 = new google.maps.Polygon({
    paths: zone3,
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.2,
  });

  boundary3.setMap(map);

  const boundary4 = new google.maps.Polygon({
    paths: zone4,
    strokeColor: "#FFFF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.2,
  });

  boundary4.setMap(map);

  const boundary5 = new google.maps.Polygon({
    paths: zone5,
    strokeColor: "#F11100",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#F11100",
    fillOpacity: 0.2,
  });

  boundary5.setMap(map);

    
  const boundary6 = new google.maps.Polygon({
    paths: zone6,
    strokeColor: "#11F100",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#11F100",
    fillOpacity: 0.2,
  });

  boundary6.setMap(map);

  const boundary7 = new google.maps.Polygon({
    paths: zone7,
    strokeColor: "#FFFF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.2,
  });

  boundary7.setMap(map);

  const boundary8 = new google.maps.Polygon({
    paths: zone8,
    strokeColor: "#F11100",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#F11100",
    fillOpacity: 0.2,
  });

  boundary8.setMap(map);

  const boundary9 = new google.maps.Polygon({
    paths: zone9,
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.2,
  });

  boundary9.setMap(map);

}