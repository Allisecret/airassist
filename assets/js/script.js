// Fade-in animation on scroll
function revealOnScroll() {
    var elems = document.querySelectorAll('.fade-in-up');
    var windowHeight = window.innerHeight;
    elems.forEach(function(el) {
        var position = el.getBoundingClientRect().top;
        if (position < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// FAQ accordion
document.querySelectorAll('.toggle-faq').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var con = this.parentNode.querySelector('.faq-content');
        var isOpen = !con.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(f => f.classList.add('hidden'));
        if (!isOpen) con.classList.remove('hidden');
    });
});
// Navigation active state update on scroll
const sections = ['features', 'product', 'pricing', 'faq', 'cta'];

function setActiveNav() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    sections.forEach(id => {
        let el = document.getElementById(id);
        if (el) {
            let sectionTop = el.offsetTop - 120;
            let sectionBottom = sectionTop + el.offsetHeight;
            let navLinks = document.querySelectorAll('a[href="#' + id + '"]');
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(n => n.classList.add('active'));
            } else {
                navLinks.forEach(n => n.classList.remove('active'));
            }
        }
    });
}
window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);