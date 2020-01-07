const platforms = [
    {
        name: 'IOS',
        features: [
            'APP_MANAGEMENT',
            'FIREWALL'
        ],
    },
    {
        name: 'ANDROID',
        features: [
            'FIREWALL',
            'KIOSK_MODE'
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

const apps =[
    {
        name: 'INSTAPIC',
        platform: 'ANDROID'
    },
    {
        name: 'MadBirds',
        platform: 'IOS'
    },
    {
        name: 'WeTalk',
        platform: 'WINDOWS'
    }
];

// function getAppNames(feature) {
//     const filtered_platforms = platforms.filter(plat => {
//         if(plat.features.includes(feature)) {
//             return plat;
//         }
//     }).map(ev => {
//         return ev.name;
//     });
//     const appNames = apps.filter(each => {
//         if(filtered_platforms.includes(each.platform)) {
//             return each;
//         }
//     }).map(ea => {
//         return ea.name;
//     });
//     console.log(" app names  =>", appNames);
// }


// getAppNames('KIOSK_MODE');

function getFeatues(names) {
    // let op = apps.map(app => {
    //     app.features = 
    // })
    var modified_apps = {};
    names.forEach(name => {
        let features;
        let platform;
        platform  = apps.find(each => {
            if(name == each.name) {
                return each;
            }
        });
        features = platforms.find(each => {
            if(platform && platform.platform && each.name == platform.platform) {
                return each;
            }
        })
        modified_apps = apps.map(function(every) {
            if(every.platform == features.name) {
                every.features = features.features; 
            }
        })
    })
    console.log("O/p 1 =>", JSON.stringify(apps));

}

getFeatues(['INSTAPIC', 'NetMovies', 'WeTalk']);