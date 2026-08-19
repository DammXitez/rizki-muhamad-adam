document.addEventListener("DOMContentLoaded", () => {
    
    // Inisialisasi Elemen HTML
    const welcomeModal = document.getElementById("welcome-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const confirmModalBtn = document.getElementById("confirm-modal-btn");
    const profileImg = document.getElementById("profile-img");
    const profileMenu = document.getElementById("profile-menu");
    const faders = document.querySelectorAll(".fade");

    /* ==========================================================================
       1. LOGIKA POP-UP WELCOME MODAL
       ========================================================================== */
    const showModal = () => {
        if (welcomeModal) welcomeModal.classList.add("active");
    };

    const closeModal = () => {
        if (welcomeModal) welcomeModal.classList.remove("active");
    };

    // Tampilkan modal 400ms setelah halaman dimuat
    setTimeout(showModal, 400);

    // Event Listener Penutup Modal
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (confirmModalBtn) confirmModalBtn.addEventListener("click", closeModal);

    // Menutup modal jika pengguna mengklik area luar modal
    if (welcomeModal) {
        welcomeModal.addEventListener("click", (e) => {
            if (e.target === welcomeModal) {
                closeModal();
            }
        });
    }

    /* ==========================================================================
       2. LOGIKA DROPDOWN MENU
       ========================================================================== */
    const toggleMenu = () => {
        profileMenu.classList.toggle("show");
    };

    if (profileImg) {
        profileImg.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Menutup menu saat klik di luar area menu
    document.addEventListener("click", (e) => {
        if (!profileMenu.contains(e.target) && e.target !== profileImg) {
            profileMenu.classList.remove("show");
        }
    });

    // Menutup menu saat halaman di-scroll
    window.addEventListener("scroll", () => {
        if (profileMenu.classList.contains("show")) {
            profileMenu.classList.remove("show");
        }
    });

    /* ==========================================================================
       3. ANIMASI FADE-IN SAAT SCROLL (Intersection Observer)
       ========================================================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    faders.forEach(el => observer.observe(el));

});