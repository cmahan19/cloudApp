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