//declare module 'binary-search-bounds' {
    interface BSearch {
        gt<T>(array:T[], y:T, compare?:((a:T, b:T) => number | null | undefined), lo?:number, hi?:number):number;
        ge<T>(array:T[], y:T, compare?:((a:T, b:T) => number | null | undefined), lo?:number, hi?:number):number;
        lt<T>(array:T[], y:T, compare?:((a:T, b:T) => number | null | undefined), lo?:number, hi?:number):number;
        le<T>(array:T[], y:T, compare?:((a:T, b:T) => number | null | undefined), lo?:number, hi?:number):number;
        eq<T>(array:T[], y:T, compare?:((a:T, b:T) => number | null | undefined), lo?:number, hi?:number):number;
    }
    const bsearch:BSearch;
    export = bsearch;
//}
