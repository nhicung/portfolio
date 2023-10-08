import { useEffect, useState } from "react";

const useIntersection = (list:React.MutableRefObject<(null | HTMLDivElement)[]>, rootMargin:string) => {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const observers: {element: HTMLDivElement, observer: IntersectionObserver}[] = [];

    list.current?.forEach((el, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting) {
            setTab(index);
          }
        },
        { rootMargin }
      );
      if(el){
        observer.observe(el);
        observers.push({ element: el, observer});
      } 
    });

    return () => {
      observers.forEach(value => {
        value.observer.unobserve(value.element);
      })
    }
  }, []);

  return tab;
};

export default useIntersection;