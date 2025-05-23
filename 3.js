function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  // Urutkan array
  nums.sort((a, b) => a - b);

  let longest = 1;  // Panjang urutan terpanjang
  let currentStreak = 1;  // Panjang urutan yang sedang dihitung

  for (let i = 1; i < nums.length; i++) {
    // Jika angka berturut-turut
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
    } 
    // Jika tidak berturut-turut, reset streak
    else if (nums[i] !== nums[i - 1]) {
      longest = Math.max(longest, currentStreak);
      currentStreak = 1;  // reset streak
    }
  }

  // Return panjang urutan terpanjang
  return Math.max(longest, currentStreak);  // Memastikan urutan terakhir juga dihitung
}

// Contoh penggunaan
// const input = [100, 4, 200, 1, 3, 2];
const input= [1,2,3,8];
const output = longestConsecutive(input);
console.log(output); // Output: 3
