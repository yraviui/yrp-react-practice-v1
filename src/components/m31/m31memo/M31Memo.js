/* 
Q. A car is travelling 50 km in 1 hours. How much of a distance will it travel in 12 minutes?
Speed of car =50 km/hr, Travel Time = 12 min
Solution:
Travel time in hr =12/60 hr, We know Speed = Distance/Time
So,Distance= Speed * Time
Total distance covered by car in 12/60 is = 50*0.2
Hence, total distance covered by car in 12 min is 10 km.
*/

export const distence = (speed, time) => {
    // convert one minit speed by speed and time hours to minits
    const speedPerMinit = speed / 60;
    console.log('speedPerMinit: ', speedPerMinit)
    const distence = speedPerMinit * time
    console.log('distence: ', distence)
    return distence
}

/* 
2. A car travelling 300 km in 5 hours. How much of distance will it travel if it increse the 50% of speed?
*/
export const IncreasedDistence = (time, increasedSpeed) => {
    // lenth of travel: 100% speed takes (5h is 60 * 5)
    // lenthg: 100 * 300
    // const defaultLenth = 100 * (time * 60)
    // if 150% how much time
    // const increasedLenth = 150 * t
    const isIncreasedSpeedTime = time * (100 / increasedSpeed)
    return isIncreasedSpeedTime
}