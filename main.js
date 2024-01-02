function hargadm() {
  let data = document.getElementById("floatingSelect").value;
  let a = document.getElementById("harga");
  switch (data) {
    case "1":
      a.innerHTML = "Rp. 4.300";
      break;
    case "2":
      a.innerHTML = "Rp. 6.200";
      break;
    case "3":
      a.innerHTML = "Rp. 7.700";
      break;
    default:
      document.getElementById("harga").innerHTML = "Proses...";
  }
}
