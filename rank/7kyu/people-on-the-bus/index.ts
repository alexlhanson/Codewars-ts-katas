// Replace this snippet with the starter code for your kata (if any) and export your function
// for your tests to import

export function peopleLeft(busStops: [number, number][]): number {
    return busStops.reduce((peopleLeft, [on, off]) => {
        return peopleLeft + on - off
    }, 0)
}
