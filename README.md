## Read Manga on Web
Read Manga on Web (RMW) adalah sebuah program yang berfungsi agar user dapat merasakan membaca manga di sebuah website meskipun manga tersebut offline. Karena manga offline yang biasa di download berformat jpg atau png dengan ukuran besar maka akan susah membacanya jika hanya dengan aplikasi viewer gambar biasa seperti windows photo viewer atau yang lainnya, untuk itulah program ini dibuat untuk mempermudah membaca manga seperti di website.

## Cara menggunakan

- Masukkan semua halaman manga pada folder "assets/source".
- Cek ekstensi filenya dengan klik kanan, pilih properties (Biasanya ".jpg" atau ".png") dan rubah nama file menjadi : 
    ```branch 
    nomor halaman.ekstensi file
    ``` 
Contoh : Manga halaman 1 dengan exstensi ".jpg" maka nama file tersebut menjadi : 
    ```branch
    1.jpg
    ```
- Pada folder "assets/script/" terdapat "manga.js" lalu kita buka file tersebut dengan text editor seperti notepad ataupun text editor lainnya.
- Pada file tersebut, kita masukkan beberapa informasi tentang manga tersebut.
- Untuk judul manga kita masukkan pada :
    ```branch 
    title : "Masukkan judul manga disini",
    ``` 
- Lalu kita masukkan berapa jumlah halaman manga tersebut pada :
    ```branch 
    totalPage : 23,
    ``` 
- Setelah itu masukkan ekstensi manga tadi pada bagian :
    ```branch 
    type : "jpg"
    ``` 
- Langkah terakhir anda bisa membuka file index.html pada folder utama dengan browser anda untuk menikmati membaca manga offline.

## Copyright
© 2020 by Yusril Adriansyah Putra.