

export function deepClone (obj){
    return JSON.parse(JSON.stringify(obj))
}


export function isEmpty(obj){
    return Object.keys(obj).length <1

}