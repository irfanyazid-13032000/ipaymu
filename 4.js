const redis = require("redis");
const client = redis.createClient(); // Koneksi ke Redis

async function bolehkanPermintaan(userId) {
  const sekarang = new Date();
  const jamKey = `${sekarang.getUTCFullYear()}${sekarang.getUTCMonth()}${sekarang.getUTCDate()}${sekarang.getUTCHours()}`;
  const key = `rate_limit:${userId}:${jamKey}`;

  return new Promise((resolve, reject) => {
    client.multi()
      .incr(key) // Tambah counter
      .expire(key, 3600) // Set waktu hidup key = 1 jam
      .exec((err, replies) => {
        if (err) return reject(err);

        const jumlahPermintaan = replies[0];
        if (jumlahPermintaan > 100) {
          resolve(false); // Lebih dari 100 → tolak
        } else {
          resolve(true); // Masih di bawah limit → izinkan
        }
      });
  });
}

// Contoh penggunaan
bolehkanPermintaan("user123")
  .then(diizinkan => {
    if (diizinkan) {
      console.log("✅ Permintaan diizinkan");
    } else {
      console.log("❌ Melebihi batas permintaan");
    }
  });
