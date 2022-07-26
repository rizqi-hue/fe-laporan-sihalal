import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import "./_carousel.scss";

const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel

interface CarouselLeftArrowProps {
  onClick?: (e: any) => void;
}

class CarouselLeftArrow extends React.Component<CarouselLeftArrowProps> {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <ArrowCircleLeftIcon className="w-9 text-gray-500" />
      </a>
    );
  }
}

interface CarouselRightArrowProps {
  onClick?: (e: any) => void;
}

class CarouselRightArrow extends React.Component<CarouselRightArrowProps> {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <ArrowCircleRightIcon className="w-9 text-gray-500" />
      </a>
    );
  }
}

interface CarouselIndicatorProps {
  onClick?: (e: any) => void;
  index?: number;
  activeIndex?: number;
  isActive?: boolean;
}

class CarouselIndicator extends React.Component<CarouselIndicatorProps> {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

interface slideProps {
  content?: string;
  author?: string;
  source?: string;
}

interface CarouselSlideProps {
  onClick?: (e: any) => void;
  index?: number;
  activeIndex?: number;
  slide?: slideProps;
}

class CarouselSlide extends React.Component<CarouselSlideProps> {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">{this.props.slide?.content}</p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide?.author}
          </strong>
          ,{" "}
          <small className="carousel-slide__source">
            {this.props.slide?.source}
          </small>
        </p>
      </li>
    );
  }
}

// Carousel wrapper component
interface CarouselProps {
  slides: slideProps[];
}

interface CarouselState {
  activeIndex: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index: number) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e: any) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e: any) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Carousel;
// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);
