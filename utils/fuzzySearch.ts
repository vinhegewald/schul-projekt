
/**
 * Function to generate a fuzzy regex patterns to create fuzzy searches without using atlas search.
 * 
 * @param input Whatever should be converted into fuzzy regex patterns
 * @returns Fuzzy regex patterns
 */
export function generateFuzzyRegexPatterns(input: string): string {
    const words = input.split(/\s+/);
    const fuzzyPatterns = words.map(word => {
        const fuzzyWord = word
            .split('')
            .map(char => `[^\\w]*${char}[^\\w]*?`)
            .join('');
        return `(?=.*${fuzzyWord})`;
    }).join('');

    return fuzzyPatterns
}