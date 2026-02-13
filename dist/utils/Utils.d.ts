export declare const inBrowser: boolean;
export declare const isWebkit: boolean;
export declare function initBrowser(): void;
export declare function formatFollowers(n: number): string | number;
export declare function interleavePosts<T>(array1: (T & {
    id: string;
})[], array2: (T & {
    id: string;
})[]): T[];
export declare const getUID: () => string;
export declare function containsEncodedComponents(x: string): boolean;
export declare const toBgUrl: (url: string) => string;
export declare function deorphan(str: string): string;
export declare function getFirstUrl(str: string): string | null;
export declare function stripFirstUrl(str: string): string;
export interface Duration {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}
export declare function toDuration(milliseconds: number): Duration;
export declare function formatDuration(seconds: number): string;
export declare function formatDate(dateStr: string): string;
export declare function isSwellDomain(url: string): boolean;
export declare function isValidUrl(value: string): boolean;
export declare function slugify(input: string, id?: string, defaultSlug?: string): string;
//# sourceMappingURL=Utils.d.ts.map