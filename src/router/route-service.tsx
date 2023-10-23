const Routable = {
    'Home': '/home-page',
    'SideLayout': '/side-layout',
    'SystemDescription': '/system-description',
    'SystemFunction': '/system-function',
    'Win10Desktop': '/win10-desktop',
    'CustomDesktop': '/custom-desktop',
    'StoragePage': '/storage-page',
    'Contact': '/contact',
}

export function  getRouterPath (componentName):string {
    if (Routable[componentName]) {
        return Routable[componentName];
    } else {
        throw new Error ('cant find path')
    }
}