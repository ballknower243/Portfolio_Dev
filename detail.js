(() => {
  const PROJECTS = {
    media: {
      title: "Media Pembelajaran Sekolah",
      desc: "Media pembelajaran sekolah berbasis Python yang dibuat untuk membantu proses belajar siswa.",
      meta: [
        ["Peran", "Developer"],
        ["Kategori", "Media pembelajaran"],
        ["Stack", "Python"],
      ],
      demo: "#",
      source: "https://github.com/ballknower243/media_pembelajaran_berbasis_python.git",
      code: ["def jalankan_kuis(mapel):",
         "def jalankan_kuis(mapel):",
    "    print(f'\\n=== KUIS {mapel.upper()} ===')",
    "",
    "    soal_terpilih = random.sample(bank_soal[mapel], 10)",
    "    skor = 0",
    "    hasil_jawaban = []",
    "",
    "    for nomor, soal in enumerate(soal_terpilih, start=1):",
    "        print(f'\\n{nomor}. {soal[0]}')",
    "        for opsi in soal[1]:",
    "            print(opsi)",
    "",
    "        jawab = input('Jawabanmu: ').strip().upper()",
    "",
    "        while jawab not in ['A', 'B', 'C', 'D']:",
    "            print('Masukkan A, B, C, atau D')",
    "            jawab = input('Jawabanmu: ').strip().upper()",
    "",
    "        benar = jawab == soal[2]",
    "        if benar:",
    "            skor += 10",
    "",
    "        hasil_jawaban.append({",
    "            'pertanyaan': soal[0],",
    "            'jawaban_user': jawab,",
    "            'jawaban_benar': soal[2],",
    "            'pembahasan': soal[3],",
    "            'status': benar",
    "        })",
    "",
    "    print('\\n=== HASIL KUIS ===')",
    "    print(f'Nilai akhir kamu: {skor}')"],
    },
    katalog: {
      title: "Web Katalog E-Commerce",
      desc: "Katalog produk online yang responsif dan mudah dijelajahi, dibuat dengan HTML, CSS, dan Bootstrap.",
      meta: [
        ["Peran", "Developer"],
        ["Kategori", "Web e-commerce"],
        ["Stack", "HTML, CSS, Bootstrap"],
      ],
      demo: "#",
      source: "https://github.com/nizaa02/Project-Pemweb.git",
      code: [
        '<div class="row row-cols-1 row-cols-md-3 g-4">',
        "  <!-- kartu produk -->",
      ],
    },
  };

  const id = new URLSearchParams(location.search).get("id") || "media";
  const data = PROJECTS[id];
  const $ = (s) => document.getElementById(s);

  if (!data) {
    $("detail").hidden = true;
    $("notfound").hidden = false;
    document.title = "Project tidak ditemukan – Adit.dev";
    return;
  }

  document.title = `${data.title} – Adit.dev`;
  $("d-title").textContent = data.title;
  $("d-desc").textContent = data.desc;

  const meta = $("d-meta");
  meta.replaceChildren(
    ...data.meta.map(([k, v]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      dt.textContent = k;
      const dd = document.createElement("dd");
      dd.textContent = v;
      row.append(dt, dd);
      return row;
    }),
  );

  const demo = $("d-demo"),
    source = $("d-source");
  demo.href = data.demo;
  source.href = data.source;
  [demo, source].forEach((a) => {
    if (a.getAttribute("href") === "#")
      a.addEventListener("click", (e) => e.preventDefault());
    else {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });

  const code = $("d-code").querySelector("code");
  const first = document.createElement("span");
  first.className = "code__key";
  first.textContent = data.code[0];
  code.replaceChildren(
    first,
    document.createTextNode("\n" + data.code.slice(1).join("\n")),
  );
})();
