import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Daud", text: "Learning React is fun!" },
  { id: "q2", author: "DaudGul", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
