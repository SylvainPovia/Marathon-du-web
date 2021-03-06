indicators = 
[  
	'RFM16',
	'TN16',
	'PPMsD16',
	'NSP19',
	'DP16',
	'PGP19',
	'PGP19_>60',
	'PC16_15_24',
	'PC16_24_64',
	'PPop16_<18',
	'PPop16_>65',
	'PRP16'
	]


ind_names = 
[	
	['RFM16'		, 'Revenu fiscal médian 2016'], 
	['TN16'			, 'Taux de natalité 2016'], 
	['PPMsD16'		, 'Part de la population municipale 2016'],
	['NSP19'		, 'Nombre de sites et sols pollués 2019'],
	['DP16'			, 'Densité de Population 2016'],
	['PGP19'		, 'Part de médecins au 31/12/2019'], 
	['PGP19_>60'  	, 'Part de médecins (+60 ans) au 31/12/2019'],
	['PC16_15_24'	, 'Part de chômeurs chez les 15-24 ans (RP) 2016'],
	['PC16_24_64'	, 'Part de chômeurs chez les 24-64 ans (RP) 2016'],
	['PPop16_<18' 	, 'Part de population des moins de 18 ans 2016'], 
	['PPop16_>65' 	, 'Part de population des 65 ans ou plus 2016'],
	['PRP16'	 	, 'Part de résidences principales en HLM 2016']
]

ind_names = new Map(ind_names)


icones = 
[
	['RFM16'		, "./icone/revenus.svg"],
	['TN16'			, "./icone/biberon.svg"],
	['PPMsD16'		, "./icone/habitants2.svg"], 
	['NSP19'		, "./icone/pollution.svg"],
	['DP16'			, "./icone/densite_pop.svg"],
	['PGP19'		, "./icone/Médecin.svg"],
	['PGP19_>60'	, "./icone/Médecin.svg"], 
	['PC16_15_24'	, "./icone/recherche_emploi.svg"],
	['PC16_24_64'	, "./icone/recherche_emploi.svg"],
	['PPop16_>65'	, "./icone/habitants.svg"],
	['PPop16_<18'	, "./icone/under18.svg"],
	['PRP16'		, "./icone/hlm.svg"]
]

icones = new Map(icones)

seuil_values = 
[
  ['RFM16'    , 19554],
  ['TN16'     , 8],
  ['PM16'     , 0.0009156237049825108],
  ['NSP19'    , 0],
  ['DP16'     , 61.7],
  ['PGP19'    , 0],
  ['PGP19_>60'  , 0], 
  ['PC16_15_24' , 0.0473],
  ['PC16_24_64' , 0.00986],
  ['PPop16_>65' , 0.222], 
  ['PPop16_<18' , 0.1964],
  ['PRP16'    , 0.0056]
]

seuil_values = new Map(seuil_values)