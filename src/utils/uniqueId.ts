let count = 0;

export default function uniqueId(prefix = '$$id$'): string {
  count += 1;
  return `${prefix}${count}`;
}
