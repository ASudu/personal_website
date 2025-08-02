import { useEffect } from 'react';

export const useFerrisWheel = (activePage: string) => {
  useEffect(() => {
    const spokeSystem = document.getElementById('spokeSystem');
    const spokes = document.querySelectorAll('.spoke');
    let currentRotation = 180; // Initial rotation to bring first spoke to top
    let isScrolling = false;

    if (!spokeSystem || !spokes.length) {
      console.error('Navigation elements not found');
      return;
    }

    // Function to update label rotations to keep text upright
    const updateLabelRotations = () => {
      spokes.forEach(spoke => {
        const currAngle = parseInt((spoke as HTMLElement).dataset.angle || '0') % 360; // Ensure angle is within 0-359 degrees
        const adjustedAngle = (currAngle + currentRotation);
        const label = spoke.querySelector('.spoke-label') as HTMLElement;
        if (label) {
          // Keep labels upright by counter-rotating them
          label.style.transform = `translateY(-50%) rotate(${-adjustedAngle}deg)`;
        }
      });
    };

    // Check which section is currently visible in the viewport
    const getCurrentSection = (): 'hero' | 'main' | 'neither' => {
      const heroSection = document.getElementById('hero');
      const mainSection = document.getElementById('mainContent');
      
      if (!heroSection || !mainSection) return 'neither';

      const heroRect = heroSection.getBoundingClientRect();
      const mainRect = mainSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if hero section is primarily visible (top half of viewport)
      if (heroRect.top >= -viewportHeight * 0.2 && heroRect.top <= viewportHeight * 0.8) {
        return 'hero';
      }
      
      // Check if main section is primarily visible (bottom half of viewport)
      if (mainRect.top >= -viewportHeight * 0.2 && mainRect.top <= viewportHeight * 0.8) {
        return 'main';
      }

      return 'neither';
    };

    // Smooth scroll to a specific section
    const scrollToSection = (sectionId: string) => {
      if (isScrolling) return; // Prevent multiple scroll calls
      
      const section = document.getElementById(sectionId);
      if (!section) return;

      isScrolling = true;
      
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    // Function to rotate the wheel to make active spoke appear at top
    const rotateToSpoke = (targetSpoke: HTMLElement) => {
      if (!spokeSystem) return;

      const currAngle = parseInt(targetSpoke.dataset.angle || '0')% 360; // Ensure angle is within 0-359 degrees
      console.log('Target spoke current angle:', currAngle);

      // Calculate rotation needed to bring spoke to top (180 degrees)
      const rotationNeeded = 180 - currAngle;

      console.log('Rotation needed:', rotationNeeded);
      currentRotation = rotationNeeded;

      // Apply the rotation while preserving the initial translate transform
      spokeSystem.style.transition = 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      spokeSystem.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
      
      console.log('Applied rotation:', currentRotation);

      // Update label rotations to keep them upright
      setTimeout(() => {
        updateLabelRotations();
      }, 100);
    };

    // Set active spoke for current page and rotate wheel accordingly
    const activeSpoke = document.querySelector(`.spoke[data-page="${activePage}"]`) as HTMLElement;
    console.log('Active page:', activePage);
    console.log('Found active spoke:', activeSpoke);
    
    if (activeSpoke) {
      // Remove active class from all spokes
      spokes.forEach(spoke => spoke.classList.remove('active'));
      
      // Add active class to current page spoke
      activeSpoke.classList.add('active');
      console.log('Set active class on spoke for:', activePage);

      // Rotate the wheel to bring active spoke to top
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        rotateToSpoke(activeSpoke);
      }, 50);
    } else {
      console.warn('No spoke found for active page:', activePage);
    }

    // Handle mouse wheel scroll events
    const handleWheelScroll = (e: WheelEvent) => {
      // Skip if already scrolling or if horizontal scroll
      if (isScrolling || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const currentSection = getCurrentSection();
      
      // Scrolling down (positive deltaY)
      if (e.deltaY > 0) {
        // If we're on hero section, scroll to main content
        if (currentSection === 'hero') {
          e.preventDefault(); // Prevent default scroll behavior
          scrollToSection('mainContent');
        }
        // If we're on main section, allow normal scrolling within content
      }
      
      // Scrolling up (negative deltaY)
      else if (e.deltaY < 0) {
        // If we're on main section and at the top, scroll back to hero
        if (currentSection === 'main') {
          const mainSection = document.getElementById('mainContent');
          if (mainSection && mainSection.scrollTop <= 5) {
            e.preventDefault(); // Prevent default scroll behavior
            scrollToSection('hero');
          }
        }
      }
    };

    // Handle touch events for mobile devices
    let touchStartY: number | null = null;
    let touchStartTime: number = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY === null || isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchStartY - touchEndY;
      const deltaTime = touchEndTime - touchStartTime;
      
      // Check if it's a valid swipe (minimum distance and not too slow)
      if (Math.abs(deltaY) > 80 && deltaTime < 500) {
        const currentSection = getCurrentSection();
        
        // Swiping up (positive deltaY) - scroll to main content
        if (deltaY > 0 && currentSection === 'hero') {
          scrollToSection('mainContent');
        }
        // Swiping down (negative deltaY) - scroll to hero
        else if (deltaY < 0 && currentSection === 'main') {
          const mainSection = document.getElementById('mainContent');
          if (mainSection && mainSection.scrollTop <= 5) {
            scrollToSection('hero');
          }
        }
      }
      
      // Reset touch tracking
      touchStartY = null;
    };

    // Add event listeners
    // Use window for global scroll detection
    window.addEventListener('wheel', handleWheelScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activePage]); // Re-run when active page changes
};
