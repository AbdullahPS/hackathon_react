
export const transformValue = (val: unknown ):unknown => {
const solution={...val as Object}
const a:Record<string, unknown>={};
for (const [key,value] of Object.entries(solution) ){
 
        a[key]=doTransformation(value)
    
}

    return a;
}

const doTransformation=(value:(string|number|Object)):(string|number|Object)=>{
    if(typeof value==="number")
    return value+1
    else if (typeof value==="string")
    return value+" AE"
    else {
        return Object.values(value).map(child=>doTransformation(child))
    }
}