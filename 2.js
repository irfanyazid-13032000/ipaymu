function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  // 1. Urutkan berdasarkan nilai awal
  intervals.sort((a, b) => a[0] - b[0]);

  

  const merged = [intervals[0]];


  

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      // jika array indeks ke i lebih kecil dari atau sama dengan indeks ke i-1 maka itu overlap dan value array ke i-1 harus diubah
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Jika tidak overlap, simpan sebagai array baru
      merged.push(current);
    }
  }

  return merged;
}

// Contoh penggunaan
const input = [[1,3],[2,6]];
const output = mergeIntervals(input);
console.log(output);
