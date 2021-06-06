function Podaci(drzava) {
    var prozor = window.open('', '', 'width=500, height=300');
    if ( drzava == 'Srbija')
        prozor.document.write("<html><head><title>Србија</title></head><body><h2>Србија</h2><p>Главни град: Београд <br>Површина: 88.361 km²<br>Популација: 6,982 милиона (2018.)</p></body></html>");
    else if (drzava == 'Crna Gora')
        prozor.document.write("<html><head><title>Црна Гора </title></head><body><h2>Црна Гора</h2><p>Главни град: Подгорица <br>Површина: 3.812 km²<br>Популација: 620.029</p></body></html>");
    else if (drzava == 'Albanija')
        prozor.document.write("<html><head><title>Албанија</title></head><body><h2>Албанија</h2><p>Главни град: Тирана <br>Површина: 28.748 km²<br>Популација:  2.862 милиона (2019) </p></body></html>");
    else if (drzava == 'Makedonija')
        prozor.document.write("<html><head><title>Македонија</title></head><body><h2>Македонија</h2><p>Главни град: Скопље <br>Површина: 25.713 km²<br>Популација:  2.077 милиона (2019) </p></body></html>");
    else if (drzava == 'Madjarska')
        prozor.document.write("<html><head><title>Мађарска</title></head><body><h2>Мађарска</h2><p>Главни град: Будимпешта <br>Површина: 93.027 km²<br>Популација: 9.773 miliona (2019 </p></body></html>");
    else if (drzava == 'Bugarska')
        prozor.document.write("<html><head><title>Бугарска</title></head><body><h2>Бугарска</h2><p>Главни град: Софија <br>Површина: 110.994 km²<br>Популација:6.951.482 </p></body></html>");
    else if (drzava == 'Rumunija')
        prozor.document.write("<html><head><title>Румунија</title></head><body><h2>Румунија</h2><p>Главни град: Букурешт <br>Површина: 28.748 km²<br>Популација:  19.41 милиона (2019) </p></body></html>");
    else if (drzava == 'Hrvatska')
        prozor.document.write("<html><head><title>Хрватска</title></head><body><h2>Хрватска</h2><p>Главни град: Загреб <br>Површина: 56.594 km²<br>Популација:  4.076 милиона (2019) </p></body></html>");
    else if (drzava == 'Bosna i Hercegovina')
        prozor.document.write("<html><head><title>Босна и Херцеговина</title></head><body><h2>Босна и Херцеговина</h2><p>Главни град: Сарајево <br>Површина: 51.209,2 km²<br>Популација:  3.324 милиона (2018) </p></body></html>");
}
function Pusti(drzava) {
    var himna = document.getElementById(drzava);
    himna.play();
}
function Zaustavi(drzava) {
    var himna = document.getElementById(drzava);
    himna.pause();
    himna.currentTime = 0;
}