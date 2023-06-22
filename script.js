// mengambil element html form dan tombol reverse
const form = document.getElementById('form');
const reverse = document.getElementById('reverse');

// mengambil element html label dari input suhu dan hasil 
const derajatLabel = document.getElementById('derajatLabel');
const hasilLabel = document.getElementById('hasilLabel');

// membuat event apa yg akan terjadi jika tombol reverse di klik
reverse.addEventListener('click', (e) => {    
    // pengkondisian indikator
    if (derajatLabel.textContent === "Celsius") {
        derajatLabel.textContent = 'Fahrenheit';
    } else {
        derajatLabel.textContent = 'Celsius';
    }
})

// membuat event apa yg akan terjadi jika tombol submit di klik
form.addEventListener('submit', (e) => {
    // menghilangkan sifat default submit agar tidak otomatis direfresh
    e.preventDefault();

    // mengambil elemen input derajat dan hasil
    const derajat = document.getElementById('derajat');
    const hasil = document.getElementById('hasil');

    // membuat hasil menjadi number
    const filteredHasil = parseFloat(derajat.value);

    // pengkondisian jika user tidak mengisikan apapun
    if (derajat.value.length < 1) {
        hasil.value = `jawaban tidak boleh kosong`
        return false
    } 
    // pengkondisian jika user mengisikan string
    if (isNaN(filteredHasil)) {
        hasil.value = `anda harus mengetikkan angka`
        return false
    }

    // pengkondisian jika celsius ke fahrenheit
    if (derajatLabel.textContent === "Celsius") {
        // rumus celsius ke fahrenheit
        const hasilCelsius = filteredHasil * 9 / 5 + 32
        // menampilkan hasil ke input hasil
        hasil.value = `${hasilCelsius} \u00B0F`
        
    } 
    
    // pengkondisian jika fahrenheit ke celsius
    else {
        // rumus fahrenheit ke celsius
        const hasilFahrenheit = 5 / 9 * (filteredHasil - 32);
        // menampilkan hasil ke input hasil
        hasil.value = `${hasilFahrenheit} \u00B0C`
    }
})