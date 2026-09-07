export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Magda Budi Pramistyowati',
            child: 'Putri dari',
            father: 'Akhmad Budiono',
            mother: 'Hanik Setyowati',
            image: './src/assets/images/1787278904024-hqxpll-IMG_20260821_092125_hded.webp'
        },
        P: {
            id: 2,
            name: 'Anas Hamdy Alhak',
            child: 'Putra dari',
            father: 'Ishak',
            mother: 'Aliyah',
            image: './src/assets/images/1787293229519-sbcs88-MEITU_20260821_13162025077279493__hded.webp'
        },

        couple: './src/assets/images/1787379838572-u3d153-MEITU_20260822_13081484077284423__hded.webp'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'September',
            date: '21',
            day: 'Senin',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'September',
            date: '21',
            day: 'Senin',
            hours: {
                start: '15.00',
                finish: 'Selesai'
            }
        },
        address: `(Kediaman mempelai putri)\nDsn. Pager Kulon RT 001/RW 003,\nDs. Pager, Kec. Purwosari, Kab. Pasuruan.`
    },

    link: {
        calendar: 'https://calendar.app.google/GLGL6XWD6dEGD5Fu6',
        map: 'https://maps.google.com/maps?q=-7.7558523,112.7147045&z=14&output=embed',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/01.webp'
        },
        {
            id: 2,
            image: './src/assets/images/02.webp'
        },
        {
            id: 3,
            image: './src/assets/images/03.webp'
        },
        {
            id: 4,
            image: './src/assets/images/04.webp'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Wedding Dayat & Hanif',
            icon: './src/assets/images/qris.png',
            rekening: 'Scan me',
            type: 'qris'
        },
        {
            id: 2,
            name: 'Mukhammad Imam Nur Hidayat',
            icon: './src/assets/images/bca.png',
            rekening: '2251102726',
            type: 'bank'
        },
        {
            id: 3,
            name: 'Mukhammad Imam Nur Hidayat',
            icon: './src/assets/images/permata.png',
            rekening: '1240088602',
            type: 'bank'
        },
        {
            id: 4,
            name: 'Mukhammad Imam Nur Hidayat',
            icon: './src/assets/images/bank-jatim.png',
            rekening: '0493074881',
            type: 'bank'
        }
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbz41OuRdPWe7xlBMAYJ_ATi2R1t1BXbucTNwiC7lCdZmb4h49DTD0fs5stBxOM4Xo4/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
    config: {
        gallery_duration: 4000 // Ubah angka ini (dalam milidetik)
    }
}
