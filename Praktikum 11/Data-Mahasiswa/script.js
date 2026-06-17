function ubahWarna(warna){

    const teks = document.getElementById("warnaText");

    if(teks){
        teks.style.color = warna;
    }

}

function tampilkanBiodata(){

    const nama = document.getElementById("bioNama").value.trim();
    const nim = document.getElementById("bioNim").value.trim();
    const jurusan = document.getElementById("bioJurusan").value.trim();
    const semester = document.getElementById("bioSemester").value.trim();

    const hasil = document.getElementById("hasilBiodata");

    if(!hasil) return;

    if(nama==="" || nim==="" || jurusan==="" || semester===""){

        hasil.innerHTML=`
        <h3 style="color:red;">
        ⚠️ Semua data wajib diisi.
        </h3>`;

        return;
    }

    hasil.innerHTML=`

    <div class="biodata-card">

    <h2>👨‍🎓 Biodata Mahasiswa</h2>
    <hr><br>

    <p><b>Nama :</b> ${nama}</p>
    <p><b>NIM :</b> ${nim}</p>
    <p><b>Jurusan :</b> ${jurusan}</p>
    <p><b>Semester :</b> ${semester}</p>

    </div>

    `;

}

function jumlahkan(){

    const a=document.getElementById("angka1").value;
    const b=document.getElementById("angka2").value;

    const hasil=document.getElementById("hasilJumlah");

    if(!hasil) return;

    if(a==="" || b===""){

        hasil.innerHTML="⚠️ Masukkan kedua angka.";

        return;

    }

    const total=parseFloat(a)+parseFloat(b);

    hasil.innerHTML="Hasil : <b>"+total+"</b>";

}

function cekNama(){

    const nama=document.getElementById("namaValidasi").value.trim();

    const hasil=document.getElementById("hasilValidasi");

    if(!hasil) return;

    if(nama===""){

        hasil.style.color="red";

        hasil.innerHTML="❌ Nama tidak boleh kosong.";

    }

    else{

        hasil.style.color="green";

        hasil.innerHTML="✅ Selamat datang, <b>"+nama+"</b>";

    }

}

function tampilMahasiswa(){

    const nama=document.getElementById("namaMahasiswa").value.trim();

    const nim=document.getElementById("nimMahasiswa").value.trim();

    const prodi=document.getElementById("prodiMahasiswa").value.trim();

    const semester=document.getElementById("semesterMahasiswa").value.trim();

    const hasil=document.getElementById("hasilMahasiswa");

    if(!hasil) return;

    if(nama===""||nim===""||prodi===""||semester===""){

        hasil.innerHTML="<h3 style='color:red;'>⚠️ Lengkapi seluruh data.</h3>";

        return;

    }

    hasil.innerHTML=`

    <div class="biodata-card">

    <h2>🎓 Biodata Mahasiswa</h2>

    <hr><br>

    <p><b>👤 Nama :</b> ${nama}</p>

    <p><b>🆔 NIM :</b> ${nim}</p>

    <p><b>💻 Program Studi :</b> ${prodi}</p>

    <p><b>📚 Semester :</b> ${semester}</p>

    </div>

    `;

}


let dataMahasiswa=[];


function hitungGrade(nilai){

    if(nilai>=90) return "A";

    if(nilai>=80) return "B";

    if(nilai>=70) return "C";

    if(nilai>=60) return "D";

    return "E";

}


function badgeGrade(grade){

    switch(grade){

        case "A":
        return `<span class="grade-a">A</span>`;

        case "B":
        return `<span class="grade-b">B</span>`;

        case "C":
        return `<span class="grade-c">C</span>`;

        case "D":
        return `<span class="grade-d">D</span>`;

        default:
        return `<span class="grade-e">E</span>`;

    }

}


function simpanData(){

    const nama=document.getElementById("namaData").value.trim();

    const nilai=document.getElementById("nilaiData").value;

    if(nama===""){

        alert("Nama masih kosong.");

        return;

    }

    if(nilai===""){

        alert("Nilai masih kosong.");

        return;

    }

    const angka=parseFloat(nilai);

    if(angka<0 || angka>100){

        alert("Nilai harus 0 - 100");

        return;

    }

    dataMahasiswa.push({

        nama:nama,

        nilai:angka,

        grade:hitungGrade(angka)

    });

    alert("Data berhasil disimpan.");

    document.getElementById("namaData").value="";

    document.getElementById("nilaiData").value="";

}


function tampilkanData(){

    const tbody=document.getElementById("isiTabel");

    if(!tbody) return;

    tbody.innerHTML="";

    dataMahasiswa.forEach(function(item,index){

        tbody.innerHTML+=`

        <tr>

        <td>${index+1}</td>

        <td>${item.nama}</td>

        <td>${item.nilai}</td>

        <td>${badgeGrade(item.grade)}</td>

        </tr>

        `;

    });

    updateStatistik();

}


function updateStatistik(){

    const statistik=document.getElementById("statistik");

    if(!statistik) return;

    if(dataMahasiswa.length===0){

        statistik.innerHTML="<h3>📈 Statistik Nilai</h3><p>Belum ada data.</p>";

        return;

    }

    const nilai=dataMahasiswa.map(d=>d.nilai);

    const total=nilai.reduce((a,b)=>a+b,0);

    const rata=(total/nilai.length).toFixed(2);

    const tertinggi=Math.max(...nilai);

    const terendah=Math.min(...nilai);

    statistik.innerHTML=`

    <h3>📊 Statistik Nilai</h3>

    <p><b>Jumlah Mahasiswa :</b> ${dataMahasiswa.length}</p>

    <p><b>Rata-rata :</b> ${rata}</p>

    <p><b>Nilai Tertinggi :</b> ${tertinggi}</p>

    <p><b>Nilai Terendah :</b> ${terendah}</p>

    `;

}


function resetData(){

    if(confirm("Yakin ingin menghapus semua data?")){

        dataMahasiswa=[];

        document.getElementById("isiTabel").innerHTML="";

        updateStatistik();

    }

}