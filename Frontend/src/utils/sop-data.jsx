// components/sop/sopData.js

export const sopData = [
  {
    title: '1. Tujuan',
    content: (
      <p>
        Menetapkan prosedur standar untuk memastikan bahwa penguploadan proyek
        dilakukan dengan benar, aman, dan efisien.
      </p>
    ),
  },
  {
    title: '2. Ruang Lingkup',
    content: (
      <p>
        SOP ini berlaku untuk semua anggota tim yang terlibat dalam proses
        penguploadan proyek ke platform yang telah ditentukan.
      </p>
    ),
  },
  {
    title: '3. Definisi',
    content: (
      <ul className="list-disc ml-5">
        <li>
          <strong>Proyek:</strong> Kumpulan berkas, kode, dan dokumen terkait
          yang akan diunggah ke platform.
        </li>
        <li>
          <strong>Platform:</strong> Tempat atau sistem di mana proyek akan
          diunggah, misalnya GitHub, PPT, dan Vidio atau platform lain yang
          relevan.
        </li>
      </ul>
    ),
  },
  {
    title: '4. Referensi',
    content: (
      <ul className="list-disc ml-5">
        <li>Kebijakan Keamanan Data Perusahaan</li>
        <li>Panduan Penggunaan Platform</li>
      </ul>
    ),
  },
  {
    title: '5. Persiapan',
    content: (
      <ul className="list-disc ml-5">
        <li>
          Pastikan semua berkas proyek telah diperiksa dan bebas dari kesalahan.
        </li>
        <li>Lakukan backup seluruh berkas proyek sebelum penguploadan.</li>
        <li>Pastikan koneksi internet stabil.</li>
      </ul>
    ),
  },
  {
    title: '6. Prosedur',
    content: (
      <div className="ml-5">
        <h3 className="text-xl font-semibold mt-4">6.1. Persiapan Berkas</h3>
        <ul className="list-disc ml-5">
          <li>
            Periksa kembali seluruh berkas proyek untuk memastikan tidak ada
            kesalahan.
          </li>
          <li>Pastikan semua berkas telah disimpan dan dicadangkan.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">6.2. Pengumpulan Berkas</h3>
        <ul className="list-disc ml-5">
          <li>Kumpulkan semua berkas proyek dalam satu folder utama.</li>
          <li>Isi sesuai list tempat pengumpulan yang telah disediakan</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">6.3. Penguploadan</h3>
        <ul className="list-disc ml-5">
          <li>Buka platform tempat proyek akan diunggah (misalnya, GitHub).</li>
          <li>Masuk ke akun dengan kredensial yang benar.</li>
          <li>Pilih repositori atau buat repositori baru untuk proyek.</li>
          <li>Unggah berkas atau file zip ke repositori tersebut.</li>
          <li>
            Tambahkan deskripsi yang jelas dan detail mengenai proyek yang
            diunggah.
          </li>
          <li>Klik Commit atau Push untuk menyelesaikan penguploadan.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">6.4. Verifikasi</h3>
        <ul className="list-disc ml-5">
          <li>
            Periksa kembali di platform apakah semua berkas telah terunggah
            dengan benar.
          </li>
          <li>
            Lakukan pengecekan untuk memastikan tidak ada berkas yang korup atau
            hilang.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">6.5. Dokumentasi</h3>
        <ul className="list-disc ml-5">
          <li>Catat tanggal dan waktu penguploadan.</li>
          <li>
            Simpan catatan mengenai siapa yang melakukan penguploadan dan detail
            proyek yang diunggah.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: '7. Tindakan Pengamanan',
    content: (
      <ul className="list-disc ml-5">
        <li>
          Pastikan hanya anggota tim yang berwenang yang memiliki akses untuk
          mengunggah proyek.
        </li>
        <li>
          Gunakan koneksi internet yang aman untuk menghindari risiko keamanan.
        </li>
      </ul>
    ),
  },
  {
    title: '8. Penutup',
    content: (
      <p>
        Prosedur ini harus diperbarui secara berkala untuk memastikan bahwa
        proses penguploadan proyek tetap sesuai dengan standar dan kebijakan
        perusahaan.
      </p>
    ),
  },
];
