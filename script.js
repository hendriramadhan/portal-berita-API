const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

window.onload = function () {
  fetchHeadlines();
};

$(document).ready(function () {
  $("#newsQuery").on("keyup", function () {
    fetchQueryNews();
  });
});

fetch(
  "https://newsapi.org/v2/top-headlines?" +
    "country=id&" +
    "apiKey=280c43d0756d4b1a9690a165ae0ebe88"
)
  .then(async (response) => {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
    displayNews();
  })
  .catch((response) => {
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  });

const fetchQueryNews = async () => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=id&q=" +
      encodeURIComponent(newsQuery.value) +
      "&apiKey=280c43d0756d4b1a9690a165ae0ebe88"
  )
    .then(async (response) => {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
    })
    .catch((response) => {
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>";
      return;
    });

  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-primary";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
