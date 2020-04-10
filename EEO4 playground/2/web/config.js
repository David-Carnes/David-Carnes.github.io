var config = {
    style: 'mapbox://styles/davidcarnes/ck8os9p9q3vqi1is6427je8pw',
    accessToken: 'pk.eyJ1IjoiZGF2aWRjYXJuZXMiLCJhIjoiY2szb3FvZ3I4MjN6ZDNrbnV5dmE2Z2I4biJ9.wFBByoIKSuX8Igwgq1eI9g',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'City Departments and EEO4 Categories',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'cot1',
            title: 'Tallahassee and environs',
            image: '',
            description: '“No man is an Island, entire of it self; every man is a piece of the Continent, a part of the main.”',
            location: {
                center: [-84.26827, 30.43649],
                zoom: 7.61,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'star-metro-stops',
                    opacity: 0
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'starmetro-1',
            title: 'Star Metro',
            image: '',
            description: 'Star Metro runs 47 routes with 939 bus stops.',
            location: {
                center: { lon: -84.1609, lat: 30.4588 },
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'star-metro-stops',
                    opacity: 1
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 1
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'starmetro-2',
            title: 'Star Metro Employees',
            image: '',
            description: '',
            location: {
                center: { lon: -83.9416, lat: 30.3964 },
                zoom: 9.27,
                pitch: 41,
                bearing: -8.90
            },
            onChapterEnter: [
                {
                    layer: 'star-metro-people',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'star-metro-people',
                    opacity: 0
                },
                {
                    layer: 'star-metro-stops',
                    opacity: 0
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 0
                }
            ]
        },
        {
            id: 'uupi-1',
            title: 'Underground Utilities and Public Infrastructure',
            image: '',
            description: 'Say something cool about UUPI.  Water!',
            location: {
                center: { lon: -84.0991, lat: 30.4572 },
                zoom: 10.31,
                pitch: 27.00,
                bearing: -46.8
            },
            onChapterEnter: [
                {
                    layer: 'water-mains',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'water-mains',
                    opacity: 0
                }

            ]
        },
        {
            id: 'uupi-2',
            title: 'Underground Utilities and Public Infrastructure',
            image: '',
            description: 'Say something cool about UUPI.  Sewer!',
            location: {
                center: { lon: -84.2674, lat: 30.5285 },
                zoom: 11.42,
                pitch: 46,
                bearing: -134.2
            },
            onChapterEnter: [
                {
                    layer: 'sewer-mains',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'sewer-mains',
                    opacity: 0
                }

            ]
        },
        {
            id: 'uupi-3',
            title: 'Underground Utilities and Public Infrastructure',
            image: '',
            description: 'Say something cool about UUPI.  Treatment!',
            location: {
                center: { lon: -84.324003, lat: 30.391765 },
                zoom: 16.16,
                pitch: 27,
                bearing: -163.2
            },
            onChapterEnter: [
                {
                    layer: 'sewer-mains',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'sewer-mains',
                    opacity: 0
                }

            ]
        },
        {
            id: 'uupi-4',
            title: 'Underground Utilities and Public Infrastructure',
            image: '',
            description: 'The peoples!',
            location: {
                center: { lon: -84.7602, lat: 30.0594 },////
                zoom: 9.36,
                pitch: 60,
                bearing: 110.3
            },
            onChapterEnter: [
                {
                    layer: 'uupi',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'uupi',
                    opacity: 0
                }

            ]
        },
        {
            id: 'prna-1',
            title: 'Parks, Recreation, and Neighborhood Affairs',
            image: '',
            description: 'Parks!  Trains!  I meant Trails!',
            location: {
                center: { lon: -84.1596, lat: 30.4758 },
                zoom: 11.57,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'parks',
                    opacity: 1
                },
                {
                    layer: 'trails',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parks',
                    opacity: 0
                },
                {
                    layer: 'trails',
                    opacity: 0
                }

            ]
        },
        {
            id: 'prna-2',
            title: 'Parks, Recreation, and Neighborhood Affairs',
            image: '',
            description: 'Regular employees',
            location: {
                center: { lon: -84.0426, lat: 30.4499 },
                zoom: 10.12,
                pitch: 60,
                bearing: -25.2
            },
            onChapterEnter: [
                {
                    layer: 'prna-reg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'prna-reg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'prna-3',
            title: 'Parks, Recreation, and Neighborhood Affairs',
            image: '',
            description: 'Add in the Temp employees',
            location: {
                center: { lon: -83.9406, lat: 30.4767 },
                zoom: 9.82,
                pitch: 50,
                bearing: -36.4
            },
            onChapterEnter: [
                {
                    layer: 'prna-reg',
                    opacity: 1
                },
                {
                    layer: 'prna-temp',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'prna-reg',
                    opacity: 0
                },
                {
                    layer: 'prna-temp',
                    opacity: 0
                }
            ]
        }        

    ]
};
