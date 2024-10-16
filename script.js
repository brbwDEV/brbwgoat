// Function to fetch Minecraft server status
async function getMinecraftServerStatus() {
    try {
        const response = await fetch('https://api.mcsrvstat.us/2/play.aquacraft.com');
        const data = await response.json();
        
        document.getElementById('player-count').textContent = data.players.online;
    } catch (error) {
        console.error('Error fetching Minecraft server status:', error);
        document.getElementById('player-count').textContent = 'Unavailable';
    }
}

// Function to fetch Discord member count (this is a mock function)
async function getDiscordMemberCount() {
    // In reality, you'd need to use Discord's API or a custom backend
    // This is just a placeholder
    const memberCount = Math.floor(Math.random() * 1000) + 100;
    document.getElementById('discord-count').textContent = memberCount;
}

// Sample staff data (replace with your actual staff information)
const staffMembers = [
    { ign: "Cudgie7", role: "Founder/Owner", quote: " I want to adopt Kebal " },
    { ign: "Deyo", role: "Founder/Leader", quote: " 24fps is enough. " },
    { ign: "qSuolis", role: "Owner/Dev", quote: " what is what " },
    { ign: "Cheeeeeky", role: "Owner/Dev", quote: " Meeeeoooowwwwoo " },
    { ign: "GunjanXYZ", role: "Media Manager", quote: " NEVER USE DISCORD " },
    { ign: "Devilop27", role: "Staff Manager", quote: " best 15 year old :sunglasses: " },
    { ign: "Kebal", role: "Developer", quote: " dont consider me as a developer " },
    { ign: "Meek_mills", role: "Developer", quote: " Professtional Artificial Intelligence " },


];

function getStarlightSkinUrl(ign) {
    if(ign === "Deyo"){
        return `https://mc-heads.net/avatar/Rvemiw99`;
    }else if(ign === "Cheeeeeky"){
        return `https://mc-heads.net/avatar/caya/`;
    }else{
    // Use the default size provided by the API
        return `https://mc-heads.net/avatar/${ign}`;
    }
}

function displayStaffMembers() {
    const staffList = document.getElementById('staff-list');
    staffList.innerHTML = '';
    
    staffMembers.forEach(member => {
        const skinUrl = getStarlightSkinUrl(member.ign);
        
        const staffMember = document.createElement('div');
        staffMember.classList.add('staff-member');
        
        staffMember.innerHTML = `
            <div class="staff-content">
                <div class="staff-skin-container">
                    <img src="${skinUrl}" alt="${member.ign}'s skin" class="staff-skin">
                </div>
                <p class="staff-name">${member.ign}</p>
                <p class="staff-role">${member.role}</p>
            </div>
            <p class="staff-quote">"${member.quote}"</p>
        `;
        
        staffList.appendChild(staffMember);
    });
}

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.info-section');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Call functions when the page loads
window.addEventListener('load', () => {
    getMinecraftServerStatus();
    getDiscordMemberCount();
    displayStaffMembers();

    // Set initial state for scroll animations
    const elements = document.querySelectorAll('.info-section');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once to check initial state
});

document.addEventListener('DOMContentLoaded', function() {
    fetchServerStatus();
    fetchBedwarsInfo();
    fetchDiscordInfo();
});

function fetchServerStatus() {
    // ... (previous server status code remains the same) ...
}

function fetchBedwarsInfo() {
    // In a real-world scenario, you'd fetch this data from your server's API
    const bedwarsInfo = {
        description: "Experience intense 2v2, 3v3 and 4v4 Ranked Bedwars matches on Bhoppers RBW!",
        gameModes: [
            "Doubles [2v2]",
            "Tripples [3v3]",
            "Squads [4v4]"
        ],
        ranks: [
            "COAL",
            "IRON",
            "GOLD",
            "PLATINUM",
            "EMERALD",
            "DIAMOND",
            "OBSIDIAN"
        ]
    };

    displayBedwarsInfo(bedwarsInfo);
}

function displayBedwarsInfo(info) {
    const bedwarsDetails = document.getElementById('bedwars-details');
    bedwarsDetails.innerHTML = `
        <p>${info.description}</p>
        <h3>Game Modes:</h3>
        <ul>
            ${info.gameModes.map(mode => `<li>${mode}</li>`).join('')}
        </ul>
        <h3>Ranking System:</h3>
        <p>Climb the ranks from ${info.ranks[0]} to ${info.ranks[info.ranks.length - 1]}!</p>
        <div class="rank-list">
            ${info.ranks.map(rank => `<span class="rank">${rank}</span>`).join('')}
        </div>
    `;
}

function fetchDiscordInfo() {
    // Simulating API call for Discord information
    const discordInfo = {
        memberCount: 5000,
        features: [
            "Exclusive sneak peeks of upcoming features",
            "Direct communication with staff and developers",
            "Community events and giveaways",
            "Dedicated channels for strategy discussion and team finding",
            "Automatic rank synchronization with in-game progress"
        ]
    };

    displayDiscordInfo(discordInfo);
}

function displayDiscordInfo(info) {
    document.getElementById('discord-count').textContent = info.memberCount.toLocaleString();
    
    const discordFeatures = document.getElementById('discord-features');
    if (discordFeatures) {
        discordFeatures.innerHTML = info.features.map(feature => `<li>${feature}</li>`).join('');
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchBedwarsInfo();
    fetchDiscordInfo();
    displayStaffMembers();
    setupSmoothScrolling();
});
