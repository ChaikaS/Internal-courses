import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { apiCall } from "../../api/mockedApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Card from "./Card";
import "./cardConteiner.scss";
import { CardError } from "./CardsObject/CardError";
import CardsCreationForm from "./CardsObject/CardsCreationForm";

export default function CardsConteiner({ auth }) {
  const [cards, setCards] = useState([]);

  const [isApiCallError, setIsApiCallError] = useState(false);

  useEffect(() => {
    apiCall()
      .then((data) => {
        setCards(data.mockedResponce);
      })
      .catch((dataError) => {
        setIsApiCallError({ dataError, isApiCallError: true });
      });
  }, []);

  const handleError = (e) => {
    e.preventDefault();
    if (isApiCallError) {
      setIsApiCallError(true);
    }
  };

  const handlerRemoveCard = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    setCards(cards.filter((item) => item.id !== id));
  };

  const handleAddCards = (newObject) => {
    setCards([...cards, newObject]);
  };

  if (!auth) {
    return <Redirect to="/loginPage" />;
  }

  return (
    <div>
      <Header />
      <div onSubmit={handleError}>
        {setIsApiCallError ? <CardError error={isApiCallError.dataError} /> : null}

        <div className="main__card-conteiner">
          {cards.map((card) => (
            <Card key={card.id} card={card} handlerRemoveCard={handlerRemoveCard} id={card.id} />
          ))}
          <CardsCreationForm setCards={setCards} cards={cards} handleAddCards={handleAddCards} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
