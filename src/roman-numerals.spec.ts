import {toRoman} from "./roman-numerals";

describe('roman numerals', (): void => {
    it('should be empty string for 0', (): void => {
        const arabic: number = 0;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('');
    });

    it('should be I for 1', (): void => {
        const arabic: number = 1;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('I');
    });

    it('should be II for 2', (): void => {
        const arabic: number = 2;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('II');
    });

    it('should be III for 3', (): void => {
        const arabic: number = 3;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('III');
    });

    it('should be IV for 4', (): void => {
        const arabic: number = 4;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('IV');
    });

    it('should be V for 5', (): void => {
        const arabic: number = 5;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('V');
    });

    it('should be VI for 6', (): void => {
        const arabic: number = 6;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('VI');
    });

    it('should be VIII for 8', (): void => {
        const arabic: number = 8;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('VIII');
    });

    it('should be IX for 9', (): void => {
        const arabic: number = 9;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('IX');
    });

    it('should be X for 10', (): void => {
        const arabic: number = 10;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('X');
    });

    it('should be XIII for 13', (): void => {
        const arabic: number = 13;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XIII');
    });

    it('should be XIV for 14', (): void => {
        const arabic: number = 14;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XIV');
    });

    it('should be XV for 15', (): void => {
        const arabic: number = 15;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XV');
    });

    it('should be XIX for 19', (): void => {
        const arabic: number = 19;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XIX');
    });


    it('should be XX for 20', (): void => {
        const arabic: number = 20;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XX');
    });

    it('should be XXIX for 29', (): void => {
        const arabic: number = 29;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XXIX');
    });

    it('should be XXX for 30', (): void => {
        const arabic: number = 30;

        const roman: string = toRoman(arabic);

        expect(roman).toBe('XXX');
    });
});
