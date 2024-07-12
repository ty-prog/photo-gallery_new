document.getElementById('showBioButton').onclick = function() {
    fetch('bio.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bioContent').innerHTML = data.replace(/\n/g, '<br>');
            document.getElementById('bioModal').style.display = 'block';
        })
        .catch(error => {
            document.getElementById('bioContent').textContent = '経歴の読み込みに失敗しました。';
            console.error('Error fetching the bio:', error);
        });
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('bioModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('bioModal')) {
        document.getElementById('bioModal').style.display = 'none';
    }
}

// Image modal functionality
const images = document.querySelectorAll('.gallery img');
const imageModal = document.getElementById('imageModal');
const expandedImage = document.getElementById('expandedImage');
const closeImage = document.getElementsByClassName('close-image')[0];

images.forEach(img => {
    img.onclick = function() {
        expandedImage.src = this.src;
        imageModal.style.display = 'block';
    }
});

closeImage.onclick = function() {
    imageModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
}
