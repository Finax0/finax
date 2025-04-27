// I will implement that function to component site with a slide animation pop-up
export default function DateFormat({ fullDate, Year = false, Month = false, Day = false, Hour = false, Minute = false, Hour12 = false }: { fullDate: string, Year?: boolean, Month?: boolean, Day?: boolean, Hour?: boolean, Minute?: boolean, Hour12?: boolean }) {
    const date = new Date(fullDate);

    // Create a custom formatter
    const options = {
        ...(Year ? { year: "numeric" } : {}),
        ...(Month ? { month: "long" } : {}),
        ...(Day ? { day: "2-digit" } : {}),
        ...(Hour ? { hour: "2-digit" } : {}),
        ...(Minute ? { minute: "2-digit" } : {}),
        ...(Hour12 ? { hour12: false } : {}),
    };

    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    return formattedDate;  // Outputs: 24 Oct 2025 00:00


}
