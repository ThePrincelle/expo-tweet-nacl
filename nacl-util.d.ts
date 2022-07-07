export interface util {
    decodeUTF8(str: string): Uint8Array;
    encodeUTF8(str: Uint8Array): string;
    decodeBase64(str: string): Uint8Array;
    encodeBase64(str: Uint8Array): string;
}