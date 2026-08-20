import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Instagram, CheckCircle } from 'lucide-react';
import { PROFILE_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Harap isi semua kolom formulir sebelum mengirim.');
      return;
    }

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);

    if (channel === 'whatsapp') {
      // Format WhatsApp deep link
      const text = `Halo Hammam, nama saya *${name}* (${email}).%0A%0A*Pesan:*%0A${encodedMessage}`;
      const whatsappUrl = `https://wa.me/${PROFILE_INFO.whatsapp}?text=${text}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Format Mailto deep link
      const subject = `Hubungi Hammam dari Portofolio - ${name}`;
      const body = `Halo Hammam,%0D%0A%0D%0ANama saya: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
      const mailtoUrl = `mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
    // Reset form after a small delay
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Hubungi <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Saya</span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-cyan-500 rounded-full" />
          <p className="font-sans text-zinc-500 dark:text-zinc-400">
            Punya penawaran proyek menarik atau peluang kerja penuh waktu? Jangan ragu untuk berdiskusi langsung dengan saya.
          </p>
        </div>

        {/* Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-8 text-left bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-white">
                Informasi Kontak
              </h3>
              <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400">
                Hubungi saya melalui saluran direct berikut atau gunakan formulir interaktif di sebelah kanan.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-display text-sm font-bold text-zinc-950 dark:text-white">Email</div>
                  <a href={`mailto:${PROFILE_INFO.email}`} className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors block">
                    {PROFILE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Whatsapp */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-display text-sm font-bold text-zinc-950 dark:text-white">WhatsApp</div>
                  <a href={`https://wa.me/${PROFILE_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors block">
                    +{PROFILE_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-display text-sm font-bold text-zinc-950 dark:text-white">Domisili</div>
                  <div className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {PROFILE_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Response speed badge */}
            <div className="p-4 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-xl border border-cyan-500/20 text-center text-xs text-cyan-600 dark:text-cyan-400 font-mono font-bold tracking-wider">
              ESTIMASI BALASAN: &lt; 1 JAM
            </div>
          </div>

          {/* Right Column: Interative Form */}
          <div className="lg:col-span-7">
            <form
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
              className="bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/60 shadow-sm space-y-6 text-left"
            >
              {/* Form Input: Name */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-sm font-bold text-zinc-900 dark:text-zinc-200 font-display">
                  Nama Anda
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso (HRD Specialist)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 font-sans text-sm transition-all"
                />
              </div>

              {/* Form Input: Email */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-sm font-bold text-zinc-900 dark:text-zinc-200 font-display">
                  Email Kantor / Pribadi
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Contoh: budi@perusahaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 font-sans text-sm transition-all"
                />
              </div>

              {/* Channel Toggle: WA vs Email */}
              <div className="space-y-2">
                <span className="block text-sm font-bold text-zinc-900 dark:text-zinc-200 font-display">
                  Kirim Pesan Melalui
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    id="channel-toggle-wa"
                    type="button"
                    onClick={() => setChannel('whatsapp')}
                    className={`p-3 rounded-xl font-sans text-xs sm:text-sm font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      channel === 'whatsapp'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500'
                        : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </button>
                  <button
                    id="channel-toggle-mail"
                    type="button"
                    onClick={() => setChannel('email')}
                    className={`p-3 rounded-xl font-sans text-xs sm:text-sm font-bold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      channel === 'email'
                        ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-500'
                        : 'bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    <Mail className="w-4 h-4" /> Email
                  </button>
                </div>
              </div>

              {/* Form Input: Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-sm font-bold text-zinc-900 dark:text-zinc-200 font-display">
                  Isi Pesan / Penawaran Kerja
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tuliskan pesan Anda secara detail, seperti jenis pekerjaan, jadwal interview, atau deskripsi singkat proyek."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 font-sans text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                className={`w-full py-3.5 rounded-xl font-sans font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  submitted
                    ? 'bg-emerald-500 text-black shadow-emerald-500/20'
                    : 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-bounce" /> Pesan Terformat & Dikirim!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Kirim Pesan Sekarang
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Footer Area with Socials */}
        <footer className="mt-24 pt-12 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a
              id="footer-social-github"
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-zinc-200/50 dark:border-zinc-800/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="footer-social-linkedin"
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-zinc-200/50 dark:border-zinc-800/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="footer-social-instagram"
              href={PROFILE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-50 hover:bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-zinc-200/50 dark:border-zinc-800/50"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Hammam. All Right Reserved.
          </p>
        </footer>

      </div>
    </section>
  );
}
