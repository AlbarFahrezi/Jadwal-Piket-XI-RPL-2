const scheduleData = {
    'Senin': ['Salsa Bella', 'Indri', 'Cikra', 'Fuzi', 'Sandi', 'Rakha', 'Aqila H.', 'Dzalfa'],
    'Selasa': ['M. Lutfi', 'Wulan', 'Risyad', 'Dhika', 'Nazwa', 'Albar', 'Zulfa'],
    'Rabu': ['Alzidan', 'Alipsa', 'M. Wijaya', 'Rezka', 'Maulana', 'Merlyani', 'Allegra'],
    'Kamis': ['Pandu', 'Indra', 'Wisnu', 'Dessray', 'Nailla', 'Aditia', 'Serina'],
    'Jumat': ['Fajar', 'Syifa', 'Anggita', 'Regina', 'M. Syahrul', 'Salsabilla', 'Syahrul']
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('schedule-container');
    const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });

    daysOfWeek.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.classList.add('day-card');

        // Tambahkan highlight untuk hari ini
        if (day.toLowerCase() === today.toLowerCase()) {
            dayCard.classList.add('highlight-today');
        }

        const dayTitle = document.createElement('h3');
        dayTitle.classList.add('day-title');
        dayTitle.textContent = day;
        dayCard.appendChild(dayTitle);

        const memberList = document.createElement('ul');
        memberList.classList.add('member-list');

        scheduleData[day].forEach(member => {
            const listItem = document.createElement('li');
            listItem.textContent = member;
            memberList.appendChild(listItem);
        });

        dayCard.appendChild(memberList);
        container.appendChild(dayCard);
    });
});