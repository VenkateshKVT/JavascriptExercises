const apps = [
    {
        name: 'InstaPic',
        platform: 'ANDROID'
    },
    {
        name: 'MadBirds',
        platform: 'IOS'
    },
    {
        name: 'NetMovies',
        platform: 'ANDROID'
    },
    {
        name: 'WeTalk',
        platform: 'WINDOWS'
    }
];

const platforms =[
    {
        name: 'IOS',
        features: [
            'APP_MANAGEMENT',
            'FIREWALL'
        ]
    },
    {
        name: 'ANDROID',
        features: [
            'KIOSK_MODE',
            'FIREWALL'
        ] 
    },
    {
        name: 'WINDOWS',
        features: [
            'KIOSK_MODE',
            'REMOTE_ACCESS'
        ] 
    }
];


function getAppNamesWIthFeature(apps, platforms, featureName) {
    const platform_names = platforms.filter((obj) => {
        return obj.features.includes(featureName);
    }).map(each => {
        return each.name;
    });

    const result = apps.filter(obj => {
        return platform_names.includes(obj.platform);
    }).map(each => {
        return each.name;
    })
    console.log("platform_names =>", JSON.stringify(platform_names));
    console.log("result =>", JSON.stringify(result));
}

getAppNamesWIthFeature(apps, platforms, 'KIOSK_MODE');

