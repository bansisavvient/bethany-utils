// ARRAY UTILITIES
export function uniqueArray<T>(arr: T[]): T[];
export function chunkArray<T>(arr: T[], size: number): T[][];
export function flattenArray<T>(arr: any[]): T[];

// STRING UTILITIES
export function capitalize(str: string): string;
export function toCamelCase(str: string): string;
export function toSlug(str: string): string;

// DATE UTILITIES
export function formatDate(date: Date | string): string;
export function addDays(date: Date | string, days: number): Date;
export function isToday(date: Date | string): boolean;

// NUMBER UTILITIES
export function randomInt(min: number, max: number): number;
export function clamp(num: number, min: number, max: number): number;
export function sum(arr: number[]): number;
