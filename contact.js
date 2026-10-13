(() => {
  const EMAIL_TUJUAN = "aditiyamuhammad197@email.com";
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  const rules = {
    name: (v) =>
      v.trim().length >= 2 ? "" : "Isi nama lengkapmu, minimal 2 karakter.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ""
        : "Isi alamat email yang valid, misalnya nama@email.com.",
    message: (v) =>
      v.trim().length >= 10
        ? ""
        : "Ceritakan kebutuhanmu, minimal 10 karakter.",
  };

  const check = (field) => {
    const msg = rules[field.name](field.value);
    const err = document.getElementById(`${field.id}-error`);
    err.textContent = msg;
    err.hidden = !msg;
    field.setAttribute("aria-invalid", String(Boolean(msg)));
    return !msg;
  };

  const fields = Object.keys(rules).map((n) => form.elements[n]);

  fields.forEach((f) => {
    f.addEventListener("blur", () => {
      if (f.value !== "" || f.dataset.touched) {
        f.dataset.touched = "1";
        check(f);
      }
    });
    f.addEventListener("input", () => {
      if (f.dataset.touched) check(f);
      status.hidden = true;
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fields.forEach((f) => {
      f.dataset.touched = "1";
    });
    const invalid = fields.filter((f) => !check(f));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    const nama = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const pesan = form.elements.message.value.trim();
    const subject = encodeURIComponent(`Pesan dari ${nama} lewat adit.dev`);
    const body = encodeURIComponent(`${pesan}\n\n${nama}\n${email}`);
    status.textContent =
      "Aplikasi emailmu akan terbuka dengan pesan yang sudah terisi. Tekan kirim di sana untuk menyelesaikan.";
    status.hidden = false;
    window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`;
  });
})();
