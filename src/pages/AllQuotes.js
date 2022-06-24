import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Emre", text: "Learning react is fun!" },
  {
    id: "q2",
    author: "Emre Can",
    text: "Learning react is still fun!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
