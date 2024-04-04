//Data
const testimonials = [
  {
    name: "Ibu Sarah",
    job: "Pelanggan",
    testimonial:
      "Pengajian rutin di komplek kami selalu menggunakan jasa katering Ririn Snack. Alhamdulillah, semua peserta selalu puas dengan makanan yang disajikan. Rasanya lezat, porsinya pas, dan harganya juga terjangkau. Terima kasih, Ririn Snack, atas pelayanannya yang memuaskan.",
  },
  {
    name: "Kak Naswa",
    job: "Pelanggan",
    testimonial:
      "Momen pernikahan kami terasa semakin istimewa dengan katering dari Ririn Snack. Makanan yang disajikan sangat enak dan elegan. Para tamu juga memuji kelezatannya. Tim Ririn Snack juga sangat sigap dan membantu mengatur segala sesuatunya. Terima kasih telah membuat hari pernikahan kami tak terlupakan!",
  },
  {
    name: "Ibu Mariam",
    job: "Pelanggan",
    testimonial:
      "Saya sangat puas dengan layanan katering Ririn Snack untuk acara ulang tahun anak saya. Makanan datang tepat waktu, masih hangat, dan porsinya pas. Anak-anak dan tamu semua menyukai rasanya, terutama arem-arem dan ayam gorengnya! Tim Ririn Snack juga ramah dan membantu sekali. Terima kasih banyak!",
  },
];

let i = 0;

let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
