function loadContent(type) {
    const modal = document.getElementById('contentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    let filename;
    switch(type) {
        case 'profile':
            filename = 'profile.txt';
            modalTitle.textContent = '経歴';
            break;
        case 'works':
            filename = 'works.txt';
            modalTitle.textContent = '作品紹介';
            break;
        case 'diary':
            filename = 'diary.txt';
            modalTitle.textContent = '日記';
            break;
    }
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            modalContent.innerHTML = data.replace(/\n/g, '<br>');
            modal.style.display = 'block';
        })
        .catch(error => {
            modalContent.textContent = 'コンテンツの読み込みに失敗しました。';
            console.error('Error loading content:', error);
        });
}

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImage');
    modal.style.display = 'block';
    modalImg.src = src;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const contentModal = document.getElementById('contentModal');
    const imageModal = document.getElementById('imageModal');
    if (event.target == contentModal) {
        contentModal.style.display = 'none';
    }
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
}

// Close buttons
document.querySelector('#contentModal .close').onclick = function() {
    document.getElementById('contentModal').style.display = 'none';
}
document.querySelector('#imageModal .close-image').onclick = function() {
    document.getElementById('imageModal').style.display = 'none';
}
