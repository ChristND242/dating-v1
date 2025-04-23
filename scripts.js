// Sample profiles data
const profiles = [
    {
      id: 1,
      name: "Julie Martin",
      age: 26,
      location: "Ponte Noire, Congo",
      distance: "390 km",
      bio: "Passionnée de photographie et de voyages. Je cherche quelqu'un pour partager des aventures et des moments simples.",
      interests: ["Photographie", "Voyages", "Cuisine", "Randonnée"],
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4",
    },
    {
      id: 2,
      name: "Patricia Ngoma",
      age: 29,
      location: "Brazzaville, Congo",
      distance: "12 km",
      bio: "Ingénieure en informatique, amatrice de sport et de bonne cuisine. Je recherche une personne positive et souriante.",
      interests: ["Technologie", "Sport", "Cuisine", "Musique"],
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-man-doing-tricks-with-skateboard-in-a-parking-lot-34553-large.mp4",
    },
    {
      id: 3,
      name: "Sophie Bbchoux",
      age: 24,
      location: "Nkayi, Congo",
      distance: "25 km",
      bio: "Étudiante en médecine qui aime la nature et les animaux. Je cherche quelqu'un de gentil et attentionné.",
      interests: ["Médecine", "Animaux", "Nature", "Lecture"],
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-relaxing-in-a-meadow-15801-large.mp4",
    },
    {
      id: 4,
      name: "Alexandre Marie",
      age: 31,
      location: "Brazzaville, Congo",
      distance: "8 km",
      bio: "Chefferieure de cuisine passionnée par son métier. J'aime partager mes créations culinaires et découvrir de nouvelles saveurs.",
      interests: ["Cuisine", "Vins", "Voyages", "Art"],
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524502397800-2eea0587d272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-man-cooking-in-the-kitchen-1560-large.mp4",
    },
    {
      id: 5,
      name: "Camille Rousseau",
      age: 27,
      location: "Brazzaville, Congo",
      distance: "15 km",
      bio: "Graphiste freelance qui adore l'art et la créativité sous toutes ses formes. Je recherche quelqu'un d'ouvert d'esprit.",
      interests: ["Art", "Design", "Photographie", "Musée"],
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524502397800-2eea0587d272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-drawing-on-a-sketchpad-1212-large.mp4",
    },
    {
      id: 6,
      name: "Michelle Nancy",
      age: 30,
      location: "Pointe Noire, Congo",
      distance: "5 km",
      bio: "Entrepreneure de vin. Passionnée par les rencontres et les échanges culturels. Je cherche une personne curieuse.",
      interests: ["Vin", "Voyages", "Culture", "Entrepreneuriat"],
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1524502397800-2eea0587d272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      ],
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-man-tasting-wine-in-a-vineyard-34552-large.mp4",
    },
  ];

  // Sample matches data
  let matches = [];

  // Sample chat messages
  const chatMessages = {
    1: [
      { text: "Salut Julie! Comment ça va?", sent: true, time: "10:30" },
      {
        text: "Salut! Ça va bien merci, et toi?",
        sent: false,
        time: "10:32",
      },
      {
        text: "Très bien merci! Tu as prévu quelque chose ce weekend?",
        sent: true,
        time: "10:33",
      },
    ],
    3: [
      {
        text: "Bonjour Sophie, tu as l'air très sympa sur ton profil!",
        sent: true,
        time: "Hier",
      },
      {
        text: "Merci! Ton profil m'a beaucoup plu aussi 😊",
        sent: false,
        time: "Hier",
      },
    ],
  };

  // Loading messages
  const loadingMessages = [
    "Chargement de votre expérience de rencontre...",
    "Recherche de profils correspondant à vos critères...",
    "Préparation de votre interface personnalisée...",
    "Analyse de vos préférences...",
    "Presque terminé...",
    "Dernières vérifications...",
  ];

  // DOM Elements
  const loadingScreen = document.querySelector(".loading-screen");
  const progressBar = document.querySelector(".progress");
  const loadingMessage = document.querySelector(".loading-message");
  const appContainer = document.querySelector(".app-container");
  const profileCardsContainer = document.getElementById("profile-cards");
  const emptyState = document.getElementById("empty-state");
  const dislikeBtn = document.getElementById("dislike-btn");
  const likeBtn = document.getElementById("like-btn");
  const superLikeBtn = document.getElementById("super-like-btn");
  const matchesContainer = document.getElementById("matches-container");
  const noMatches = document.getElementById("no-matches");
  const chatList = document.getElementById("chat-list");
  const noChats = document.getElementById("no-chats");
  const navItems = document.querySelectorAll(".nav-item");
  const tabContents = document.querySelectorAll(".tab-content");
  const matchModal = document.querySelector(".match-modal");
  const matchName = document.querySelector(".match-name");
  const matchUserImg = document.getElementById("match-user-img");
  const keepSwipingBtn = document.getElementById("keep-swiping");
  const startChatBtn = document.getElementById("start-chat");
  const chatContainer = document.querySelector(".chat-container");
  const backToMatchesBtn = document.getElementById("back-to-matches");
  const chatMessagesContainer = document.getElementById("chat-messages");
  const chatUserImg = document.getElementById("chat-user-img");
  const chatUserName = document.getElementById("chat-user-name");

  // Variables
  let currentProfileIndex = 0;
  let currentMatchId = null;
  let currentChatId = null;
  let progress = 0;
  let loadingInterval;

  // Initialize the app
  function init() {
    // Simulate loading
    simulateLoading();

    // Load first profile
    loadNextProfile();

    // Set up event listeners
    setupEventListeners();
  }

  // Simulate loading screen
  function simulateLoading() {
    let messageIndex = 0;
    loadingMessage.textContent = loadingMessages[messageIndex];

    loadingInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5;
      if (progress > 100) progress = 100;
      progressBar.style.width = `${progress}%`;

      // Change message every 20% progress
      if (progress >= (messageIndex + 1) * 20) {
        messageIndex++;
        if (messageIndex < loadingMessages.length) {
          loadingMessage.textContent = loadingMessages[messageIndex];
        }
      }

      // Finish loading
      if (progress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
          appContainer.classList.remove("hidden");
        }, 500);
      }
    }, 300);
  }

  // Load next profile
  function loadNextProfile() {
    if (currentProfileIndex >= profiles.length) {
      profileCardsContainer.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }

    const profile = profiles[currentProfileIndex];

    // Create profile card
    const profileCard = document.createElement("div");
    profileCard.className =
      "profile-card absolute w-full h-full bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-300";
    profileCard.dataset.id = profile.id;

    // Add video or image
    if (profile.video) {
      profileCard.innerHTML = `
                <div class="video-container">
                    <video loop muted playsinline>
                        <source src="${profile.video}" type="video/mp4">
                    </video>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <div class="flex justify-between items-end mb-2">
                        <div>
                            <h2 class="text-2xl font-bold">${
                              profile.name
                            }, ${profile.age}</h2>
                            <p class="flex items-center text-sm">
                                <i class="fas fa-map-marker-alt mr-1"></i> ${
                                  profile.location
                                } • ${profile.distance}
                            </p>
                        </div>
                        <button class="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-white">
                            <i class="fas fa-pause"></i>
                        </button>
                    </div>
                    <p class="text-sm mb-3">${profile.bio}</p>
                    <div class="flex flex-wrap gap-2">
                        ${profile.interests
                          .map(
                            (interest) =>
                              `<span class="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs">${interest}</span>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="absolute top-4 left-4">
                    <button class="w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
            `;
    } else {
      profileCard.innerHTML = `
                <div class="h-full w-full bg-gray-200 relative">
                    <img src="${profile.images[0]}" alt="${
        profile.name
      }" class="w-full h-full object-cover">
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <div class="flex justify-between items-end mb-2">
                        <div>
                            <h2 class="text-2xl font-bold">${
                              profile.name
                            }, ${profile.age}</h2>
                            <p class="flex items-center text-sm">
                                <i class="fas fa-map-marker-alt mr-1"></i> ${
                                  profile.location
                                } • ${profile.distance}
                            </p>
                        </div>
                    </div>
                    <p class="text-sm mb-3">${profile.bio}</p>
                    <div class="flex flex-wrap gap-2">
                        ${profile.interests
                          .map(
                            (interest) =>
                              `<span class="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs">${interest}</span>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="absolute top-4 left-4">
                    <button class="w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
            `;
    }

    // Add to DOM
    profileCardsContainer.innerHTML = "";
    profileCardsContainer.appendChild(profileCard);

    // Set up video controls if video exists
    if (profile.video) {
      const video = profileCard.querySelector("video");
      const playPauseBtn =
        profileCard.querySelector(".fa-pause").parentElement;

      // Autoplay video
      video.play().catch((e) => console.log("Autoplay prevented:", e));

      // Play/pause toggle
      playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
          video.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
      });
    }

    // Set up swipe events
    setupSwipeEvents(profileCard);
  }

  // Set up swipe events for profile card
  function setupSwipeEvents(card) {
    let startX, startY, moveX, moveY;
    let isDragging = false;

    card.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    card.addEventListener("touchmove", handleTouchMove, { passive: false });
    card.addEventListener("touchend", handleTouchEnd);

    card.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleTouchStart(e) {
      e.preventDefault();
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isDragging = true;
    }

    function handleTouchMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      moveX = touch.clientX - startX;
      moveY = touch.clientY - startY;

      // Only consider horizontal movement
      const rotation = moveX * 0.1;
      card.style.transform = `translateX(${moveX}px) rotate(${rotation}deg)`;
      card.style.transition = "none";

      // Change opacity based on direction
      if (moveX > 0) {
        card.style.opacity = 1 - Math.abs(moveX) / 200;
      } else {
        card.style.opacity = 1 - Math.abs(moveX) / 200;
      }
    }

    function handleTouchEnd() {
      if (!isDragging) return;
      isDragging = false;

      const threshold = 100;

      if (Math.abs(moveX) > threshold) {
        // Swipe right (like)
        if (moveX > 0) {
          card.classList.add("swipe-right");
          handleLike();
        }
        // Swipe left (dislike)
        else {
          card.classList.add("swipe-left");
          handleDislike();
        }
      } else {
        // Return to original position
        card.style.transform = "translateX(0) rotate(0)";
        card.style.opacity = 1;
        card.style.transition = "all 0.3s ease";
      }
    }

    function handleMouseDown(e) {
      e.preventDefault();
      startX = e.clientX;
      startY = e.clientY;
      isDragging = true;
    }

    function handleMouseMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      moveX = e.clientX - startX;
      moveY = e.clientY - startY;

      // Only consider horizontal movement
      const rotation = moveX * 0.1;
      card.style.transform = `translateX(${moveX}px) rotate(${rotation}deg)`;
      card.style.transition = "none";

      // Change opacity based on direction
      if (moveX > 0) {
        card.style.opacity = 1 - Math.abs(moveX) / 200;
      } else {
        card.style.opacity = 1 - Math.abs(moveX) / 200;
      }
    }

    function handleMouseUp() {
      if (!isDragging) return;
      isDragging = false;

      const threshold = 100;

      if (Math.abs(moveX) > threshold) {
        // Swipe right (like)
        if (moveX > 0) {
          card.classList.add("swipe-right");
          handleLike();
        }
        // Swipe left (dislike)
        else {
          card.classList.add("swipe-left");
          handleDislike();
        }
      } else {
        // Return to original position
        card.style.transform = "translateX(0) rotate(0)";
        card.style.opacity = 1;
        card.style.transition = "all 0.3s ease";
      }
    }
  }

  // Handle like action
  function handleLike() {
    const currentProfile = profiles[currentProfileIndex];

    // Random chance to match (30% chance)
    const isMatch = Math.random() < 0.3;

    if (isMatch) {
      // Add to matches
      matches.push(currentProfile);
      updateMatchesTab();

      // Show match modal
      currentMatchId = currentProfile.id;
      matchName.textContent = currentProfile.name;
      matchUserImg.src = currentProfile.images[0];
      matchModal.classList.add("active");
    }

    // Move to next profile after animation
    setTimeout(() => {
      currentProfileIndex++;
      loadNextProfile();
    }, 500);
  }

  // Handle dislike action
  function handleDislike() {
    // Move to next profile after animation
    setTimeout(() => {
      currentProfileIndex++;
      loadNextProfile();
    }, 500);
  }

  // Update matches tab
  function updateMatchesTab() {
    if (matches.length === 0) {
      matchesContainer.innerHTML = "";
      noMatches.classList.remove("hidden");
      return;
    }

    noMatches.classList.add("hidden");
    matchesContainer.innerHTML = "";

    matches.forEach((match) => {
      const matchElement = document.createElement("div");
      matchElement.className =
        "bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer";
      matchElement.dataset.id = match.id;
      matchElement.innerHTML = `
                <div class="relative pb-[100%]">
                    <img src="${match.images[0]}" alt="${match.name}" class="absolute w-full h-full object-cover">
                    <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent text-white">
                        <h3 class="text-sm font-medium">${match.name}, ${match.age}</h3>
                    </div>
                </div>
            `;

      matchElement.addEventListener("click", () => openChat(match.id));
      matchesContainer.appendChild(matchElement);
    });

    // Also update chat tab
    updateChatTab();
  }

  // Update chat tab
  function updateChatTab() {
    if (matches.length === 0) {
      chatList.innerHTML = "";
      noChats.classList.remove("hidden");
      return;
    }

    noChats.classList.add("hidden");
    chatList.innerHTML = "";

    matches.forEach((match) => {
      const chatItem = document.createElement("div");
      chatItem.className =
        "flex items-center p-3 bg-white rounded-xl shadow-sm cursor-pointer";
      chatItem.dataset.id = match.id;
      chatItem.innerHTML = `
                <div class="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img src="${match.images[0]}" alt="${match.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h3 class="font-medium">${match.name}</h3>
                    <p class="text-sm text-gray-500 truncate">Nouveau match!</p>
                </div>
                <div class="w-2 h-2 rounded-full bg-red-500"></div>
            `;

      chatItem.addEventListener("click", () => openChat(match.id));
      chatList.appendChild(chatItem);
    });
  }

  // Open chat with a match
  function openChat(matchId) {
    const match = matches.find((m) => m.id === matchId);
    if (!match) return;

    currentChatId = matchId;
    chatUserImg.src = match.images[0];
    chatUserName.textContent = match.name;

    // Load messages
    chatMessagesContainer.innerHTML = "";
    if (chatMessages[matchId]) {
      chatMessages[matchId].forEach((msg) => {
        const messageElement = document.createElement("div");
        messageElement.className = `message-bubble ${
          msg.sent ? "sent" : "received"
        }`;
        messageElement.innerHTML = `
                    <p>${msg.text}</p>
                    <span class="text-xs opacity-70 block text-right mt-1">${msg.time}</span>
                `;
        chatMessagesContainer.appendChild(messageElement);
      });
    } else {
      // Add welcome message if no messages exist
      const welcomeMessage = document.createElement("div");
      welcomeMessage.className = "text-center text-gray-500 py-8";
      welcomeMessage.textContent = `Envoyez votre premier message à ${match.name}!`;
      chatMessagesContainer.appendChild(welcomeMessage);
    }

    // Scroll to bottom
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Show chat interface
    chatContainer.classList.add("active");
  }

  // Set up event listeners
  function setupEventListeners() {
    // Navigation tabs
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Update active tab
        navItems.forEach((nav) =>
          nav.classList.remove("active", "text-red-500")
        );
        item.classList.add("active", "text-red-500");

        // Show corresponding content
        const tabId = item.dataset.tab;
        tabContents.forEach((content) =>
          content.classList.remove("active")
        );
        document.getElementById(tabId).classList.add("active");
      });
    });

    // Action buttons
    dislikeBtn.addEventListener("click", () => {
      const card = document.querySelector(".profile-card");
      card.classList.add("swipe-left");
      handleDislike();
    });

    likeBtn.addEventListener("click", () => {
      const card = document.querySelector(".profile-card");
      card.classList.add("swipe-right");
      handleLike();
    });

    superLikeBtn.addEventListener("click", () => {
      // Super like has higher chance to match (60%)
      const currentProfile = profiles[currentProfileIndex];
      const isMatch = Math.random() < 0.6;

      if (isMatch) {
        // Add to matches
        matches.push(currentProfile);
        updateMatchesTab();

        // Show match modal
        currentMatchId = currentProfile.id;
        matchName.textContent = currentProfile.name;
        matchUserImg.src = currentProfile.images[0];
        matchModal.classList.add("active");
      }

      const card = document.querySelector(".profile-card");
      card.classList.add("swipe-right");

      // Move to next profile after animation
      setTimeout(() => {
        currentProfileIndex++;
        loadNextProfile();
      }, 500);
    });

    // Match modal buttons
    keepSwipingBtn.addEventListener("click", () => {
      matchModal.classList.remove("active");
    });

    startChatBtn.addEventListener("click", () => {
      matchModal.classList.remove("active");
      openChat(currentMatchId);
    });

    // Chat interface
    backToMatchesBtn.addEventListener("click", () => {
      chatContainer.classList.remove("active");
    });
  }

  // Initialize the app when DOM is loaded
  document.addEventListener("DOMContentLoaded", init);