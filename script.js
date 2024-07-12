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
