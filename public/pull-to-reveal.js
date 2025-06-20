(function() {
  'use strict';
  
  function initPullToReveal() {
    const pullable = document.getElementById('pullable');
    const scrollable = document.getElementById('scrollable');
    
    if (!pullable || !scrollable) {
      console.log('Pull-to-reveal elements not found, retrying...');
      setTimeout(initPullToReveal, 100);
      return;
    }

    console.log('Pull-to-reveal initialized');

    const state = {
      isPulling: false,
      offsetAccumulated: 0,
      wheelTimer: null,
      isTransitioning: false
    };

    const config = {
      maxPullDistance: 120,
      dampingFactor: 0.5,
      resetDelay: 100,
      transitionDuration: 300
    };

    function applyTransform(translateY) {
      pullable.style.transform = 'translate3d(0, ' + translateY + 'px, 0)';
    }

    function resetPull() {
      if (!state.isPulling || state.isTransitioning) return;
      
      state.isPulling = false;
      state.isTransitioning = true;
      state.offsetAccumulated = 0;
      
      pullable.classList.remove('pulling');
      pullable.style.transition = 'transform ' + config.transitionDuration + 'ms ease-out';
      applyTransform(0);
      
      const handleTransitionEnd = function() {
        pullable.style.transition = '';
        state.isTransitioning = false;
        pullable.removeEventListener('transitionend', handleTransitionEnd);
      };
      
      pullable.addEventListener('transitionend', handleTransitionEnd);
      
      setTimeout(function() {
        if (state.isTransitioning) {
          handleTransitionEnd();
        }
      }, config.transitionDuration + 50);
    }

    function handleWheel(event) {
      const isAtTop = scrollable.scrollTop === 0;
      const isScrollingUp = event.deltaY < 0;
      
      if (isAtTop && isScrollingUp && !state.isTransitioning) {
        event.preventDefault();
        
        if (!state.isPulling) {
          state.isPulling = true;
          pullable.classList.add('pulling');
          pullable.style.transition = '';
        }
        
        state.offsetAccumulated += Math.abs(event.deltaY);
        
        const dampedOffset = Math.min(
          config.maxPullDistance,
          state.offsetAccumulated * config.dampingFactor
        );
        
        applyTransform(dampedOffset);
        
        clearTimeout(state.wheelTimer);
        state.wheelTimer = setTimeout(resetPull, config.resetDelay);
      }
    }

    function handleScroll() {
      if (state.isPulling && scrollable.scrollTop > 0) {
        clearTimeout(state.wheelTimer);
        resetPull();
      }
    }

    function handleMouseLeave() {
      if (state.isPulling) {
        clearTimeout(state.wheelTimer);
        resetPull();
      }
    }

    scrollable.addEventListener('wheel', handleWheel, { passive: false });
    scrollable.addEventListener('scroll', handleScroll, { passive: true });
    scrollable.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    scrollable.addEventListener('scroll', function() {
      window.dispatchEvent(new Event('scroll'));
      
      window.pullToRevealScrollY = scrollable.scrollTop;
    }, { passive: true });
    
    Object.defineProperty(window, 'scrollY', {
      get: function() {
        return scrollable ? scrollable.scrollTop : 0;
      },
      configurable: true
    });
    
    window.pullToRevealCleanup = function() {
      clearTimeout(state.wheelTimer);
      scrollable.removeEventListener('wheel', handleWheel);
      scrollable.removeEventListener('scroll', handleScroll);
      scrollable.removeEventListener('mouseleave', handleMouseLeave);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPullToReveal);
  } else {
    initPullToReveal();
  }
})(); 