# Website Ulang Tahun 💕

Website ucapan ulang tahun dengan kartu ucapan dan galeri 6 foto. Desain modern, gelap, dengan aksen rose/coral/sage.

## Cara pakai

1. **Jalankan website**  
   Buka `index.html` di browser (double-click), atau jalankan server lokal:
   ```bash
   npx serve .
   ```
   Lalu buka alamat yang muncul (misalnya http://localhost:3000).

2. **Ganti nama pengirim**  
   - Di browser: tambahkan `?from=Nama+Kamu` di URL, contoh:  
     `http://localhost:3000/?from=Rian`
   - Atau edit di `index.html`: cari `[Nama kamu]` dan ganti dengan namamu.

3. **Ubah isi kartu ucapan**  
   Edit teks di dalam `<p class="card-message">` dan `<p class="card-opening">` / `<p class="card-closing">` di `index.html` sesuai keinginanmu.

4. **Tambahkan 6 foto**  
   Simpan foto dengan nama:
   - `images/photo1.jpg`
   - `images/photo2.jpg`
   - … sampai `images/photo6.jpg`  

   Format bisa `.jpg`, `.jpeg`, atau `.png`. Jika file tidak ada, kotak galeri akan menampilkan placeholder.

## Struktur folder

```
birthday-website/
├── index.html      # Halaman utama
├── styles.css      # Gaya & animasi
├── script.js       # Tanggal, lightbox, nama dari URL
├── song.mp3        # Musik latar (opsional)
├── README.md
├── .gitignore
└── images/
    ├── placeholder.svg
    ├── photo1.png … photo6.png
```

## Deploy ke GitHub Pages

1. Buat repo baru di GitHub (misalnya `asha-bday` atau `birthday-surprise`).
2. Di folder proyek (isi dari `birthday-website/` harus jadi root repo):
   ```bash
   cd birthday-website
   git init
   git add .
   git commit -m "Initial commit: birthday website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages** → Source pilih **Deploy from a branch** → Branch: **main** → Folder: **/ (root)** → Save.
4. Tunggu 1–2 menit. Website live di `https://USERNAME.github.io/REPO-NAME/`.

**Catatan keamanan & privasi:** Tidak ada API key atau password di kode; aman untuk di-push. Foto dan file `song.mp3` akan ikut ter-commit. Jika repo **public**, siapa saja yang punya link bisa melihat dan mendengar. Untuk lebih privat, buat repo **Private** (GitHub Pages untuk private repo butuh akun GitHub Pro/Team, atau gunakan layanan lain seperti Netlify/Vercel dengan repo private).

Selamat ulang tahun! 🎂
