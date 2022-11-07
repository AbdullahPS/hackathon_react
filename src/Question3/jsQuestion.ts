
type arrayElement=string| number|arrayElement[]


export const transformValue = (val: unknown): unknown => {
    const clonedVal={...val as Record<string,unknown>}
    const solution:Record<string,unknown>={}
    for(const key in clonedVal){
        solution[key]=doTransformation(clonedVal[key] as arrayElement)
    }
    return solution;
}
const doTransformation=(arrayElement:arrayElement):arrayElement=>{
    if (typeof arrayElement ==='number')
    return arrayElement+1;
    else if(typeof arrayElement==='string')
    return arrayElement+ ' AE'
    else 
    {
        const newArray=arrayElement.map(entry=>doTransformation(entry))
        return newArray
    }
}
