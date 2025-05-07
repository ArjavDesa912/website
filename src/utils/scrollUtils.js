/**
 * Smoothly scrolls to a specified section by ID
 * @param {string} id - The ID of the target element to scroll to
 */
export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // 80px offset for the fixed header
        behavior: 'smooth'
      });
    }
  };