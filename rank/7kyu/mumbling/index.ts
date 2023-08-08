export function accum(s: string): string {
    return [...s].reduce((mumble, char, charPlace)=> {
        const seperator = charPlace === 0? '' : '-'
        return mumble + seperator + char.toUpperCase() + char.toLowerCase().repeat(charPlace)
    },'');
}
