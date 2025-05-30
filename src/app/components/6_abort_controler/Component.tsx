"use client";

import React, { useEffect } from "react";

function Component(props) {
  // how to clear multiple events before
  useEffect(() => {
    function handleScroll() {
      console.log(`scroll...`);
    }

    function handleClick() {
      console.log("click...");
    }

    function dragstart() {
      console.log("dragstart...");
    }

    window.addEventListener(`scroll`, () => handleScroll());
    document.addEventListener(`click`, () => handleClick());
    document.addEventListener(`dragstart`, () => dragstart());

    // cleanup
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
      document.removeEventListener(`click`, handleClick);
      document.removeEventListener(`dragstart`, dragstart);
    };
  }, []);

  // with abort controller
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    function handleScroll() {
      console.log(`scroll...`);
    }

    function handleClick() {
      console.log("click...");
    }

    function dragstart() {
      console.log("dragstart...");
    }

    document.addEventListener(`scroll`, () => handleScroll, {
      signal,
    });
    document.addEventListener(`click`, () => handleClick, {
      signal,
    });
    document.addEventListener(`dragstart`, () => dragstart, {
      signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return <>AbortController</>;
}

export default Component;
