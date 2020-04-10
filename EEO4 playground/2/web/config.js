var config = {
    style: 'mapbox://styles/davidcarnes/ck8os9p9q3vqi1is6427je8pw',
    accessToken: 'pk.eyJ1IjoiZGF2aWRjYXJuZXMiLCJhIjoiY2szb3FvZ3I4MjN6ZDNrbnV5dmE2Z2I4biJ9.wFBByoIKSuX8Igwgq1eI9g',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'City Departments and EEO4 Categories',
    subtitle: 'yada yada yada',
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
                    layer: 'water-mains',
                    opacity: 0
                },
                {
                    layer: 'star-metro-stops',
                    opacity: 0
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 0
                },
                {
                    layer: 'star-metro-people',
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
                center: [-84.1609, 30.4588],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'water-mains',
                    opacity: 0
                },
                {
                    layer: 'star-metro-stops',
                    opacity: 1
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 1
                },
                {
                    layer: 'star-metro-people',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'starmetro-2',
            title: 'Star Metro Employees',
            image: '',
            description: '',
            location: {
                center: [-83.9416, 30.3964],
                zoom: 9.27,
                pitch: 41,
                bearing: -8.90
            },
            onChapterEnter: [
                {
                    layer: 'water-mains',
                    opacity: 0
                },
                {
                    layer: 'star-metro-stops',
                    opacity: 1
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 1
                },
                {
                    layer: 'star-metro-people',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'uupi-1',
            title: 'Underground Utilities and Public Infrastructure',
            image: '',
            description: 'Say something cool about UUPI.  Water!',
            location: {
                center: [-84.0991, 30.4572],
                zoom: 10.31,
                pitch: 27.00,
                bearing: -46.8
            },
            onChapterEnter: [
                {
                    layer: 'water-mains',
                    opacity: 1
                },
                {
                    layer: 'star-metro-stops',
                    opacity: 0
                },
                {
                    layer: 'star-metro-routes',
                    opacity: 0
                },
                {
                    layer: 'star-metro-people',
                    opacity: 0
                }
            ],
            onChapterExit: []
        }       

    ]
};
