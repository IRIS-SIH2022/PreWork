function isMarkerInsidePolygon(x, y, poly) {
  var inside = false;
  for (var ii = 0; ii < poly.length; ii++) {
    var polyPoints = poly[ii];
    for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
      var xi = polyPoints[i].lat, yi = polyPoints[i].lng;
      var xj = polyPoints[j].lat, yj = polyPoints[j].lng;

      var intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
  }

  return inside;
};

const polyDataRaw = [
  {
    type: "Feature",
    stationID: 1, name: "KAPASHERA", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.111425, 28.534482],
          [77.060244, 28.545034],
          [77.046504, 28.536291],
          [77.026237, 28.539909],
          [77.015589, 28.542019],
          [77.007345, 28.55227],
          [77.00391, 28.55016],
          [77.01078, 28.541416],
          [77.008032, 28.538401],
          [77.028298, 28.523023],
          [77.02555, 28.518198],
          [77.043069, 28.510659],
          [77.050626, 28.520912],
          [77.09322, 28.514278],
          [77.100777, 28.524833],
          [77.111425, 28.534482],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 2, name: "VASANT KUNJ SOUTH", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.100777, 28.524833],
          [77.111425, 28.534482],
          [77.124822, 28.546843],
          [77.132035, 28.5381],
          [77.140279, 28.537195],
          [77.149554, 28.528753],
          [77.158485, 28.521214],
          [77.163637, 28.513675],
          [77.176347, 28.507341],
          [77.174973, 28.502516],
          [77.147836, 28.492562],
          [77.133753, 28.485926],
          [77.124478, 28.478686],
          [77.115891, 28.482306],
          [77.119669, 28.494975],
          [77.094594, 28.505833],
          [77.099746, 28.511564],
          [77.09322, 28.514278],
          [77.100777, 28.524833],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 3, name: "VASANT KUNJ NORTH", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.132035, 28.5381],
          [77.124822, 28.546843],
          [77.131444, 28.552273],
          [77.13299, 28.554685],
          [77.135051, 28.555439],
          [77.142093, 28.552876],
          [77.14965, 28.563276],
          [77.151711, 28.564934],
          [77.156176, 28.561317],
          [77.162188, 28.559659],
          [77.166138, 28.553178],
          [77.178847, 28.547299],
          [77.178504, 28.544435],
          [77.184172, 28.540968],
          [77.19774, 28.536445],
          [77.195164, 28.531319],
          [77.190355, 28.528605],
          [77.187607, 28.525741],
          [77.183656, 28.526344],
          [77.182454, 28.523027],
          [77.179019, 28.520011],
          [77.177989, 28.517146],
          [77.178504, 28.513528],
          [77.177989, 28.510663],
          [77.176347, 28.507341],
          [77.163637, 28.513675],
          [77.158485, 28.521214],
          [77.140279, 28.537195],
          [77.132035, 28.5381],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 4, name: "VASANT VIHAR", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.135051, 28.555439],
          [77.134418, 28.564347],
          [77.133388, 28.569471],
          [77.144036, 28.574595],
          [77.150563, 28.573992],
          [77.160524, 28.576404],
          [77.167051, 28.56495],
          [77.176325, 28.555605],
          [77.190409, 28.547767],
          [77.202431, 28.544752],
          [77.19774, 28.536445],
          [77.184172, 28.540968],
          [77.178504, 28.544435],
          [77.178847, 28.547299],
          [77.166138, 28.553178],
          [77.162188, 28.559659],
          [77.156176, 28.561317],
          [77.151711, 28.564934],
          [77.14965, 28.563276],
          [77.142093, 28.552876],
          [77.135051, 28.555439],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 5, name: "R.K. PURAM", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.184627, 28.550985],
          [77.188112, 28.560715],
          [77.189486, 28.569306],
          [77.182787, 28.570361],
          [77.18107, 28.570963],
          [77.178665, 28.570511],
          [77.174543, 28.57232],
          [77.172139, 28.575937],
          [77.162683, 28.572616],
          [77.167051, 28.56495],
          [77.176325, 28.555605],
          [77.184627, 28.550985],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 6, name: "SOUTH CAMPUS", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.160524, 28.576404],
          [77.158957, 28.57819],
          [77.158439, 28.580452],
          [77.160241, 28.584295],
          [77.16462, 28.587611],
          [77.166338, 28.587763],
          [77.166081, 28.589346],
          [77.164879, 28.593038],
          [77.16628, 28.594026],
          [77.169028, 28.5883],
          [77.172807, 28.583328],
          [77.18191, 28.580465],
          [77.175898, 28.577903],
          [77.172139, 28.575937],
          [77.164797, 28.573359],
          [77.162709, 28.572569],
          [77.160524, 28.576404],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 7, name: "PP SUBROTO PARK", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.166338, 28.587763],
          [77.164879, 28.593038],
          [77.166196, 28.595978],
          [77.167227, 28.597786],
          [77.164307, 28.597334],
          [77.15924, 28.601327],
          [77.156149, 28.603286],
          [77.149833, 28.605169],
          [77.143307, 28.606826],
          [77.141074, 28.608032],
          [77.139872, 28.606224],
          [77.150904, 28.602533],
          [77.154956, 28.601224],
          [77.150223, 28.590479],
          [77.151683, 28.588218],
          [77.146359, 28.585205],
          [77.144036, 28.574595],
          [77.150563, 28.573992],
          [77.160524, 28.576404],
          [77.158957, 28.57819],
          [77.158439, 28.580452],
          [77.160241, 28.584295],
          [77.16462, 28.587611],
          [77.166338, 28.587763],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 8, name: "DELHI CANTT.", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.151683, 28.588218],
          [77.150223, 28.590479],
          [77.154956, 28.601224],
          [77.139872, 28.606224],
          [77.135572, 28.607433],
          [77.132137, 28.607885],
          [77.130076, 28.60668],
          [77.127328, 28.605625],
          [77.122004, 28.607433],
          [77.115134, 28.610446],
          [77.101566, 28.594476],
          [77.091776, 28.58423],
          [77.085593, 28.577147],
          [77.088341, 28.575339],
          [77.094352, 28.576243],
          [77.098474, 28.579709],
          [77.118226, 28.574133],
          [77.120974, 28.573681],
          [77.121145, 28.562528],
          [77.127672, 28.566447],
          [77.125954, 28.561926],
          [77.131444, 28.552273],
          [77.13299, 28.554685],
          [77.135051, 28.555439],
          [77.134418, 28.564347],
          [77.133388, 28.569471],
          [77.144036, 28.574595],
          [77.146359, 28.585205],
          [77.151683, 28.588218],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 9, name: "SAGARPUR", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.110439, 28.60492],
          [77.104045, 28.607883],
          [77.100094, 28.609089],
          [77.097518, 28.609013],
          [77.093911, 28.610595],
          [77.097003, 28.608335],
          [77.096144, 28.606829],
          [77.09477, 28.605171],
          [77.089703, 28.605849],
          [77.089016, 28.605096],
          [77.09228, 28.60148],
          [77.092022, 28.599823],
          [77.095972, 28.597714],
          [77.097089, 28.597714],
          [77.098978, 28.596734],
          [77.101566, 28.594476],
          [77.110439, 28.60492],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 10, name: "PALAM VILLAGE", district: "SOUTH-WEST DISTRICT",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.101566, 28.594476],
          [77.098978, 28.596734],
          [77.097089, 28.597714],
          [77.095972, 28.597714],
          [77.092022, 28.599823],
          [77.090132, 28.596205],
          [77.087899, 28.596657],
          [77.085838, 28.595301],
          [77.083519, 28.593569],
          [77.081287, 28.593041],
          [77.080342, 28.591761],
          [77.085065, 28.586863],
          [77.084893, 28.583322],
          [77.083519, 28.580158],
          [77.085593, 28.577147],
          [77.101566, 28.594476],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 11, name: "JAFARPUR KALAN", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [76.973868, 28.607275],
          [76.967951, 28.598848],
          [76.953384, 28.577955],
          [76.93736, 28.559191],
          [76.929983, 28.548619],
          [76.918908, 28.532744],
          [76.90871, 28.536584],
          [76.904826, 28.530185],
          [76.908225, 28.530185],
          [76.917936, 28.522932],
          [76.931047, 28.514399],
          [76.92959, 28.509705],
          [76.923278, 28.514825],
          [76.915508, 28.516532],
          [76.904826, 28.512265],
          [76.894143, 28.512692],
          [76.889773, 28.506718],
          [76.882489, 28.506718],
          [76.875691, 28.512692],
          [76.878119, 28.519519],
          [76.884917, 28.527198],
          [76.873748, 28.534024],
          [76.861123, 28.541276],
          [76.857238, 28.548101],
          [76.845099, 28.555352],
          [76.842185, 28.563455],
          [76.837815, 28.576249],
          [76.840729, 28.59032],
          [76.857238, 28.595863],
          [76.863551, 28.603537],
          [76.873748, 28.621867],
          [76.87909, 28.633375],
          [76.888316, 28.635506],
          [76.901427, 28.634228],
          [76.908225, 28.637211],
          [76.917451, 28.632523],
          [76.919879, 28.624425],
          [76.931047, 28.619736],
          [76.931533, 28.614195],
          [76.9461, 28.608227],
          [76.973868, 28.607275],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 12, name: "CHHAWALA", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [76.931047, 28.514399],
          [76.92959, 28.509705],
          [76.94837, 28.505579],
          [76.97585, 28.516436],
          [76.973102, 28.52488],
          [77.001956, 28.518849],
          [77.00922, 28.514725],
          [77.016777, 28.520304],
          [77.028298, 28.523023],
          [77.008032, 28.538401],
          [77.01078, 28.541416],
          [77.00391, 28.55016],
          [77.007345, 28.55227],
          [77.029031, 28.56554],
          [77.037275, 28.57398],
          [77.037962, 28.579405],
          [77.015978, 28.584529],
          [77.020443, 28.59146],
          [77.010482, 28.590857],
          [77.010482, 28.594172],
          [77.01426, 28.596583],
          [76.998803, 28.60261],
          [76.98575, 28.593871],
          [76.980254, 28.596282],
          [76.967951, 28.598848],
          [76.953384, 28.577955],
          [76.93736, 28.559191],
          [76.918908, 28.532744],
          [76.90871, 28.536584],
          [76.904826, 28.530185],
          [76.908225, 28.530185],
          [76.917936, 28.522932],
          [76.931047, 28.514399],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 13, name: "BABA HARIDAS NAGAR", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [76.919879, 28.624425],
          [76.931047, 28.619736],
          [76.931533, 28.614195],
          [76.9461, 28.608227],
          [76.975235, 28.6078],
          [76.976206, 28.611637],
          [77.004655, 28.635168],
          [76.999846, 28.647216],
          [76.992976, 28.650228],
          [76.985076, 28.645409],
          [76.977862, 28.654144],
          [76.970305, 28.666491],
          [76.964809, 28.672514],
          [76.953501, 28.670861],
          [76.946029, 28.671915],
          [76.940705, 28.671313],
          [76.933406, 28.666947],
          [76.931445, 28.66153],
          [76.923888, 28.649784],
          [76.928398, 28.64571],
          [76.917451, 28.632523],
          [76.919879, 28.624425],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 14, name: "NAJAFGARH", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.01426, 28.596583],
          [77.014717, 28.600211],
          [77.011626, 28.60232],
          [77.009908, 28.604881],
          [77.012313, 28.608497],
          [77.016435, 28.611962],
          [77.017465, 28.615125],
          [77.020042, 28.617536],
          [77.022618, 28.620398],
          [77.021416, 28.625519],
          [77.0209, 28.627478],
          [77.017122, 28.627026],
          [77.013859, 28.625519],
          [77.007847, 28.625067],
          [77.004584, 28.625369],
          [77.000358, 28.628153],
          [76.999188, 28.630646],
          [76.976206, 28.611637],
          [76.975235, 28.6078],
          [76.974008, 28.607536],
          [76.967951, 28.598848],
          [76.980254, 28.596282],
          [76.98575, 28.593871],
          [76.998803, 28.60261],
          [77.01426, 28.596583],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 15, name: "PS. UTTAM NAGAR", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.021416, 28.625519],
          [77.025912, 28.632464],
          [77.024195, 28.63879],
          [77.039996, 28.650236],
          [77.054079, 28.650236],
          [77.057514, 28.640296],
          [77.061636, 28.653248],
          [77.068506, 28.624933],
          [77.053736, 28.620715],
          [77.034156, 28.61951],
          [77.022618, 28.620398],
          [77.021416, 28.625519],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 16, name: "PP SEC.3 DWK", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.030642, 28.61978],
          [77.03649, 28.613387],
          [77.039152, 28.615421],
          [77.040698, 28.614593],
          [77.041471, 28.61045],
          [77.053493, 28.604951],
          [77.057272, 28.603971],
          [77.05023, 28.596212],
          [77.044405, 28.590114],
          [77.037535, 28.595237],
          [77.042688, 28.601113],
          [77.035474, 28.605181],
          [77.030642, 28.61978],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 17, name: "DWARKA NORTH", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.022618, 28.620398],
          [77.030642, 28.61978],
          [77.035474, 28.605181],
          [77.042688, 28.601113],
          [77.037535, 28.595237],
          [77.044405, 28.590114],
          [77.038909, 28.583484],
          [77.041829, 28.57836],
          [77.037275, 28.57398],
          [77.037962, 28.579405],
          [77.015978, 28.584529],
          [77.020443, 28.59146],
          [77.010482, 28.590857],
          [77.010482, 28.594172],
          [77.01426, 28.596583],
          [77.014717, 28.600211],
          [77.011626, 28.60232],
          [77.009908, 28.604881],
          [77.012313, 28.608497],
          [77.016435, 28.611962],
          [77.017465, 28.615125],
          [77.020042, 28.617536],
          [77.022618, 28.620398],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 18, name: "BINDAPUR", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.050877, 28.606148],
          [77.055895, 28.606906],
          [77.055294, 28.609317],
          [77.058213, 28.609844],
          [77.058643, 28.607358],
          [77.063108, 28.606454],
          [77.067058, 28.608112],
          [77.066887, 28.610673],
          [77.06869, 28.617904],
          [77.0662, 28.61813],
          [77.068506, 28.624933],
          [77.053736, 28.620715],
          [77.034156, 28.61951],
          [77.030642, 28.61978],
          [77.03649, 28.613387],
          [77.039152, 28.615421],
          [77.040698, 28.614593],
          [77.041471, 28.61045],
          [77.050877, 28.606148],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 19, name: "DABRI", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.068506, 28.624933],
          [77.069969, 28.621753],
          [77.093911, 28.610595],
          [77.097003, 28.608335],
          [77.096144, 28.606829],
          [77.09477, 28.605171],
          [77.089703, 28.605849],
          [77.089016, 28.605096],
          [77.09228, 28.60148],
          [77.092022, 28.599823],
          [77.090132, 28.596205],
          [77.087899, 28.596657],
          [77.083519, 28.593569],
          [77.081287, 28.593041],
          [77.072743, 28.594197],
          [77.063125, 28.597662],
          [77.057272, 28.603971],
          [77.053493, 28.604951],
          [77.051019, 28.606083],
          [77.055895, 28.606906],
          [77.055294, 28.609317],
          [77.058213, 28.609844],
          [77.058643, 28.607358],
          [77.063108, 28.606454],
          [77.067058, 28.608112],
          [77.066887, 28.610673],
          [77.06869, 28.617904],
          [77.0662, 28.61813],
          [77.068506, 28.624933],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 20, name: "PP SEC.1 DWK", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.081287, 28.593041],
          [77.080342, 28.591761],
          [77.085065, 28.586863],
          [77.084893, 28.583322],
          [77.083519, 28.580158],
          [77.081218, 28.578802],
          [77.076323, 28.578953],
          [77.069281, 28.582042],
          [77.066275, 28.583699],
          [77.066275, 28.585131],
          [77.064987, 28.586186],
          [77.057423, 28.591381],
          [77.05023, 28.596212],
          [77.057272, 28.603971],
          [77.063125, 28.597662],
          [77.072743, 28.594197],
          [77.081287, 28.593041],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 21, name: "DWARKA SOUTH", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.041829, 28.57836],
          [77.052486, 28.569616],
          [77.060043, 28.564944],
          [77.063306, 28.561478],
          [77.068115, 28.563739],
          [77.066741, 28.570521],
          [77.066054, 28.571877],
          [77.072638, 28.58057],
          [77.069281, 28.582042],
          [77.066275, 28.583699],
          [77.066275, 28.585131],
          [77.064987, 28.586186],
          [77.05023, 28.596212],
          [77.044405, 28.590114],
          [77.038909, 28.583484],
          [77.041829, 28.57836],
        ],
      ],
    },
  },
  {
    type: "Feature",
    stationID: 22, name: "DWARKA SEC.23", district: "DWARKA",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [77.068115, 28.563739],
          [77.072401, 28.561018],
          [77.060244, 28.545034],
          [77.046504, 28.536291],
          [77.015589, 28.542019],
          [77.007345, 28.55227],
          [77.029031, 28.56554],
          [77.037275, 28.57398],
          [77.041829, 28.57836],
          [77.052486, 28.569616],
          [77.060043, 28.564944],
          [77.063306, 28.561478],
          [77.068115, 28.563739],
        ],
      ],
    },
  },
];




var args = process.argv.slice(2);

let flag = 0;

function checkBoundaryForAll() {

  for (let i = 0; i < polyDataRaw.length; i++) {
    currentPolyData = polyDataRaw[0].geometry.coordinates[0]
    const result = isMarkerInsidePolygon(args[0], args[1], currentPolyData);
    if (result == true) {
      flag == 1;;
      break;
    }
  }
  console.log(flag)

}

checkBoundaryForAll()
