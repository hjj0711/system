const Routable = {
    'Home': '/'
}

export function getRouterPath(componentName):string {
    try {
        return Routable[componentName.toString];
    } catch (error) {
        throw error 
    }
}