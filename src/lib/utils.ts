/**
 * Classnames utility. Tiny, zero-dependency, same API as clsx.
 * Usage: cn('base', condition && 'active', { 'text-red': err })
 */
type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v && v !== 0) return;
    if (typeof v === 'string' || typeof v === 'number') {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    } else if (typeof v === 'object') {
      for (const k in v) if (v[k]) out.push(k);
    }
  };
  inputs.forEach(walk);
  return out.join(' ');
}

/** Clamp value to range. */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/** Join truthy parts with separator. */
export function join(parts: Array<string | null | undefined>, sep = ' · '): string {
  return parts.filter(Boolean).join(sep);
}
