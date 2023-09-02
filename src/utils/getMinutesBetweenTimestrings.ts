export default function getMinutesBetweenTimestrings(startTimeString: string, endTimeString: string): number {
    // Split the time strings into hours and minutes
    const startTimeParts = startTimeString.split(":");
    const endTimeParts = endTimeString.split(":");

    // Create Date objects using the time strings
    const startTime = new Date();
    startTime.setHours(parseInt(startTimeParts[0], 10), parseInt(startTimeParts[1], 10), 0);

    const endTime = new Date();
    endTime.setHours(parseInt(endTimeParts[0], 10), parseInt(endTimeParts[1], 10), 0);

    // Calculate the duration in milliseconds
    const durationInMillis = endTime.valueOf() - startTime.valueOf();

    // Convert the duration to minutes
    return Math.floor(durationInMillis / (1000 * 60));
}