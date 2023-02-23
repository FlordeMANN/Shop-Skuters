import React, {useState} from 'react';
import goUp from './go_up.png'

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <img alt={goUp} src={goUp} className="scrollTop bg-primary border border-info p-1" onClick={scrollTop} style={{height: 50, borderRadius: "25%", display: showScroll ? 'flex' : 'none'}} />
  );
}

export default ScrollArrow;