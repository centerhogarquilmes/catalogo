// Arreglo de productos destacados (códigos de los productos)
const productosDestacados = [
    "2075301", //Lavarropas Midea MF100W60/W-A1 c/frontal 6kg 1000rpm Blanco
    "2075334", // TV LED Noblex 32" DR32X7080 Android Tv
    "2075321", // TV LED Philips 43" Smart HD 43PFD6910/77 con Titan OS
    "2075334", // TV LED Noblex 32" DR32X7080 Android Tv
    "14202", // Calefactor Volcan T/B 5700 46312/6 GRIS
    "2075320",  // TV LED Philips 32" Smart HD 32PHD6910/77 con Titan OS
    "2075207", //TV LED RCA 55" G55P6UHD-F Google 4K Smart
    "2075435", //TV LED Aoc 43" 43S5135/77G Smart tv Roku
    "2075434", //TV LED Aoc 32" 32S5135/77G Smart tv Roku
    "2074860", //TV LED ENOVA 75" smart 4K UHD Android
    "2075285", //TV LED Noblex 50" DR50X8580 Smart Google tv
    "2075388", //TV LED RCA 55" QL55TH200-F QLED Google 4K Smart
    "2073755", //TV LED ENOVA 32" smart HD Android
    "2075302", //TV LED ENOVA 65" smart 4K UHD Google Tv
    "2075302", //TV LED ENOVA 65" smart 4K UHD Google Tv
    "2075067", //TV LED RCA 40" R40AND-F Smart c/ Android
    "2074829", //TV LED Noblex 58" DB58X7550 Android 4K
    "2075463", //TV LED RCA 65" C65AND-F Smart HD Android
    "2075452", //LIBERADO Tecno Spark 30 Pro KL7 8/128 gb Artic Glow (PNT011034)
    "2075451", //LIBERADO Tecno Spark 30C KL5 4/256 gb Orbit Black (PNT011019)
    "2075455", //LIBERADO Zte Blade A55 4/128GB 6.75" 4G (Z2450-FAL)
    "2075185", //Tablet Enova 10" 4G LTE 4/64gb 2+5mp android 12
    "2075454", //LIBERADO Zte Blade A75 4/256GB 6.6" 5G (Z2357N-FAL)
    "2074804", //LIBERADO Noblex B30 6.5" 6/128GB Negro
    "2075453", //LIBERADO Zte Blade V60 8/256GB 6.72" 4G (Z2356-FAL)
    "2074797", //LIBERADO Noblex N62 6.5" 4/64GB Negro
    "2074907", //LIBERADO Noblex N52 6.5" 2/64GB Negro



];
const productos = [


    /////---------- Cocinas ----------/////
    {
        categoria: "Cocinas y anafes",
        subcategoria: "Cocinas",
        nombre: "Cocina Escorial Candor gn Blanca",
        imagen: "images/cocinas/cocina_escorial_candor.webp",
        imagenes: [
            "images/cocinas/cocina_escorial_candor.webp",
            "images/cocinas/cocina_escorial_candor2.webp",
            "images/cocinas/cocina_escorial_candor3.webp"
        ],
        descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x 51 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural\n<strong>Eficiencia energética:</strong> Clase A",
        codigo: "18079",
        caracteristicas: ["Marca: Escorial", "Modelo: Candor", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Candor ge Blanca',
    imagen: "images/cocinas/Cocina_Escorial_Candor_ge_Blanca_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Candor_ge_Blanca_1.webp",
        "images/cocinas/Cocina_Escorial_Candor_ge_Blanca_2.webp",
        "images/cocinas/Cocina_Escorial_Candor_ge_Blanca_3.webp",
        "images/cocinas/Cocina_Escorial_Candor_ge_Blanca_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Domestica\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 50 x 54 \n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Envasado\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "18080",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 18080",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
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
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Master S2 Classic gn Negra",
    imagen: "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
        "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_2.webp",
        "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_3.webp",
        "images/cocinas/Cocina_Escorial_Master_S2_Classic_gn_Negra_4.webp"
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x  56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Hornallas:</strong> 4\n<strong>Tipo de gas:</strong> Natural\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073969",
    caracteristicas: ["Marca: Escorial", "Modelo: 5507F", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Candor Black gn",
    imagen: "images/cocinas/cocina_candor_negra.jpg",
    imagenes: [
        "images/cocinas/cocina_candor_negra.jpg",
        "images/cocinas/cocina_candor_negra1.jpg",
        "images/cocinas/cocina_candor_negra2.jpg",
        "images/cocinas/cocina_candor_negra3.jpg",
        "images/cocinas/cocina_candor_negra4.jpg",
        "images/cocinas/cocina_candor_negra5.jpg"
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 95 x  51 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2072621",
    caracteristicas: ["Marca: Escorial", "Modelo: Candor Black", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Master Classic gn Blanca",
    imagen: "images/cocinas/cocina_escorial_master_classic.jpg",
    imagenes: [
        "images/cocinas/cocina_escorial_master_classic.jpg",
        "images/cocinas/cocina_escorial_master_classic2.jpg",
        "images/cocinas/cocina_escorial_master_classic3.jpg",
        "images/cocinas/cocina_escorial_master_classic4.jpg",
        "images/cocinas/cocina_escorial_master_classic5.jpg",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 93 x  56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Natural\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073930",
    caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Palace Cristal Blanca LX gn",
    imagen: "images/cocinas/cocina-escorial-palace-cristal-lx-gn.jpg",
    imagenes: [
        "images/cocinas/cocina-escorial-palace-cristal-lx-gn.jpg",

    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 85 x  51 x 52\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Tipo de gas:</strong> Natural\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "15760",
    caracteristicas: ["Marca: Escorial", "Modelo: PALACE CRISTAL", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Master Classic ge Inox",
    imagen: "images/cocinas/cocina-escorial-master-classic-ge-inox.jpg",
    imagenes: [
        "images/cocinas/cocina-escorial-master-classic-ge-inox.jpg",
        "images/cocinas/cocina-escorial-master-classic-ge-inox1.jpg",
        "images/cocinas/cocina-escorial-master-classic-ge-inox2.jpg",
        "images/cocinas/cocina-escorial-master-classic-ge-inox3.jpg",
        "images/cocinas/cocina-escorial-master-classic-ge-inox4.jpg",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 91 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Envasado\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2075088",
    caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Florencia 5518F - Inox.",
    imagen: "images/cocinas/Cocina_Florencia_5518F _Inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5518F _Inox_1.webp",
        "images/cocinas/Cocina_Florencia_5518F _Inox_2.webp",
        "images/cocinas/Cocina_Florencia_5518F _Inox_3.webp",
        "images/cocinas/Cocina_Florencia_5518F _Inox_4.webp",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones:</strong> 85 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase AA",
    codigo: "2071810",
    caracteristicas: ["Marca: Florencia", "Modelo: 5518F", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Escorial Master Style Multigas Bca.",
    imagen: "images/cocinas/cocina-escorial-master-style-multigas-bca.jpg",
    imagenes: [
        "images/cocinas/cocina-escorial-master-style-multigas-bca.jpg",
        "images/cocinas/cocina-escorial-master-style-multigas-bca1.jpg",
        "images/cocinas/cocina-escorial-master-style-multigas-bca2.jpg",
        "images/cocinas/cocina-escorial-master-style-multigas-bca3.jpg",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 93 x 56 x 60\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073910",
    caracteristicas: ["Marca: Escorial", "Modelo: Master Style", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
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
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
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
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
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
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
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
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: "Cocina Morelli Industrial Jitaku/saho 820 18062 5 horn. inox",
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox3.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox4.webp",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones:</strong> 86 x 82 x 58\n<strong>Hornallas:</strong> 5\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073292",
    caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5417/5517 FEL negra',
    imagen: "images/cocinas/Cocina_Florencia _5417_5517_FEL_facil_limpieza_negra_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia _5417_5517_FEL_facil_limpieza_negra_1.webp",
        "images/cocinas/Cocina_Florencia _5417_5517_FEL_facil_limpieza_negra_2.webp",
        "images/cocinas/Cocina_Florencia _5417_5517_FEL_facil_limpieza_negra_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 86 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2070485",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2070485",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial PALACE CRISTAL Negra LX GE',
    imagen: "images/cocinas/Cocina_Escorial_PALACE_CRISTAL_Negra_LX_GE_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_PALACE_CRISTAL_Negra_LX_GE_1.webp",
        "images/cocinas/Cocina_Escorial_PALACE_CRISTAL_Negra_LX_GE_2.webp",
        "images/cocinas/Cocina_Escorial_PALACE_CRISTAL_Negra_LX_GE_3.webp",
        "images/cocinas/Cocina_Escorial_PALACE_CRISTAL_Negra_LX_GE_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 50 52\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Envasado\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072493",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2072493",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5538F Inox c/ enc.',
    imagen: "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_1.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_2.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_3.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_4.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_5.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_6.webp",
        "images/cocinas/Cocina_Florencia_5538F_Inox_c_enc_7.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072633",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072633",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Zafira 600',
    imagen: "images/cocinas/cocina_morelli_industrial_zafira_600_1.webp",
    imagenes: [
        "images/cocinas/cocina_morelli_industrial_zafira_600_1.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_2.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_3.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_4.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_5.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_6.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_7.webp",
        "images/cocinas/cocina_morelli_industrial_zafira_600_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 60 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072699",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072699",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Zafira 550',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072700",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072700",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli 550 Saho 18045 acero inox',
    imagen: "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_1.webp",
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_2.webp",
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072962",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072962",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 8638 E Eléctrica c/anafe 3 focos Inox',
    imagen: "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_1.webp",
        "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_2.webp",
        "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_3.webp",
        "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_4.webp",
        "images/cocinas/Cocina_Florencia_8638_E_Electrica_c_anafe_3_focos_Inox_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo de gas:</strong> Eléctrica\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074225",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2074225",
        "Garantía: 1 año"
    ]
},
{
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Carli/Plancha Doble Horno R/A P/C 4449',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Carli_Plancha_Doble_Horno_R_A_P_C_4449_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Carli_Plancha_Doble_Horno_R_A_P_C_4449_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 85 62\n<strong>Válvula de seguridad:</strong> No\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074513",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2074513",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Kanji eléctrica negra 4 anafes 50x50x89 1300/1500w',
    imagen: "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_1.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_2.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_3.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_4.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_5.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_6.webp",
        "images/cocinas/Cocina_Kanji_electrica_negra_4_anafes_50x50x89_1300_1500w_7.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 50 85 50\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo de gas:</strong> Eléctrica\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075129",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075129",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5416F/5516F',
    imagen: "images/cocinas/Cocina_Florencia_5416F_5516F_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5416F_5516F_1.webp",
        "images/cocinas/Cocina_Florencia_5416F_5516F_2.webp",
        "images/cocinas/Cocina_Florencia_5416F_5516F_3.webp",
        "images/cocinas/Cocina_Florencia_5416F_5516F_4.webp",
        "images/cocinas/Cocina_Florencia_5416F_5516F_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "21554",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 21554",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial 550 Ex Acero 16374 Multigrill',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_3.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075406",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2075406",
        "Garantía: 1 año"
    ]
},





    /////---------- Anafes ----------/////

{
    categoria: "Cocinas y anafes",
    subcategoria: "Anafes",
    nombre: 'Anafe Florencia 6747N a gas Negro rejilla fundicion',
    imagen: "images/anafes/Anafe_Florencia_6747N_a_gas_Negro_rejilla_fundicion_1.webp",
    imagenes: [
        "images/anafes/Anafe_Florencia_6747N_a_gas_Negro_rejilla_fundicion_1.webp",
        "images/anafes/Anafe_Florencia_6747N_a_gas_Negro_rejilla_fundicion_2.webp",
        "images/anafes/Anafe_Florencia_6747N_a_gas_Negro_rejilla_fundicion_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Gas\n<strong>Dimensiones (Anc x Pro):</strong> 60 x 55\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073336",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2073336",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Anafes",
    nombre: 'Anafe Florencia 6889F Elec. a Induccion Magnetica 4 focos',
    imagen: "images/anafes/Anafe_Florencia_6889F_Elec_a_Induccion_Magnetica_4_focos_1.webp",
    imagenes: [
        "images/anafes/Anafe_Florencia_6889F_Elec_a_Induccion_Magnetica_4_focos_1.webp"
    ],
    descripcion: '<strong>Dimensiones (Anc x Pro):</strong> 60 x 55\n<strong>Material de superficie:</strong> Vitrocerámico - Inducción\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo:</strong> Eléctrico\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074521",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2074521",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas y anafes",
    subcategoria: "Anafes",
    nombre: 'Anafe Westinghouse  WH-HP2200SSD/STD Electrico 2 hornallas',
    imagen: "images/anafes/Anafe_Westinghouse _WH-HP2200SSD_STD_Electrico_2_hornallas_1.webp",
    imagenes: [
        "images/anafes/Anafe_Westinghouse _WH-HP2200SSD_STD_Electrico_2_hornallas_1.webp",
        "images/anafes/Anafe_Westinghouse _WH-HP2200SSD_STD_Electrico_2_hornallas_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Material de superficie:</strong> Chapa pintada al polvo\n<strong>Cantidad de hornallas:</strong> 2\n<strong>Dimensiones (Anc x Pro):</strong> 48 x 27,5\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073571",
    caracteristicas: [
        "Marca: Westinghouse",
        "Modelo: 2073571",
        "Garantía: 1 año"
    ]
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

    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Aoc 32" 32S5135/77G Smart tv Roku',
    imagen: "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_1.webp",
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_2.webp",
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_3.webp",
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_4.webp",
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_5.webp",
        "images/televisores/TV_LED_Aoc_32_32S5135_77G_Smart_tv_Roku_6.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 32"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Roku TV',
    codigo: "2075434",
    caracteristicas: [
        "Marca: AOC",
        "Modelo: 2075434",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Aoc 43" 43S5135/77G Smart tv Roku',
    imagen: "images/televisores/TV_LED_Aoc_43_43S5135_77G_Smart_tv_Roku_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Aoc_43_43S5135_77G_Smart_tv_Roku_1.webp",
        "images/televisores/TV_LED_Aoc_43_43S5135_77G_Smart_tv_Roku_2.webp",
        "images/televisores/TV_LED_Aoc_43_43S5135_77G_Smart_tv_Roku_3.webp",
        "images/televisores/TV_LED_Aoc_43_43S5135_77G_Smart_tv_Roku_4.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 43"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Roku TV',
    codigo: "2075435",
    caracteristicas: [
        "Marca: AOC",
        "Modelo: 2075435",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Noblex 43" DR/DV43X7180 Smart Android',
    imagen: "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_1.webp",
        "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_2.webp",
        "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_3.webp",
        "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_4.webp",
        "images/televisores/TV_LED_Noblex_43_DR_DV43X7180_Smart_Android_5.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 43\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Android TV',
    codigo: "2075335",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2075335",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Philips 43" Smart HD 43PFD6910/77 con Titan OS',
    imagen: "images/televisores/TV_LED_Philips_43_Smart_HD_43PFD6910_77_con_Titan_OS_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Philips_43_Smart_HD_43PFD6910_77_con_Titan_OS_1.webp",
        "images/televisores/TV_LED_Philips_43_Smart_HD_43PFD6910_77_con_Titan_OS_2.webp",
        "images/televisores/TV_LED_Philips_43_Smart_HD_43PFD6910_77_con_Titan_OS_3.webp",
        "images/televisores/TV_LED_Philips_43_Smart_HD_43PFD6910_77_con_Titan_OS_4.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 43\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Titan OS',
    codigo: "2075321",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075321",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Philips 50" Smart 50PUD7309/77 4K con Titan OS',
    imagen: "images/televisores/TV_LED_Philips_50_Smart_50PUD7309_77_4K_con_Titan_OS_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Philips_50_Smart_50PUD7309_77_4K_con_Titan_OS_1.webp",
        "images/televisores/TV_LED_Philips_50_Smart_50PUD7309_77_4K_con_Titan_OS_2.webp",
        "images/televisores/TV_LED_Philips_50_Smart_50PUD7309_77_4K_con_Titan_OS_3.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 50\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Titan OS',
    codigo: "2075436",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075436",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Philips 55" Smart 55PUD7309/77 4K con Titan OS',
    imagen: "images/televisores/TV_LED_Philips_55_Smart_55PUD7309_77_4K_con_Titan_OS_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Philips_55_Smart_55PUD7309_77_4K_con_Titan_OS_1.webp",
        "images/televisores/TV_LED_Philips_55_Smart_55PUD7309_77_4K_con_Titan_OS_2.webp",
        "images/televisores/TV_LED_Philips_55_Smart_55PUD7309_77_4K_con_Titan_OS_3.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 55\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Titan OS',
    codigo: "2075437",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075437",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED RCA 55" G55P6UHD-F Google 4K Smart',
    imagen: "images/televisores/TV_LED_RCA_55_G55P6UHD_F_Google_4K_Smart_1.webp",
    imagenes: [
        "images/televisores/TV_LED_RCA_55_G55P6UHD_F_Google_4K_Smart_1.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 55\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
    codigo: "2075207",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2075207",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED RCA 55" QL55TH200-F QLED Google 4K Smart',
    imagen: "images/televisores/TV_LED_RCA_55_QL55TH200_F_QLED_Google_4K_Smart_1.webp",
    imagenes: [
        "images/televisores/TV_LED_RCA_55_QL55TH200_F_QLED_Google_4K_Smart_1.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 55"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
    codigo: "2075388",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2075388",
        "Garantía: 1 año"
    ]
},
{
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED RCA 65" C65AND-F Smart HD Android',
    imagen: "images/televisores/TV_LED_RCA_65_C65AND_F_Smart_HD_Android_1.webp",
    imagenes: [
        "images/televisores/TV_LED_RCA_65_C65AND_F_Smart_HD_Android_1.webp",
        "images/televisores/TV_LED_RCA_65_C65AND_F_Smart_HD_Android_2.webp",
        "images/televisores/TV_LED_RCA_65_C65AND_F_Smart_HD_Android_3.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 65\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
    codigo: "2075463",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2075463",
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
    codigo: "2072768",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072768",
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
        codigo: "2074136",
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

    {
    categoria: "Heladeras",
    subcategoria: "Cíclica",
    nombre: 'Heladera Telefunken TFK-HF50B Frigobar 50 lts Blanca/Negro',
    imagen: "images/heladeras/Heladera_Telefunken_TFK_HF50B_Frigobar_50_lts_Blanca_Negro_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Telefunken_TFK_HF50B_Frigobar_50_lts_Blanca_Negro_1.webp",
        "images/heladeras/Heladera_Telefunken_TFK_HF50B_Frigobar_50_lts_Blanca_Negro_2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 51 x 45,8 x 45\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 50\n<strong>Freezer:</strong> No\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075201",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075201",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Neba H-240YAC Top Mount 239lts Acero',
    imagen: "images/heladeras/Heladera_Neba_H_240YAC_Top_Mount_239lts_Acero_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Neba_H_240YAC_Top_Mount_239lts_Acero_1.webp",
        "images/heladeras/Heladera_Neba_H_240YAC_Top_Mount_239lts_Acero_2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 142 x 56 x 54\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 239\n<strong>Freezer:</strong> Sí\n<strong>Dispenser de agua:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074981",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 2074981",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Drean HDR280F00B/HDR280F30PB/50B/50PB blanca 277lts ciclica',
    imagen: "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_1.webp",
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_2.webp",
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_3.webp",
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_4.webp",
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_5.webp",
        "images/heladeras/Heladera_Drean_HDR280F00B_HDR280F30PB_50B_50PB_blanca_277lts_ciclica_6.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 161 x 55 x 69\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 277\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074112",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2074112",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Gafa HGNF251B No Frost 262L Inverter Blanca',
    imagen: "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_1.webp",
        "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_2.webp",
        "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_3.webp",
        "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_4.webp",
        "images/heladeras/Heladera_Gafa_HGNF251B_No_Frost_262L_Inverter_Blanca_5.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 167 x 54,5 x 56\n<strong>Tipo de tecnología:</strong> No frost\n<strong>Capacidad (Litros):</strong> 262\n<strong>Freezer:</strong> Sí\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2075383",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2075383",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Philco PHNT324BDI Top Mount 324Lts No Frost Inverter Blanca',
    imagen: "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_1.webp",
        "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_2.webp",
        "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_3.webp",
        "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_4.webp",
        "images/heladeras/Heladera_Philco_PHNT324BDI_Top_Mount_324Lts_No_Frost_Inverter_Blanca_5.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 169 x 64 x 59,5\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 324\n<strong>Freezer:</strong> Sí\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075425",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075425",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Gafa HGF368AFB 334Lts Extra freezer 76lts Blanca',
    imagen: "images/heladeras/Heladera_Gafa_HGF368AFB_334Lts_Extra_freezer_76lts_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Gafa_HGF368AFB_334Lts_Extra_freezer_76lts_Blanca_1.webp",
        "images/heladeras/Heladera_Gafa_HGF368AFB_334Lts_Extra_freezer_76lts_Blanca_2.webp",
        "images/heladeras/Heladera_Gafa_HGF368AFB_334Lts_Extra_freezer_76lts_Blanca_3.webp",
        "images/heladeras/Heladera_Gafa_HGF368AFB_334Lts_Extra_freezer_76lts_Blanca_4.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 161 x 61,4 x 62,1\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 334\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074053",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2074053",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Electrolux HENI3000P NO FROST Plata 260 lts Inverter',
    imagen: "images/heladeras/Heladera_Electrolux_HENI3000P_NO_FROST_Plata_260_lts_Inverter_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Electrolux_HENI3000P_NO_FROST_Plata_260_lts_Inverter_1.webp",
        "images/heladeras/Heladera_Electrolux_HENI3000P_NO_FROST_Plata_260_lts_Inverter_2.webp",
        "images/heladeras/Heladera_Electrolux_HENI3000P_NO_FROST_Plata_260_lts_Inverter_3.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 152 x 61,3 x 68,3\n<strong>Tipo de tecnología:</strong> No frost\n<strong>Capacidad (Litros):</strong> 260\n<strong>Freezer:</strong> Sí\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2074450",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2074450",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Telefunken EX-395 Exhibidora vertical',
    imagen: "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_1.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_2.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_3.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_4.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_5.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_6.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_7.webp",
        "images/heladeras/Heladera_Telefunken_EX_395_Exhibidora_vertical_8.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 196 x 63 x 64,5\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 395\n<strong>Freezer:</strong> No\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075130",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075130",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Electrolux HENI3900P No Frost Plata 353 lts Inverter',
    imagen: "images/heladeras/Heladera_Electrolux_HENI3900P_No_Frost_Plata_353_lts_Inverter_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Electrolux_HENI3900P_No_Frost_Plata_353_lts_Inverter_1.webp",
        "images/heladeras/Heladera_Electrolux_HENI3900P_No_Frost_Plata_353_lts_Inverter_2.webp",
        "images/heladeras/Heladera_Electrolux_HENI3900P_No_Frost_Plata_353_lts_Inverter_3.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 184 x 61,3 x 68,3\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 353\n<strong>Freezer:</strong> Sí\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2074501",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2074501",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras",
    nombre: 'Heladera Whirlpool WRE44BK 397 lts Evox',
    imagen: "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_1.webp",
        "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_2.webp",
        "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_3.webp",
        "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_4.webp",
        "images/heladeras/Heladera_Whirlpool_WRE44BK_397_lts_Evox_5.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 184 x 62,1 x 71,3\n<strong>Tipo de tecnología:</strong> No frost\n<strong>Capacidad (Litros):</strong> 397\n<strong>Freezer:</strong> Sí\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2075290",
    caracteristicas: [
        "Marca: Whirlpool",
        "Modelo: 2075290",
        "Garantía: 1 año"
    ]
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

    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Telefunken TFK-WMCFSL 6kg Inverter Silver carga frontal',
    imagen: "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_1.webp",
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_2.webp",
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_3.webp",
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_4.webp",
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_5.webp",
        "images/lavarropas/Lavarropas_Telefunken_TFK_WMCFSL_6kg_Inverter_Silver_carga_frontal_6.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 931\n<strong>Inverter:</strong> Sí',
    codigo: "2075386",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075386",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Gafa Digi Fit Blanco 6.5 kg 760rpm c/s',
    imagen: "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_1.webp",
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_2.webp",
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_3.webp",
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_4.webp",
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_5.webp",
        "images/lavarropas/Lavarropas_Gafa_Digi_Fit_Blanco_6_5_kg_760rpm_c_s_6.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 760',
    codigo: "2073611",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2073611",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Kanji KJH-WMCFSL 8kg Inverter carga frontal Silver',
    imagen: "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_1.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_2.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_3.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_4.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_5.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_6.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_7.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_8.webp",
        "images/lavarropas/Lavarropas_Kanji_KJH_WMCFSL_8kg_Inverter_carga_frontal_Silver_9.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2075439",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075439",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Gafa Fuzzy Fit Blanco 7 kg 760 rpm',
    imagen: "images/lavarropas/Lavarropas_Gafa_Fuzzy_Fit_Blanco_7_kg_760_rpm_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Gafa_Fuzzy_Fit_Blanco_7_kg_760_rpm_1.webp",
        "images/lavarropas/Lavarropas_Gafa_Fuzzy_Fit_Blanco_7_kg_760_rpm_2.webp",
        "images/lavarropas/Lavarropas_Gafa_Fuzzy_Fit_Blanco_7_kg_760_rpm_3.webp",
        "images/lavarropas/Lavarropas_Gafa_Fuzzy_Fit_Blanco_7_kg_760_rpm_4.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 760',
    codigo: "2073587",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2073587",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean Concept Neo Fuzzy 658 Blanco 6.5kg',
    imagen: "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_1.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_2.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_3.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_4.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_5.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_6.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_7.webp",
        "images/lavarropas/Lavarropas_Drean_Concept_Neo_Fuzzy_658_Blanco_6_5kg_8.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 658',
    codigo: "2074736",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2074736",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Midea MF100W60/T-A1 c/frontal 6kg 1000rpm Gris',
    imagen: "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_1.webp",
        "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_2.webp",
        "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_3.webp",
        "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_4.webp",
        "images/lavarropas/Lavarropas_Midea_MF100W60_T_A1_c_frontal_6kg_1000rpm_Gris_5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000',
    codigo: "2075375",
    caracteristicas: [
        "Marca: Midea",
        "Modelo: 2075375",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Bgh Inverter 6Kg 1000RPM Blanco c/frontal BWFI06W24AR',
    imagen: "images/lavarropas/Lavarropas_Bgh_Inverter_6Kg_1000RPM_Blanco_c_frontal_BWFI06W24AR_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Bgh_Inverter_6Kg_1000RPM_Blanco_c_frontal_BWFI06W24AR_1.webp",
        "images/lavarropas/Lavarropas_Bgh_Inverter_6Kg_1000RPM_Blanco_c_frontal_BWFI06W24AR_2.webp",
        "images/lavarropas/Lavarropas_Bgh_Inverter_6Kg_1000RPM_Blanco_c_frontal_BWFI06W24AR_3.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2075353",
    caracteristicas: [
        "Marca: BGH",
        "Modelo: 2075353",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean LFDR0609LB0 c/frontal 6kg 900rpm Blanco',
    imagen: "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_1.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_2.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_3.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_4.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_5.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0609LB0_c_frontal_6kg_900rpm_Blanco_6.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 900',
    codigo: "2075371",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075371",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW65A4000EE 6.5kg 1000 rpm Blanco',
    imagen: "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_1.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_2.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_3.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_4.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_5.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_6.webp",
        "images/lavarropas/Lavarropas_Samsung_WW65A4000EE_6_5kg_1000_rpm_Blanco_7.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2074290",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074290",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Whirlpool WW09HBB 9Kg. Carga Sup. 740rpm',
    imagen: "images/lavarropas/Lavarropas_Whirlpool_WW09HBB_9Kg_Carga_Sup_740rpm_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Whirlpool_WW09HBB_9Kg_Carga_Sup_740rpm_1.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WW09HBB_9Kg_Carga_Sup_740rpm_2.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WW09HBB_9Kg_Carga_Sup_740rpm_3.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WW09HBB_9Kg_Carga_Sup_740rpm_4.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 9\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 740',
    codigo: "2074977",
    caracteristicas: [
        "Marca: Whirlpool",
        "Modelo: 2074977",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Whirlpool WNQ80AB 1200 RPM 8 KG Blanco inverter c/frontal',
    imagen: "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_1.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_2.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_3.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_4.webp",
        "images/lavarropas/Lavarropas_Whirlpool_WNQ80AB_1200_RPM_8_KG_Blanco_inverter_c_frontal_5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1200\n<strong>Inverter:</strong> Sí',
    codigo: "2074339",
    caracteristicas: [
        "Marca: Whirlpool",
        "Modelo: 2074339",
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

        {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Noblex N52 6.5" 2/64GB Negro',
    imagen: "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_1.webp",
        "images/celulares/LIBERADO_Noblex_N52_6_5_2_64GB_Negro_2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6,5"\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5000\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 13 GO',
    codigo: "2074907",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2074907",
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
        "images/celulares/LIBERADO_Motorola_Moto_E14_2_64GB_2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6,5"\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 14 GO',
    codigo: "2075006",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075006",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Zte Blade A55 4/128GB 6.75" 4G (Z2450-FAL)',
    imagen: "images/celulares/LIBERADO_Zte_Blade_A55_4_128GB_6_75_4G_Z2450_FAL_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Zte_Blade_A55_4_128GB_6_75_4G_Z2450_FAL_1.webp",
        "images/celulares/LIBERADO_Zte_Blade_A55_4_128GB_6_75_4G_Z2450_FAL_2.webp",
        "images/celulares/LIBERADO_Zte_Blade_A55_4_128GB_6_75_4G_Z2450_FAL_3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6,75"\n<strong>Cámara trasera:</strong> 13 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5.2 Ah\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 14 + MyOS 14',
    codigo: "2075455",
    caracteristicas: [
        "Marca: ZTE",
        "Modelo: 2075455",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Zte Blade A75 4/256GB 6.6" 5G (Z2357N-FAL)',
    imagen: "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_1.webp",
        "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_2.webp",
        "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_3.webp",
        "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_4.webp",
        "images/celulares/LIBERADO_Zte_Blade_A75_4_256GB_6_6_5G_Z2357N_FAL_5.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 256\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6,6"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 12 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5.2 Ah\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075454",
    caracteristicas: [
        "Marca: ZTE",
        "Modelo: 2075454",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Tecno Spark 30C KL5 4/256 gb Orbit Black (PNT011019)',
    imagen: "images/celulares/LIBERADO_Tecno_Spark_30C_KL5_4_256_gb_Orbit_Black_PNT011019_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Tecno_Spark_30C_KL5_4_256_gb_Orbit_Black_PNT011019_1.webp",
        "images/celulares/LIBERADO_Tecno_Spark_30C_KL5_4_256_gb_Orbit_Black_PNT011019_2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 256\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6,6"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 14',
    codigo: "2075451",
    caracteristicas: [
        "Marca: Tecno",
        "Modelo: 2075451",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Tecno Spark 30 Pro KL7 8/128 gb Artic Glow (PNT011034)',
    imagen: "images/celulares/LIBERADO_Tecno_Spark_30_Pro_KL7_8_128_gb_Artic_Glow_PNT011034_1.webp",
    imagenes: [
        "images/celulares/LIBERADO_Tecno_Spark_30_Pro_KL7_8_128_gb_Artic_Glow_PNT011034_1.webp",
        "images/celulares/LIBERADO_Tecno_Spark_30_Pro_KL7_8_128_gb_Artic_Glow_PNT011034_2.webp",
        "images/celulares/LIBERADO_Tecno_Spark_30_Pro_KL7_8_128_gb_Artic_Glow_PNT011034_3.webp",
        "images/celulares/LIBERADO_Tecno_Spark_30_Pro_KL7_8_128_gb_Artic_Glow_PNT011034_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 8\n<strong>Pulgadas:</strong> 6,78"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 13 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5.2 Ah\n<strong>Red móvil:</strong> No\n<strong>Sistema operativo:</strong> Android 14',
    codigo: "2075452",
    caracteristicas: [
        "Marca: Tecno",
        "Modelo: 2075452",
        "Garantía: 1 año"
    ]
},






    /////---------- Tablets ----------/////



    {
    categoria: "Tecnología",
    subcategoria: "Tablets",
    nombre: 'Tablet Philco TP7A464 7" 4/64GB',
    imagen: "images/tablets/Tablet_Philco_TP7A464_7_4_64GB_1.webp",
    imagenes: [
        "images/tablets/Tablet_Philco_TP7A464_7_4_64GB_1.webp",
        "images/tablets/Tablet_Philco_TP7A464_7_4_64GB_2.webp",
        "images/tablets/Tablet_Philco_TP7A464_7_4_64GB_3.webp",
        "images/tablets/Tablet_Philco_TP7A464_7_4_64GB_4.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 7\n<strong>Cámara trasera:</strong> 2 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075427",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075427",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Tablets",
    nombre: 'Tablet Enova 10" Wifi 2/32gb 2+5mp android 13',
    imagen: "images/tablets/Tablet_Enova_10_Wifi_2_32gb_5mp_android_13_1.webp",
    imagenes: [
        "images/tablets/Tablet_Enova_10_Wifi_2_32gb_5mp_android_13_1.webp",
        "images/tablets/Tablet_Enova_10_Wifi_2_32gb_5mp_android_13_2.webp",
        "images/tablets/Tablet_Enova_10_Wifi_2_32gb_5mp_android_13_3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 32\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 10\n<strong>Cámara trasera:</strong> 5 Mpx\n<strong>Cámara frontal:</strong> 2 Mpx\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075428",
    caracteristicas: [
        "Marca: Enova",
        "Modelo: 2075428",
        "Garantía: 1 año"
    ]
},




    
    
    /////---------- Impresoras ----------/////




{
    categoria: "Tecnología",
    subcategoria: "Impresoras",
    nombre: 'Impresora Epson L3210 Multifuncion',
    imagen: "images/impresoras/Impresora_Epson_L3210_Multifuncion_1.webp",
    imagenes: [
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_1.webp",
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_2.webp",
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_3.webp",
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_4.webp",
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_5.webp",
        "images/impresoras/Impresora_Epson_L3210_Multifuncion_6.webp"
    ],
    descripcion: '<strong>Tipo de tinta:</strong> Tanque\n<strong>Scanner:</strong> Sí\n<strong>Fotocopias:</strong> Sí\n<strong>Capacidad máxima de hojas:</strong> 100\n<strong>Tipo de impresión:</strong> Color',
    codigo: "2073547",
    caracteristicas: [
        "Marca: Epson",
        "Modelo: 2073547",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Impresoras",
    nombre: 'Impresora Epson L3250 Multifuncion Wifi',
    imagen: "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_1.webp",
    imagenes: [
        "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_1.webp",
        "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_2.webp",
        "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_3.webp",
        "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_4.webp",
        "images/impresoras/Impresora_Epson_L3250_Multifuncion_Wifi_5.webp"
    ],
    descripcion: '<strong>Tipo de tinta:</strong> Tanque\n<strong>WIFI:</strong> Sí\n<strong>Scanner:</strong> Sí\n<strong>Fotocopias:</strong> Sí\n<strong>Capacidad máxima de hojas:</strong> 100\n<strong>Tipo de impresión:</strong> Color',
    codigo: "2073548",
    caracteristicas: [
        "Marca: Epson",
        "Modelo: 2073548",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Impresoras",
    nombre: 'Impresora Epson M1120 Mono Ecotank wifi inalambrica',
    imagen: "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_1.webp",
    imagenes: [
        "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_1.webp",
        "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_2.webp",
        "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_3.webp",
        "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_4.webp",
        "images/impresoras/Impresora_Epson_M1120_Mono_Ecotank_wifi_inalambrica_5.webp"
    ],
    descripcion: '<strong>Tipo de tinta:</strong> Tanque\n<strong>WIFI:</strong> Sí\n<strong>Capacidad máxima de hojas:</strong> 100\n<strong>Tipo de impresión:</strong> Negro',
    codigo: "21287",
    caracteristicas: [
        "Marca: Epson",
        "Modelo: 21287",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Impresoras",
    nombre: 'Impresora Epson L 1250 Ecotank wifi inalambrica',
    imagen: "images/impresoras/Impresora_Epson_L_1250_Ecotank_wifi_inalambrica_1.webp",
    imagenes: [
        "images/impresoras/Impresora_Epson_L_1250_Ecotank_wifi_inalambrica_1.webp",
        "images/impresoras/Impresora_Epson_L_1250_Ecotank_wifi_inalambrica_2.webp",
        "images/impresoras/Impresora_Epson_L_1250_Ecotank_wifi_inalambrica_3.webp",
        "images/impresoras/Impresora_Epson_L_1250_Ecotank_wifi_inalambrica_4.webp"
    ],
    descripcion: '<strong>Tipo de tinta:</strong> Tanque\n<strong>WIFI:</strong> Sí\n<strong>Capacidad máxima de hojas:</strong> 100\n<strong>Tipo de impresión:</strong> Color',
    codigo: "2074859",
    caracteristicas: [
        "Marca: Epson",
        "Modelo: 2074859",
        "Garantía: 1 año"
    ]
},

    






    /////---------- Notebooks ----------/////







{
    categoria: "Tecnología",
    subcategoria: "Notebooks",
    nombre: 'Notebook Enova 15.6" Ryzen 5 8/240GB SSD W11',
    imagen: "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_1.webp",
    imagenes: [
        "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_1.webp",
        "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_2.webp",
        "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_3.webp",
        "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_4.webp",
        "images/notebooks/Notebook_Enova_15_6_Ryzen_5_8_240GB_SSD_W11_5.webp"
    ],
    descripcion: '<strong>Procesador:</strong> Ryzen 5\n<strong>RAM (GB):</strong> 8\n<strong>Almacenamiento (GB):</strong> 240 SSD\n<strong>Tamaño de pantalla (pulgadas):</strong> 15,6"\n<strong>Sistema operativo:</strong> Windows 11',
    codigo: "2075429",
    caracteristicas: [
        "Marca: Enova",
        "Modelo: 2075429",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Notebooks",
    nombre: 'Notebook Enova Core i5 8/240 SSD 14" W11 Gen',
    imagen: "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_1.webp",
    imagenes: [
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_1.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_2.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_3.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_4.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_5.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_6.webp",
        "images/notebooks/Notebook_Enova_Core_i5_8_240_SSD_14W11_Gen_7.webp"
    ],
    descripcion: '<strong>Procesador:</strong> Intel Core I5\n<strong>RAM (GB):</strong> 8\n<strong>Almacenamiento (GB):</strong> 240 SSD\n<strong>Tamaño de pantalla (pulgadas):</strong> 14"\n<strong>Sistema operativo:</strong> Windows 11',
    codigo: "2074476",
    caracteristicas: [
        "Marca: Enova",
        "Modelo: 2074476",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Notebooks",
    nombre: 'Notebook EXO Core i5 8/480 SSD 15.6" Smartpro Q15-5385 W11 13va',
    imagen: "images/notebooks/Notebook_EXO_Core_i5_8_480_SSD_15_6_Smartpro_Q15_5385_W11_13va_1.webp",
    imagenes: [
        "images/notebooks/Notebook_EXO_Core_i5_8_480_SSD_15_6_Smartpro_Q15_5385_W11_13va_1.webp",
        "images/notebooks/Notebook_EXO_Core_i5_8_480_SSD_15_6_Smartpro_Q15_5385_W11_13va_2.webp",
        "images/notebooks/Notebook_EXO_Core_i5_8_480_SSD_15_6_Smartpro_Q15_5385_W11_13va_3.webp"
    ],
    descripcion: '<strong>Procesador:</strong> Intel Core I5\n<strong>RAM (GB):</strong> 8\n<strong>Almacenamiento (GB):</strong> 480 SSD\n<strong>Tamaño de pantalla (pulgadas):</strong> 15,6"\n<strong>Sistema operativo:</strong> Windows 11',
    codigo: "2075228",
    caracteristicas: [
        "Marca: Exo",
        "Modelo: 2075228",
        "Garantía: 1 año"
    ]
},







    /////---------- Pequeños ----------/////
/////---------- Multiprocesadoras ----------/////

    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'Multiprocesadora Whitenblack WBAMWB01 650W 3v+puls. cuchilla acero',
    imagen: "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB01_650W_3v_puls_cuchilla_acero_1.webp",
    imagenes: [
        "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB01_650W_3v_puls_cuchilla_acero_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 650\n<strong>Capacidad (Litros):</strong> 1\n<strong>Funciones:</strong> Picar, Amasar, Rallar, Rebanar, Emulsionar.',
    codigo: "2075265",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075265",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'Multiprocesadora Whitenblack WBAMWB02 650W + licuadora jarra 1.8lts 3v+puls. cuchilla acero',
    imagen: "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB02_650W_licuadora_jarra_1_8lts_3v_puls_cuchilla_acero_1.webp",
    imagenes: [
        "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB02_650W_licuadora_jarra_1_8lts_3v_puls_cuchilla_acero_1.webp",
        "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB02_650W_licuadora_jarra_1_8lts_3v_puls_cuchilla_acero_2.webp",
        "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB02_650W_licuadora_jarra_1_8lts_3v_puls_cuchilla_acero_3.webp",
        "images/multiprocesadoras/Multiprocesadora_Whitenblack_WBAMWB02_650W_licuadora_jarra_1_8lts_3v_puls_cuchilla_acero_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 650\n<strong>Capacidad (Litros):</strong> 1L (vaso procesador), 1,8L (vaso licuador)\n<strong>Funciones:</strong> Picar, Amasar, Rallar, Rebanar, Emulsionar, Licuar.',
    codigo: "2075266",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075266",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'MultiProcesadora Atma LP8426NAP 9 en 1 650w 2vel + pulsador',
    imagen: "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_1.webp",
    imagenes: [
        "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_1.webp",
        "images/multiprocesadoras/|MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_2.webp",
        "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_3.webp",
        "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 650\n<strong>Capacidad (Litros):</strong> 1,2L (vaso procesador), 1,8L (vaso licuador)\n<strong>Funciones:</strong> Picar, Emulsionar, Rallar, Amasar, Rebanar, Exprimir, Licuar, Moler.',
    codigo: "2075257",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075257",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'MultiProcesadora Electrolux FPA25 750wts 2v c/jarra licuadora 2lts',
    imagen: "images/multiprocesadoras/MultiProcesadora_Electrolux_FPA25_750wts_2v_c_jarra_licuadora_2lts_1.webp",
    imagenes: [
        "images/multiprocesadoras/MultiProcesadora_Electrolux_FPA25_750wts_2v_c_jarra_licuadora_2lts_1.webp",
        "images/multiprocesadoras/MultiProcesadora_Electrolux_FPA25_750wts_2v_c_jarra_licuadora_2lts_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 750\n<strong>Capacidad (Litros):</strong> 1,2L (vaso procesador), 2L (vaso licuador)\n<strong>Funciones:</strong> Cortar, Rallar, Rebanar, Desmenuzar, Emulsionar y Mezclar.',
    codigo: "2074540",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2074540",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'Procesadora Liliana AM 780 Fullprossesor 750W',
    imagen: "images/multiprocesadoras/Procesadora_Liliana_AM_780_Fullprossesor_750W_1.webp",
    imagenes: [
        "images/multiprocesadoras/Procesadora_Liliana_AM_780_Fullprossesor_750W_1.webp",
        "images/multiprocesadoras/Procesadora_Liliana_AM_780_Fullprossesor_750W_2.webp",
        "images/multiprocesadoras/Procesadora_Liliana_AM_780_Fullprossesor_750W_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 750\n<strong>Capacidad (Litros):</strong> 1.2L (vaso procesador),  2L (vaso licuador)\n<strong>Funciones:</strong> Amasa, Bate, Emulsiona, Exprime, Licúa, Pica, Ralla, Rebana.',
    codigo: "2071835",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071835",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'Procesadora Liliana AM730 Experty 700w c/jarra lic. 2lts',
    imagen: "images/multiprocesadoras/Procesadora_Liliana_AM730_Experty_700w_c_jarra_lic_2lts_1.webp",
    imagenes: [
        "images/multiprocesadoras/Procesadora_Liliana_AM730_Experty_700w_c_jarra_lic_2lts_1.webp",
        "images/multiprocesadoras/Procesadora_Liliana_AM730_Experty_700w_c_jarra_lic_2lts_2.webp",
        "images/multiprocesadoras/Procesadora_Liliana_AM730_Experty_700w_c_jarra_lic_2lts_3.webp",
        "images/multiprocesadoras/Procesadora_Liliana_AM730_Experty_700w_c_jarra_lic_2lts_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 700\n<strong>Capacidad (Litros):</strong> 1L (vaso procesador), 2L (vaso licuador)\n<strong>Funciones:</strong> Amasar, Batir, Licuar, Picar, Rallar, Rebanar.',
    codigo: "2074042",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2074042",
        "Garantía: 1 año"
    ]
},
    





         /////---------- pavas electricas ----------/////

    {
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    codigo: "2075236",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075236",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Pequeños",
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
    categoria: "Pequeños",
    subcategoria: "pavas electricas",
    nombre: 'Pava Kanji KJH-PE15005S Hervidora alum/plast',
    imagen: "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_1.webp",
        "images/pavas_electricas/Pava_Kanji_KJH_PE15005S_Hervidora_alum_plast_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 2\n<strong>Potencia (W):</strong> 1500',
    codigo: "2074904",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2074904",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Pequeños",
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
    codigo: "2073516",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2073516",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
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
    categoria: "Pequeños",
    subcategoria: "tostadoras",
    nombre: 'Tostador Kanji TM1400 para 4 panes',
    imagen: "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_2.webp",
    imagenes: [
        "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_2.webp",
        "images/tostadoras/Tostador_Kanji_TM1400_para_4_panes_1.webp",
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



    /////---------- batidoras ----------/////


 {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Yelmo BM-1608',
    imagen: "images/batidoras/Batidora_Yelmo_BM_160_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Yelmo_BM_160_1.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_8.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_2.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_3.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_4.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_5.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_6.webp",
        "images/batidoras/Batidora_Yelmo_BM_160_7.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 300\n<strong>Velocidades:</strong> 7\n<strong>Accesorios incluidos:</strong> Amasador',
    codigo: "2073210",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2073210",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Steel Home Planetaria BP/BR1200 6v. 1200w. 5 lts Blanca/Negra',
    imagen: "images/batidoras/Batidora_Steel_Home_PlanetariaBP_BR1200_6v_1200w_5_lts_Blanca_Negra_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Steel_Home_PlanetariaBP_BR1200_6v_1200w_5_lts_Blanca_Negra_1.webp",
        "images/batidoras/Batidora_Steel_Home_PlanetariaBP_BR1200_6v_1200w_5_lts_Blanca_Negra_2.webp",
        "images/batidoras/Batidora_Steel_Home_PlanetariaBP_BR1200_6v_1200w_5_lts_Blanca_Negra_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200\n<strong>Velocidades:</strong> 6\n<strong>Capacidad (Litros):</strong> 5\n<strong>Accesorios incluidos:</strong> Bowl, Amasador, Mezclador',
    codigo: "2073537",
    caracteristicas: [
        "Marca: Steel Home",
        "Modelo: 2073537",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Moulinex QA710858 Planetaria Inspirart 500w 220v 5v',
    imagen: "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_1.webp",
        "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_2.webp",
        "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_3.webp",
        "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_4.webp",
        "images/batidoras/Batidora_Moulinex_QA710858_Planetaria_Inspirart_500w_220v_5v_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Velocidades:</strong> 5\n<strong>Capacidad (Litros):</strong> 3.2\n<strong>Accesorios incluidos:</strong> Bowl',
    codigo: "2073643",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2073643",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Kanji de mano KJH-BL0300HMB01R con bowl 300wts 2lts',
    imagen: "images/batidoras/Batidora_Kanji_de_mano_KJH_BL0300HMB01R_con_bowl_300wts_2lts_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Kanji_de_mano_KJH_BL0300HMB01R_con_bowl_300wts_2lts_1.webp",
        "images/batidoras/Batidora_Kanji_de_mano_KJH_BL0300HMB01R_con_bowl_300wts_2lts_2.webp",
        "images/batidoras/Batidora_Kanji_de_mano_KJH_BL0300HMB01R_con_bowl_300wts_2lts_3.webp",
        "images/batidoras/Batidora_Kanji_de_mano_KJH_BL0300HMB01R_con_bowl_300wts_2lts_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 300\n<strong>Velocidades:</strong> 7\n<strong>Capacidad (Litros):</strong> 2\n<strong>Accesorios incluidos:</strong> Bowl, Amasador',
    codigo: "2073788",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2073788",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Moulinex SX1505AR 220v de mano roja',
    imagen: "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_1.webp",
        "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_2.webp",
        "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_3.webp",
        "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_4.webp",
        "images/batidoras/Batidora_Moulinex_SX1505AR_220v_de_mano_roja_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 250\n<strong>Velocidades:</strong> 3',
    codigo: "2074367",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2074367",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Atma de mano BM8738AP 300W 5 vel. c/ turbo',
    imagen: "images/batidoras/Batidora_Atma_de_mano_BM8738AP_300W_5_vel_c_turbo_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Atma_de_mano_BM8738AP_300W_5_vel_c_turbo_1.webp",
        "images/batidoras/Batidora_Atma_de_mano_BM8738AP_300W_5_vel_c_turbo_2.webp",
        "images/batidoras/Batidora_Atma_de_mano_BM8738AP_300W_5_vel_c_turbo_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 300\n<strong>Velocidades:</strong> 5\n<strong>Accesorios incluidos:</strong> Amasador',
    codigo: "2074566",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2074566",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Westinghouse planetaria WH-BL0800HB02 Gris',
    imagen: "images/batidoras/Batidora_Westinghouse_planetaria_WH_BL0800HB02_Gris_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Westinghouse_planetaria_WH_BL0800HB02_Gris_1.webp",
        "images/batidoras/Batidora_Westinghouse_planetaria_WH_BL0800HB02_Gris_2.webp",
        "images/batidoras/Batidora_Westinghouse_planetaria_WH_BL0800HB02_Gris_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 800\n<strong>Velocidades:</strong> 3\n<strong>Capacidad (Litros):</strong> 4\n<strong>Accesorios incluidos:</strong> Bowl, Amasador, Mezclador',
    codigo: "2074902",
    caracteristicas: [
        "Marca: Westinghouse",
        "Modelo: 2074902",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "batidoras",
    nombre: 'Batidora Whitenblack WBABWB01 300w 5v. batidor/amasador',
    imagen: "images/batidoras/Batidora_Whitenblack_WBABWB01300w_5v_batidor_amasador_1.webp",
    imagenes: [
        "images/batidoras/Batidora_Whitenblack_WBABWB01300w_5v_batidor_amasador_1.webp",
        "images/batidoras/Batidora_Whitenblack_WBABWB01300w_5v_batidor_amasador_2.webp",
        "images/batidoras/Batidora_Whitenblack_WBABWB01300w_5v_batidor_amasador_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 450\n<strong>Velocidades:</strong> 5\n<strong>Accesorios incluidos:</strong> Amasador',
    codigo: "2075298",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075298",
        "Garantía: 1 año"
    ]
},






    /////---------- batidoras ----------/////





{
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Liliana AL900/AL100 Jarra 1.5Lts',
    imagen: "images/licuadoras/Licuadora_Liliana_AL900_AL100_Jarra_1_5Lts_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Liliana_AL900_AL100_Jarra_1_5Lts_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Capacidad (Litros):</strong> 1.5\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2071432",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071432",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Moulinex LM2701AR Optimix Blanca 2lts 550Wts 2 Vel. + pulsador',
    imagen: "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_1.webp",
        "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_2.webp",
        "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_3.webp",
        "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_4.webp",
        "images/licuadoras/Licuadora_Moulinex_LM2701AR_OptimixBlanca_2lts_550Wts_2_Vel_pulsador_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 550\n<strong>Capacidad (Litros):</strong> 2\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2071582",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2071582",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Yelmo LC 1009 1.5L',
    imagen: "images/licuadoras/Licuadora_Yelmo_LC_1009_1_5L_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Yelmo_LC_1009_1_5L_1.webp",
        "images/licuadoras/Licuadora_Yelmo_LC_1009_1_5L_2.webp",
        "images/licuadoras/Licuadora_Yelmo_LC_1009_1_5L_3.webp",
        "images/licuadoras/Licuadora_Yelmo_LC_1009_1_5L_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 650\n<strong>Capacidad (Litros):</strong> 1.5\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2073165",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2073165",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Electrolux BLL19 1.5Lts 600Wts',
    imagen: "images/licuadoras/Licuadora_ElectroluxBLL19_1_5Lts_600Wts_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_ElectroluxBLL19_1_5Lts_600Wts_1.webp",
        "images/licuadoras/Licuadora_ElectroluxBLL19_1_5Lts_600Wts_2.webp",
        "images/licuadoras/Licuadora_ElectroluxBLL19_1_5Lts_600Wts_3.webp",
        "images/licuadoras/Licuadora_ElectroluxBLL19_1_5Lts_600Wts_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Capacidad (Litros):</strong> 1.5\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2073775",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2073775",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Black & Decker BL1001-AR 500w 2lts',
    imagen: "images/licuadoras/Licuadora_Black_&_Decker_BL1001_AR_500w_2lts_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Black_&_Decker_BL1001_AR_500w_2lts_1.webp",
        "images/licuadoras/Licuadora_Black_&_Decker_BL1001_AR_500w_2lts_2.webp",
        "images/licuadoras/Licuadora_Black_&_Decker_BL1001_AR_500w_2lts_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Capacidad (Litros):</strong> 2\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2073928",
    caracteristicas: [
        "Marca: Black & Decker",
        "Modelo: 2073928",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Moulinex LM270558 Optimix Plus Blender Red 2lts 220v',
    imagen: "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_1.webp",
        "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_2.webp",
        "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_3.webp",
        "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_4.webp",
        "images/licuadoras/Licuadora_Moulinex_LM270558_Optimix_Plus_Blender_Red_2lts_220v_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 550\n<strong>Capacidad (Litros):</strong> 2\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2074190",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2074190",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Atma de vaso LV24C0AP 500w 1.25lts Celeste',
    imagen: "images/licuadoras/Licuadora_Atma_de_vasoLV24C0AP_500w_1_25lts_Celeste_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Atma_de_vasoLV24C0AP_500w_1_25lts_Celeste_1.webp",
        "images/licuadoras/Licuadora_Atma_de_vasoLV24C0AP_500w_1_25lts_Celeste_2.webp",
        "images/licuadoras/Licuadora_Atma_de_vasoLV24C0AP_500w_1_25lts_Celeste_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Capacidad (Litros):</strong> 1.25\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075062",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075062",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Philco LV24BOPHP 1.25Lts 450W',
    imagen: "images/licuadoras/Licuadora_Philco_LV24BOPHP_1_25Lts_450W_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Philco_LV24BOPHP_1_25Lts_450W_1.webp",
        "images/licuadoras/Licuadora_Philco_LV24BOPHP_1_25Lts_450W_2.webp",
        "images/licuadoras/Licuadora_Philco_LV24BOPHP_1_25Lts_450W_3.webp",
        "images/licuadoras/Licuadora_Philco_LV24BOPHP_1_25Lts_450W_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 450\n<strong>Capacidad (Litros):</strong> 1.25\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075080",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075080",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Atma de vaso LV24W0AP 1.25lts',
    imagen: "images/licuadoras/Licuadora_Atma_de_vaso_LV24W0AP_1_25lts_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Atma_de_vaso_LV24W0AP_1_25lts_1.webp",
        "images/licuadoras/Licuadora_Atma_de_vaso_LV24W0AP_1_25lts_2.webp",
        "images/licuadoras/Licuadora_Atma_de_vaso_LV24W0AP_1_25lts_3.webp",
        "images/licuadoras/Licuadora_Atma_de_vaso_LV24W0AP_1_25lts_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Capacidad (Litros):</strong> 1.25\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075225",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075225",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Whitenblack WBALWB15 1.5lts 2v. + pulsador',
    imagen: "images/licuadoras/Licuadora_Whitenblack_WBALWB15_1_5lts_2v_pulsador_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Whitenblack_WBALWB15_1_5lts_2v_pulsador_1.webp",
        "images/licuadoras/Licuadora_Whitenblack_WBALWB15_1_5lts_2v_pulsador_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 400\n<strong>Capacidad (Litros):</strong> 1.5\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075296",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075296",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Liliana AL340 Glasslic Al340 1.5lts 850w Jarra Vidrio',
    imagen: "images/licuadoras/Licuadora_Liliana_AL340_Glasslic_Al340_1_5lts_850w_Jarra_Vidrio_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Liliana_AL340_Glasslic_Al340_1_5lts_850w_Jarra_Vidrio_1.webp",
        "images/licuadoras/Licuadora_Liliana_AL340_Glasslic_Al340_1_5lts_850w_Jarra_Vidrio_2.webp",
        "images/licuadoras/Licuadora_Liliana_AL340_Glasslic_Al340_1_5lts_850w_Jarra_Vidrio_3.webp",
        "images/licuadoras/Licuadora_Liliana_AL340_Glasslic_Al340_1_5lts_850w_Jarra_Vidrio_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 850\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075382",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2075382",
        "Garantía: 1 año"
    ]
},
{
    categoria: "Pequeños",
    subcategoria: "Licuadoras",
    nombre: 'Licuadora Ultracomb LC 2203 Mixer To Go',
    imagen: "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_1.webp",
    imagenes: [
        "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_1.webp",
        "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_2.webp",
        "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_3.webp",
        "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_4.webp",
        "images/licuadoras/Licuadora_Ultracomb_LC_2203_Mixer_To_Go_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 350\n<strong>Capacidad (Litros):</strong> 0.6\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2073166",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2073166",
        "Garantía: 1 año"
    ]
},




       /////---------- Mixers ----------/////



{
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Atma LMAT8528RE 600w 2v. 5 en 1 Roja',
    imagen: "images/mixers/Mixer_Atma_LMAT8528RE_600w_2v_5_en_1_Roja_1.webp",
    imagenes: [
        "images/mixers/Mixer_Atma_LMAT8528RE_600w_2v_5_en_1_Roja_1.webp",
        "images/mixers/Mixer_Atma_LMAT8528RE_600w_2v_5_en_1_Roja_2.webp",
        "images/mixers/Mixer_Atma_LMAT8528RE_600w_2v_5_en_1_Roja_3.webp",
        "images/mixers/Mixer_Atma_LMAT8528RE_600w_2v_5_en_1_Roja_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Batidor, Picador, Espumador ',
    codigo: "2075322",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075322",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Batidora Black & Decker Mixer HB1002-AR 500W c/ vaso',
    imagen: "images/mixers/Batidora_Black &_Decker_Mixer_HB1002_AR_500W_c_vaso_1.webp",
    imagenes: [
        "images/mixers/Batidora_Black &_Decker_Mixer_HB1002_AR_500W_c_vaso_1.webp",
        "images/mixers/Batidora_Black &_Decker_Mixer_HB1002_AR_500W_c_vaso_2.webp",
        "images/mixers/Batidora_Black &_Decker_Mixer_HB1002_AR_500W_c_vaso_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso',
    codigo: "2073792",
    caracteristicas: [
        "Marca: Black & Decker",
        "Modelo: 2073792",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Electrolux Efficient IBA30 850w pie metalico',
    imagen: "images/mixers/Mixer_Electrolux_Efficient_IBA30_850w_pie_metalico_1.webp",
    imagenes: [
        "images/mixers/Mixer_Electrolux_Efficient_IBA30_850w_pie_metalico_1.webp",
        "images/mixers/Mixer_Electrolux_Efficient_IBA30_850w_pie_metalico_2.webp",
        "images/mixers/Mixer_Electrolux_Efficient_IBA30_850w_pie_metalico_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 850\n<strong>Velocidades:</strong> 3\n<strong>Accesorios incluidos:</strong> Vaso',
    codigo: "2074748",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2074748",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Electrolux EIB20 Efficient 600ml 600W 3 en 1',
    imagen: "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_1.webp",
    imagenes: [
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_1.webp",
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_2.webp",
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_3.webp",
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_4.webp",
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_5.webp",
        "images/mixers/Mixer_Electrolux_EIB20_Efficient_600ml_600W_3_en_1_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso, Batidor, Picador',
    codigo: "2075317",
    caracteristicas: [
        "Marca: Electrolux",
        "Modelo: 2075317",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Liliana AH 300 2v. 450w. vaso 900cc',
    imagen: "images/mixers/Mixer_Liliana_AH_300_2v_450w_vaso_900cc_1.webp",
    imagenes: [
        "images/mixers/Mixer_Liliana_AH_300_2v_450w_vaso_900cc_1.webp",
        "images/mixers/Mixer_Liliana_AH_300_2v_450w_vaso_900cc_2.webp",
        "images/mixers/Mixer_Liliana_AH_300_2v_450w_vaso_900cc_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 450\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso',
    codigo: "2074796",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2074796",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Liliana AH150 850W Fastmix Negro 220v-240v',
    imagen: "images/mixers/Mixer_Liliana_AH150_850W_Fastmix_Negro_220v_240v_1.webp",
    imagenes: [
        "images/mixers/Mixer_Liliana_AH150_850W_Fastmix_Negro_220v_240v_1.webp",
        "images/mixers/Mixer_Liliana_AH150_850W_Fastmix_Negro_220v_240v_2.webp",
        "images/mixers/Mixer_Liliana_AH150_850W_Fastmix_Negro_220v_240v_3.webp",
        "images/mixers/Mixer_Liliana_AH150_850W_Fastmix_Negro_220v_240v_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 850\n<strong>Velocidades:</strong> 5\n<strong>Accesorios incluidos:</strong> Vaso, Batidor, Picador, Accesorio para puré',
    codigo: "2075331",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2075331",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Moulinex DD1238AR Turbomix Negro inox 350w 3 en 1',
    imagen: "images/mixers/Mixer_Moulinex_DD1238AR_Turbomix_Negro_inox_350w_3_en_1_1.webp",
    imagenes: [
        "images/mixers/Mixer_Moulinex_DD1238AR_Turbomix_Negro_inox_350w_3_en_1_1.webp",
        "images/mixers/Mixer_Moulinex_DD1238AR_Turbomix_Negro_inox_350w_3_en_1_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 350\n<strong>Velocidades:</strong> 1\n<strong>Accesorios incluidos:</strong> Vaso, Batidor, Picador',
    codigo: "2074785",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2074785",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Philips HR253050 ProMix Daily Collection 400w Turbo',
    imagen: "images/mixers/Mixer_Philips_HR253050_ProMix_Daily_Collection_400w_Turbo_1.webp",
    imagenes: [
        "images/mixers/Mixer_Philips_HR253050_ProMix_Daily_Collection_400w_Turbo_1.webp",
        "images/mixers/Mixer_Philips_HR253050_ProMix_Daily_Collection_400w_Turbo_2.webp",
        "images/mixers/Mixer_Philips_HR253050_ProMix_Daily_Collection_400w_Turbo_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 350\n<strong>Velocidades:</strong> 1',
    codigo: "2075237",
    caracteristicas: [
        "Marca: Philips",
        "Modelo: 2075237",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Moulinex DD12A1AR Turbomix blanco 350w pie plastico',
    imagen: "images/mixers/Mixer_Moulinex_DD12A1AR_Turbomix_blanco_350w_pie_plastico_1.webp",
    imagenes: [
        "images/mixers/Mixer_Moulinex_DD12A1AR_Turbomix_blanco_350w_pie_plastico_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 350\n<strong>Velocidades:</strong> 1\n<strong>Accesorios incluidos:</strong> Vaso',
    codigo: "2075229",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2075229",
        "Garantía: 1 año"
    ]
},

















        /////---------- Termotanques ----------/////

            /////---------- Gas ----------/////

    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Escorial 45LTS',
    imagen: "images/termotanques/Termot_Escorial_45LTS_1.webp",
    imagenes: [
        "images/termotanques/Termot_Escorial_45LTS_1.webp",
        "images/termotanques/Termot_Escorial_45LTS_2.webp",
        "images/termotanques/Termot_Escorial_45LTS_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 60 x 42\n<strong>Capacidad (Litros):</strong> 45\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2068932",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2068932",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 030 Lts mg pie/col A.recup. 330000',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_030_Lts_mg_pie_col_a_recup_330000_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_030_Lts_mg_pie_col_a_recup_330000_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 61 x 36\n<strong>Capacidad (Litros):</strong> 30\n<strong>Conexiones:</strong> Ambos\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2073040",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073040",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 085 Lts mg pie/col 330002',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_085_Lts_mg_pie_col_330002_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_085_Lts_mg_pie_col_330002_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 110 x 41\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073037",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073037",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Ecotermo 45Lts GN Populi TE1052022',
    imagen: "images/termotanques/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_1.webp",
    imagenes: [
        "images/termotanques/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_1.webp",
        "images/termotanques/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_2.webp",
        "images/termotanques/Termot_Ecotermo_45Lts_GN_Populi_TE1052022_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 72 x 43\n<strong>Capacidad (Litros):</strong> 45\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2072108",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072108",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot Sherman 50 lts pie multigas carga sup',
    imagen: "images/termotanques/Termot_sherman_50_lts_pie_multigas_carga_sup_1.webp",
    imagenes: [
        "images/termotanques/Termot_sherman_50_lts_pie_multigas_carga_sup_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 82 x 45\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2069072",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 2069072",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 050 Lts mg pie/col A.recup. 330001',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_050_Lts_mg_pie_col_A_recup_330001_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_050_Lts_mg_pie_col_A_recup_330001_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 92 x 36\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Ambos\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073041",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073041",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Family 085 Lts mg pie/col 330008',
    imagen: "images/termotanques/Termot_Señorial_Family_085_Lts_mg_pie_col_330008_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Family_085_Lts_mg_pie_col_330008_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 110 x 41\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073164",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073164",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 120 mg 118lts apoyar 330003',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_120_mg_118lts_apoyar_330003_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_120_mg_118lts_apoyar_330003_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 146 x 41\n<strong>Capacidad (Litros):</strong> 120\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073038",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073038",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 160 Lts mg apoyar 330012',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_160_Lts_mg_apoyar_330012_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_160_Lts_mg_apoyar_330012_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 153 x 33\n<strong>Capacidad (Litros):</strong> 160\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073039",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073039",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Ecotermo 53 Lts. Alta recup. C/Sup. GN TE4052522',
    imagen: "images/termotanques/Termot_Ecotermo_53_Lts._Alta_recup_C_Sup_GN_TE4052522_1.webp",
    imagenes: [
        "images/termotanques/Termot_Ecotermo_53_Lts._Alta_recup_C_Sup_GN_TE4052522_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 76 x 42\n<strong>Capacidad (Litros):</strong> 53\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2072050",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072050",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Saiar 80lts pie multigas carga sup.',
    imagen: "images/termotanques/Termot_Saiar_80lts_pie_multigas_carga_sup_1.webp",
    imagenes: [
        "images/termotanques/Termot_Saiar_80lts_pie_multigas_carga_sup_1.webp",
        "images/termotanques/Termot_Saiar_80lts_pie_multigas_carga_sup_2.webp",
        "images/termotanques/Termot_Saiar_80lts_pie_multigas_carga_sup_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 106 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2069065",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 2069065",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Saiar 80lts colgar multigas carga inferior',
    imagen: "images/termotanques/Termot_Saiar_80lts_colgar_multigas_carga_inferior_1.webp",
    imagenes: [
        "images/termotanques/Termot_Saiar_80lts_colgar_multigas_carga_inferior_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 67 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2069069",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 2069069",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Rheem 80 lts pie carga sup. GN Blanco (tpg080gnrh)',
    imagen: "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_1.webp",
    imagenes: [
        "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_1.webp",
        "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Blanco_tpg080gnrh_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 106 x 45\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2074364",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 2074364",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Eskabe AQUAPIU H360 Gas A. recup Hybrid4 360lts/hs vert',
    imagen: "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_1.webp",
    imagenes: [
        "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_1.webp",
        "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_2.webp",
        "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_3.webp",
        "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_4.webp",
        "images/termotanques/Termot_Eskabe_AQUAPIU_H360_Gas_A_recup_Hybrid4_360lts_hs_vert_5.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 83 x 45\n<strong>Capacidad (Litros):</strong> 40\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2075133",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 2075133",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Rheem 80 lts pie carga sup. GN Gris (tgnp080rh)',
    imagen: "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_1.webp",
    imagenes: [
        "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_1.webp",
        "images/termotanques/Termot_Rheem_80_lts_pie_carga_sup_GN_Gris_tgnp080rh_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 109 x 42\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "17114",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 17114",
        "Garantía: 1 año"
    ]
    },

        /////---------- Electrico ----------/////


    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro TESZP-20 20lts electrico',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_TESZP_20_20lts_electrico_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_TESZP_20_20lts_electrico_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 33 x 41\n<strong>Capacidad (Litros):</strong> 20\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2075242",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2075242",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Family 090 Lts Elec pie/col A. recup 330010',
    imagen: "images/termotanques/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_1.webp",
        "images/termotanques/Termot_Señorial_Family_090_Lts_Elec_pie_col_A_recup_330010_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 105 x 41\n<strong>Capacidad (Litros):</strong> 90\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2073045",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073045",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Saiar 55 lts electrico TEPC055ESARIK2',
    imagen: "images/termotanques/Termot_Saiar_55_lts_electrico_TEPC055ESARIK2_1.webp",
    imagenes: [
        "images/termotanques/Termot_Saiar_55_lts_electrico_TEPC055ESARIK2_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 58 x 45\n<strong>Capacidad (Litros):</strong> 55\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "17005",
    caracteristicas: [
        "Marca: Saiar",
        "Modelo: 17005",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Ecotermo 70Lts Electrico Populi Carga Sup.',
    imagen: "images/termotanques/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_1.webp",
    imagenes: [
        "images/termotanques/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_1.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_2.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_3.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_Electrico_Populi_Carga_Sup_4.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 98 x 63\n<strong>Capacidad (Litros):</strong> 70\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2072245",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072245",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 095 Lts Elec col. entr. sup.330006',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_095_Lts_Elec_col_entr_sup_330006_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_095_Lts_Elec_col_entr_sup_330006_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 93 x 41\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073044",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073044",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 65 elec 50lts col. entr. sup. 330005',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_65_elec_50lts_col_entr_sup_330005_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_65_elec_50lts_col_entr_sup_330005_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 64 x 41\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2073043",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073043",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Escorial EL-90 90lts Electrico',
    imagen: "images/termotanques/Termot_Escorial_EL_90_90lts_Electrico_1.webp",
    imagenes: [
        "images/termotanques/Termot_Escorial_EL_90_90lts_Electrico_1.webp",
        "images/termotanques/Termot_Escorial_EL_90_90lts_Electrico_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 92 x 43\n<strong>Capacidad (Litros):</strong> 90\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2071220",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2071220",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Zafiro 40 elec 30lts col. entr. sup. 330004',
    imagen: "images/termotanques/Termot_Señorial_Zafiro_40_elec_30lts_col_entr_sup_330004_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Zafiro_40_elec_30lts_col_entr_sup_330004_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 43 x 41\n<strong>Capacidad (Litros):</strong> 30\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "2073042",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073042",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Sherman 85 electrico Pie',
    imagen: "images/termotanques/Termot_Sherman_85_Eléctrico_TECC085ESHK2_1.webp",
    imagenes: [
        "images/termotanques/Termot_Sherman_85_Eléctrico_TECC085ESHK2_1.webp",
        "images/termotanques/Termot_Sherman_85_Eléctrico_TECC085ESHK2_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Eléctrico\n<strong>Dimensiones:</strong> 51 x 45\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "2073600",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 2073600",
        "Garantía: 1 año"
    ]
    },
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Ecotermo 70Lts GN Populi TE1054022',
    imagen: "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_1.webp",
    imagenes: [
        "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_1.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_2.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_3.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_4.webp",
        "images/termotanques/Termot_Ecotermo_70Lts_GN_Populi_TE1054022_5.webp"
    ],
    descripcion: '<strong>Tipo:</strong>Gas\n<strong>Dimensiones:</strong> 98,8 x 63\n<strong>Capacidad (Litros):</strong> 70\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2072109",
    caracteristicas: [
        "Marca: Ecotermo",
        "Modelo: 2072109",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Rheem 125 elect colgar carga inferior Gris (tec125rh)',
    imagen: "images/termotanques/Termot_Rheem_125_elect_colgar_carga_inferior_Gris_tec125rh_1.webp",
    imagenes: [
        "images/termotanques/Termot_Rheem_125_elect_colgar_carga_inferior_Gris_tec125rh_1.webp",
        "images/termotanques/Termot_Rheem_125_elect_colgar_carga_inferior_Gris_tec125rh_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Dimensiones:</strong> 115 x 51\n<strong>Capacidad (Litros):</strong> 125\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "21316",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 21316",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Rheem 80 lts colgar carga inferior gn Gris (tgnc080rh)',
    imagen: "images/termotanques/Termot_Rheem_80_lts_colgar_carga_inferior_gn_Gris_tgnc080rh_1.webp",
    imagenes: [
        "images/termotanques/Termot_Rheem_80_lts_colgar_carga_inferior_gn_Gris_tgnc080rh_1.webp",
        "images/termotanques/Termot_Rheem_80_lts_colgar_carga_inferior_gn_Gris_tgnc080rh_2.webp",
        "images/termotanques/Termot_Rheem_80_lts_colgar_carga_inferior_gn_Gris_tgnc080rh_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Gas\n<strong>Dimensiones:</strong> 109 x 51\n<strong>Capacidad (Litros):</strong> 80\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "13039",
    caracteristicas: [
        "Marca: Rheem",
        "Modelo: 13039",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Family 120 Lts Elec entr. sup. A.rec',
    imagen: "images/termotanques/Termot_Señorial_Family_120_Lts_Elec_entr_sup_A_rec_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Family_120_Lts_Elec_entr_sup_A_rec_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Dimensiones:</strong> 124 x 41\n<strong>Capacidad (Litros):</strong> 120\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073046",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073046",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Señorial Family 50 Lts mg pie/col A.recuperacion',
    imagen: "images/termotanques/Termot_Señorial_Family_50_Lts_mg_pie_col_A_recuperacion_1.webp",
    imagenes: [
        "images/termotanques/Termot_Señorial_Family_50_Lts_mg_pie_col_A_recuperacion_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Gas\n<strong>Dimensiones:</strong> 90,5 x 36\n<strong>Capacidad (Litros):</strong> 50\n<strong>Conexiones:</strong> Ambos\n<strong>Alta recuperación:</strong> Sí\n<strong>Colgar o apoyar:</strong> Ambos\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2073098",
    caracteristicas: [
        "Marca: Señorial",
        "Modelo: 2073098",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Sherman 120 lts pie 5 años carga sup.mg',
    imagen: "images/termotanques/Termot_Sherman_120_lts_pie_5_años_carga_sup_mg_1.webp",
    imagenes: [
        "images/termotanques/Termot_Sherman_120_lts_pie_5_años_carga_sup_mg_1.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Gas\n<strong>Dimensiones:</strong> 139 x 54,1\n<strong>Capacidad (Litros):</strong> 120\n<strong>Conexiones:</strong> Superior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Apoyar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "17119",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 17119",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Sherman 55 electrico colgar carga inferior',
    imagen: "images/termotanques/Termot_Sherman_55_electrico_colgar_carga_inferior_1.webp",
    imagenes: [
        "images/termotanques/Termot_Sherman_55_electrico_colgar_carga_inferior_1.webp",
        "images/termotanques/Termot_Sherman_55_electrico_colgar_carga_inferior_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Dimensiones:</strong> 78 x 45,1\n<strong>Capacidad (Litros):</strong> 55\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "20920",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 20920",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Termotanques",
    nombre: 'Termot. Sherman 85 elect colgar',
    imagen: "images/termotanques/Termot_Sherman_85_elect_colgar_1.webp",
    imagenes: [
        "images/termotanques/Termot_Sherman_85_elect_colgar_1.webp",
        "images/termotanques/Termot_Sherman_85_elect_colgar_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Dimensiones:</strong> 79 x 45,1\n<strong>Capacidad (Litros):</strong> 85\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase C',
    codigo: "21204",
    caracteristicas: [
        "Marca: Sherman",
        "Modelo: 21204",
        "Garantía: 1 año"
    ]
},

















    
    /////---------- Calefaccion Electrica----------/////


      {
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Whitenblack infrarojo WBCIWB02 500/1000W',
    imagen: "images/estufas/Calefactor_Whitenblack_infrarojo_WBCIWB02_500_1000W_1.webp",
    imagenes: [
        "images/estufas/Calefactor_Whitenblack_infrarojo_WBCIWB02_500_1000W_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1000\n<strong>Cantidad de velas:</strong> 2',
    codigo: "2074790",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2074790",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Whitenblack WBCIWB05 infrarrojo Negro 700/1400w',
    imagen: "images/estufas/Calefactor_Whitenblack_WBCIWB05_infrarrojo_Negro_700_1400w_1.webp",
    imagenes: [
        "images/estufas/Calefactor_Whitenblack_WBCIWB05_infrarrojo_Negro_700_1400w_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1400\n<strong>Cantidad de velas:</strong> 3',
    codigo: "2075286",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075286",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Whitenblack WBPVWB01 pie/pared 600/1200w',
    imagen: "images/convectores/Calefactor_Whitenblack_WBPVWB01_pie_pared_600_1200w_1.webp",
    imagenes: [
        "images/convectores/Calefactor_Whitenblack_WBPVWB01_pie_pared_600_1200w_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200',
    codigo: "2075284",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075284",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Crivel E15/Q-3 Infrarrojo Fijo 1400 W',
    imagen: "images/estufas/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_1.webp",
    imagenes: [
        "images/estufas/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_1.webp",
        "images/estufas/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_2.webp",
        "images/estufas/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1400\n<strong>Cantidad de velas:</strong> 3\n<strong>Giratoria:</strong> Sí',
    codigo: "2071916",
    caracteristicas: [
        "Marca: Crivel",
        "Modelo: 2071916",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Crivel/Steel home E22/Q3-Ost Oscilante Con Turbo Infrarrojo 700/1400Wts',
    imagen: "images/estufas/Crivel_Steel_home_E22_Q3_Ost_Oscilante_Con_Turbo_700_1400Wts_1.webp",
    imagenes: [
        "images/estufas/Crivel_Steel_home_E22_Q3_Ost_Oscilante_Con_Turbo_700_1400Wts_1.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1400\n<strong>Cantidad de velas:</strong> 3\n<strong>Giratoria:</strong> Sí',
    codigo: "2071918",
    caracteristicas: [
        "Marca: Crivel",
        "Modelo: 2071918",
        "Garantía: 1 año"
    ]
},

{
    categoria: "Climatización",
    subcategoria: "Calefaccion electrica",
    nombre: 'Calefactor Liliana CV027 vertical cuarzo Infrarrojo',
    imagen: "images/estufas/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_1.webp",
    imagenes: [
        "images/estufas/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_1.webp",
        "images/estufas/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_2.webp",
        "images/estufas/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200\n<strong>Cantidad de velas:</strong> 2',
    codigo: "2074413",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2074413",
        "Garantía: 1 año"
    ]
},








/////---------- Calefaccion gas ----------/////






{
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Emege Euro 2135 T/B MG 3500 kcal',
    imagen: "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_1.webp",
        "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_2.webp",
        "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_3.webp",
        "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_4.webp",
        "images/calefactor_a_gas/Emege_Euro_2135_T_B_MG_3500_kcal_5.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3500\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "14691",
    caracteristicas: [
        "Marca: Emege",
        "Modelo: 14691",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Emege Euro 3130 S/S MG 3000 kcal',
    imagen: "images/calefactor_a_gas/Calefactor_Emege_Euro_3130_S_S_MG_3000_kcal_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Emege_Euro_3130_S_S_MG_3000_kcal_1.webp",
        "images/calefactor_a_gas/Calefactor_Emege_Euro_3130_S_S_MG_3000_kcal_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Gas natural',
    codigo: "9422",
    caracteristicas: [
        "Marca: Emege",
        "Modelo: 9422",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Emege Euro 3150 S/S MG 5000 kcal',
    imagen: "images/calefactor_a_gas/Calefactor_Emege_Euro_3150_S_S_MG_5000_kcal_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Emege_Euro_3150_S_S_MG_5000_kcal_1.webp",
        "images/calefactor_a_gas/Calefactor_Emege_Euro_3150_S_S_MG_5000_kcal_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 5000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Gas natural',
    codigo: "9421",
    caracteristicas: [
        "Marca: Emege",
        "Modelo: 9421",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Emege Patagonia 9130SCE multigas 3000 kcal',
    imagen: "images/calefactor_a_gas/Calefactor_Emege_Patagonia_9130SCE_multigas_3000_kcal_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Emege_Patagonia_9130SCE_multigas_3000_kcal_1.webp",
        "images/calefactor_a_gas/Calefactor_Emege_Patagonia_9130SCE_multigas_3000_kcal_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Gas natural',
    codigo: "2074210",
    caracteristicas: [
        "Marca: Emege",
        "Modelo: 2074210",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Emege Patagonia 9150SCE multigas 5000 kcal',
    imagen: "images/calefactor_a_gas/Calefactor_Emege_Patagonia_9150SCE_multigas_5000_kcal_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Emege_Patagonia_9150SCE_multigas_5000_kcal_1.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 5000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2074211",
    caracteristicas: [
        "Marca: Emege",
        "Modelo: 2074211",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Eskabe S21 Minic 3.0 Aroma Marfil',
    imagen: "images/calefactor_a_gas/Calefactor_Eskabe_S21__3_0__Marfil_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Eskabe_S21__3_0__Marfil_1.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21__3_0__Marfil_2.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21__3_0__Marfil_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "17802",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 17802",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Eskabe S21 Minic 5.0 Aroma Marfil',
    imagen: "images/calefactor_a_gas/Calefactor_Eskabe_S21_Minic_5_0_Aroma_Marfil_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_Minic_5_0_Aroma_Marfil_1.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_Minic_5_0_Aroma_Marfil_2.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_Minic_5_0_Aroma_Marfil_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 5000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "17803",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 17803",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Eskabe S21 MINIC 8.0 Aroma Marfil',
    imagen: "images/calefactor_a_gas/Calefactor_Eskabe_S21_MINIC_8_0_Aroma_Marfil_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_MINIC_8_0_Aroma_Marfil_1.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_MINIC_8_0_Aroma_Marfil_2.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_MINIC_8_0_Aroma_Marfil_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 8000\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "18626",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 18626",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Eskabe S21 T/B 4800 GN',
    imagen: "images/calefactor_a_gas/Calefactor_Eskabe_T_B_4800_GN_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Eskabe_T_B_4800_GN_1.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 4800\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2073652",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 2073652",
        "Garantía: 1 año"
    ]
},
    
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Orbis 4024NON 2700C S/ Salida Frente vidrio',
    imagen: "images/calefactor_a_gas/Calefactor_Orbis_4024NON_2700C_S_Salida_Frente_vidrio_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Orbis_4024NON_2700C_S_Salida_Frente_vidrio_1.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4024NON_2700C_S_Salida_Frente_vidrio_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 2700\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2074293",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2074293",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Orbis 4040GO/4044 S/V 4200C Ods Gris',
    imagen: "images/calefactor_a_gas/Calefactor_Orbis_4040GO_4044_S_V_4200C_Ods_Gris_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Orbis_4040GO_4044_S_V_4200C_Ods_Gris_1.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4040GO_4044_S_V_4200C_Ods_Gris_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 4200\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2069694",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2069694",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Orbis 4126NON 2500C T/B Frente Vidrio',
    imagen: "images/calefactor_a_gas/Calefactor_Orbis_4126NON_2500C_T_B_Frente_Vidrio_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Orbis_4126NON_2500C_T_B_Frente_Vidrio_1.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4126NON_2500C_T_B_Frente_Vidrio_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 2500\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2074304",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2074304",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Orbis 4146NON 3800C T/B Frente Vidrio',
    imagen: "images/calefactor_a_gas/Calefactor_Orbis_4146NON_3800C_T_B_Frente_Vidrio_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Orbis_4146NON_3800C_T_B_Frente_Vidrio_1.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4146NON_3800C_T_B_Frente_Vidrio_2.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4146NON_3800C_T_B_Frente_Vidrio_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3800\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2074295",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2074295",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Orbis 4166NON 5000C T/B Frente Vidrio',
    imagen: "images/calefactor_a_gas/Calefactor_Orbis_4166NON_5000C_T_B_Frente_Vidrio_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Orbis_4166NON_5000C_T_B_Frente_Vidrio_1.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4166NON_5000C_T_B_Frente_Vidrio_2.webp",
        "images/calefactor_a_gas/Calefactor_Orbis_4166NON_5000C_T_B_Frente_Vidrio_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 5000\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "2074303",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2074303",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Volcan 2500 42512/42516 Gris Sin salida',
    imagen: "images/calefactor_a_gas/Calefactor_Volcan_2500_42512_42516_Gris_Sin_salida_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Volcan_2500_42512_42516_Gris_Sin_salida_1.webp",
        "images/calefactor_a_gas/Calefactor_Volcan_2500_42512_42516_Gris_Sin_salida_2.webp",
        "images/calefactor_a_gas/Calefactor_Volcan_2500_42512_42516_Gris_Sin_salida_3.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 2500\n<strong>Sin salida:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "14554",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14554",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Volcan T/B 2000 42312/42316 Gris',
    imagen: "images/calefactor_a_gas/Calefactor_Volcan_T_B_2000_42312_42316_Gris_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Volcan_T_B_2000_42312_42316_Gris_1.webp",
        "images/calefactor_a_gas/Calefactor_Volcan_T_B_2000_42312_42316_Gris_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 2000\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "14556",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14556",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Volcan T/B 3800 43712/43716',
    imagen: "images/calefactor_a_gas/Calefactor_Volcan_T_B_3800_43712_43716_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Volcan_T_B_3800_43712_43716_1.webp",
        "images/calefactor_a_gas/Calefactor_Volcan_T_B_3800_43712_43716_2.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 3800\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "14201",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14201",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefaccion a gas",
    nombre: 'Calefactor Volcan T/B 5700 46312/6 GRIS',
    imagen: "images/calefactor_a_gas/Calefactor_Volcan_T_B_5700_46312_6_GRIS_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Volcan_T_B_5700_46312_6_GRIS_1.webp"
    ],
    descripcion: '<strong>Potencia (Kcal):</strong> 5700\n<strong>Tiro balanceado:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "14202",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14202",
        "Garantía: 1 año"
    ]
},
  




/////---------- Aires acondicionados ----------/////

{
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. RCA Split 5300 kw Inverter RINV5300FC Eficiencia A',
    imagen: "images/aires_acondicionados/Acond_RCA_Split_5300_kw_Inverter_RINV5300FC_Eficiencia_A_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_RCA_Split_5300_kw_Inverter_RINV5300FC_Eficiencia_A_1.webp",
        "images/aires_acondicionados/Acond_RCA_Split_5300_kw_Inverter_RINV5300FC_Eficiencia_A_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 5300\n<strong>Tipo:</strong> Split\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072586",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2072586",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Tcl Split 3300 kw Elite On/Off',
    imagen: "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_1.webp",
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_2.webp",
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_3.webp",
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_4.webp",
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_5.webp",
        "images/aires_acondicionados/Acond_Tcl_Split_3300_kw_Elite_On_Off_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3300\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073556",
    caracteristicas: [
        "Marca: TCL",
        "Modelo: 2073556",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Midea Split 2730 kw MSAGFC-09H-01F 2348Kcal',
    imagen: "images/aires_acondicionados/Acond_Midea_Split_2730_kw_MSAGFC_09H_01F_2348Kcal_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Midea_Split_2730_kw_MSAGFC_09H_01F_2348Kcal_1.webp",
        "images/aires_acondicionados/Acond_Midea_Split_2730_kw_MSAGFC_09H_01F_2348Kcal_2.webp",
        "images/aires_acondicionados/Acond_Midea_Split_2730_kw_MSAGFC_09H_01F_2348Kcal_3.webp",
        "images/aires_acondicionados/Acond_Midea_Split_2730_kw_MSAGFC_09H_01F_2348Kcal_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 2730\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2074422",
    caracteristicas: [
        "Marca: Midea",
        "Modelo: 2074422",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Midea MSAGFC-12H-01F 3430W/2950kcal F/C split',
    imagen: "images/aires_acondicionados/Acond_Midea_MSAGFC_12H_01F_3430W_2950kcal_F_C_split_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Midea_MSAGFC_12H_01F_3430W_2950kcal_F_C_split_1.webp",
        "images/aires_acondicionados/Acond_Midea_MSAGFC_12H_01F_3430W_2950kcal_F_C_split_2.webp",
        "images/aires_acondicionados/Acond_Midea_MSAGFC_12H_01F_3430W_2950kcal_F_C_split_3.webp",
        "images/aires_acondicionados/Acond_Midea_MSAGFC_12H_01F_3430W_2950kcal_F_C_split_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3430\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2074423",
    caracteristicas: [
        "Marca: Midea",
        "Modelo: 2074423",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. RCA RE3300FC 3300W F/C Split',
    imagen: "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_1.webp",
        "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_2.webp",
        "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_3.webp",
        "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_4.webp",
        "images/aires_acondicionados/Acond_RCA_RE3300FC_3300W_F_C_Split_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3300\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074591",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2074591",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Kanji Portatil 2900 kw KJH-AA2900',
    imagen: "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_1.webp",
        "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_2.webp",
        "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_3.webp",
        "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_4.webp",
        "images/aires_acondicionados/Acond_Kanji_Portatil_KJH_AA2900_F_C_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 2900\n<strong>Tipo:</strong> Portátil\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075012",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075012",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. RCA Split 3200w Inverter RP3200INV-F-SK',
    imagen: "images/aires_acondicionados/Acond_RCA_Split_3200w_Inverter_RP3200INV_F_SK_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_RCA_Split_3200w_Inverter_RP3200INV_F_SK_1.webp",
        "images/aires_acondicionados/Acond_RCA_Split_3200w_Inverter_RP3200INV_F_SK_2.webp",
        "images/aires_acondicionados/Acond_RCA_Split_3200w_Inverter_RP3200INV_F_SK_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3200\n<strong>Tipo:</strong> Split\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075250",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2075250",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Enova Split 6500 kw 5590fg',
    imagen: "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_1.webp",
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_2.webp",
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_3.webp",
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_4.webp",
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_5.webp",
        "images/aires_acondicionados/Acond_Enova_Split_6500_kw_5590fg_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 6500\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075293",
    caracteristicas: [
        "Marca: Enova",
        "Modelo: 2075293",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. SURREY Split 3430 kw 2950Kcal/h',
    imagen: "images/aires_acondicionados/Acond_SURREY_Split_3430_kw_2950Kcal_h_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_SURREY_Split_3430_kw_2950Kcal_h_1.webp",
        "images/aires_acondicionados/Acond_SURREY_Split_3430_kw_2950Kcal_h_3.webp",
        "images/aires_acondicionados/Acond_SURREY_Split_3430_kw_2950Kcal_h_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3430\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "21279",
    caracteristicas: [
        "Marca: Surrey",
        "Modelo: 21279",
        "Garantía: 1 año"
    ]
},
];
