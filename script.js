var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=id&" +
  "apiKey=af7c7fdc37494908aa7b413be3700717";
var req = new Request(url);
fetch(req).then(function (response) {
  console.log(response.json());
});

// function getData(url, callBack) {
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       return callBack(JSON.parse(xhr.responseText));
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// }

// const data = getData(
//   "https://newsapi.org/v2/top-headlines?country=id&apiKey=af7c7fdc37494908aa7b413be3700717",
//   function (data) {
//     //menghitung jumlah data
//     jmlData = data.length;

//     //variabel untuk menampung tabel yang akan digenerasikan
//     buatTabel = "";

//     //perulangan untuk menayangkan data dalam tabel
//     for (a = 0; a < jmlData; a++) {
//       //mencetak baris baru
//       buatTabel += `<tr>
//           <td>${a + 1}</td>
//           <td>${data[a].id}</td>
//           <td>${data[a].source.id}</td>
//           <td>${data[a].source.name}</td>
//           <td>
//             ${data[a].address.street},
//             ${data[a].address.suite},
//             ${data[a].address.city}
//            </td>
//           <td>${data[a].company.name}</td>
//         </tr>`;
//     }

//     document.getElementsByTagName("table")[0].innerHTML += buatTabel;
//   }
// );
