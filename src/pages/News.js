import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140 || content.length >1000) {
      setError(true);
    } else {
      axios
        .post("http://localhost:3003/articles", {
          author,
          content,
          date: Date.now(),
        })
        .then(() => {   // .then + la suite : permet de remettre à zero le formulaire une fois envoyé
          setError(false);
          setAuthor("");
          setContent("");
          getData();
        });
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Nom"
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Message"
          value={content}
        ></textarea>
        {error && <p>Veuillez écrire un message compris entre 140 et 1000 caractères</p>}  {/* les && signifient que si l'erreur définie plus tôt est vraie alors le <p> apparait */}
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default News;



