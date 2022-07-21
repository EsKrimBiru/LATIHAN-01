const pilihan = document.querySelectorAll("button");
const pilihanKom = Math.round(Math.random() * 10 + 1);
const nyawa = document.querySelector(".container :nth-child(2)");
const pesan = document.querySelector("div p");
let counter = 3;
nyawa.innerHTML = "❤ => " + counter;
console.log(pilihanKom);

// peraturan
function getHasil(kom, pemain) {
  // KALO MENANG
  if (kom == pemain) {
    pesan.innerHTML = "ANDA MENANG";
    setTimeout(function () {
      const ulang = confirm("APAKAH INGIN MAIN LAGI ???");
      if (ulang == true) {
        location.reload();
      } else {
        alert("TERIMAKASIH SUDAH BERMAIN");
      }
    }, 500);
    return;
  }

  // KALO SALAH
  else {
    // MASI ADA KESEMPATAN
    if (counter > 1) {
      counter--;
      nyawa.innerHTML = "❤ => " + counter;
      // NILAI TERLALU RENDAH
      if (kom > pemain) {
        pesan.innerHTML = "TERLALU RENDAH";
        return;
      }

      // NILAI TERLALU TINGGI
      if (kom < pemain) {
        pesan.innerHTML = "TERLALU TINGGI";
        return;
      }
    }

    // KESEMPATAN UDAH HABIS
    else {
      nyawa.innerHTML = "❤ => 0";
      pesan.innerHTML = "ANDA KALAH";
      setTimeout(function () {
        const ulang = confirm("APAKAH INGIN MAIN LAGI ???");
        if (ulang == true) {
          location.reload();
        } else {
          alert("TERIMAKASIH SUDAH BERMAIN");
        }
      }, 500);
      return;
    }
  }
}

//
pilihan.forEach(function (e) {
  e.addEventListener("click", function () {
    const pilihanPemain = e.classList.item(0);
    const hasil = getHasil(pilihanKom, pilihanPemain);
  });
});
