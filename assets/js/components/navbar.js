/**
 * Navbar Component
 */

export async function loadNavbar() {

    const navbar = document.getElementById('navbar');

    navbar.innerHTML = `
        <nav class="navbar header">
        <img    
            src="./assets/imgs/Rick_and_Morty.svg"
            alt="Holas"
            style="width: 15%"
        >
        <div class"navbar-links">
            <a class"a-links" href="/" data-link>Home</a>
            <a class"a-links" href="/episodes" data-link >Episodes</a>
            <a class"a-links" href="/location" data-link >Locations</a>
            <a class"a-links" href="/contacts" data-link>Contact Us</a>
            <a class"a-links" href="/about" data-link>About Us</a>
        </div>
        </nav>
    `;
}