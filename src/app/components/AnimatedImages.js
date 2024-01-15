"use client"

import React, { useEffect, useState } from 'react';

const AnimatedImages = () => {

const [translate, setTranslate] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [animationId, setAnimationId] = useState(null);

  const reverseDirection = false; // Set to true or false as needed
  const animationSpeed = 1; // Adjust animation speed as needed

  useEffect(() => {
    const list = document.querySelector('.js-anim-cards');
    const cards = Array.from(list.children);

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimating(true);
        if (!paused) initAnimCards();
      } else {
        setAnimating(false);
        cancelPrevAnimation();
      }
    });

    observer.observe(list);

    // Resize event
    const handleResize = () => {
      clearTimeout(resizingId);
      resizingId = setTimeout(doneResizing, 500);
    };

    let resizingId = null;

    const doneResizing = () => {
      if (!paused) initAnimCards();
    };

    window.addEventListener('resize', handleResize);

    // Event listeners for play/pause
    const playAnimation = () => {
      if (paused) {
        setPaused(false);
        if (animating) initAnimCards();
      }
    };

    const pauseAnimation = () => {
      setPaused(true);
      cancelPrevAnimation();
      setAnimationId(null);
    };

    list.addEventListener('anim-cards', playAnimation);
    list.addEventListener('pause-cards', pauseAnimation);

    // Pause on hover
    const pauseHover = list.getAttribute('data-anim-cards-pause-hover');
    if (pauseHover && pauseHover === 'on') {
      list.addEventListener('mouseenter', pauseAnimation);
      list.addEventListener('mouseleave', playAnimation);
    }

    // Initial setup
    setCardWidth(getAnimCardsWidth(cards));
    initAnimCards();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      list.removeEventListener('anim-cards', playAnimation);
      list.removeEventListener('pause-cards', pauseAnimation);
      list.removeEventListener('mouseenter', pauseAnimation);
      list.removeEventListener('mouseleave', playAnimation);
    };
  }, []);

  const initAnimCards = () => {
    if (paused) return;
    if (animationId) cancelPrevAnimation();
    const newAnimationId = window.requestAnimationFrame(triggerAnimCards);
    setAnimationId(newAnimationId);
  };

  const triggerAnimCards = (timestamp) => {
    if (!animationId) return;

    cancelPrevAnimation();
    if (!timestamp) timestamp = 0;

    const translateIncrease = (timestamp - translate) * 0.06 * animationSpeed;
    setTranslate(reverseDirection ? (translate - translateIncrease) : (translate + translateIncrease));

    updateAnimCardsList();
    setTranslate(translate);

    const newAnimationId = window.requestAnimationFrame(triggerAnimCards);
    setAnimationId(newAnimationId);
  };

  const updateAnimCardsList = () => {
    if (Math.abs(translate) <= cardWidth) return;

    setTranslate(reverseDirection ? (translate + cardWidth) : (translate - cardWidth));
  };

  const getAnimCardsWidth = (cards) => {
    if (cards.length > 0) {
      const computedStyle = window.getComputedStyle(cards[0]);
      const marginRight = parseFloat(computedStyle.marginRight);
      const offsetWidth = cards[0].offsetWidth;
      return marginRight + offsetWidth;
    }
    return 0;
  };

  const cancelPrevAnimation = () => {
    if (animationId) {
      window.cancelAnimationFrame(animationId);
    }
  };
  return (
    <>
    <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-7xl text-right">
  <button className="anim-cards-control js-anim-cards-control js-tab-focus" aria-controls="animated-cards" aria-label="pause animation" aria-pressed="false"><i className="not-italic"></i></button>
</div>

<div id="animated-cards">
  <div className="anim-cards js-anim-cards">
    <ul className="anim-cards__list">
      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/1.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem, ipsum dolor</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 1</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/2.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit amet</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 2</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/3.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 3</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/1.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem, ipsum dolor</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 4</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/2.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit amet</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 5</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/3.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 6</div>
            </figcaption>
          </figure>
        </div>
      </li>
    </ul>
  </div>

  <div className="anim-cards anim-cards--reverse js-anim-cards">
    <ul className="anim-cards__list">
      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/1.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem, ipsum dolor</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 7</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/2.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit amet</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 8</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/3.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 9</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/1.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem, ipsum dolor</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 10</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/2.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit amet</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 11</div>
            </figcaption>
          </figure>
        </div>
      </li>

      <li className="anim-cards__item">

        <div className="card-v2 rounded">
          <figure>
            <img src="/assets/gallery/3.jpg" alt="Image description" />
            <figcaption className="card-v2__caption px-3 lg:px-5 pt-5 lg:pt-8 pb-3 lg:pb-5">
              <div className="text-lg lg:text-xl">Lorem ipsum dolor sit</div>
              <div className="mt-1 lg:mt-1.5 text-sm lg:text-base opacity-70">Label 12</div>
            </figcaption>
          </figure>
        </div>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default AnimatedImages
