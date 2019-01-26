export interface IImage {
    url: string | null;
    href?: string;
    clickAction?: Function;
    caption?: string;
    title?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
}

export interface ISlide {
  image: IImage;
  action: string;
  leftSide: boolean;
  rightSide: boolean;
  selected: boolean;
  loaded: boolean;
}

export interface Swipe {
    e: TouchEvent;
    when: string;
}

export interface Slide {
    slideURLs: string[];
    slideActions: SlideAction[];
}

interface SlideAction {
    title: string;
    para: string;
    cta: {text: string, url: string};
}