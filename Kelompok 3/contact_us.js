$('#submit-button').click(function(event) {
          // Mendapatkan nilai dari input
          var nama = $("#nama").val();
          var email = $("#email").val();
          var nohp = $("#nohp").val();
          var pesan = $("#pesan").val();
  
           // Mengecek apakah input kosong
    if (nama === "" || email === "" || nohp === "" || pesan === "") {
        event.preventDefault(); // Mencegah form submit
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Silahkan isi semua input terlebih dahulu!'
        });
      } else {
        
        event.preventDefault();
  
        // Menampilkan alert
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Pesan Anda telah terkirim.'
        });

        // Mengosongkan input
      $("#nama").val("");
      $("#email").val("");
      $("#nohp").val("");
      $("#pesan").val("");
    }
});