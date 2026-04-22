// CausalMM — Light Theme JS
// Minimal, clean interactions

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .12 });
  reveals.forEach(r => io.observe(r));
}

// SCM node interaction (index.html)
const scmNodes = document.querySelectorAll('.scm-g-node');
scmNodes.forEach(node => {
  node.addEventListener('click', () => {
    scmNodes.forEach(n => n.querySelector('rect').setAttribute('stroke-width', '1.5'));
    node.querySelector('rect').setAttribute('stroke-width', '2.5');
  });
});
