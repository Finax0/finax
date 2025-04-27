

export default function TruncateString({ string, firstIndex = 0, lastIndex = string.length, addPoints = false }: { string: string, firstIndex?: number, lastIndex?: number, addPoints?: boolean }) {
    return (
        <div>
            {string.length > 0 && string.length > (lastIndex)
                ? string.substring(firstIndex, lastIndex).trim() + (addPoints ? "..." : "")
                : string
            }
        </div>
    )
}
