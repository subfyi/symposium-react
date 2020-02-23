export default {
    header: {
        self: {},
        items: [
            {
                title: "Sipariş Listesi",
                root: true,
                alignment: "left",
                page: "siparisler",
                bullet: "dot"
            },
            {
                title: "Muhasebe",
                root: true,
                alignment: "left",
                toggle: "click",
            //    takipcisi: [50, 51],
            //    yetkisi: 7,
                submenu: {
                    type: "mega",
                    width: "800px",
                    alignment: "left",
                    columns: [
                        {
                            items: [
                                {
                                    title: "Ürün Fatura",
                                    page: "urun-fatura",
                                    bullet: "line"
                                },
                                {
                                    title: "Diğer Faturalar",
                                    page: "diger-fatura",
                                    bullet: "line"
                                },
                                {
                                    title: "Diğer Giderler",
                                    page: "diger-gider",
                                    bullet: "line"
                                },
                                {
                                    title: "Diğer Gelirler",
                                    page: "diger-gelir",
                                    bullet: "line"
                                },
                                {
                                    title: "Listeler",
                                    page: "listerler",
                                    bullet: "line"
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    title: "Satışlar",
                                    page: "satislar",
                                    bullet: "line"
                                },
                                {
                                    title: "Hesaplar",
                                    page: "hesaplar",
                                    bullet: "line"
                                },
                                {
                                    title: "Stok",
                                    page: "stok",
                                    bullet: "line"
                                },
                                {
                                    title: "Kasa",
                                    page: "kasa",
                                    bullet: "line"
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    title: "Bankalar",
                                    page: "mtur/banka-turu",
                                    bullet: "line"
                                },
                                {
                                    title: "Hesap Türü",
                                    page: "mtur/hesap-turu",
                                    bullet: "line"
                                },
                                {
                                    title: "Kdv Oranı",
                                    page: "mtur/kdv-orani",
                                    bullet: "line"
                                },
                                {
                                    title: "Odeme Yöntemi",
                                    page: "mtur/odeme-yontemi",
                                    bullet: "line"
                                },
                                {
                                    title: "Para Birimi",
                                    page: "mtur/para-birimi",
                                    bullet: "line"
                                },
                                {
                                    title: "Ürüm Birimi",
                                    page: "mtur/urun-birimi",
                                    bullet: "line"
                                },
                            ]
                        },

                    ]
                }
            },
            {
                title: "Müşteriler",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: [
                    {
                        title: "Müşteriler",
                        page: "musteriler",
                        bullet: "line",
                    },
                    {
                        title: "Kurumlar",
                        page: "kurumlar",
                        bullet: "line",
                    },
                ]
            },

            {
                title: "Ekip Araç",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: [
                    {
                        title: "Araçlar",
                        page: "araclar",
                        bullet: "line",
                    //    takipcisi: [50],
                    //    yetkisi: 7,
                    },
                    {
                        title: "Araç Kullanıcı Grup Düzenle",
                        page: "tur/arackullanicigrup/634/edit",
                        bullet: "line",
                    //   takipcisi: [49, 50],
                    //    yetkisi: 7,
                    },
                    {
                        title: "Ekip Güzargahlar",
                        page: "eg",
                        bullet: "line"
                    },
                ]
            },
            {
                title: "Nar Türler",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: {
                    type: "mega",
                    width: "800px",
                    alignment: "left",
                    columns: [
                        {
                            items: [
                                {
                                    title: "Malzeme Türleri",
                                    page: "tur/malzemeturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Hazır Malzemeler",
                                    page: "tur/hmalzemeturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Diğer Malzeme Grupları",
                                    page: "tur/dmalgrup",
                                    bullet: "line"
                                },
                                {
                                    title: "Kesif Yapilacak Malzeme",
                                    page: "tur/kmalzemeturu",
                                    bullet: "line"
                                }, {
                                    title: "Uygulama Türleri",
                                    page: "tur/uygulamaturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Uygulama Grupları",
                                    page: "tur/uygrup",
                                    bullet: "line"
                                },
                                {
                                    title: "Üretim Malzemeleri",
                                    page: "tur/umalzemeturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Üretim Bakım onarım  Malzemeleri",
                                    page: "tur/ubmalzemeturu",
                                    bullet: "line"
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    title: "Baskı Türleri",
                                    page: "tur/baskituru",
                                    bullet: "line"
                                },
                                {
                                    title: "Sipariş Türleri",
                                    page: "tur/isturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Birim Türleri",
                                    page: "tur/birimturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Birimturconlar",
                                    page: "tur/birimturcon",
                                    bullet: "line"
                                },
                                {
                                    title: "Kalite Kontrol Türleri",
                                    page: "tur/kalitekontrolturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Teklif Türleri",
                                    page: "tur/teklifturu",
                                    bullet: "line"
                                },
                                {
                                    title: "Yetki Türleri",
                                    page: "tur/yetkituru",
                                    bullet: "line"
                                },
                                {
                                    title: "Ünvan Türleri",
                                    page: "tur/unvanturu",
                                    bullet: "line"
                                },
                            ]
                        },

                    ]
                }
            },

            {
                title: "Baskı Borsası",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: [
                    {
                        title: "BB Malzeme Türleri",
                        page: "btur/bmalzemeturu",
                        bullet: "line",
                    },
                    {
                        title: "BB Malzeme Grupları",
                        page: "btur/bdmalgrup",
                        bullet: "line",
                    },
                    {
                        title: "BB STD Değeri",
                        page: "btur/stdturu/710/edit",
                        bullet: "line",
                    },
                ]
            },

            {
                title: "Admin",
                root: true,
                alignment: "left",
                toggle: "click",
                submenu: {
                    type: "mega",
                    width: "600px",
                    alignment: "left",
                    columns: [
                        {
                            items: [
                                {
                                    title: "Kullanıcılar",
                                    page: "kullanicilar",
                                    bullet: "line"
                                },
                                {
                                    title: "Hakkımızda",
                                    page: "hakkimizda",
                                    bullet: "line"
                                },
                                {
                                    title: "Yazılar",
                                    page: "yazilar",
                                    bullet: "line",
                                },
                                {
                                    title: "Kategoriler",
                                    page: "kategori",
                                    bullet: "line",
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    title: "SSSler",
                                    page: "sss",
                                    bullet: "line",
                                },
                                {
                                    title: "Geri Bildirimler",
                                    page: "feedback",
                                    bullet: "line",
                                },
                                {
                                    title: "Geri Bildirim Ekle",
                                    page: "feedback/create",
                                    bullet: "line",
                                },
                                {
                                    title: "Gelişmeler",
                                    page: "announcement",
                                    bullet: "line",
                                },
                                {
                                    title: "Bildirimler",
                                    page: "bildirimler",
                                    bullet: "line",
                                },

                            ]
                        },
                    ]
                }
            },
        ]
    }
};
