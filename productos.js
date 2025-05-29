// Arreglo de productos destacados (códigos de los productos)
const productosDestacados = [
    "18079",   // Cocina Escorial Candor Blanca
    "2073101", // Heladera Samsung RT29K577JS8
    "2075251", // Lavarropas ENOVA EWMF-B7
    "2074218", // TV LED ENOVA 50" smart
    "2075246"  // Motorola MOTO E15
];
const productos = [


    /////---------- Cocinas ----------/////
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Candor Blanca, gas natural o gas envasado",
        imagen: "images/cocinas/cocina_escorial_candor.webp",
        imagenes: [
            "images/cocinas/cocina_escorial_candor.webp",
            "images/cocinas/cocina_escorial_candor2.webp",
            "images/cocinas/cocina_escorial_candor3.webp"
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x 51 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "18079",
        caracteristicas: ["Marca: Escorial", "Modelo: Candor", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Florencia 5507F 3 Hornallas",
        imagen: "images/cocinas/Cocina_Florencia_5507F_3_Hornallas_1.webp",
        imagenes: [
            "images/cocinas/Cocina_Florencia_5507F_3_Hornallas_1.webp",
            "images/cocinas/Cocina_Florencia_5507F_3_Hornallas_2.webp",
            "images/cocinas/Cocina_Florencia_5507F_3_Hornallas_3.webp",
            "images/cocinas/Cocina_Florencia_5507F_3_Hornallas_4.webp"
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 85 x  56 x 60\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Hornallas:</strong> 3\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2074709",
        caracteristicas: ["Marca: Florencia", "Modelo: 5507F", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master S2 Classic gn Negra",
        imagen: "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
        imagenes: [
            "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
            "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_2.webp",
            "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_3.webp",
            "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_4.webp"
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x  56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Hornallas:</strong> 4\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073969",
        caracteristicas: ["Marca: Florencia", "Modelo: 5507F", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Candor Black",
        imagen: "images/cocinas/cocina_candor_negra.jpg",
        imagenes: [
            "images/cocinas/cocina_candor_negra.jpg",
            "images/cocinas/cocina_candor_negra1.jpg",
            "images/cocinas/cocina_candor_negra2.jpg",
            "images/cocinas/cocina_candor_negra3.jpg",
            "images/cocinas/cocina_candor_negra4.jpg",
            "images/cocinas/cocina_candor_negra5.jpg"
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x  51 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2072621",
        caracteristicas: ["Marca: Escorial", "Modelo: Candor Black", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Classic",
        imagen: "images/cocinas/cocina_escorial_master_classic.jpg",
        imagenes: [
            "images/cocinas/cocina_escorial_master_classic.jpg",
            "images/cocinas/cocina_escorial_master_classic2.jpg",
            "images/cocinas/cocina_escorial_master_classic3.jpg",
            "images/cocinas/cocina_escorial_master_classic4.jpg",
            "images/cocinas/cocina_escorial_master_classic5.jpg",
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 93 x  56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073930",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial PALACE CRISTAL LX",
        imagen: "images/cocinas/cocina-escorial-palace-cristal-lx-gn.jpg",
        imagenes: [
            "images/cocinas/cocina-escorial-palace-cristal-lx-gn.jpg",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 85 x  51 x 52\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "15760",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Classic ge Inox",
        imagen: "images/cocinas/cocina-escorial-master-classic-ge-inox.jpg",
        imagenes: [
            "images/cocinas/cocina-escorial-master-classic-ge-inox.jpg",
            "images/cocinas/cocina-escorial-master-classic-ge-inox1.jpg",
            "images/cocinas/cocina-escorial-master-classic-ge-inox2.jpg",
            "images/cocinas/cocina-escorial-master-classic-ge-inox3.jpg",
            "images/cocinas/cocina-escorial-master-classic-ge-inox4.jpg",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 91 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural o Envasado\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075088",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Florencia 5518F - Inox.",
        imagen: "images/cocinas/Cocina_Florencia_5518F _Inox_1.webp",
        imagenes: [
            "images/cocinas/Cocina_Florencia_5518F _Inox_1.webp",
            "images/cocinas/Cocina_Florencia_5518F _Inox_2.webp",
            "images/cocinas/Cocina_Florencia_5518F _Inox_3.webp",
            "images/cocinas/Cocina_Florencia_5518F _Inox_4.webp",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 85 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase AA",
        codigo: "2071810 ",
        caracteristicas: ["Marca: Florencia", "Modelo: 5518F", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Style Multigas Bca.",
        imagen: "images/cocinas/cocina-escorial-master-style-multigas-bca.jpg",
        imagenes: [
            "images/cocinas/cocina-escorial-master-style-multigas-bca.jpg",
            "images/cocinas/cocina-escorial-master-style-multigas-bca1.jpg",
            "images/cocinas/cocina-escorial-master-style-multigas-bca2.jpg",
            "images/cocinas/cocina-escorial-master-style-multigas-bca3.jpg",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 93 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073910",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Style", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87643 55cm 4 horn. Blanca luz-enc.elec",
        imagen: "images/cocinas/cocina-volcan-87643-55cm-4-horn-blanca.jpg",
        imagenes: [
            "images/cocinas/cocina-volcan-87643-55cm-4-horn-blanca.jpg",
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073893",
        caracteristicas: ["Marca: Volcan", "Modelo: 87643", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87644 55cm 4 horn. Blanca sin luz",
        imagen: "images/cocinas/Cocina_Volcan_87644_55cm_4_horn_Blanca_sin_luz.webp",
        imagenes: [
            "images/cocinas/Cocina_Volcan_87644_55cm_4_horn_Blanca_sin_luz.webp",
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2074783",
        caracteristicas: ["Marca: Volcan", "Modelo: 87644", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87673 55cm 4 horn. inox",
        imagen: "images/cocinas/Cocina Volcan 87673 55cm 4 horn inox 1.jpg",
        imagenes: [
            "images/cocinas/Cocina Volcan 87673 55cm 4 horn inox 1.jpg",
            "images/cocinas/Cocina Volcan 87673 55cm 4 horn inox 2.png",
            "images/cocinas/Cocina Volcan 87673 55cm 4 horn inox 3.webp",
            "images/cocinas/Cocina Volcan 87673 55cm 4 horn inox 4.webp",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073914",
        caracteristicas: ["Marca: Volcan", "Modelo: 87673", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Morelli Industrial Saho Kuro 550 p/v-r/a 180001",
        imagen: "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
        imagenes: [
            "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800012.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800013.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800014.webp",

        ],
        descripcion: "<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2074224",
        caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },
    {
        categoria: "Cocinas",
        nombre: "Cocina Morelli Industrial Jitaku/saho 820 18062 5 horn. inox",
        imagen: "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
        imagenes: [
            "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox2.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox3.webp",
            "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox4.webp",


        ],
        descripcion: "<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones:</strong> 86 x 82 x 58\n<strong>Hornallas:</strong> 5\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> No\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073292",
        caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },


















    /////---------- Televisores ----------/////
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED ENOVA 50" smart (TE50UA10) 4K UHD Android',
        imagen: "images/televisores/tv_led_enova_50_smart_te50ua10_4k_uhd_android_1.webp",
        imagenes: [
            "images/televisores/tv_led_enova_50_smart_te50ua10_4k_uhd_android_1.webp",
            "images/televisores/tv_led_enova_50_smart_te50ua10_4k_uhd_android_2.webp",
            "images/televisores/tv_led_enova_50_smart_te50ua10_4k_uhd_android_3.webp",
            "images/televisores/tv_led_enova_50_smart_te50ua10_4k_uhd_android_4.webp"
        ],
        descripcion: '<strong>Dimensiones:</strong> 1.11m x 64.4cm\n<strong>Tipo de pantalla:</strong> LED\n<strong>Pulgadas:</strong> 50"\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2074218",
        caracteristicas: ["Marca: Enova", "Modelo: TE50UA10", "Garantía: 1 año"]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED ENOVA 32" smart HD Android',
        imagen: "images/televisores/TV_LED_ENOVA_32_smart_HD_Android_1.webp",
        imagenes: [
              "images/televisores/TV_LED_ENOVA_32_smart_HD_Android_1.webp",
              "images/televisores/TV_LED_ENOVA_32_smart_HD_Android_2.webp"
            ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2073755",
        caracteristicas: [
          "Marca: Enova", "Modelo: Te32ha10", "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED RCA 32" AND32Y Android',
        codigo: "2073676",
        
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        imagen: "images/televisores/TV_LED_RCA_32_AND32Y_Android_1.webp",
        imagenes: [
          "images/televisores/TV_LED_RCA_32_AND32Y_Android_1.webp",
          "images/televisores/TV_LED_RCA_32_AND32Y_Android_2.webp",
          "images/televisores/TV_LED_RCA_32_AND32Y_Android_3.webp"
        ],
        caracteristicas: [ "Marca: RCA", "Modelo: AND32Y", "Garantía: 1 año"
        ]
        
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Philips 32" Smart HD 32PHD6910/77 con Titan OS',
        codigo: "2075320",
        imagen: "images/televisores/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
        imagenes: [
          "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
          "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_2.webp",
          "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_3.webp",
          "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_4.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Titan OS',
        caracteristicas: [
          "Marca: Philips",
          "Modelo: 32PHD6910/77 ",
          "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED RCA 40" R40AND-F Smart c/ Android',
        imagen: "images/televisores/TV_LED_RCA_40_R40AND_F_Smart_c_Android_1.webp",
        imagenes: [
            "images/televisores/TV_LED_RCA_40_R40AND_F_Smart_c_Android_1.webp",
            "images/televisores/TV_LED_RCA_40_R40AND_F_Smart_c_Android_2.webp",
            "images/televisores/TV_LED_RCA_40_R40AND_F_Smart_c_Android_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 40"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolucion:</strong> FHD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2075067",
        caracteristicas: [
            "Marca: RCA",
            "Modelo: R40AND-F",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED ENOVA 65" smart 4K UHD Google Tv',
        imagen: "images/televisores/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_2.webp",
        imagenes: [
            "images/televisores/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_2.webp",
            "images/televisores/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_1.webp",
            "images/televisores/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 65"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2075302",
        caracteristicas: [
            "Marca: ENOVA",
            "Modelo: 2075302",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED ENOVA 75" smart 4K UHD Android/Google tv',
        imagen: "images/televisores/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_1.webp",
        imagenes: [
            "images/televisores/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_1.webp",
            "images/televisores/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_2.webp",
            "images/televisores/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_3.webp",
            "images/televisores/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_4.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 75"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2074860",
        caracteristicas: [
            "Marca: ENOVA",
            "Modelo: 2074860",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Kanji 40" (7635718719284) HD Smart Google Tv',
        imagen: "images/televisores/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_3.webp",
        imagenes: [
            "images/televisores/TV_LED_Kanji_40_7635718719284_HD_Smart_Google_Tv_3.webp",
            "images/televisores/TV_LED_Kanji_40_7635718719284_HD_Smart_Google_Tv_2.webp",
            "images/televisores/TV_LED_Kanji_40_7635718719284_HD_Smart_Google_Tv_1.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 40"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2074810",
        caracteristicas: [
            "Marca: Kanji",
            "Modelo: 2074810",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Kodak 50" QLED 4K Smart Google tv',
        imagen: "images/televisores/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_1.webp",
            "images/televisores/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_2.webp"
        ],
        descripcion: '<strong>Dimesiones:</strong> 1,50cm ancho x 100cm alto 23cm prof"\n<strong>Pulgadas:</strong> 50"\n<strong>Tipo de pantalla:</strong> QLED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2075193",
        caracteristicas: [
            "Marca: Kodak",
            "Modelo: 2075193",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Noblex 32" DR/DV32X7080 Android Tv',
        imagen: "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_1.webp",
            "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_2.webp",
            "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_3.webp",
            "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_4.webp",
            "images/televisores/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2075334",
        caracteristicas: [
            "Marca: Noblex",
            "Modelo: 2075334",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Noblex 50" DR50X8580 Smart Google tv',
        imagen: "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_1.webp",
            "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_2.webp",
            "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_3.webp",
            "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_4.webp",
            "images/televisores/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 50"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2075285",
        caracteristicas: [
            "Marca: Noblex",
            "Modelo: 2075285",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Noblex 58" DB58X7550 Android 4K',
        imagen: "images/televisores/TV_LED_Noblex_58_DB58X7550_Android_4K_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Noblex_58_DB58X7550_Android_4K_1.webp",
            "images/televisores/TV_LED_Noblex_58_DB58X7550_Android_4K_2.webp",
            "images/televisores/TV_LED_Noblex_58_DB58X7550_Android_4K_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 58"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2074829",
        caracteristicas: [
            "Marca: Noblex",
            "Modelo: 2074829",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Philco 40" PLD40HS24 SMART TV Vidaa',
        imagen: "images/televisores/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_1.webp",
            "images/televisores/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_2.webp",
            "images/televisores/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 40"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Vidaa',
        codigo: "2074975",
        caracteristicas: [
            "Marca: Philco",
            "Modelo: 2074975",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Philips 32" Smart HD 32PHD6910/77 con Titan OS',
        imagen: "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
            "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_2.webp",
            "images/televisores/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Titan OS',
        codigo: "2075320",
        caracteristicas: [
            "Marca: Philips",
            "Modelo: 2075320",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED RCA 32" AND32Y/C/R32AND-F  Android Smart',
        imagen: "images/televisores/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_1.webp",
        imagenes: [
            "images/televisores/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_1.webp",
            "images/televisores/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_2.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2073676",
        caracteristicas: [
            "Marca: RCA",
            "Modelo: 2073676",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Samsung 32" UN32T4300AG  SMART HD',
        imagen: "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_1.webp",
        imagenes: [
            "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_1.webp",
            "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_2.webp",
            "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_3.webp",
            "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_4.webp",
            "images/televisores/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Tyzen',
        codigo: "2071627",
        caracteristicas: [
            "Marca: Samsung",
            "Modelo: 2071627",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Tv y audio",
        subcategoria: "Tv",
        nombre: 'TV LED Samsung 50" LH50BECHVGGZB  Smart UHD Bussines Crystal 4K',
        imagen: "images/televisores/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_2.webp",
        imagenes: [
            "images/televisores/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_2.webp",
            "images/televisores/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_1.webp",
            "images/televisores/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_3.webp",
            "images/televisores/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_4.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 50"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Tyzen',
        codigo: "2075206",
        caracteristicas: [
            "Marca: Samsung",
            "Modelo: 2075206",
            "Garantía: 1 año"
        ]
    },


















    /////---------- Hornos, microondas y freidoras ----------/////
         /////---------- Hornos ----------/////
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Ultracomb UC36B 36 lts 1200w',
    imagen: "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_1.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_2.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_3.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_4.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_5.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC36B_36_lts_1200w_6.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 36\n<strong>Potencia (W):</strong> 1200\n<strong>Convector:</strong> Sí',
    codigo: "2074311",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2074311",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Tramontina 55LHEG 55 lts Silver Cook',
    imagen: "images/hornos/Horno_electrico_Tramontina_55LHEG_55_lts_Silver_Cook_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Tramontina_55LHEG_55_lts_Silver_Cook_1.webp",
        "images/hornos/Horno_electrico_Tramontina_55LHEG_55_lts_Silver_Cook_2.webp",
        "images/hornos/Horno_electrico_Tramontina_55LHEG_55_lts_Silver_Cook_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 55\n<strong>Potencia (W):</strong> 2000\n<strong>Convector:</strong> Sí',
    codigo: "2074970",
    caracteristicas: [
        "Marca: Tramontina",
        "Modelo: 2074970",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno Electrico Neba NH52SHPN 52 lts negro',
    imagen: "images/hornos/Horno_Electrico_Neba_NH52SHPN_52_lts_negro_1.webp",
    imagenes: [
        "images/hornos/Horno_Electrico_Neba_NH52SHPN_52_lts_negro_1.webp",
        "images/hornos/Horno_Electrico_Neba_NH52SHPN_52_lts_negro_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 52\n<strong>Potencia (W):</strong> 2030\n\n<strong>Convector:</strong> Sí',
    codigo: "2074163",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 2074163",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Ultracomb UC-45CN 45lts',
    imagen: "images/hornos/Horno_electrico_Ultracomb_UC_45CN_45lts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Ultracomb_UC_45CN_45lts_1.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC_45CN_45lts_2.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC_45CN_45lts_3.webp",
        "images/hornos/Horno_electrico_Ultracomb_UC_45CN_45lts_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 45\n<strong>Potencia (W):</strong> 1600\n<strong>Convector:</strong> Sí',
    codigo: "2073936",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2073936",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Bgh BHE35S22A c/anafe 35lts 1600wts',
    imagen: "images/hornos/Horno_electrico_Bgh_BHE35S22A_c_anafe_35lts_1600wts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Bgh_BHE35S22A_c_anafe_35lts_1600wts_1.webp",
        "images/hornos/Horno_electrico_Bgh_BHE35S22A_c_anafe_35lts_1600wts_2.webp",
        "images/hornos/Horno_electrico_Bgh_BHE35S22A_c_anafe_35lts_1600wts_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 35\n<strong>Potencia (W):</strong> 1600\n<strong>Anafes:</strong> Sí\n<strong>Convector:</strong> Sí',
    codigo: "2075307",
    caracteristicas: [
        "Marca: BGH",
        "Modelo: 2075307",
        "Garantía: 1 año"
    ]
    },
    {
        categoria: "Hornos, Microondas y Freidoras",
        subcategoria: "Hornos",
        nombre: 'Horno electrico Crivel HF-153 Spiedo',
        imagen: "images/hornos/Horno_electrico_Crivel_HF_153_Spiedo_1.webp",
        imagenes: [
            "images/hornos/Horno_electrico_Crivel_HF_153_Spiedo_1.webp"
        ],
        descripcion: '<strong>Capacidad (Litros):</strong> 53\n<strong>Potencia (W):</strong> 2000\n<strong>Spiedo:</strong> Sí\n<strong>Convector:</strong> Sí',
        codigo: "2072972",
        caracteristicas: [
            "Marca: Crivel",
            "Modelo: 2072972",
            "Garantía: 1 año"
        ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Crivel HFS-153 rcl 2 anafes',
    imagen: "images/hornos/Horno_electrico_Crivel_HFS_153_rcl_2_anafes_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Crivel_HFS_153_rcl_2_anafes_1.webp",
        "images/hornos/Horno_electrico_Crivel_HFS_153_rcl_2_anafes_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 50\n<strong>Potencia (W):</strong> 2000\n<strong>Anafes:</strong> Sí\n<strong>Spiedo:</strong> Sí\n<strong>Convector:</strong> Sí',
    codigo: "2072971",
    caracteristicas: [
        "Marca: Crivel",
        "Modelo: 2072971",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Bgh BHE64M20A 64 lts',
    imagen: "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_1.webp",
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_2.webp",
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_3.webp",
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_4.webp",
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_5.webp",
        "images/hornos/Horno_electrico_Bgh_BHE64M20A_64_lts_6.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 64\n<strong>Potencia (W):</strong> 2200\n<strong>Anafes:</strong> Sí\n<strong>Convector:</strong> Sí',
    codigo: "2073480",
    caracteristicas: [
        "Marca: BGH",
        "Modelo: 2073480",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Bgh BHE30FN24T c/Airfryer 30lts 1600wts',
    imagen: "images/hornos/Horno_electrico_Bgh_BHE30FN24T_c_Airfryer_30lts_1600wts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Bgh_BHE30FN24T_c_Airfryer_30lts_1600wts_1.webp",
        "images/hornos/Horno_electrico_Bgh_BHE30FN24T_c_Airfryer_30lts_1600wts_2.webp",
        "images/hornos/Horno_electrico_Bgh_BHE30FN24T_c_Airfryer_30lts_1600wts_3.webp",
        "images/hornos/Horno_electrico_Bgh_BHE30FN24T_c_Airfryer_30lts_1600wts_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 30\n<strong>Tipo:</strong> Horno\n<strong>Potencia (W):</strong> 1600',
    codigo: "2075309",
    caracteristicas: [
        "Marca: BGH",
        "Modelo: 2075309",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno eléctrico Ultracomb UC-110CLN 110lts Conveccion',
    imagen: "images/hornos/Horno_eléctrico_Ultracomb_UC_110CLN_110lts_Conveccion_1.webp",
    imagenes: [
        "images/hornos/Horno_eléctrico_Ultracomb_UC_110CLN_110lts_Conveccion_1.webp",
        "images/hornos/Horno_eléctrico_Ultracomb_UC_110CLN_110lts_Conveccion_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 110\n<strong>Potencia (W):</strong> 2400\n<strong>Convector:</strong> Sí',
    codigo: "2074390",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2074390",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno Florencia de empotrar 7857F Eléctrico',
    imagen: "images/hornos/Horno_Florencia_de_empotrar_7857F_Eléctrico_1.webp",
    imagenes: [
        "images/hornos/Horno_Florencia_de_empotrar_7857F_Eléctrico_1.webp",
        "images/hornos/Horno_Florencia_de_empotrar_7857F_Eléctrico_2.webp",
        "images/hornos/Horno_Florencia_de_empotrar_7857F_Eléctrico_3.webp",
        "images/hornos/Horno_Florencia_de_empotrar_7857F_Eléctrico_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 63\nstrong>Potencia (W):</strong> 2150\n<strong>Convector:</strong> Sí',
    codigo: "2072768 ",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072768 ",
        "Garantía: 1 año"
    ]
    },


    /////---------- Microondas ----------/////


    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Microondas",
    nombre: 'Microondas Kanji 23lts digital',
    imagen: "images/microondas/Microondas_Kanji_23lts_digital_4.webp",
    imagenes: [
        "images/microondas/Microondas_Kanji_23lts_digital_4.webp",
        "images/microondas/Microondas_Kanji_23lts_digital_1.webp",
        "images/microondas/Microondas_Kanji_23lts_digital_2.webp",
        "images/microondas/Microondas_Kanji_23lts_digital_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 23\n<strong>Potencia (W):</strong> 1000\n<strong>Tipo de control:</strong> Digital',
    codigo: "2075166",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075166",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Microondas",
    nombre: 'Microondas Bgh B120DN 20lts digital 700Wts Negro',
    imagen: "images/microondas/Microondas_Bgh_B120DN_20lts_digital_700Wts_Negro_1.webp",
    imagenes: [
        "images/microondas/Microondas_Bgh_B120DN_20lts_digital_700Wts_Negro_1.webp",
        "images/microondas/Microondas_Bgh_B120DN_20lts_digital_700Wts_Negro_2.webp",
        "images/microondas/Microondas_Bgh_B120DN_20lts_digital_700Wts_Negro_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 20\n<strong>Potencia (W):</strong> 700',
    codigo: "2073917",
    caracteristicas: [
        "Marca: BGH",
        "Modelo: 2073917",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Microondas",
    nombre: 'Microondas Tramontina Glass Cook 20 lts MCM Silver-Negro',
    imagen: "images/microondas/Microondas_Tramontina_Glass_Cook_20_lts_MCM_Silver_Negro_1.webp",
    imagenes: [
        "images/microondas/Microondas_Tramontina_Glass_Cook_20_lts_MCM_Silver_Negro_1.webp",
        "images/microondas/Microondas_Tramontina_Glass_Cook_20_lts_MCM_Silver_Negro_2.webp",
        "images/microondas/Microondas_Tramontina_Glass_Cook_20_lts_MCM_Silver_Negro_3.webp",
        "images/microondas/Microondas_Tramontina_Glass_Cook_20_lts_MCM_Silver_Negro_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 20\n<strong>Potencia (W):</strong> 700',
    codigo: "2075023",
    caracteristicas: [
        "Marca: Tramontina",
        "Modelo: 2075023",
        "Garantía: 1 año"
    ]
    },


    /////---------- Freidoras ----------/////


    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora kanji de aire 1802 7.5lts 1800wts',
    imagen: "images/freidoras/Freidora_kanji_de_aire_1802_7_5lts_1800wts_1.webp",
    imagenes: [
        "images/freidoras/Freidora_kanji_de_aire_1802_7_5lts_1800wts_1.webp",
        "images/freidoras/Freidora_kanji_de_aire_1802_7_5lts_1800wts_2.webp",
        "images/freidoras/Freidora_kanji_de_aire_1802_7_5lts_1800wts_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 7,5\n<strong>Potencia (W):</strong> 1800\n<strong>Tipo de control:</strong> Digital',
    codigo: "2075198",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075198",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora Kanji de aire 10 lts digital',
    imagen: "images/freidoras/Freidora_Kanji_de_aire_10_lts_digital_1.webp",
    imagenes: [
        "images/freidoras/Freidora_Kanji_de_aire_10_lts_digital_1.webp",
        "images/freidoras/Freidora_Kanji_de_aire_10_lts_digital_2.webp",
        "images/freidoras/Freidora_Kanji_de_aire_10_lts_digital_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 10\n<strong>Potencia (W):</strong> 1800',
    codigo: "2075197",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075197",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora Moulinex AF203158 Fry Uno 1.8lts plast wht',
    imagen: "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_1.webp",
    imagenes: [
        "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_1.webp",
        "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_2.webp",
        "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_3.webp",
        "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_4.webp",
        "images/freidoras/Freidora_Moulinex_AF203158_Fry_Uno_1_8lts_plast_wht_5.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.8\n<strong>Potencia (W):</strong> 1600',
    codigo: "2073798",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2073798",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora por aire Yelmo FR7309 5 lts 1400w',
    imagen: "images/freidoras/Freidora_por_aire_Yelmo_FR7309_5_lts_1400w_1.webp",
    imagenes: [
        "images/freidoras/Freidora_por_aire_Yelmo_FR7309_5_lts_1400w_1.webp",
        "images/freidoras/Freidora_por_aire_Yelmo_FR7309_5_lts_1400w_2.webp",
        "images/freidoras/Freidora_por_aire_Yelmo_FR7309_5_lts_1400w_3.webp",
        "images/freidoras/Freidora_por_aire_Yelmo_FR7309_5_lts_1400w_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 5\n<strong>Potencia (W):</strong> 1400',
    codigo: "2075092",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2075092",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora por aire Yelmo FR7311 Dig 7 lts 1700w',
    imagen: "images/freidoras/Freidora_por_aire_Yelmo_FR7311_Dig_7_lts_1700w_1.webp",
    imagenes: [
        "images/freidoras/Freidora_por_aire_Yelmo_FR7311_Dig_7_lts_1700w_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 7\n<strong>Potencia (W):</strong> 1700',
    codigo: "2075280",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2075280",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora Steel Home sin aceite Kentuchy 5lts 1500w digital',
    imagen: "images/freidoras/Freidora_Steel_Home_sin_aceite_Kentuchy_5lts_1500w_digital_1.webp",
    imagenes: [
        "images/freidoras/Freidora_Steel_Home_sin_aceite_Kentuchy_5lts_1500w_digital_1.webp",
        "images/freidoras/Freidora_Steel_Home_sin_aceite_Kentuchy_5lts_1500w_digital_2.webp",
        "images/freidoras/Freidora_Steel_Home_sin_aceite_Kentuchy_5lts_1500w_digital_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 5\n<strong>Potencia (W):</strong> 1500',
    codigo: "2075303",
    caracteristicas: [
        "Marca: Steel Home",
        "Modelo: 2075303",
        "Garantía: 1 año"
    ]
    },   
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora Steel Home sin aceite Oregon 8lts 1700w digital',
    imagen: "images/freidoras/Freidora_Steel_Home_sin_aceite_Oregon_8lts_1700w_digital_1.webp",
    imagenes: [
        "images/freidoras/Freidora_Steel_Home_sin_aceite_Oregon_8lts_1700w_digital_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 8\n<strong>Potencia (W):</strong> 1700',
    codigo: "2075305",
    caracteristicas: [
        "Marca: Steel Home",
        "Modelo: 2075305",
        "Garantía: 1 año"
    ]
    },


















    /////---------- Heladeras ----------/////
    
   
    {
        
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RT29K577JS8 Silver No Fr 299lts c/disp",
        imagen: "images/heladeras/heladera_samsung_rt29_silver_no_fr_290lts_cdisp1.webp",
        imagenes: [
            "images/heladeras/heladera_samsung_rt29_silver_no_fr_290lts_cdisp1.webp",
            "images/heladeras/heladera_samsung_rt29_silver_no_fr_290lts_cdisp2.webp"
        ],
        descripcion: "<strong>Dimensiones:</strong> 163 x 60 x 67\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 347 Litros\n<strong>Freezer:</strong> Sí\n<strong>Dispenser de agua:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073101",
        caracteristicas: ["Marca: Samsung", "Modelo: RT29K577JS8", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Gafa HGNW3900P No Frost 347lts Plata c/dispenser",
        imagen: "images/heladeras/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser1.webp",
        imagenes: [
            "images/heladeras/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser1.webp",
            "images/heladeras/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser2.webp",
            "images/heladeras/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 184 x 61 x 62\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 347 Litros\n<strong>Freezer:</strong> Sí\n<strong>Dispenser de agua:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075205",
        caracteristicas: ["Marca: Gafa", "Modelo: HGNW3900P", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "Ciclica",
        nombre: "Heladera Neba A 128B Ciclica 2 frios 128 Lts Blanca",
        imagen: "images/heladeras/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_1.webp",
            "images/heladeras/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_2.webp",
            "images/heladeras/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 81 x 57 x 60\n<strong>Tipo de tecnologia:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 128 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2073986",
        caracteristicas: ["Marca: Neba", "Modelo: A 128B", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "Ciclica",
        nombre: "Heladera Neba A 280 Ciclica 2 frios 280 Lts",
        imagen: "images/heladeras/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_1.webp",
            "images/heladeras/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_2.webp",
            "images/heladeras/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 152 x 57 x 60\n<strong>Tipo de tecnologia:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 280 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "22566",
        caracteristicas: ["Marca: Gafa", "Modelo: HGNW3900P", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "Ciclica",
        nombre: "Heladera Neba H-300BL Top Mount 294lts Blanca",
        imagen: "images/heladeras/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_1.webp",
        imagenes: [
            "images/heladeras/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_1.webp",
            "images/heladeras/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_2.webp",
            "images/heladeras/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_3.webp",
            "images/heladeras/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 170 x 65 x 54\n<strong>Tipo de tecnologia:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 294 Litros\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2074983",
        caracteristicas: ["Marca: Neba", "Modelo: H-300BL", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "Ciclica",
        nombre: "Heladera Philco PHCT302X Top Mount 298Lts Inox ciclica",
        imagen: "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_1.webp",
            "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_2.webp",
            "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_3.webp",
            "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_4.webp",
            "images/heladeras/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_5.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 176 x 55 x 60\n<strong>Tipo de tecnologia:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 298 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075258",
        caracteristicas: ["Marca: Philco", "Modelo: PHCT302X", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "Ciclica",
        nombre: "Heladera Philco PHCT341B ciclica 340Lts Blanca",
        imagen: "images/heladeras/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_1.webp",
            "images/heladeras/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_2.webp",
            "images/heladeras/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_3.webp",
            "images/heladeras/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185 x 61 x 62\n<strong>Tipo de tecnologia:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 347 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075205",
        caracteristicas: ["Marca: Philco", "Modelo: PHCT341B", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RB31FSRNDSA 328lts Silver",
        imagen: "images/heladeras/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_3.webp",
        imagenes: [
            "images/heladeras/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_3.webp",
            "images/heladeras/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_1.webp",
            "images/heladeras/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_2.webp",
            "images/heladeras/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185 x 60 x 68\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 328 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+",
        codigo: "2074199",
        caracteristicas: ["Marca: Samsung", "Modelo: RB31FSRNDSA", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RT32k5070S8 Silver No Fr 321lts",
        imagen: "images/heladeras/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_1.webp",
            "images/heladeras/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_2.webp",
            "images/heladeras/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_3.webp",
            "images/heladeras/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 171 x 60 x 67\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 269 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+",
        codigo: "2072958",
        caracteristicas: ["Marca: Samsung", "Modelo: RT32k5070S8", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RT29K507JS8 Silver No Fr 290lts sin dispenser",
        imagen: "images/heladeras/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_1.webp",
            "images/heladeras/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_2.webp",
            "images/heladeras/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_3.webp",
            "images/heladeras/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 163 x 60 x 67\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 290 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2074499",
        caracteristicas: ["Marca: Samsung", "Modelo: RT29K507JS8", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RT32K5070WW No Fr 321lts Bl s/disp",
        imagen: "images/heladeras/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_1.webp",
            "images/heladeras/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_2.webp",
            "images/heladeras/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_3.webp",
            "images/heladeras/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 171 x 60 x 67\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 321 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2072527",
        caracteristicas: ["Marca: Samsung", "Modelo: RT32K5070WW", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Whirlpool WRE57CK Inverter 449lts No Frost Platinum",
        imagen: "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_1.webp",
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_2.webp",
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_3.webp",
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_4.webp",
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_5.webp",
            "images/heladeras/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_6.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185 x 70 x 76 \n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 449 Litros\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075208",
        caracteristicas: ["Marca: Whirlpool", "Modelo: WRE57CK", "Garantía: 1 año"]
    },
    {
        categoria: "heladeras",
        subcategoria: "No frost",
        nombre: "Heladera Samsung RT42DG6730B1 No Frost (424 lts bruto) Black Dispenser Inverter",
        imagen: "images/heladeras/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_1.webp",
        imagenes: [
            "images/heladeras/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_1.webp",
            "images/heladeras/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_2.webp",
            "images/heladeras/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_3.webp",
            "images/heladeras/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 178 x 70 x 67\n<strong>Tipo de tecnologia:</strong> No Frost\n<strong>Inverter:</strong> Sí\n<strong>Capacidad (Litros):</strong> 424 Litros\n<strong>Freezer:</strong> Sí\n<strong>Dispenser de agua:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "2075161",
        caracteristicas: ["Marca: Samsung", "Modelo: RT42DG6730B1", "Garantía: 1 año"]
    },


















    /////---------- Lavarropas ----------/////

    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: "Lavarropas ENOVA EWMF-B7 carga frontal 7kg 1000rpm",
        imagen: "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_1.webp",
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_2.webp",
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_3.webp",
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_4.webp",
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_5.webp",
            "images/lavarropas/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_6.webp"
        ],
        descripcion: "Lavarropas de carga frontal con capacidad de 7kg.",
        codigo: "2075251",
        caracteristicas: ["Marca: Enova", "Modelo: EWMF-B7", "Garantía: 1 año"]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Midea MF100W60/W-A1 c/frontal 6kg 1000rpm Blanco',
        imagen: "images/lavarropas/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_1.webp",
            "images/lavarropas/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_2.webp",
            "images/lavarropas/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_3.webp",
            "images/lavarropas/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_4.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2075301",
        caracteristicas: [
            "Marca: Midea",
            "Modelo: 2075301",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas BGH Inverter 8kg 1400 rpm Blanco c/frontal BWFI08W24AR',
        imagen: "images/lavarropas/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_1.webp",
            "images/lavarropas/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_2.webp",
            "images/lavarropas/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_3.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2075312",
        caracteristicas: [
            "Marca: BGH",
            "Modelo: 2075312",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas BGH Inverter 6kg 1000 rpm Silver c/frontal BWFI06S24AR',
        imagen: "images/lavarropas/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_2.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_2.webp",
            "images/lavarropas/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_1.webp",
            "images/lavarropas/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_3.webp",
            "images/lavarropas/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_4.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2075313",
        caracteristicas: [
            "Marca: BGH",
            "Modelo: 2075313",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Columbia LSC10000 Semiautomatico 10 kg',
        imagen: "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_1.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_2.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_3.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_4.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 10\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2072096",
        caracteristicas: [
            "Marca: Columbia",
            "Modelo: 2072096",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Columbia LSC10001 10 kg c/bomba desagote',
        imagen: "images/lavarropas/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_1.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_3.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_2.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 10\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2073176",
        caracteristicas: [
            "Marca: Columbia",
            "Modelo: 2073176",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Columbia LSC7000 Semiautomatico 7 kg',
        imagen: "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_1.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_2.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_3.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_4.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2072095",
        caracteristicas: [
            "Marca: Columbia",
            "Modelo: 2072095",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Columbia LSC7001 Semiautomatico 7 kg c/bomba',
        imagen: "images/lavarropas/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_1.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_2.webp",
            "images/lavarropas/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_3.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2074987",
        caracteristicas: [
            "Marca: Columbia",
            "Modelo: 2074987",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Drean GOLD BLUE 10.6 ECO +',
        imagen: "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_1.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_2.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_3.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_4.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_5.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_6.webp",
            "images/lavarropas/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_7.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2070313",
        caracteristicas: [
            "Marca: Drean",
            "Modelo: 2070313",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Patrick LTPK67SB 6kg c/s semiauto.',
        imagen: "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_1.webp",
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_2.webp",
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_3.webp",
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_4.webp",
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_5.webp",
            "images/lavarropas/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_6.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2074107",
        caracteristicas: [
            "Marca: Patrick",
            "Modelo: 2074107",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Samsung WA85C5441BWUBG c/sup 8.5 kg 700 rpm Blanco Inverter',
        imagen: "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_1.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_2.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_3.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_4.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_5.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_6.webp",
            "images/lavarropas/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_7.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 8,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 700\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2074786",
        caracteristicas: [
            "Marca: Samsung",
            "Modelo: 2074786",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Samsung WW70AA46BX 7 kg 1400 rpm Inox',
        imagen: "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_1.webp",
            "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_2.webp",
            "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_3.webp",
            "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_4.webp",
            "images/lavarropas/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2074202",
        caracteristicas: [
            "Marca: Samsung",
            "Modelo: 2074202",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavarropas",
        nombre: 'Lavarropas Steel Home LRSH56SB0 Redondo 5kg 6 programas',
        imagen: "images/lavarropas/Lavarropas_Steel_Home_LRSH56SB0_Redondo_5kg_6_programas_1.webp",
        imagenes: [
            "images/lavarropas/Lavarropas_Steel_Home_LRSH56SB0_Redondo_5kg_6_programas_1.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 5\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 0\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2075324",
        caracteristicas: [
            "Marca: Steel Home",
            "Modelo: 2075324",
            "Garantía: 1 año"
        ]
    },
    {
        categoria: "Lavado",
        subcategoria: "Lavasecarropas",
        nombre: 'Lavasecarropas Samsung WD95A4453BWUBG 9.5kg Blanco',
        imagen: "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
        imagenes: [
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_2.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_3.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_4.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_5.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_6.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_7.webp",
            "images/lavarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_8.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 9,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> Sí',
        codigo: "2074749",
        caracteristicas: [
            "Marca: Samsung",
            "Modelo: 2074749",
            "Garantía: 1 año"
        ]
    },


















    /////---------- Celulares ----------/////

    {
        categoria: "Tecnologia",
        subcategoria: "Celulares",
        nombre: "LIBERADO Motorola MOTO E15 (XT2523-8) 2/64gb",
        imagen: "images/celulares/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_1.webp",
        imagenes: [
            "images/celulares/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_1.webp",
            "images/celulares/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_2.webp",
            "images/celulares/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_3.webp"
        ],
        descripcion:'<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 32 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Bateria:</strong> 5.2 Ah\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong>Android 14 GO Edition',
        codigo: "2075246",
        caracteristicas: ["Marca: Motorola", "Modelo: XT2523-8", "Garantía: 1 año"]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Noblex N52 6.5" 2/64GB Negro',
    imagen: "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_1.webp",
        "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.5\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13 GO',
    codigo: "2074907 ",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2074907 ",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Moto E 13 2gb/64gb',
    imagen: "images/celulares/liberado_moto_e_13_2_64_1.webp",
    imagenes: [
        "images/celulares/liberado_moto_e_13_2_64_1.webp",
        "images/celulares/liberado_moto_e_13_2_64_2.webp",
        "images/celulares/liberado_moto_e_13_2_64_3.webp",
        "images/celulares/liberado_moto_e_13_2_64_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.5\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13 GO',
    codigo: "2074414",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2074414",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola Moto E14 2/64GB',
    imagen: "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_1.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_2.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_3.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_4.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_5.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_6.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_7.webp",
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_8.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.5\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong>Android 14 GO Edition',
    codigo: "2075006 ",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075006 ",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Noblex N62 6.5" 4/64GB Negro',
    imagen: "images/celulares/LIBERADO_Noblex_N62_6_5_4_64GB_Negro_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Noblex_N62_6_5_4_64GB_Negro_1.webp",
        "images/celulares/LIBERADO_Noblex_N62_6_5_4_64GB_Negro_2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.5\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 13 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13 GO',
    codigo: "2074797",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2074797",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola G05 (XT2523-2) 4/64gb',
    imagen: "images/celulares/LIBERADO_Motorola_G05 _XT2523_2_4_64gb_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Motorola_G05 _XT2523_2_4_64gb_1.webp",
        "images/celulares/LIBERADO_Motorola_G05 _XT2523_2_4_64gb_2.webp",
        "images/celulares/LIBERADO_Motorola_G05 _XT2523_2_4_64gb_3.webp",
        "images/celulares/LIBERADO_Motorola_G05 _XT2523_2_4_64gb_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.7\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 15',
    codigo: "2075247",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075247",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A05 4/64GB',
    imagen: "images/celulares/LIBERADO_samsung_a_05_4_64_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_samsung_a_05_4_64_1.webp",
        "images/celulares/LIBERADO_samsung_a_05_4_64_2.webp",
        "images/celulares/LIBERADO_samsung_a_05_4_64_3.webp",
        "images/celulares/LIBERADO_samsung_a_05_4_64_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 11',
    codigo: "2075005",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075005",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola Moto G14 4/128GB',
    imagen: "images/celulares/LIBERADO_Motorola_Moto_G14_4_128GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Motorola_Moto_G14_4_128GB_1.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G14_4_128GB_2.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G14_4_128GB_3.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G14_4_128GB_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.5"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2074637",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2074637",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola G15 (XT2521-2) 4/128gb',
    imagen: "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_1.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_2.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_3.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_4.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_5.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_6.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_7.webp",
        "images/celulares/LIBERADO_Motorola_G15 _XT2521_2_4_128gb_8.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>NFC:</strong> Sí\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 15',
    codigo: "2075248",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075248",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A06 4/64GB',
    imagen: "images/celulares/LIBERADO_Samsung_A06_4_64GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Samsung_A06_4_64GB_1.webp",
        "images/celulares/LIBERADO_Samsung_A06_4_64GB_2.webp",
        "images/celulares/LIBERADO_Samsung_A06_4_64GB_3.webp",
        "images/celulares/LIBERADO_Samsung_A06_4_64GB_4.webp",
        "images/celulares/LIBERADO_Samsung_A06_4_64GB_5.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5 Mpx\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075140",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075140",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola Moto G23 4/128GB',
    imagen: "images/celulares/LIBERADO_Motorola_Moto_G23_4_128GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Motorola_Moto_G23_4_128GB_1.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G23_4_128GB_2.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G23_4_128GB_3.webp",
        "images/celulares/LIBERADO_Motorola_Moto_G23_4_128GB_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.5"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2074747",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2074747",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Noblex B30 6.5" 6/128GB Negro',
    imagen: "images/celulares/LIBERADO_Noblex_B30_6_5_6_128GB_Negro_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Noblex_B30_6_5_6_128GB_Negro_1.webp",
        "images/celulares/LIBERADO_Noblex_B30_6_5_6_128GB_Negro_2.webp",
        "images/celulares/LIBERADO_Noblex_B30_6_5_6_128GB_Negro_3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 6\n<strong>Pulgadas:</strong> 6.5\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2074804",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2074804",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Zte Blade V50 4/256GB 6.75" (8550-F)',
    imagen: "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_1.webp",
        "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_2.webp",
        "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_3.webp",
        "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_4.webp",
        "images/celulares/LIBERADO_Zte_Blade_V50_4_256GB_6_75_8550_F_5.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 256\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2074836",
    caracteristicas: [
        "Marca: ZTE",
        "Modelo: 2074836",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A16 4/128GB',
    imagen: "images/celulares/LIBERADO_Samsung_A16_4_128GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Samsung_A16_4_128GB_1.webp",
        "images/celulares/LIBERADO_Samsung_A16_4_128GB_2.webp",
        "images/celulares/LIBERADO_Samsung_A16_4_128GB_3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>NFC:</strong> Sí\n<strong>Pulgadas:</strong> 6.7"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>Batería:</strong> 5.2\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075291",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075291",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A26 8/256GB',
    imagen: "images/celulares/LIBERADO_Samsung_A26_8_256GB_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Samsung_A26_8_256GB_1.webp",
        "images/celulares/LIBERADO_Samsung_A26_8_256GB_2.webp",
        "images/celulares/LIBERADO_Samsung_A26_8_256GB_3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 256\n<strong>RAM (GB):</strong> 8\n<strong>Pulgadas:</strong> 6.7\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 13 Mpx\n<strong>Batería:</strong> 5\n<strong>Red móvil:</strong> 5G\n<strong>Sistema operativo:</strong> Android 14',
    codigo: "2075292",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075292",
        "Garantía: 1 año"
    ]
    },


















    /////---------- Pequeños Electrodomesticos ----------/////
         
         /////---------- Pavas Electricas ----------/////

    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Electrica Philips HD469590 1lts 2200w',
    imagen: "images/pavas_electricas/Pava_Electrica_Philips_HD469590_1lts_2200w_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Electrica_Philips_HD469590_1lts_2200w_1.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD469590_1lts_2200w_2.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD469590_1lts_2200w_3.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD469590_1lts_2200w_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1\n<strong>Potencia (W):</strong> 2200',
    codigo: "2075235",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075235",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Electrica Philips HD9368/90 Negra Temp Para Mate 1.7L 2200w',
    imagen: "images/pavas_electricas/Pava_Electrica_Philips_HD9368_90_Negra_Temp_Para_Mate_17L_2200w_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Electrica_Philips_HD9368_90_Negra_Temp_Para_Mate_17L_2200w_1.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD9368_90_Negra_Temp_Para_Mate_17L_2200w_2.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD9368_90_Negra_Temp_Para_Mate_17L_2200w_3.webp",
        "images/pavas_electricas/Pava_Electrica_Philips_HD9368_90_Negra_Temp_Para_Mate_17L_2200w_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 2200\n<strong>Corte automático:</strong> Sí',
    codigo: "2075236 ",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075236 ",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava electrica Ultracomb PE 4909 1.7Lts, 2200w',
    imagen: "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4909_1_7Lts_2200w_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4909_1_7Lts_2200w_1.webp",
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4909_1_7Lts_2200w_2.webp",
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4909_1_7Lts_2200w_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 2200\n<strong>Corte automático:</strong> Sí',
    codigo: "2071746",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2071746",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Kanji KJH-PE15005S Hervidora alum/plast',
    imagen: "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_1.webp",
        "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 2\n<strong>Potencia (W):</strong> 1500',
    codigo: "2074904 ",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2074904 ",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Moulinex BY3975AR Mate',
    imagen: "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_1.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_2.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_3.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_4.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_5.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_6.webp",
        "images/pavas_electricas/Pava_Moulinex_BY3975AR_Mate_7.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1\n<strong>Potencia (W):</strong> 2400\n<strong>Corte automático:</strong> Sí',
    codigo: "2073516 ",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2073516 ",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Oster 4970 negra o Blanca con Regulador',
    imagen: "images/pavas_electricas/Pava_Oster_4970_negra_o_Blanca_con_Regulador_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Oster_4970_negra_o_Blanca_con_Regulador_1.webp",
        "images/pavas_electricas/Pava_Oster_4970_negra_o_Blanca_con_Regulador_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 1850\n<strong>Corte automático:</strong> Sí',
    codigo: "2072885",
    caracteristicas: [
        "Marca: Oster",
        "Modelo: 2072885",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Peabody PE-KV8215S 1.7L inox',
    imagen: "images/pavas_electricas/Pava_Peabody_PE_KV8215S_1_7L_inox_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Peabody_PE_KV8215S_1_7L_inox_1.webp",
        "images/pavas_electricas/Pava_Peabody_PE_KV8215S_1_7L_inox_2.webp",
        "images/pavas_electricas/Pava_Peabody_PE_KV8215S_1_7L_inox_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 2200',
    codigo: "2072883",
    caracteristicas: [
        "Marca: Peabody",
        "Modelo: 2072883",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Philco PEPH1182IP c/corte 1.8lts 1500w',
    imagen: "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_1.webp",
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_2.webp",
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_3.webp",
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_4.webp",
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_5.webp",
        "images/pavas_electricas/Pava_Philco_PEPH1182IP_c_corte_1_8lts_1500w_6.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.8\n<strong>Potencia (W):</strong> 1500',
    codigo: "2075300",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075300",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Whitenblack WBAPWB17 Hervidora 1.7lts 2000w',
    imagen: "images/pavas_electricas/Pava_Whitenblack_WBAPWB17_Hervidora_1_7lts_2000w_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Whitenblack_WBAPWB17_Hervidora_1_7lts_2000w_1.webp",
        "images/pavas_electricas/Pava_Whitenblack_WBAPWB17_Hervidora_1_7lts_2000w_2.webp",
        "images/pavas_electricas/Pava_Whitenblack_WBAPWB17_Hervidora_1_7lts_2000w_3.webp",
        "images/pavas_electricas/Pava_Whitenblack_WBAPWB17_Hervidora_1_7lts_2000w_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 2000',
    codigo: "2075295",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075295",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "pavas electricas",
    nombre: 'Pava Yelmo PE 3900',
    imagen: "images/pavas_electricas/Pava_Yelmo_PE_3900_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Yelmo_PE_3900_1.webp",
        "images/pavas_electricas/Pava_Yelmo_PE_3900_2.webp",
        "images/pavas_electricas/Pava_Yelmo_PE_3900_3.webp",
        "images/pavas_electricas/Pava_Yelmo_PE_3900_4.webp",
        "images/pavas_electricas/Pava_Yelmo_PE_3900_5.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.7\n<strong>Potencia (W):</strong> 2200',
    codigo: "20065",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 20065",
        "Garantía: 1 año"
    ]
    },

         
         /////---------- Cafeteras ----------/////


    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Atma CA8143N/P de filtro 1.25lts Negra',
    imagen: "images/cafeteras/Cafetera_Atma_CA8143N_P_de_filtro_1_25lts_Negra_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Atma_CA8143N_P_de_filtro_1_25lts_Negra_1.webp",
        "images/cafeteras/Cafetera_Atma_CA8143N_P_de_filtro_1_25lts_Negra_2.webp",
        "images/cafeteras/Cafetera_Atma_CA8143N_P_de_filtro_1_25lts_Negra_3.webp",
        "images/cafeteras/Cafetera_Atma_CA8143N_P_de_filtro_1_25lts_Negra_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.25\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 850',
    codigo: "2071662",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2071662",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Kanji CMF0800 Filtro negra 6 tazas',
    imagen: "images/cafeteras/Cafetera_Kanji_CMF0800_Filtro_negra_6_tazas_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Kanji_CMF0800_Filtro_negra_6_tazas_1.webp",
        "images/cafeteras/Cafetera_Kanji_CMF0800_Filtro_negra_6_tazas_2.webp",
        "images/cafeteras/Cafetera_Kanji_CMF0800_Filtro_negra_6_tazas_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 0.6\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 800',
    codigo: "2072257",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2072257",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Kanji CMF0800S',
    imagen: "images/cafeteras/Cafetera_Kanji_CMF0800S_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Kanji_CMF0800S_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.2\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 800',
    codigo: "2072258",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2072258",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Moulinex FG320558 CAFECITY NEGRA ( GS )',
    imagen: "images/cafeteras/Cafetera_Moulinex_FG320558_CAFECITY_NEGRA _GS _1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Moulinex_FG320558_CAFECITY_NEGRA _GS _1.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320558_CAFECITY_NEGRA _GS _2.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320558_CAFECITY_NEGRA _GS _3.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320558_CAFECITY_NEGRA _GS _4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 0.6\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 650',
    codigo: "2072848",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2072848",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Philips HD746100 jarra 1.2lts antigoteo',
    imagen: "images/cafeteras/Cafetera_Philips_HD746100_jarra_1_2lts_antigoteo_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Philips_HD746100_jarra_1_2lts_antigoteo_1.webp",
        "images/cafeteras/Cafetera_Philips_HD746100_jarra_1_2lts_antigoteo_2.webp",
        "images/cafeteras/Cafetera_Philips_HD746100_jarra_1_2lts_antigoteo_3.webp",
        "images/cafeteras/Cafetera_Philips_HD746100_jarra_1_2lts_antigoteo_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.2\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 1000',
    codigo: "2075244",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075244",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "pequenos electrodomesticos",
    subcategoria: "cafeteras",
    nombre: 'Cafetera Smartlife SL-CM9402 1.5Lts',
    imagen: "images/cafeteras/Cafetera_Smartlife_SL_CM9402_1_5Lts_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Smartlife_SL_CM9402_1_5Lts_1.webp",
        "images/cafeteras/Cafetera_Smartlife_SL_CM9402_1_5Lts_2.webp",
        "images/cafeteras/Cafetera_Smartlife_SL_CM9402_1_5Lts_3.webp",
        "images/cafeteras/Cafetera_Smartlife_SL_CM9402_1_5Lts_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.5\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 980',
    codigo: "2073214",
    caracteristicas: [
        "Marca: Smartlife",
        "Modelo: 2073214",
        "Garantía: 1 año"
    ]
    },


    /////---------- Tostadoras ----------/////

    {
    categoria: "pequeños electrodomesticos",
    subcategoria: "tostadoras",
    nombre: 'Tostador Electrolux ETS11 Inox 8 niv. descongela',
    imagen: "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_1.webp",
    imagenes: [
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_1.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_2.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_3.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_4.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_5.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_6.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_7.webp",
        "images/tostadoras/Tostador_Electrolux_ETS11_Inox_8_niv_descongela_8.webp"
    ],
    descripcion: '<strong>Ranuras:</strong> 2\n<strong>Potencia (W):</strong> 800\n<strong>Niveles de tostado:</strong> 8',
    codigo: "2075203",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2075203",
        "Garantía: 1 año"
    ]
},
{
    categoria: "pequeños electrodomesticos",
    subcategoria: "tostadoras",
    nombre: 'Tostador Kanji TM1400 para 4 panes',
    imagen: "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_1.webp",
    imagenes: [
        "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_1.webp",
        "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_2.webp",
        "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_3.webp"
    ],
    descripcion: '<strong>Ranuras:</strong> 2\n<strong>Potencia (W):</strong> 1200\n<strong>Niveles de tostado:</strong> 6',
    codigo: "2072260",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2072260",
        "Garantía: 1 año"
    ]
},


















        /////---------- Termotanques ----------/////

            /////---------- Gas ----------/////

    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Escorial 45LTS',
    imagen: "images/gas/Termot_Escorial_45LTS_1.webp",
    imagenes: [
        "images/gas/Termot_Escorial_45LTS_1.webp",
        "images/gas/Termot_Escorial_45LTS_2.webp",
        "images/gas/Termot_Escorial_45LTS_3.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 60 x 42\n<strong>Capacidad (Litros):</strong> 45\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2068932",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2068932",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Zafiro 030 Lts mg pie/col A.recup. 330000',
    imagen: "images/gas/Termot_Señorial_Zafiro_030_Lts_mg_pie_col_a_recup_330000_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Zafiro_030_Lts_mg_pie_col_a_recup_330000_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 61 x 36\n<strong>Capacidad (Litros):</strong> 30\n<strong>Conexiones:</strong> Ambos\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 2000\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2073040",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073040",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Zafiro 085 Lts mg pie/col 330002',
    imagen: "images/gas/Termot_Señorial_Zafiro_085_Lts_mg_pie_col_330002_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Zafiro_085_Lts_mg_pie_col_330002_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 110 x 41\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 4400\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073037",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073037",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Ecotermo 45Lts GN Populi TE1052022',
    imagen: "images/gas/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_1.webp",
    imagenes: [
        "images/gas/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_1.webp",
        "images/gas/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_2.webp",
        "images/gas/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_3.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 72 x 43\n<strong>Capacidad (Litros):</strong> 45\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 3600\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2072108",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072108",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot Sherman 50 lts pie multigas carga sup',
    imagen: "images/gas/Termot_sherman_50_lts_pie_multigas_carga_sup_1.webp",
    imagenes: [
        "images/gas/Termot_sherman_50_lts_pie_multigas_carga_sup_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 82 x 45\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 3500\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2079072",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 2079072",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Zafiro 050 Lts mg pie/col A.recup. 330001',
    imagen: "images/gas/Termot_Señorial_Zafiro_050_Lts_mg_pie_col_A_recup_330001_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Zafiro_050_Lts_mg_pie_col_A_recup_330001_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 92 x 36\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Ambos\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 4300\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073041",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073041",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Family 085 Lts mg pie/col 330008',
    imagen: "images/gas/Termot_Señorial_Family_085_Lts_mg_pie_col_330008_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Family_085_Lts_mg_pie_col_330008_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 110 x 41\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 4000\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073164",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073164",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Zafiro 120 mg 118lts apoyar 330003',
    imagen: "images/gas/Termot_Señorial_Zafiro_120_mg_118lts_apoyar_330003_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Zafiro_120_mg_118lts_apoyar_330003_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 146 x 41\n<strong>Capacidad (Litros):</strong> 120\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 4500\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073038",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073038",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Señorial Zafiro 160 Lts mg apoyar 330012',
    imagen: "images/gas/Termot_Señorial_Zafiro_160_Lts_mg_apoyar_330012_1.webp",
    imagenes: [
        "images/gas/Termot_Señorial_Zafiro_160_Lts_mg_apoyar_330012_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 153 x 33\n<strong>Capacidad (Litros):</strong> 160\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 4300\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073039",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073039",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Ecotermo 53 Lts. Alta recup. C/Sup. GN TE4052522',
    imagen: "images/gas/Termot_Ecotermo_53_Lts._Alta_recup_C_Sup_GN_TE4052522_1.webp",
    imagenes: [
        "images/gas/Termot_Ecotermo_53_Lts._Alta_recup_C_Sup_GN_TE4052522_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 76 x 42\n<strong>Capacidad (Litros):</strong> 53\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 6400\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2072050",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072050",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Saiar 80lts pie multigas carga sup.',
    imagen: "images/gas/Termot_Saiar_80lts_pie_multigas_carga_sup_1.webp",
    imagenes: [
        "images/gas/Termot_Saiar_80lts_pie_multigas_carga_sup_1.webp",
        "images/gas/Termot_Saiar_80lts_pie_multigas_carga_sup_2.webp",
        "images/gas/Termot_Saiar_80lts_pie_multigas_carga_sup_3.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 106 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 6900\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2079065",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 2079065",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Saiar 80lts colgar multigas carga inferior',
    imagen: "images/gas/Termot_Saiar_80lts_colgar_multigas_carga_inferior_1.webp",
    imagenes: [
        "images/gas/Termot_Saiar_80lts_colgar_multigas_carga_inferior_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 67 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Potencia:</strong> 5000\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2079069",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 2079069",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Rheem 80 lts pie carga sup. GN Blanco (tpg080gnrh)',
    imagen: "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_1.webp",
    imagenes: [
        "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_1.webp",
        "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_2.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 106 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 6000\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2074364",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 2074364",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Eskabe AQUAPIU H360 Gas A. recup Hybrid4 360lts/hs vert',
    imagen: "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_1.webp",
    imagenes: [
        "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_1.webp",
        "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_2.webp",
        "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_3.webp",
        "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_4.webp",
        "images/gas/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_5.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 83 x 45\n<strong>Capacidad (Litros):</strong> 40\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 10000\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2075133",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 2075133",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Gas",
    nombre: 'Termot. Rheem 80 lts pie carga sup. GN Gris (tgnp080rh)',
    imagen: "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_1.webp",
    imagenes: [
        "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_1.webp",
        "images/gas/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_2.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 109 x 42\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 5500\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "17114",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 17114",
        "Garantía: 1 año"
    ]
    },

        /////---------- Electrico ----------/////


    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Señorial Zafiro TESZP-20 20lts electrico',
    imagen: "images/electrico/Termot_Señorial_Zafiro_TESZP_20_20lts_electrico_1.webp",
    imagenes: [
        "images/electrico/Termot_Señorial_Zafiro_TESZP_20_20lts_electrico_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 33 x 41\n<strong>Capacidad (Litros):</strong> 20\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2075242",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2075242",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Señorial Family 090 Lts Elec pie/col A. recup 330010',
    imagen: "images/electrico/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_1.webp",
    imagenes: [
        "images/electrico/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_1.webp",
        "images/electrico/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_2.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 105 x 41\n<strong>Capacidad (Litros):</strong> 90\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 2000\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073045",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073045",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Saiar 55 lts electrico TEPC055ESARIK2',
    imagen: "images/electrico/Termot_Saiar_55_lts_electrico_TEPC055ESARIK2_1.webp",
    imagenes: [
        "images/electrico/Termot_Saiar_55_lts_electrico_TEPC055ESARIK2_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 58 x 45\n<strong>Capacidad (Litros):</strong> 55\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 2000\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "17005",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 17005",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Ecotermo 70Lts Electrico Populi Carga Sup.',
    imagen: "images/electrico/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_1.webp",
    imagenes: [
        "images/electrico/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_1.webp",
        "images/electrico/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_2.webp",
        "images/electrico/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_3.webp",
        "images/electrico/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_4.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 98 x 63\n<strong>Capacidad (Litros):</strong> 70\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Potencia:</strong> 5600\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2072245",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072245",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Señorial Zafiro 095 Lts Elec col. entr. sup.330006',
    imagen: "images/electrico/Termot_Señorial_Zafiro_095_Lts_Elec_col_entr_sup_330006_1.webp",
    imagenes: [
        "images/electrico/Termot_Señorial_Zafiro_095_Lts_Elec_col_entr_sup_330006_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 93 x 41\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073044",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073044",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Señorial Zafiro 65 elec 50lts col. entr. sup. 330005',
    imagen: "images/electrico/Termot_Señorial_Zafiro_65_elec_50lts_col_entr_sup_330005_1.webp",
    imagenes: [
        "images/electrico/Termot_Señorial_Zafiro_65_elec_50lts_col_entr_sup_330005_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 64 x 41\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2073043",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073043",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Escorial EL-90 90lts Electrico',
    imagen: "images/electrico/Termot_Escorial_EL_90_90lts_Electrico_1.webp",
    imagenes: [
        "images/electrico/Termot_Escorial_EL_90_90lts_Electrico_1.webp",
        "images/electrico/Termot_Escorial_EL_90_90lts_Electrico_2.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 92 x 43\n<strong>Capacidad (Litros):</strong> 90\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2071220",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2071220",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Eléctrico",
    nombre: 'Termot. Señorial Zafiro 40 elec 30lts col. entr. sup. 330004',
    imagen: "images/electrico/Termot_Señorial_Zafiro_40_elec_30lts_col_entr_sup_330004_1.webp",
    imagenes: [
        "images/electrico/Termot_Señorial_Zafiro_40_elec_30lts_col_entr_sup_330004_1.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 43 x 41\n<strong>Capacidad (Litros):</strong> 30\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 1500\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2073042",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073042",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques",
    subcategoria: "Electrico",
    nombre: 'Termot. Sherman 85 Eléctrico TECC085ESHK2',
    imagen: "images/electrico/Termot_Sherman_85_Eléctrico_TECC085ESHK2_1.webp",
    imagenes: [
        "images/electrico/Termot_Sherman_85_Eléctrico_TECC085ESHK2_1.webp",
        "images/electrico/Termot_Sherman_85_Eléctrico_TECC085ESHK2_2.webp"
    ],
    descripcion: '<strong>Dimensiones:</strong> 51 x 45\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Potencia:</strong> 2000\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "21205",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 21205",
        "Garantía: 1 año"
    ]
    },




];
