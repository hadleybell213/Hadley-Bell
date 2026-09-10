// nav.js

document.addEventListener("DOMContentLoaded", () => {
    const primaryLinks = [
        { name: "Home", url: "index.html" },
        { name: "Education", url: "about.html" },
        { name: "Services", url: "services.html" },
        { name: "Email: hadleyb@iastate.edu", url: "mailto:hadleyb@iastate.edu" },
        { name: "Phone: 641-414-1489", url: "tel:6414141489" },
        { name: "LinkedIn", url: "https://www.linkedin.com", target: "_blank" }
    ];

    const secondaryLinks = [
        { name: "FAQ", url: "faq.html" },
        { name: "Support", url: "support.html" },
        { name: "Blog", url: "blog.html" }
    ];

    // Helper function to build horizontal navigation bars
    function buildHorizontalNav(links) {
        const navContainer = document.createElement("nav");
        links.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.name;
            if (link.target) {
                a.target = link.target;
                a.rel = "noopener noreferrer";
            }
            navContainer.appendChild(a);
        });
        return navContainer;
    }

    // Helper function to build vertical lists for sidebars
    function buildVerticalNavList(links) {
        const ul = document.createElement("ul");
        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.name;
            if (link.target) {
                a.target = link.target;
                a.rel = "noopener noreferrer";
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        return ul;
    }

    // Insert Links Into Top Header Nav Containers
    const topPrimaryNav = document.getElementById("top-primary-nav");
    if (topPrimaryNav) topPrimaryNav.appendChild(buildHorizontalNav(primaryLinks));

    const topSecondaryNav = document.getElementById("top-secondary-nav");
    if (topSecondaryNav) topSecondaryNav.appendChild(buildHorizontalNav(secondaryLinks));

    // Insert Links Into Side Nav Containers
    const sidePrimaryNav = document.getElementById("side-primary-nav");
    if (sidePrimaryNav) sidePrimaryNav.appendChild(buildVerticalNavList(primaryLinks));

    const sideSecondaryNav = document.getElementById("side-secondary-nav");
    if (sideSecondaryNav) sideSecondaryNav.appendChild(buildVerticalNavList(secondaryLinks));
});
