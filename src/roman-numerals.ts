function toPartialRoman(checkArabic: number, romanResult: string, partialRoman: {arabic: number; roman: string}) {
    if (partialRoman.arabic >= checkArabic) {
        partialRoman.roman = partialRoman.roman + romanResult;
        partialRoman.arabic = partialRoman.arabic - checkArabic;
    }
    return {arabic: partialRoman.arabic, roman: partialRoman.roman};
}

export const toRoman = (arabic: number) => {
    let roman: string = '';

    let partialRoman= toPartialRoman(20, 'XX', {arabic, roman});
    partialRoman= toPartialRoman(10, 'X', partialRoman);
    partialRoman= toPartialRoman(9, 'IX', partialRoman);
    partialRoman= toPartialRoman(5, 'V', partialRoman);
    partialRoman= toPartialRoman(4, 'IV', partialRoman);
    partialRoman= toPartialRoman(2, 'II', partialRoman);
    partialRoman= toPartialRoman(1, 'I', partialRoman);

    return partialRoman.roman;
}
