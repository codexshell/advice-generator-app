import getQuote from "../apis/getQuote";
import { useEffect, useState } from "preact/hooks";
import mobileDividerPattern from "../assets/pattern-divider-mobile.svg";
import desktopDividerPattern from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";

export default function RandomAdvice() {
  const [quote, setQuote] = useState({});
  useEffect(async () => {
    getQuote().then((item) => {
      setQuote(item);
    });
  }, []);
  const handleClick = async () => {
    const nextQuote = await getQuote();
    setQuote(nextQuote);
  };

  return (
    <div className="relative flex flex-col items-center bg-brand-blue-2 pt-10 pb-20 px-8 xl:px-16 rounded-xl w-[345px] xl:w-[600px] min-h-[315px] xl:pt-14">
      <span className="text-brand-green uppercase text-[10px] xl:text-sm tracking-[0.5em]">
        Advice #{quote.id}
      </span>
      <q className="text-body text-center text-brand-cyan mt-5 before:content-[open-quote] after:content-[close-quote]">
        {quote.advice}
      </q>
      <div className="mt-6 xl:mt-8">
        <picture>
          <source media="(max-width: 1279px)" srcSet={mobileDividerPattern} />
          <source media="(min-width: 1280px)" srcSet={desktopDividerPattern} />
          <img src={desktopDividerPattern} alt="" />
        </picture>
      </div>
      <button
        onClick={handleClick}
        className="absolute -bottom-8 mt-8 bg-brand-green p-5 rounded-full hover:shadow-[0_0_30px_10px_rgba(82,255,168)] active:shadow-none"
      >
        <img src={diceIcon} alt="" />
      </button>
    </div>
  );
}
