function NewsCard(news, index) {
  return (
    <div key={index}>
      <h1>{news.title}</h1>
      <img src={news.urlToImage} alt="" />
    </div>
  );
}

export default NewsCard;
