export function initializePortfolio() {
  const controller = new AbortController();
  const { signal } = controller;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hero = document.getElementById('hero');
  const observers = [];
  let timer;
  if (fine && !reduced) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--my', `${event.clientY - rect.top}px`);
    }, { signal });
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      const angle = getComputedStyle(element).getPropertyValue('--r') || '0deg';
      element.addEventListener('pointermove', (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        element.style.transform = `perspective(900px) rotate(calc(${angle} * .4)) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
      }, { signal });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; }, { signal });
    });
  }
  const elements = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }), { threshold: .1 });
    elements.forEach((element) => observer.observe(element));
    observers.push(observer);
    document.documentElement.classList.add('js');
  }
  const tabs = Array.from(document.querySelectorAll('.tab'));
  function selectTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      document.getElementById(`p-${i}`).hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index), { signal });
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(next, true); }
    }, { signal });
  });
  selectTab(0);
  const links = document.querySelectorAll('nav.float a');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) links.forEach((link) => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-20% 0px -50% 0px' });
    ['sobre', 'projetos', 'contato'].forEach((id) => observer.observe(document.getElementById(id)));
    observers.push(observer);
  }
  const copy = document.getElementById('copiar');
  copy.setAttribute('aria-live', 'polite');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copy.dataset.copy);
      if (signal.aborted) return;
      copy.textContent = 'E-mail copiado';
      clearTimeout(timer);
      timer = setTimeout(() => { copy.textContent = 'Copiar e-mail'; }, 1800);
    } catch { if (!signal.aborted) copy.textContent = copy.dataset.copy; }
  }, { signal });
  return () => {
    controller.abort();
    observers.forEach((observer) => observer.disconnect());
    clearTimeout(timer);
    document.documentElement.classList.remove('js');
  };
}
