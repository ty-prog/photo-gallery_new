document.getElementById('showBioButton').onclick = function() {
    document.getElementById('bioModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('bioModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('bioModal')) {
        document.getElementById('bioModal').style.display = 'none';
    }
}
