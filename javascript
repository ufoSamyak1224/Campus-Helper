const classrooms = [
    { code: 'C-101', building: 'Building C', floor: 1, section: 'A' },
    { code: 'C-204', building: 'Building C', floor: 2, section: 'B' },
    { code: 'L-305', building: 'Lab Block', floor: 3, section: 'C' },
    { code: 'A-102', building: 'Building A', floor: 1, section: 'D' },
    { code: 'B-201', building: 'Building B', floor: 2, section: 'E' },
];

function switchTab(tabName) {
    document.querySelectorAll('.tab-content, .nav-btn').forEach(e => e.classList.remove('active'));
    document.getElementById(tabName + '-tab').classList.add('active');
    event.currentTarget.classList.add('active');
}

function showMapInfo(name, type) {
    document.getElementById('location-name').textContent = name;
    document.getElementById('location-type').textContent = type;
    document.getElementById('map-info').classList.add('show');
}

function closeMapInfo() {
    document.getElementById('map-info').classList.remove('show');
}

function searchClassroom() {
    const q = document.getElementById('classroom-search').value.toLowerCase();
    const r = document.getElementById('classroom-results');
    const f = classrooms.filter(c => c.code.toLowerCase().includes(q));
    
    r.innerHTML = !q ? '<div class="empty-state"><div class="empty-state-icon">📍</div><p>Start typing</p></div>' :
        f.length ? f.map(c => `<div class="classroom-card"><div class="classroom-header"><div><div class="classroom-code">${c.code}</div><div class="classroom-building">${c.building}</div><div class="classroom-details">Floor ${c.floor} • Section ${c.section}</div></div><div class="classroom-icon">🧭</div></div></div>`).join('') :
        '<div class="alert alert-warning"><p style="margin:0">No results</p></div>';
}

