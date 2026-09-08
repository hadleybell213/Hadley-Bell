// nav.js

document.addEventListener("DOMContentLoaded", () => {
    // Navigation Data Setup
    const primaryLinks = [
        { name: "Home", url: "index.html" },
        { name: "About Us", url: "about.html" },
        { name: "Services", url: "services.html" },
        { name: "Contact", url: "contact.html" }
    ];

    const secondaryLinks = [
        { name: "FAQ", url: "faq.html" },
        { name: "Support", url: "support.html" },
        { name: "Blog", url: "blog.html" }
    ];

    // Helper function to build <ul> links
    function buildNavList(links) {
        const ul = document.createElement("ul");
        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        return ul;
    }

    // Populate Top Navigation Bars (if targets exist)
    const topPrimaryNav = document.getElementById("top-primary-nav");
    if (topPrimaryNav) {
        topPrimaryNav.appendChild(buildNavList(primaryLinks));
    }

    const topSecondaryNav = document.getElementById("top-secondary-nav");
    if (topSecondaryNav) {
        topSecondaryNav.appendChild(buildNavList(secondaryLinks));
    }

    // Populate Side Navigation (if targets exist)
    const sidePrimaryNav = document.getElementById("side-primary-nav");
    if (sidePrimaryNav) {
        sidePrimaryNav.appendChild(buildNavList(primaryLinks));
    }

    const sideSecondaryNav = document.getElementById("side-secondary-nav");
    if (sideSecondaryNav) {
        sideSecondaryNav.appendChild(buildNavList(secondaryLinks));
    }
});
