// Arreglo de productos destacados (códigos de los productos)
const productosDestacados = [
    "2074711", //Cocina Florencia 5838 Semi-Industrial Inox 56 cm multigas s/valvula
    "2074136", //Heladera Philco PHCT341B ciclica 340Lts Blanca
    "2075483", //Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c/frontal plata
    "2073936", //Horno electrico Ultracomb UC-45CN 45lts
    "2075258", //Heladera Philco PHCT302X Top Mount 298Lts Inox ciclica
    "2075207", //TV LED RCA 55" G55P6UHD-F Google 4K Smart
    "2075388", //TV LED RCA 55" QL55TH200-F QLED Google 4K Smart
    "2075067", //TV LED RCA 40" R40AND-F Smart c/ Android
    "2075452", //LIBERADO Tecno Spark 30 Pro KL7 8/128 gb Artic Glow (PNT011034)
    "2075451", //LIBERADO Tecno Spark 30C KL5 4/256 gb Orbit Black (PNT011019)
    
    
    
 



];
const productos = [


    /////---------- Cocinas ----------/////
    {
        categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: "Cocina Volcan 87643 55cm 4 horn. Blanca luz-enc.elec",
    imagen: "images/cocinas/Cocina_Volcan_87643_55cm_4_horn_Blanca_luz_enc_elec_1.png",
    imagenes: [
        "images/cocinas/Cocina_Volcan_87643_55cm_4_horn_Blanca_luz_enc_elec_1.png",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Doméstico\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Enlozado\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073893",
    caracteristicas: ["Marca: Volcan", "Modelo: 87643", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: "Cocina Morelli Industrial Saho Kuro 550 p/v-r/a 180001",
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800012.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800013.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Saho_Kuro_550_1800014.webp",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones:</strong> 86 x 56 x 58\n<strong>Hornallas:</strong> 4\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2074224",
    caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: "Cocina Morelli Industrial Jitaku/saho 820 18062 5 horn. inox",
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox3.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox4.webp",
    ],
    descripcion: "<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones:</strong> 86 x 82 x 58\n<strong>Hornallas:</strong> 5\n<strong>Material:</strong> Acero Inoxidable\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A",
    codigo: "2073292",
    caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },
    {
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 60 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072699",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072699",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Zafira 550',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_550_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072700",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072700",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli 550 Saho 18045 acero inox',
    imagen: "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_1.webp",
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_2.webp",
        "images/cocinas/Cocina_Morelli_550_Saho_18045_acero_inox_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072962",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072962",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Carli/Plancha Doble Horno R/A P/C 4449',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Carli_Plancha_Doble_Horno_R_A_P_C_4449_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Carli_Plancha_Doble_Horno_R_A_P_C_4449_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 85 62\n<strong>Válvula de seguridad:</strong> No\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074513",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2074513",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial 550 Ex Acero 16374 Multigrill',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_3.webp",
        "images/cocinas/Cocina_Morelli_Industrial_550_Ex_Acero_16374_Multigrill_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 56 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Tipo de gas:</strong> Multigas\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075406",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2075406",
        "Garantía: 1 año"
    ]
},
 {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Volcan 87679 MG 55cm inox s/lux',
    imagen: "images/cocinas/Cocina_Volcan_87679_MG_55cm_inox_s_lux_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Volcan_87679_MG_55cm_inox_s_lux_1.webp",
        "images/cocinas/Cocina_Volcan_87679_MG_55cm_inox_s_lux_2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 55 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075054",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 2075054",
        "Garantía: 1 año"
    ]
},





    /////---------- Anafes ----------/////

{
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
    categoria: "Cocinas, anafes y purificadores",
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
 {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Anafes",
    nombre: 'Anafe Kanji HP1000BDD Electrico 1 hornalla Negro',
    imagen: "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_1.webp",
    imagenes: [
        "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_1.webp",
        "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_2.webp",
        "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_3.webp",
        "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_4.webp",
        "images/anafes/Anafe_Kanji_HP1000BDD_Electrico_1_hornalla_Negro_5.webp"
    ],
    descripcion: '<strong>Material de superficie:</strong> Chapa pintada al polvo\n<strong>Cantidad de hornallas:</strong> 1\n<strong>Dimensiones (Anc x Pro):</strong> 24 x 24\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2075341",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075341",
        "Garantía: 1 año"
    ]
},
{
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Anafes",
    nombre: 'Anafe Kanji KJB-EH4GL001 Vitro Emp. 4 hornallas Negro',
    imagen: "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_1.webp",
    imagenes: [
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_1.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_2.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_3.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_4.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_5.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_6.webp",
        "images/anafes/Anafe_Kanji_KJB_EH4GL001_Vitro_Emp_4_hornallas_Negro_7.webp"
    ],
    descripcion: '<strong>Material de superficie:</strong> Vitrocerámico\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Dimensiones (Anc x Pro):</strong> 59 x 59\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075345",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075345",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Anafes",
    nombre: 'Anafe Kanji KJH-HP2200BDD Electrico 2 hornallas Negro',
    imagen: "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_1.webp",
    imagenes: [
        "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_1.webp",
        "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_2.webp",
        "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_3.webp",
        "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_4.webp",
        "images/anafes/Anafe_Kanji_KJH_HP2200BDD_Electrico_2_hornallas_Negro_5.webp"
    ],
    descripcion: '<strong>Material de superficie:</strong> Chapa pintada al polvo\n<strong>Cantidad de hornallas:</strong> 2\n<strong>Dimensiones (Anc x Pro):</strong> 48 x 27\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2075136",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075136",
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
            "images/televisores/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_3.webp",
            "images/televisores/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_2.webp",
            "images/televisores/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_1.webp"
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
    descripcion: '<strong>Pulgadas:</strong> 43"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Android TV',
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
    descripcion: '<strong>Pulgadas:</strong> 43"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> FHD\n<strong>Sistema operativo:</strong> Titan OS',
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
    descripcion: '<strong>Pulgadas:</strong> 50"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Titan OS',
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
    descripcion: '<strong>Pulgadas:</strong> 55"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Titan OS',
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
    descripcion: '<strong>Pulgadas:</strong> 55"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
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
    descripcion: '<strong>Pulgadas:</strong> 65"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
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
        
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
        categoria: "heladeras y freezers",
        subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
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
    categoria: "heladeras y freezers",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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
    categoria: "heladeras y freezers",
    subcategoria: "heladeras",
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




//// 19 08 2025 ////

    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Volcan 313 BFV12 lts',
    imagen: "images/calefones/Calefon Volcan 313 BFV12 lts 1.webp",
    imagenes: [
        "images/calefones/Calefon Volcan 313 BFV12 lts 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 12\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Manual\n<strong>Tipo de control:</strong> Perilla\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2070052",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 2070052",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Universal 12 lts.12521 GE ultra compacto s/enc. c/sensor',
    imagen: "images/calefones/Calefon Universal 12 lts 12521 GE ultra compacto s enc c sensor 1.webp",
    imagenes: [
        "images/calefones/Calefon Universal 12 lts 12521 GE ultra compacto s enc c sensor 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 12\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas envasado\n<strong>Tipo de encendido:</strong> Manual\n<strong>Tipo de control:</strong> Perilla\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2070288",
    caracteristicas: [
        "Marca: Universal",
        "Modelo: 2070288",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 KJO 14Lts Tiraje Natural',
    imagen: "images/calefones/Calefon Orbis 315 KJO 14Lts Tiraje Natural 1.webp",
    imagenes: [
        "images/calefones/Calefon Orbis 315 KJO 14Lts Tiraje Natural 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Automático\n<strong>Tipo de control:</strong> Corredera\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Sin llama piloto:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "2072400",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2072400",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 312 KJO 12Lts Corredera Tiraje Natural',
    imagen: "images/calefones/Calefon Orbis 312 KJO 12Lts Corredera Tiraje Natural 1.webp",
    imagenes: [
        "images/calefones/Calefon Orbis 312 KJO 12Lts Corredera Tiraje Natural 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 12\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Automático\n<strong>Tipo de control:</strong> Corredera\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Sin llama piloto:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072405",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2072405",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 KNO 14lts. Botonera autom. tiraje natural',
    imagen: "images/calefones/Calefon Orbis 315 KNO 14lts Botonera autom. tiraje natural 1.webp",
    imagenes: [
        "images/calefones/Calefon Orbis 315 KNO 14lts Botonera autom. tiraje natural 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Automático\n<strong>Tipo de control:</strong> Botones\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Sin llama piloto:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072406",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2072406",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 PNON 14lts. TB Pos Botonera autom.',
    imagen: "images/calefones/Calefon Orbis 315 PNON 14lts TB Pos Botonera autom 1.webp",
    imagenes: [
        "images/calefones/Calefon Orbis 315 PNON 14lts TB Pos Botonera autom 1.webp",
        "images/calefones/Calefon Orbis 315 PNON 14lts TB Pos Botonera autom 2.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 14\n<strong>Tiraje:</strong> Tiro balanceado\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Automático\n<strong>Tipo de control:</strong> Botones\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Sin llama piloto:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075395",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2075395",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 BHO s/enc. corredera 14 lts. bl.',
    imagen: "images/calefones/Calefon Orbis 315 BHO s enc corredera 14 lts bl 1.webp",
    imagenes: [
        "images/calefones/Calefon Orbis 315 BHO s enc corredera 14 lts bl 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Manual\n<strong>Tipo de control:</strong> Corredera\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "304",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 304",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola G24 8/128GB',
    imagen: "images/celulares/LIBERADO Motorola G24 8 128GB 1.webp",
    imagenes: [
        "images/celulares/LIBERADO Motorola G24 8 128GB 1.webp",
        "images/celulares/LIBERADO Motorola G24 8 128GB 2.webp",
        "images/celulares/LIBERADO Motorola G24 8 128GB 3.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 8\n<strong>Pulgadas:</strong> 6,6"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5.2 Ah\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 14',
    codigo: "2075481",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075481",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5558/F Inox enc. electrico',
    imagen: "images/cocinas/Cocina Florencia 5558 F Inox enc electrico 3.webp",
    imagenes: [
        "images/cocinas/Cocina Florencia 5558 F Inox enc electrico 3.webp",
        "images/cocinas/Cocina Florencia 5558 F Inox enc electrico 2.webp",
        "images/cocinas/Cocina Florencia 5558 F Inox enc electrico 1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072765",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072765",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Orbis 858 AP3M/4M Plana Inox 55cm',
    imagen: "images/cocinas/Cocina Orbis 858 AP3M 4M Plana Inox 55cm 1.webp",
    imagenes: [
        "images/cocinas/Cocina Orbis 858 AP3M 4M Plana Inox 55cm 1.webp",
        "images/cocinas/Cocina Orbis 858 AP3M 4M Plana Inox 55cm 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073204",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2073204",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Orbis C9500 958AC3M/4M Multigas Acero Inox 55cm luz y encendido elec.',
    imagen: "images/cocinas/Cocina Orbis C9500 958AC3M 4M Multigas Acero Inox 55cm luz y encendido elec 1.webp",
    imagenes: [
        "images/cocinas/Cocina Orbis C9500 958AC3M 4M Multigas Acero Inox 55cm luz y encendido elec 1.webp",
        "images/cocinas/Cocina Orbis C9500 958AC3M 4M Multigas Acero Inox 55cm luz y encendido elec 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073972",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2073972",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Heladeras",
    nombre: 'Freezer Vostok Vertical VT-80FV Bajo mesada 90 lts',
    imagen: "images/freezers/Freezer Vostok Vertical VT 80FV Bajo mesada 90 lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Vostok Vertical VT 80FV Bajo mesada 90 lts 1.webp",
        "images/freezers/Freezer Vostok Vertical VT 80FV Bajo mesada 90 lts 4.webp",
        "images/freezers/Freezer Vostok Vertical VT 80FV Bajo mesada 90 lts 3.webp",
        "images/freezers/Freezer Vostok Vertical VT 80FV Bajo mesada 90 lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 83 x 48 x 52\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 90\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074467",
    caracteristicas: [
        "Marca: Vostok",
        "Modelo: 2074467",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Neba Trial F 250 cap. 245lts',
    imagen: "images/freezers/Freezer Neba Trial F 250 cap 245lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Neba Trial F 250 cap 245lts 1.webp",
        "images/freezers/Freezer Neba Trial F 250 cap 245lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 84 x 70\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 245\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "21404",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 21404",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Neba Trial F 310 cap 305 lts',
    imagen: "images/freezers/Freezer Neba Trial F 310 cap 305 lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Neba Trial F 310 cap 305 lts 1.webp",
        "images/freezers/Freezer Neba Trial F 310 cap 305 lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 100 X 65 X 85\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 305\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "21405",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 21405",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Neba Trial F-180 174 Lts',
    imagen: "images/freezers/Freezer Neba Trial F 180 174 Lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Neba Trial F 180 174 Lts 1.webp",
        "images/freezers/Freezer Neba Trial F 180 174 Lts 3.webp",
        "images/freezers/Freezer Neba Trial F 180 174 Lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 67 x 69\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 174\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "21406",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 21406",
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
        imagen: "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
        imagenes: [
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_2.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_3.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_4.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_5.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_6.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_7.webp",
            "images/lavasecarropas/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_8.webp"
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

{
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Kohinoor C 755 5,5 KG',
    imagen: "images/secarropas/Secarropas_Kohinoor_C_755_5_5_KG_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Kohinoor_C_755_5_5_KG_1.webp",
        "images/secarropas/Secarropas_Kohinoor_C_755_5_5_KG_2.webp",
        "images/secarropas/Secarropas_Kohinoor_C_755_5_5_KG_3.webp",
        "images/secarropas/Secarropas_Kohinoor_C_755_5_5_KG_4.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 5,5\n<strong>Tipo de secado:</strong> Centrifugado',
    codigo: "2070201",
    caracteristicas: [
        "Marca: Kohinoor",
        "Modelo: 2070201",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Columbia HTS5501/03/04 5,5kg',
    imagen: "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_1.webp",
        "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_2.webp",
        "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_3.webp",
        "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_4.webp",
        "images/secarropas/Secarropas_Columbia_HTS5501_03_04_5_5kg_5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 5,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2072605",
    caracteristicas: [
        "Marca: Columbia",
        "Modelo: 2072605",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Kohinoor B 665 6,5 Kg',
    imagen: "images/secarropas/Secarropas_Kohinoor_B_665_6_5_K_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Kohinoor_B_665_6_5_K_1.webp",
        "images/secarropas/Secarropas_Kohinoor_B_665_6_5_K_2.webp",
        "images/secarropas/Secarropas_Kohinoor_B_665_6_5_K_3.webp",
        "images/secarropas/Secarropas_Kohinoor_B_665_6_5_K_4.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2070203",
    caracteristicas: [
        "Marca: Kohinoor",
        "Modelo: 2070203",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Kohinoor A-665 IX 6,5 Kg',
    imagen: "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_1.webp",
        "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_2.webp",
        "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_3.webp",
        "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_4.webp",
        "images/secarropas/Secarropas_Kohinoor_A_665_IX_6_5_Kg_5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2070204",
    caracteristicas: [
        "Marca: Kohinoor",
        "Modelo: 2070204",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Kohinoor A 655 5,5 Kgs. Acero',
    imagen: "images/secarropas/Secarropas_Kohinoor_A_655_5_5_Kgs_Acero_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Kohinoor_A_655_5_5_Kgs_Acero_1.webp",
        "images/secarropas/Secarropas_Kohinoor_A_655_5_5_Kgs_Acero_2.webp",
        "images/secarropas/Secarropas_Kohinoor_A_655_5_5_Kgs_Acero_3.webp",
        "images/secarropas/Secarropas_Kohinoor_A_655_5_5_Kgs_Acero_4.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 5,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2070805",
    caracteristicas: [
        "Marca: Kohinoor",
        "Modelo: 2070805",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Kohinoor C 765 6,5 KG',
    imagen: "images/secarropas/Secarropas_Kohinoor_C_765_6_5_Kg_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Kohinoor_C_765_6_5_Kg_1.webp",
        "images/secarropas/Secarropas_Kohinoor_C_765_6_5_Kg_2.webp",
        "images/secarropas/Secarropas_Kohinoor_C_765_6_5_Kg_3.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2071812",
    caracteristicas: [
        "Marca: Kohinoor",
        "Modelo: 2071812",
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







    /////---------- pequeños ----------/////
/////---------- Multiprocesadoras ----------/////

    {
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
    subcategoria: "Multiprocesadoras",
    nombre: 'MultiProcesadora Atma LP8426NAP 9 en 1 650w 2vel + pulsador',
    imagen: "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_1.webp",
    imagenes: [
        "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_1.webp",
        "images/multiprocesadoras/MultiProcesadora_Atma_LP8426NAP_9_en_1_650w_2vel_pulsador_2.webp",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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

    {
    categoria: "pequeños",
    subcategoria: "Pavas eléctricas",
    nombre: 'Pava electrica Ultracomb PE 4907 2 lts cafe o mate',
    imagen: "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4907_2_lts_cafe_o_mate_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4907_2_lts_cafe_o_mate_1.webp",
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4907_2_lts_cafe_o_mate_2.webp",
        "images/pavas_electricas/Pava_electrica_Ultracomb_PE_4907_2_lts_cafe_o_mate_3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 2\n<strong>Potencia (W):</strong> 2200\n<strong>Apagado automático:</strong> Sí\n<strong>Corte para mate:</strong> Sí',
    codigo: "2070927",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2070927",
        "Garantía: 1 año"
    ]
},





         
         /////---------- Cafeteras ----------/////


    {
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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

 {
    categoria: "pequeños",
    subcategoria: "Tostadoras",
    nombre: 'Tostador Kanji TM0800',
    imagen: "images/tostadoras/Tostador_Kanji_TM0800_1.webp",
    imagenes: [
        "images/tostadoras/Tostador_Kanji_TM0800_1.webp",
        "images/tostadoras/Tostador_Kanji_TM0800_2.webp",
        "images/tostadoras/Tostador_Kanji_TM0800_3.webp",
        "images/tostadoras/Tostador_Kanji_TM0800_4.webp"
    ],
    descripcion: '<strong>Ranuras:</strong> 2\n<strong>Potencia (W):</strong> 800\n<strong>Niveles de tostado:</strong> 7',
    codigo: "2072259",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2072259",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Tostadoras",
    nombre: 'Tostador Philco TO20BPP Negro',
    imagen: "images/tostadoras/Tostador_Philco_TO20BPP_Negro_1.webp",
    imagenes: [
        "images/tostadoras/Tostador_Philco_TO20BPP_Negro_1.webp",
        "images/tostadoras/Tostador_Philco_TO20BPP_Negro_2.webp",
        "images/tostadoras/Tostador_Philco_TO20BPP_Negro_3.webp",
        "images/tostadoras/Tostador_Philco_TO20BPP_Negro_4.webp"
    ],
    descripcion: '<strong>Ranuras:</strong> 2\n<strong>Potencia (W):</strong> 700\n<strong>Niveles de tostado:</strong> 7',
    codigo: "2075440",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075440",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Tostadoras",
    nombre: 'Tostador Whitenblack WBATWB01 6niv. c/bandeja migas 700w',
    imagen: "images/tostadoras/Tostador_Whitenblack_WBATWB01_6niv_c_bandeja_migas_700w_1.webp",
    imagenes: [
        "images/tostadoras/Tostador_Whitenblack_WBATWB01_6niv_c_bandeja_migas_700w_1.webp",
        "images/tostadoras/Tostador_Whitenblack_WBATWB01_6niv_c_bandeja_migas_700w_2.webp",
        "images/tostadoras/Tostador_Whitenblack_WBATWB01_6niv_c_bandeja_migas_700w_3.webp"
    ],
    descripcion: '<strong>Ranuras:</strong> 2\n<strong>Potencia (W):</strong> 700\n<strong>Niveles de tostado:</strong> 6',
    codigo: "2075361",
    caracteristicas: [
        "Marca: Whitenblack",
        "Modelo: 2075361",
        "Garantía: 1 año"
    ]
},










    /////---------- batidoras ----------/////


 {
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    categoria: "pequeños",
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
    descripcion: '<strong>Tipo:</strong> Eléctrico\n<strong>Dimensiones:</strong> 54 x 45,1\n<strong>Capacidad (Litros):</strong> 55\n<strong>Conexiones:</strong> Inferior\n<strong>Alta recuperación:</strong> No\n<strong>Colgar o apoyar:</strong> Colgar\n<strong>Eficiencia energética:</strong> Clase C',
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
    imagen: "images/calefaccion_electrica/Calefactor_Whitenblack_infrarojo_WBCIWB02_500_1000W_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Calefactor_Whitenblack_infrarojo_WBCIWB02_500_1000W_1.webp"
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
    imagen: "images/calefaccion_electrica/Calefactor_Whitenblack_WBCIWB05_infrarrojo_Negro_700_1400w_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Calefactor_Whitenblack_WBCIWB05_infrarrojo_Negro_700_1400w_1.webp"
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
    imagen: "images/calefaccion_electrica/Calefactor_Whitenblack_WBPVWB01_pie_pared_600_1200w_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Calefactor_Whitenblack_WBPVWB01_pie_pared_600_1200w_1.webp"
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
    imagen: "images/calefaccion_electrica/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_1.webp",
        "images/calefaccion_electrica/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_2.webp",
        "images/calefaccion_electrica/Calefactor_Crivel_E15_Q_3__Fijo_1400_W_3.webp"
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
    imagen: "images/calefaccion_electrica/Crivel_Steel_home_E22_Q3_Ost_Oscilante_Con_Turbo_700_1400Wts_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Crivel_Steel_home_E22_Q3_Ost_Oscilante_Con_Turbo_700_1400Wts_1.webp"
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
    imagen: "images/calefaccion_electrica/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_1.webp",
        "images/calefaccion_electrica/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_2.webp",
        "images/calefaccion_electrica/Calefactor_Liliana_CV027_vertical_cuarzo_Infrarrojo_3.webp"
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

{
    categoria: "Climatización",
    subcategoria: "Calefacción a gas",
    nombre: 'Calefactor Volcan 4000 43512/43516 Gris Sin salida',
    imagen: "images/calefactor_a_gas/Calefactor_Volcan_4000_43512_43516_Gris_Sin_salida_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Volcan_4000_43512_43516_Gris_Sin_salida_1.webp",
        "images/calefactor_a_gas/Calefactor_Volcan_4000_43512_43516_Gris_Sin_salida_2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc):</strong> 63 x 50\n<strong>Sin salida:</strong> Sí\n<strong>Potencia (Kcal):</strong> 4000\n<strong>Tipo de gas:</strong> Gas natural',
    codigo: "14555",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14555",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Philco PHCS07B carga superior 5.5kg 750RPM Gris',
    imagen: "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_1.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_2.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_3.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_4.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_5.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_6.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_7.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_8.webp",
        "images/lavarropas/Lavarropas_Philco_PHCS07B_carga_superior_5_5kg_750RPM_Gris_9.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 750',
    codigo: "2075387",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075387",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Notebooks",
    nombre: 'Notebook EXO Celeron 4/128 GB 14.1" Smart XR2A/R41/T38 N4020 W11',
    imagen: "images/notebooks/Notebook_EXO_Celeron_4_128_GB_14_1_Smart_XR2A_R41_T38_N4020_W11_1.webp",
    imagenes: [
        "images/notebooks/Notebook_EXO_Celeron_4_128_GB_14_1_Smart_XR2A_R41_T38_N4020_W11_1.webp",
        "images/notebooks/Notebook_EXO_Celeron_4_128_GB_14_1_Smart_XR2A_R41_T38_N4020_W11_2.webp",
        "images/notebooks/Notebook_EXO_Celeron_4_128_GB_14_1_Smart_XR2A_R41_T38_N4020_W11_3.webp",
        "images/notebooks/Notebook_EXO_Celeron_4_128_GB_14_1_Smart_XR2A_R41_T38_N4020_W11_4.webp"
    ],
    descripcion: '<strong>Procesador:</strong> Intel Celeron\n<strong>RAM (GB):</strong> 4\n<strong>Almacenamiento (GB):</strong> 128\n<strong>Tamaño de pantalla (pulgadas):</strong> 14,1"\n<strong>Sistema operativo:</strong> Windows 11',
    codigo: "2074900",
    caracteristicas: [
        "Marca: Exo",
        "Modelo: 2074900",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Notebooks",
    nombre: 'Notebook Daewoo Core i3 8/256 SSD 15.6" 1025G1 FHD Win 11',
    imagen: "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_1.webp",
    imagenes: [
        "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_1.webp",
        "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_2.webp",
        "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_3.webp",
        "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_4.webp",
        "images/notebooks/Notebook_Daewoo_Core_i3_8_256_SSD_15_6_1025G1_FHD_Win_11_5.webp"
    ],
    descripcion: '<strong>Procesador:</strong> Intel Core i3\n<strong>RAM (GB):</strong> 8\n<strong>Almacenamiento (GB):</strong> 256\n<strong>Tamaño de pantalla (pulgadas):</strong> 15,6"\n<strong>Sistema operativo:</strong> Windows 11',
    codigo: "2075389",
    caracteristicas: [
        "Marca: Daewoo",
        "Modelo: 2075389",
        "Garantía: 1 año"
    ]
},
{
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Jardin",
    nombre: 'Cort. Cesped Kawi ECOR 350  PLASTICO 1/2 HP',
    imagen: "images/jardín/Cort_Cesped_Kawi_ECOR_350_PLASTICO_1_2_HP_1.webp",
    imagenes: [
        "images/jardín/Cort_Cesped_Kawi_ECOR_350_PLASTICO_1_2_HP_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Cortadora de césped eléctrica\n<strong>Potencia (HP):</strong> 1/2\n<strong>Eléctrica:</strong> Sí\n<strong>Bolsa recolectora:</strong> Sí',
    codigo: "12638",
    caracteristicas: [
        "Marca: Kawi",
        "Modelo: 12638",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Jardin",
    nombre: 'Cort. Cesped Kawi ECOR 370 Plastico 3/4 HP',
    imagen: "images/jardín/Cort_Cesped_Kawi_ECOR_370_Plastico_3_4_HP_1.webp",
    imagenes: [
        "images/jardín/Cort_Cesped_Kawi_ECOR_370_Plastico_3_4_HP_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Cortadora de césped eléctrica\n<strong>Potencia (HP):</strong> 3/4\n<strong>Eléctrica:</strong> Sí\n<strong>Bolsa recolectora:</strong> Sí',
    codigo: "12639",
    caracteristicas: [
        "Marca: Kawi",
        "Modelo: 12639",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Purificadores",
    nombre: 'Purific. Spar 3776 ancho 60cm 2 motores 3v Bios Duo',
    imagen: "images/purificadores/Purific_Spar_3776_ancho_60cm_2_motores_3v_Bios_Duo_1.webp",
    imagenes: [
        "images/purificadores/Purific_Spar_3776_ancho_60cm_2_motores_3v_Bios_Duo_1.webp"
    ],
    descripcion: '<strong>Color:</strong> Blanco\n<strong>Funciones:</strong> Purificador y extractor\n<strong>Cantidad de motores:</strong> 2\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 15 x 60 x 52.5\n<strong>Luz:</strong> Sí',
    codigo: "12662",
    caracteristicas: [
        "Marca: Spar",
        "Modelo: 12662",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 BLO btra s/enc. 14l. bl. gn',
    imagen: "images/calefones/Calefon_Orbis_315_BLO_btra_s_enc_14l_bl_gn_1.webp",
    imagenes: [
        "images/calefones/Calefon_Orbis_315_BLO_btra_s_enc_14l_bl_gn_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 14\n<strong>Tiraje:</strong> Tiro natural',
    codigo: "14021",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 14021",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Volcan 315 BFV 14lts',
    imagen: "images/calefones/Calefon_Volcan_315_BFV_14lts_1.webp",
    imagenes: [
        "images/calefones/Calefon_Volcan_315_BFV_14lts_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 14\n<strong>Tiraje:</strong> Tiro natural',
    codigo: "14550",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14550",
        "Garantía: 1 año"
    ]
},








            ////// 18 07 20 25/////
   {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Lucky 190x80x17',
    imagen: "images/colchones/Colchon_Suav_Lucky_190_80_17_1.webp",
    imagenes: [
        "images/colchones/Colchon_Suav_Lucky_190_80_17_1.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 17\n<strong>Espuma:</strong> Sí',
    codigo: "14177",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 14177",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Volcan 315 BRV c/enc. 14lts',
    imagen: "images/calefones/Calefon_Volcan_315_BRV_c_enc_14lts_1.webp",
    imagenes: [
        "images/calefones/Calefon_Volcan_315_BRV_c_enc_14lts_1.webp",
        "images/calefones/Calefon_Volcan_315_BRV_c_enc_14lts_2.webp"
    ],
    descripcion: '<strong>Capacidad (L/h):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de encendido:</strong> Piezoeléctrico\n<strong>Tipo de control:</strong> Perilla\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "14551",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 14551",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Almohadas",
    nombre: 'Almohada Suav. TNT  70X40',
    imagen: "images/almohadas/Almohada_Suav_TNT_70_40_1.webp",
    imagenes: [
        "images/almohadas/Almohada_Suav_TNT_70_40_1.webp"
    ],
    descripcion: '<strong>Materiales del relleno:</strong> Fibra de poliéster\n<strong>Dimensiones (Largo x Ancho x Espesor):</strong> 70 x 14 x 40',
    codigo: "17167",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 17167",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefacción a gas",
    nombre: 'Calefactor Eskabe S21 T/B 2.0 Aroma Marfil',
    imagen: "images/calefactor_a_gas/Calefactor_Eskabe_S21_T_B_2_0_Aroma_Marfil_1.webp",
    imagenes: [
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_T_B_2_0_Aroma_Marfil_1.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_T_B_2_0_Aroma_Marfil_2.webp",
        "images/calefactor_a_gas/Calefactor_Eskabe_S21_T_B_2_0_Aroma_Marfil_3.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc):</strong> 50 x 34,6\n<strong>Tiro balanceado:</strong> Sí\n<strong>Potencia (Kcal):</strong> 2000\n<strong>Tipo de gas:</strong> Multigas',
    codigo: "17799",
    caracteristicas: [
        "Marca: Eskabe",
        "Modelo: 17799",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Universal CU 146 14 lts.24521 ge  s/enc. c/sensor',
    imagen: "images/calefones/Calefon_Universal_CU_146_14_lts_24521_ge_s_enc_c_sensor_1.webp",
    imagenes: [
        "images/calefones/Calefon_Universal_CU_146_14_lts_24521_ge_s_enc_c_sensor_1.webp"
    ],
    descripcion: '<strong>Capacidad (L/h):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas envasado\n<strong>Tipo de encendido:</strong> Manual\n<strong>Tipo de control:</strong> Perilla\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase E',
    codigo: "18353",
    caracteristicas: [
        "Marca: Universal",
        "Modelo: 18353",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. EXTRA TM 190x80x18 esp.',
    imagen: "images/colchones/Colchon_Suav_EXTRA_TM_190_80_18_esp_1.webp",
    imagenes: [
        "images/colchones/Colchon_Suav_EXTRA_TM_190_80_18_esp_1.webp",
        "images/colchones/Colchon_Suav_EXTRA_TM_190_80_18_esp_2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 18\n<strong>Espuma:</strong> Sí',
    codigo: "18799",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 18799",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Bicicletas",
    nombre: 'Bici. Futura Paseo R26 Dama Acero 3577 Country Full City Cruiser c/Canasto y Portaequipaje',
    imagen: "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_1.webp",
    imagenes: [
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_1.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_2.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_3.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_4.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_5.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_6.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_7.webp",
        "images/bicicletas/Bici_Futura_Paseo_R26_Dama_Acero_3577_Country_Full_City_Cruiser_c_Canasto_y_Portaequipaje_8.webp"
    ],
    descripcion: '<strong>Estilo:</strong> Touring\n<strong>Material:</strong> Acero\n<strong>Rodado:</strong> 26\n<strong>Tipo de frenos:</strong> V Brake\n<strong>Canasto:</strong> Sí\n<strong>Portaequipaje:</strong> Sí',
    codigo: "19402",
    caracteristicas: [
        "Marca: Futura",
        "Modelo: 19402",
        "Garantía: 1 año"
    ]
},
{
    categoria: "Cuidado Personal",
    subcategoria: "Cortadoras de Pelo y Barba",
    nombre: 'Corta Pelo Westinghouse WHHCL603',
    imagen: "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_1.webp",
    imagenes: [
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_1.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_2.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_3.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_4.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_5.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL603_6.webp"
    ],
    descripcion: '<strong>Apto pelo:</strong> Sí\n<strong>Apto barba:</strong> Sí\n<strong>Potencia (W):</strong> 5\n<strong>Autonomía (min):</strong> 120\n<strong>Inalámbrica:</strong> Sí\n<strong>Peines guía:</strong> 3 a 12mm',
    codigo: "2074526",
    caracteristicas: [
        "Marca: Westinghouse",
        "Modelo: 2074526",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cuidado Personal",
    subcategoria: "Cortadoras de Pelo y Barba",
    nombre: 'Corta Pelo Westinghouse WHHCL908',
    imagen: "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL908_1.webp",
    imagenes: [
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL908_1.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL908_2.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL908_3.webp",
        "images/cortadoras_pelo_barba/Corta_Pelo_Westinghouse_WHHCL908_4.webp"
    ],
    descripcion: '<strong>Apto pelo:</strong> Sí\n<strong>Potencia (W):</strong> 9\n<strong>Peines guía:</strong> 3 a 12mm',
    codigo: "2073402",
    caracteristicas: [
        "Marca: Westinghouse",
        "Modelo: 2073402",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Exprimidores y Jugueras",
    nombre: 'Exprimidor Ultracomb EX 2302 25 wts',
    imagen: "images/exprimidores_jugueras/Exprimidor_Ultracomb_EX_2302_25_wts_1.webp",
    imagenes: [
        "images/exprimidores_jugueras/Exprimidor_Ultracomb_EX_2302_25_wts_1.webp",
        "images/exprimidores_jugueras/Exprimidor_Ultracomb_EX_2302_25_wts_2.webp",
        "images/exprimidores_jugueras/Exprimidor_Ultracomb_EX_2302_25_wts_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 25\n<strong>Capacidad (Litros):</strong> 500ml\n<strong>Tipo:</strong> Exprimidor',
    codigo: "2072616",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2072616",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Almohadas",
    nombre: 'Almohada Suav. Bienestar Fibra 70x40',
    imagen: "images/almohadas/Almohada_Suav_Bienestar_Fibra_70_40_1.webp",
    imagenes: [
        "images/almohadas/Almohada_Suav_Bienestar_Fibra_70_40_1.webp"
    ],
    descripcion: '<strong>Materiales del relleno:</strong> Fibra de poliéster\n<strong>Dimensiones (Largo x Ancho x Espesor):</strong> 70 x 40 x 40',
    codigo: "2074475",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2074475",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Batidoras",
    nombre: 'Batidora Kanji de mano  KJH-BL0300HM01W Blanca',
    imagen: "images/Batidoras/Batidora_Kanji_de_mano_KJH_BL0300HM01W_Blanca_1.webp",
    imagenes: [
        "images/Batidoras/Batidora_Kanji_de_mano_KJH_BL0300HM01W_Blanca_1.webp",
        "images/Batidoras/Batidora_Kanji_de_mano_KJH_BL0300HM01W_Blanca_2.webp",
        "images/Batidoras/Batidora_Kanji_de_mano_KJH_BL0300HM01W_Blanca_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 300\n<strong>Velocidades:</strong> 7\n<strong>Accesorios incluidos:</strong> Amasador',
    codigo: "2075404",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075404",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Exprimidores y Jugueras",
    nombre: 'Exprimidor Kanji JM045 40w',
    imagen: "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_1.webp",
    imagenes: [
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_1.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_2.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_3.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_4.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_5.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_6.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_7.webp",
        "images/exprimidores_jugueras/Exprimidor_Kanji_JM045_40w_8.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 40\n<strong>Capacidad (Litros):</strong> 700ml\n<strong>Tipo:</strong> Exprimidor',
    codigo: "2073926",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2073926",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Palace Cristal Blanca LX ge',
    imagen: "images/cocinas/Cocina_Escorial_Palace_Cristal_Blanca_LX_ge_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Blanca_LX_ge_1.webp",
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Blanca_LX_ge_2.webp",
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Blanca_LX_ge_3.webp",
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Blanca_LX_ge_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 51 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo:</strong> Envasado\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "15761",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 15761",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Eslabon de lujo EFM56B/56AB/NB 56cm blanca',
    imagen: "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_1.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_2.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_3.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_4.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_5.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_6.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_7.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_8.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_9.webp",
        "images/cocinas/Cocina_Eslabon_de_lujo_EFM56B_56AB_NB_56cm_blanca_10.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 61\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "19180",
    caracteristicas: [
        "Marca: Eslabon de lujo",
        "Modelo: 19180",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Irina 900 Acero Pta Visor 3230',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Irina_900_Acero_Pta_Visor_3230_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Irina_900_Acero_Pta_Visor_3230_1.webp",
        "images/cocinas/Cocina_Usman_Industrial_Irina_900_Acero_Pta_Visor_3230_2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 90 x 61\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 6\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2071991",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2071991",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Irina 550 Acero Pta Visor 2220',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Irina_550_Acero_Pta_Visor_2220_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Irina_550_Acero_Pta_Visor_2220_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 55 x 61\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072243",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2072243",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Palace Cristal Negra LX GN',
    imagen: "images/cocinas/Cocina_Escorial_Palace_Cristal_Negra_LX_GN_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Negra_LX_GN_1.webp",
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Negra_LX_GN_2.webp",
        "images/cocinas/Cocina_Escorial_Palace_Cristal_Negra_LX_GN_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 50 x 52\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo:</strong> Natural\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072492",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2072492",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Acero Pta visor 55cm 16045',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Acero_Pta_visor_55cm_16045_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Acero_Pta_visor_55cm_16045_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Acero_Pta_visor_55cm_16045_2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 55 x 65\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072701",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072701",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Acero Pta visor 82cm 16062',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Acero_Pta_visor_82cm_16062_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Acero_Pta_visor_82cm_16062_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 82 x 61\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 5\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072702",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072702",
        "Garantía: 1 año"
    ]
},

{
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Zafira 900 Pta visor 5 hornallas 18019',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Zafira_900_Pta_visor_5_hornallas_18019_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Zafira_900_Pta_visor_5_hornallas_18019_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 X 90 X 61\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 5\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072969",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072969",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Master Style Multigas Black',
    imagen: "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_1.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_2.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_3.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_4.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_5.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_6.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_7.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Black_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 X 56 X 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073911",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2073911",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Master Style Multigas Inox',
    imagen: "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Inox_1.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Inox_2.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Inox_3.webp",
        "images/cocinas/Cocina_Escorial_Master_Style_Multigas_Inox_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 61\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073912",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2073912",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Master Classic ge Blanca',
    imagen: "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_1.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_2.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_3.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_4.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_ge_Blanca_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Envasado\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073931",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2073931",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 8637F/E Electrica Vitroceramico 3 focos Negro',
    imagen: "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_1.webp",
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_2.webp",
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_3.webp",
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_4.webp",
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_5.webp",
        "images/cocinas/Cocina_Florencia_8637F_E_Electrica_Vitroceramico_3_focos_Negro_6.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo:</strong> Eléctrico\n<strong>Cantidad de hornallas:</strong> 3\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074146",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2074146",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina TELEFUNKEN EKX001V Inox 50x50 electrica',
    imagen: "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_1.webp",
    imagenes: [
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_1.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_2.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_3.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_4.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_5.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_6.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_7.webp",
        "images/cocinas/Cocina_TELEFUNKEN_EKX001V_Inox_50x50_electrica_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 50 x 52\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo:</strong> Eléctrico\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075478",
    caracteristicas: [
        "Marca: TELEFUNKEN",
        "Modelo: 2075478",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Drean CD5602AIO 56cm inox gas',
    imagen: "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_1.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_2.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_3.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_4.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_5.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_6.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_7.webp",
        "images/cocinas/Cocina_Drean_CD5602AIO_56cm_inox_gas_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075496",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075496",
        "Garantía: 1 año"
    ]
},

{
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora por aire Ultracomb FR8612 3 lts 1200w',
    imagen: "images/freidoras/Freidora_por_aire_Ultracomb_FR8612_3_lts_1200w_1.webp",
    imagenes: [
        "images/freidoras/Freidora_por_aire_Ultracomb_FR8612_3_lts_1200w_1.webp",
        "images/freidoras/Freidora_por_aire_Ultracomb_FR8612_3_lts_1200w_2.webp",
        "images/freidoras/Freidora_por_aire_Ultracomb_FR8612_3_lts_1200w_3.webp",
        "images/freidoras/Freidora_por_aire_Ultracomb_FR8612_3_lts_1200w_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 3\n<strong>Potencia (W):</strong> 1200',
    codigo: "2075091",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2075091",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora Philco de aire FR256PHP 6lts digital',
    imagen: "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_1.webp",
    imagenes: [
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_1.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_2.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_3.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_4.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_5.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_6.webp",
        "images/freidoras/Freidora_Philco_de_aire_FR256PHP_6lts_digital_7.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 6\n<strong>Potencia (W):</strong> 1700',
    codigo: "2075461",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075461",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Freidoras",
    nombre: 'Freidora kanji de aire 12lts Digital',
    imagen: "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_1.webp",
    imagenes: [
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_1.webp",
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_2.webp",
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_3.webp",
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_4.webp",
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_5.webp",
        "images/freidoras/Freidora_kanji_de_aire_12lts_Digital_6.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 12\n<strong>Potencia (W):</strong> 2200',
    codigo: "2075348",
    caracteristicas: [
        "Marca: kanji",
        "Modelo: 2075348",
        "Garantía: 1 año"
    ]
},






 //// 25 07 2025 ////  


     {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Pie Liliana ORBITAL VPRN20 20" ASPAS PLASTICA- PARRILLA MET. NEGRA',
    imagen: "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN20_20_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN20_20_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_1.webp",
        "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN20_20_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Pie\n<strong>Potencia (W):</strong> 90\n<strong>Pulgadas:</strong> 20\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Orbital:</strong> Sí',
    codigo: "2070632",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2070632",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Turbo Liliana 20" VBTR20/VVOTR20  c/Repeler cromado aspas met.',
    imagen: "images/ventilacion/Turbo_Liliana_20_VBTR20_VVOTR20 _c_Repeler_cromado_aspas_met_1.webp",
    imagenes: [
        "images/ventilacion/Turbo_Liliana_20_VBTR20_VVOTR20 _c_Repeler_cromado_aspas_met_1.webp",
        "images/ventilacion/Turbo_Liliana_20_VBTR20_VVOTR20 _c_Repeler_cromado_aspas_met_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Mesa\n<strong>Potencia (W):</strong> 90\n<strong>Pulgadas:</strong> 20\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Metal\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Orbital:</strong> Sí',
    codigo: "2070712",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2070712",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefacción eléctrica",
    nombre: 'Caloventor Split Liliana WD900 CONFORTEMPO 1000/2000W',
    imagen: "images/calefaccion_electrica/Caloventor_Split_Liliana_WD900_CONFORTEMPO_1000_2000_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Caloventor_Split_Liliana_WD900_CONFORTEMPO_1000_2000_1.webp",
        "images/calefaccion_electrica/Caloventor_Split_Liliana_WD900_CONFORTEMPO_1000_2000_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Caloventor\n<strong>Potencia (W):</strong> 2000\n<strong>Termostato:</strong> Sí\n<strong>Pared:</strong> Sí\n<strong>Control remoto:</strong> Sí',
    codigo: "2070923",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2070923",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Pie Eiffel 18" E-518 90W 3 en 1',
    imagen: "images/ventilacion/Vent_Pie_Eiffel_18_E_518_90W_3_en_1_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Pie_Eiffel_18_E_518_90W_3_en_1_1.webp",
        "images/ventilacion/Vent_Pie_Eiffel_18_E_518_90W_3_en_1_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> 3 en 1\n<strong>Potencia (W):</strong> 90\n<strong>Pulgadas:</strong> 18\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Metal\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Oscilación:</strong> Sí',
    codigo: "2074628",
    caracteristicas: [
        "Marca: Eiffel",
        "Modelo: 2074628",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Pie Liliana ORBITAL VPRN18 18" ASPAS PLASTICA- PARRILLA MET. NEGRA',
    imagen: "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN18_18_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN18_18_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_1.webp",
        "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN18_18_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_2.webp",
        "images/ventilacion/Vent_Pie_Liliana_ORBITAL_VPRN18_18_ASPAS_PLASTICA_PARRILLA_MET_NEGRA_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Pie\n<strong>Potencia (W):</strong> 75\n<strong>Pulgadas:</strong> 18\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Oscilación:</strong> Sí',
    codigo: "2071059",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071059",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Pie Liliana VVP20P 20" 5 aspas plasticas 90w',
    imagen: "images/ventilacion/Vent_Pie_Liliana_VVP20P_20_5_aspas_plasticas_90w_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Pie_Liliana_VVP20P_20_5_aspas_plasticas_90w_1.webp",
        "images/ventilacion/Vent_Pie_Liliana_VVP20P_20_5_aspas_plasticas_90w_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Pie\n<strong>Potencia (W):</strong> 90\n<strong>Pulgadas:</strong> 20\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Plastico\n<strong>Cantidad de aspas:</strong> 5\n<strong>Oscilación:</strong> Sí',
    codigo: "2072916",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2072916",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Turbo Kanji 20" KJH-FH2010 Plastic',
    imagen: "images/ventilacion/Turbo_Kanji_20_KJH_FH2010_Plastic_1.webp",
    imagenes: [
        "images/ventilacion/Turbo_Kanji_20_KJH_FH2010_Plastic_1.webp",
        "images/ventilacion/Turbo_Kanji_20_KJH_FH2010_Plastic_2.webp",
        "images/ventilacion/Turbo_Kanji_20_KJH_FH2010_Plastic_3.webp",
        "images/ventilacion/Turbo_Kanji_20_KJH_FH2010_Plastic_4.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Turbo\n<strong>Potencia (W):</strong> 80\n<strong>Pulgadas:</strong> 20\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Plastico\n<strong>Cantidad de aspas:</strong> 5',
    codigo: "2074648",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2074648",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Mesa Liliana 16" VM1614/VVS0C16 ORBITAL PARR CROMADO',
    imagen: "images/ventilacion/Vent_Mesa_Liliana_16_VM1614_VVS0C16_ORBITAL_PARR_CROMADO_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Mesa_Liliana_16_VM1614_VVS0C16_ORBITAL_PARR_CROMADO_1.webp",
        "images/ventilacion/Vent_Mesa_Liliana_16_VM1614_VVS0C16_ORBITAL_PARR_CROMADO_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Mesa\n<strong>Potencia (W):</strong> 65\n<strong>Pulgadas:</strong> 16\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Orbital:</strong> Sí',
    codigo: "2070144",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2070144",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Bicicletas",
    nombre: 'Bici. Futura BMX R12 Nene Acero 2012 nacional c/pedales y estabilizadores',
    imagen: "images/bicicletas/Bici_Futura_BMX_R12_Nene_Acero_2012_nacional_c_pedales_y_estabilizadores_1.webp",
    imagenes: [
        "images/bicicletas/Bici_Futura_BMX_R12_Nene_Acero_2012_nacional_c_pedales_y_estabilizadores_1.webp"
    ],
    descripcion: '<strong>Estilo:</strong> BMX\n<strong>Material:</strong> Acero\n<strong>Rodado:</strong> 12\n<strong>Tipo de frenos:</strong> V Brake',
    codigo: "2070772",
    caracteristicas: [
        "Marca: Futura",
        "Modelo: 2070772",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Pie Liliana 20" VPCD20/VPD20R Digital c/ remoto- timer',
    imagen: "images/ventilacion/Vent_Pie_Liliana_20_VPCD20_VPD20R_Digital_c_remoto_timer_1.webp",
    imagenes: [
        "images/ventilacion/Vent_Pie_Liliana_20_VPCD20_VPD20R_Digital_c_remoto_timer_1.webp",
        "images/ventilacion/Vent_Pie_Liliana_20_VPCD20_VPD20R_Digital_c_remoto_timer_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Pie\n<strong>Potencia (W):</strong> 90\n<strong>Pulgadas:</strong> 20\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Metal\n<strong>Tipo de rejilla:</strong> Metal\n<strong>Cantidad de aspas:</strong> 3\n<strong>Control remoto:</strong> Sí\n<strong>Orbital:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Repelente:</strong> Sí',
    codigo: "2071561",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071561",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefacción eléctrica",
    nombre: 'Caloventor Crivel Electrico De Pared 1000/2000W Timer Programable',
    imagen: "images/calefaccion_electrica/Caloventor_Crivel_Electrico_De_Pared_1000_2000W_Timer_Programable_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Caloventor_Crivel_Electrico_De_Pared_1000_2000W_Timer_Programable_1.webp",
        "images/calefaccion_electrica/Caloventor_Crivel_Electrico_De_Pared_1000_2000W_Timer_Programable_2.webp",
        "images/calefaccion_electrica/Caloventor_Crivel_Electrico_De_Pared_1000_2000W_Timer_Programable_3.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Caloventor\n<strong>Potencia (W):</strong> 2000\n<strong>Termostato:</strong> Sí\n<strong>Pared:</strong> Sí\n<strong>Control remoto:</strong> Sí',
    codigo: "2071920",
    caracteristicas: [
        "Marca: Crivel",
        "Modelo: 2071920",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Calefacción eléctrica",
    nombre: 'Convector Eiffel E-544 1000Wts a 1200Wts',
    imagen: "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_1.webp",
    imagenes: [
        "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_1.webp",
        "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_2.webp",
        "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_3.webp",
        "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_4.webp",
        "images/calefaccion_electrica/Convector_Eiffel_E_544_1000Wts_a_1200Wts_5.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Convector\n<strong>Potencia (W):</strong> 1200\n<strong>Termostato:</strong> Sí',
    codigo: "2072435",
    caracteristicas: [
        "Marca: Eiffel",
        "Modelo: 2072435",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Vent. Mesa Liliana 16" VVSOP16 osc/parr-plas/aspas-plasticas',
    imagen: "images/ventilacion/vent_mesa_liliana_16_vvsop16_osc_parr_plas_aspas_plasticas_1.webp",
    imagenes: [
        "images/ventilacion/vent_mesa_liliana_16_vvsop16_osc_parr_plas_aspas_plasticas_1.webp",
        "images/ventilacion/vent_mesa_liliana_16_vvsop16_osc_parr_plas_aspas_plasticas_2.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Mesa\n<strong>Potencia (W):</strong> 65\n<strong>Pulgadas:</strong> 16\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Plastico\n<strong>Cantidad de aspas:</strong> 5\n<strong>Oscilación:</strong> Sí',
    codigo: "2073543",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2073543",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Ventilación",
    nombre: 'Turbo Liliana 10" Reclinable VTF10P pie/pared 3 aspas',
    imagen: "images/ventilacion/Turbo_Liliana_10_Reclinable_VTF10P_pie_pared _3_aspas_1.webp",
    imagenes: [
        "images/ventilacion/Turbo_Liliana_10_Reclinable_VTF10P_pie_pared _3_aspas_1.webp",
        "images/ventilacion/Turbo_Liliana_10_Reclinable_VTF10P_pie_pared _3_aspas_2.webp",
        "images/ventilacion/Turbo_Liliana_10_Reclinable_VTF10P_pie_pared _3_aspas_3.webp",
        "images/ventilacion/Turbo_Liliana_10_Reclinable_VTF10P_pie_pared _3_aspas_4.webp"
    ],
    descripcion: '<strong>Tipo:</strong> Turbo/Pared\n<strong>Potencia (W):</strong> 35\n<strong>Pulgadas:</strong> 10\n<strong>Velocidades:</strong> 3\n<strong>Tipo de aspas:</strong> Plastico\n<strong>Tipo de rejilla:</strong> Plastico\n<strong>Cantidad de aspas:</strong> 3',
    codigo: "2073545",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2073545",
        "Garantía: 1 año"
    ]
},






////   30 07 2025  ////


{
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Hitachi Split 6400 kw Inverter HSPE6400FCINV Neo',
    imagen: "images/aires_acondicionados/Acond_Hitachi_Split_6400_kw_Inverter_HSPE6400FCINV_Neo_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Hitachi_Split_6400_kw_Inverter_HSPE6400FCINV_Neo_1.webp",
        "images/aires_acondicionados/Acond_Hitachi_Split_6400_kw_Inverter_HSPE6400FCINV_Neo_2.webp",
        "images/aires_acondicionados/Acond_Hitachi_Split_6400_kw_Inverter_HSPE6400FCINV_Neo_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 6400\n<strong>Tipo:</strong> Split\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074543",
    caracteristicas: [
        "Marca: Hitachi",
        "Modelo: 2074543",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Almohadas",
    nombre: 'Almohada Suav. Bienestar Microesferas 70x50',
    imagen: "images/almohadas/Almohada_Suav_Bienestar_Microesferas_70_50_1.webp",
    imagenes: [
        "images/almohadas/Almohada_Suav_Bienestar_Microesferas_70_50_1.webp",
        "images/almohadas/Almohada_Suav_Bienestar_Microesferas_70_50_2.webp",
        "images/almohadas/Almohada_Suav_Bienestar_Microesferas_70_50_3.webp"
    ],
    descripcion: '<strong>Materiales del relleno:</strong> Fibra de poliéster\n<strong>Dimensiones (Largo x Ancho x Espesor):</strong> 70 x 50',
    codigo: "2074005",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2074005",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Almohadas",
    nombre: 'Almohada Suav. THERMOSENSE VISCO COMUN 65X35',
    imagen: "images/almohadas/Almohada_Suav_THERMOSENSE_VISCO_COMUN_65_35_1.webp",
    imagenes: [
        "images/almohadas/Almohada_Suav_THERMOSENSE_VISCO_COMUN_65_35_1.webp",
        "images/almohadas/Almohada_Suav_THERMOSENSE_VISCO_COMUN_65_35_2.webp",
        "images/almohadas/Almohada_Suav_THERMOSENSE_VISCO_COMUN_65_35_3.webp",
        "images/almohadas/Almohada_Suav_THERMOSENSE_VISCO_COMUN_65_35_4.webp"
    ],
    descripcion: '<strong>Materiales del relleno:</strong> Fibra de poliéster\n<strong>Dimensiones (Largo x Ancho x Espesor):</strong> 65 x 35\n<strong>Es inteligente:</strong> Sí',
    codigo: "20773",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 20773",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Candor Black ge',
    imagen: "images/cocinas/Cocina_Escorial_Candor_Black_ge_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Candor_Black_ge_1.webp",
        "images/cocinas/Cocina_Escorial_Candor_Black_ge_2.webp",
        "images/cocinas/Cocina_Escorial_Candor_Black_ge_3.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 50 x 54 \n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Envasado\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072622",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2072622",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Win 55cm 4 Hornallas p/v 4004',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Win_55cm_4_Hornallas_p_v_4004_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Win_55cm_4_Hornallas_p_v_4004_1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072651",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2072651",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5537/F Ngra. enc. electr. con Timer',
    imagen: "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_1.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_2.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_3.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_4.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_5.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_6.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_7.webp",
        "images/cocinas/Cocina_Florencia_5537_F_Negra_enc_electr_con_Timer_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072847",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072847",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Sonic Black p/v r/a 7766',
    imagen: "images/cocinas/Cocina_Usman_Industrial_Sonic_Black_p_v_r_a_7766_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Usman_Industrial_Sonic_Black_p_v_r_a_7766_1.webp",
        "images/cocinas/Cocina_Usman_Industrial_Sonic_Black_p_v_r_a_7766_2.webp",
        "images/cocinas/Cocina_Usman_Industrial_Sonic_Black_p_v_r_a_7766_3.webp",
        "images/cocinas/Cocina_Usman_Industrial_Sonic_Black_p_v_r_a_7766_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 X 55 X 61\n<strong>Válvula de seguridad:</strong> No\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074076",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2074076",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial Ex Acero 550 p/v r/f 55cm 16090',
    imagen: "images/cocinas/Cocina_Morelli_Industrial_Ex_Acero_550_p_v_r_f_55cm_16090_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Morelli_Industrial_Ex_Acero_550_p_v_r_f_55cm_16090_1.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Ex_Acero_550_p_v_r_f_55cm_16090_2.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Ex_Acero_550_p_v_r_f_55cm_16090_3.webp",
        "images/cocinas/Cocina_Morelli_Industrial_Ex_Acero_550_p_v_r_f_55cm_16090_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 55 x 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074705",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2074705",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5818 Semi-Industrial Inox 56 cm multigas',
    imagen: "images/cocinas/Cocina_Florencia_5818_Semi_Industrial_Inox_56_cm_multigas_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5818_Semi_Industrial_Inox_56_cm_multigas_1.webp",
        "images/cocinas/Cocina_Florencia_5818_Semi_Industrial_Inox_56_cm_multigas_2.webp",
        "images/cocinas/Cocina_Florencia_5818_Semi_Industrial_Inox_56_cm_multigas_3.webp",
        "images/cocinas/Cocina_Florencia_5818_Semi_Industrial_Inox_56_cm_multigas_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074710",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2074710",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5838 Semi-Industrial Inox 56 cm multigas s/valvula',
    imagen: "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_1.webp",
        "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_2.webp",
        "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_3.webp",
        "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_4.webp",
        "images/cocinas/Cocina_Florencia_5838_Semi_Industrial_Inox_56_cm_multigas_s_valvula_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 61\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074711",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2074711",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Master Classic gn Inox',
    imagen: "images/cocinas/Cocina_Escorial_Master_Classic_gn_Inox_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Escorial_Master_Classic_gn_Inox_1.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_gn_Inox_2.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_gn_Inox_3.webp",
        "images/cocinas/Cocina_Escorial_Master_Classic_gn_Inox_4.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Natural\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075008",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2075008",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5838S Semi-Industrial c/valvula-enc-timer 56cm inox mg',
    imagen: "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_1.webp",
        "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_2.webp",
        "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_3.webp",
        "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_4.webp",
        "images/cocinas/Cocina_Florencia_5838S_Semi_Industrial_c_valvula_enc_timer_56cm_inox_mg_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075239",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2075239",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5818S Semi-Industrial c/valvula seg. Inox 56 cm multigas',
    imagen: "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_1.webp",
        "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_2.webp",
        "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_3.webp",
        "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_4.webp",
        "images/cocinas/Cocina_Florencia_5818S_Semi_Industrial_c_valvula_seg_Inox_56_cm_multigas_5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Envasado\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075503",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2075503",
        "Garantía: 1 año"
    ]
},



////    01 07 2025   ////


    {
    categoria: "heladeras y freezers",
    nombre: 'Heladera Philco PHCT242B ciclica Top Mount 231lts Blanca',
    imagen: "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_1.webp",
        "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_2.webp",
        "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_3.webp",
        "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_4.webp",
        "images/heladeras/Heladera_Philco_PHCT242B_ciclica_Top_Mount231lts_Blanca_5.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 159 x 55 x 55\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 231\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075507",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075507",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "heladeras y freezers",
    nombre: 'Heladera Eslabon de Lujo ERD36HBDIM Cíclica Blanca 336l Blanca',
    imagen: "images/heladeras/Heladera_Eslabon_RD36HBDIM_Cíclica_Blanca_336l_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Eslabon_RD36HBDIM_Cíclica_Blanca_336l_Blanca_1.webp",
        "images/heladeras/Heladera_Eslabon_RD36HBDIM_Cíclica_Blanca_336l_Blanca_2.webp",
        "images/heladeras/Heladera_Eslabon_RD36HBDIM_Cíclica_Blanca_336l_Blanca_3.webp",
        "images/heladeras/Heladera_Eslabon_RD36HBDIM_Cíclica_Blanca_336l_Blanca_4.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 164 x 60 x 60\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 336\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075378",
    caracteristicas: [
        "Marca: Eslabon de Lujo",
        "Modelo: 2075378",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean 7 Max LTDR79SB 7kg c/s semiauto. 9 Prog.',
    imagen: "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_1.webp",
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_2.webp",
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_3.webp",
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_4.webp",
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_5.webp",
        "images/lavarropas/Lavarropas_Drean_7_Max_LTDR79SB_7kg_c_s_semiauto_9_Prog_6.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior',
    codigo: "2075232",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075232",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean LFDR0606LB0 c/frontal 6kg 600rpm',
    imagen: "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_1.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_2.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_3.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_4.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_5.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_6.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_7.webp",
        "images/lavarropas/Lavarropas_Drean_LFDR0606LB0_c_frontal_6kg_600rpm_8.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 600',
    codigo: "2075252",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075252",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Eslabon de lujo EWH07BB C/S 7kg',
    imagen: "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_1.webp",
        "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_2.webp",
        "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_3.webp",
        "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_4.webp",
        "images/lavarropas/Lavarropas_Eslabon_de_lujo_EWH07BB_C_S_7kg_5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 750',
    codigo: "2074652",
    caracteristicas: [
        "Marca: Eslabon de lujo",
        "Modelo: 2074652",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Midea MF200W80WB/W-A1 c/frontal 8kg 1400rpm Inverter  Wifi Blanco',
    imagen: "images/lavarropas/Lavarropas_Midea_MF200W80WB_WA1_frontal_8kg_1400rpm_Inverter_Wifi_Blanco_1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas_Midea_MF200W80WB_WA1_frontal_8kg_1400rpm_Inverter_Wifi_Blanco_1.webp",
        "images/lavarropas/Lavarropas_Midea_MF200W80WB_WA1_frontal_8kg_1400rpm_Inverter_Wifi_Blanco_2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2075306",
    caracteristicas: [
        "Marca: Midea",
        "Modelo: 2075306",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'HORNO DE PAN Atma HPAT24WP dig 13 prog. 3 niv. 550w 900gr',
    imagen: "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_1.webp",
    imagenes: [
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_1.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_2.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_3.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_4.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_5.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_6.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_7.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_8.webp",
        "images/hornos/HORNO_DE_PAN_Atma_HPAT24WP_dig_13_prog_3_niv_550w_900gr_9.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 900\n<strong>Potencia (W):</strong> 550',
    codigo: "2075112",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075112",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno de pan Liliana AFP905 Breadly 1kg 12 prog. dig',
    imagen: "images/hornos/Horno_de_pan_Liliana_AFP905_Breadly_1kg_12_prog_dig_1.webp",
    imagenes: [
        "images/hornos/Horno_de_pan_Liliana_AFP905_Breadly_1kg_12_prog_dig_1.webp",
        "images/hornos/Horno_de_pan_Liliana_AFP905_Breadly_1kg_12_prog_dig_2.webp",
        "images/hornos/Horno_de_pan_Liliana_AFP905_Breadly_1kg_12_prog_dig_3.webp",
        "images/hornos/Horno_de_pan_Liliana_AFP905_Breadly_1kg_12_prog_dig_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1kg\n<strong>Potencia (W):</strong> 600',
    codigo: "2074795",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2074795",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Bgh BHE40M23N 40 lts Duo',
    imagen: "images/hornos/Horno_electrico_Bgh_BHE40M23N_40_lts_Duo_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Bgh_BHE40M23N_40_lts_Duo_1.webp",
        "images/hornos/Horno_electrico_Bgh_BHE40M23N_40_lts_Duo_2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 40\n<strong>Potencia (W):</strong> 1500\n<strong>Grill:</strong> Sí',
    codigo: "2074620",
    caracteristicas: [
        "Marca: Bgh",
        "Modelo: 2074620",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Bgh BHE65M19N 64 lts',
    imagen: "images/hornos/Horno_electrico_Bgh_BHE65M19N_64_lts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Bgh_BHE65M19N_64_lts_1.webp",
        "images/hornos/Horno_electrico_Bgh_BHE65M19N_64_lts_2.webp",
        "images/hornos/Horno_electrico_Bgh_BHE65M19N_64_lts_3.webp",
        "images/hornos/Horno_electrico_Bgh_BHE65M19N_64_lts_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 64\n<strong>Potencia (W):</strong> 2200\n<strong>Grill:</strong> Sí\n<strong>Conveccion:</strong> Sí',
    codigo: "2073485",
    caracteristicas: [
        "Marca: Bgh",
        "Modelo: 2073485",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Kanji 40Lts',
    imagen: "images/hornos/Horno_electrico_Kanji_40Lts_1.webp",
    imagenes: [
        "images/hornos/Horno_electrico_Kanji_40Lts_1.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 40\n<strong>Potencia (W):</strong> 1600\n<strong>Grill:</strong> Sí\n<strong>Conveccion:</strong> Sí',
    codigo: "2075396",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075396",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Pavas eléctricas",
    nombre: 'Pava Kanji  KJH-PE15002M Mate',
    imagen: "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_1.webp",
        "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_2.webp",
        "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_3.webp",
        "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_4.webp",
        "images/pavas_electricas/Pava_Kanji_KJHPE15002M_Mate_5.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1.8\n<strong>Potencia (W):</strong> 1500\n<strong>Apagado automático:</strong> Sí\n<strong>Corte para mate:</strong> Sí',
    codigo: "2074022",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2074022",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Anafes",
    nombre: 'Anafe Westinghouse  WH-HP1200SSD/STD Electrico 1 hornalla',
    imagen: "images/anafes/Anafe_Westinghouse_WH_HP1200SSD_STD_Electrico_1_hornalla_1.webp",
    imagenes: [
        "images/anafes/Anafe_Westinghouse_WH_HP1200SSD_STD_Electrico_1_hornalla_1.webp"
    ],
    descripcion: '<strong>Material de superficie:</strong> Chapa pintada al polvo\n<strong>Cantidad de hornallas:</strong> 1\n<strong>Dimensiones (Anc x Pro):</strong> 25x 22\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073862",
    caracteristicas: [
        "Marca: Westinghouse",
        "Modelo: 2073862",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Exprimidores y Jugueras",
    nombre: 'Exprimidor Liliana AE920 de citricos',
    imagen: "images/exprimidores_jugueras/Exprimidor_Liliana_AE920_de_citricos_1.webp",
    imagenes: [
        "images/exprimidores_jugueras/Exprimidor_Liliana_AE920_de_citricos_1.webp",
        "images/exprimidores_jugueras/Exprimidor_Liliana_AE920_de_citricos_2.webp",
        "images/exprimidores_jugueras/Exprimidor_Liliana_AE920_de_citricos_3.webp",
        "images/exprimidores_jugueras/Exprimidor_Liliana_AE920_de_citricos_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 40\n<strong>Capacidad (Litros):</strong> 1\n<strong>Tipo:</strong> Exprimidor',
    codigo: "2070886",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2070886",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picador Ultracomb PC6802 Bowl de vidrio 300 ml y 6 cuchillas inox corta y pica',
    imagen: "images/picadoras/Picador_Ultracomb_PC6802_Bowlde_vidrio_300_ml_y_6_cuchillas_inox_corta_y_pica_1.webp",
    imagenes: [
        "images/picadoras/Picador_Ultracomb_PC6802_Bowlde_vidrio_300_ml_y_6_cuchillas_inox_corta_y_pica_1.webp",
        "images/picadoras/Picador_Ultracomb_PC6802_Bowlde_vidrio_300_ml_y_6_cuchillas_inox_corta_y_pica_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 200\n<strong>Capacidad (Litros):</strong> 300ml\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075275",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2075275",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Sandwicheras",
    nombre: 'Sandwichera Yelmo SW 1800 4 sandwich 800 wts',
    imagen: "images/sandwicheras/Sandwichera_Yelmo_SW_18004_sandwich_800_wts_1.webp",
    imagenes: [
        "images/sandwicheras/Sandwichera_Yelmo_SW_18004_sandwich_800_wts_1.webp",
        "images/sandwicheras/Sandwichera_Yelmo_SW_18004_sandwich_800_wts_2.webp",
        "images/sandwicheras/Sandwichera_Yelmo_SW_18004_sandwich_800_wts_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 800\n<strong>Capacidad (sandwiches):</strong> 4 triangulos\n<strong>Placas antiadherentes:</strong> Sí',
    codigo: "19500",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 19500",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Yelmo AS 3239 para auto 12V',
    imagen: "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_1.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_2.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_3.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_4.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_5.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_6.webp",
        "images/aspiradoras/Aspiradora_Yelmo_AS_3239_para_auto12v_7.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 80\n<strong>Capacidad (Litros):</strong> 395 ml\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> Auto (12v)',
    codigo: "2074798",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2074798",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picadora Philco PI23PHP mini chopper 400W',
    imagen: "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_1.webp",
    imagenes: [
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_1.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_2.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_3.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_4.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_5.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_6.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_7.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_8.webp",
        "images/picadoras/Picadora_Philco_PI23PHP_mini_chopper_400W_9.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 400\n<strong>Capacidad (Litros):</strong> 500 mL\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075035",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075035",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Pavas eléctricas",
    nombre: 'Pava Liliana AP965/AP165 matera 1.7 lts',
    imagen: "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_1.webp",
    imagenes: [
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_1.webp",
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_2.webp",
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_3.webp",
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_4.webp",
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_5.webp",
        "images/pavas_electricas/Pava_Liliana_AP965_AP165_matera_1_7_lts_6.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1,7\n<strong>Potencia (W):</strong> 2000\n<strong>Apagado automático:</strong> Sí\n<strong>Corte para mate:</strong> Sí',
    codigo: "2071349",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071349",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picadora Yelmo PC5803',
    imagen: "images/picadoras/Picadora_Yelmo_PC5803_1.webp",
    imagenes: [
        "images/picadoras/Picadora_Yelmo_PC5803_1.webp",
        "images/picadoras/Picadora_Yelmo_PC5803_2.webp",
        "images/picadoras/Picadora_Yelmo_PC5803_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 500\n<strong>Capacidad (Litros):</strong> 1,2\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2075158",
    caracteristicas: [
        "Marca: Yelmo",
        "Modelo: 2075158",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picador Ultracomb PC6800 Bowl de vidrio 1.2lts 600Wts',
    imagen: "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_1.webp",
    imagenes: [
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_1.webp",
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_2.webp",
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_3.webp",
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_4.webp",
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_5.webp",
        "images/picadoras/Picador_Ultracomb_PC6800_Bowl_de_vidrio_1_2lts_600Wts_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Capacidad (Litros):</strong> 1,2\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2073800",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2073800",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Atma LM8507AP de mano 600w Varilla de plastico',
    imagen: "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_1.webp",
    imagenes: [
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_1.webp",
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_2.webp",
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_3.webp",
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_4.webp",
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_5.webp",
        "images/mixers/Mixer_Atma_LM8507AP_de_mano_600w_Varilla_de_plastico_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso medidor',
    codigo: "2075413",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075413",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Ultracomb LM-2552 600w cuchillas inox 2 vel y vaso 800ml',
    imagen: "images/mixers/Mixer_Ultracomb_LM_2552_600w_cuchillas_inox_2_vel_y_vaso_800ml_1.webp",
    imagenes: [
        "images/mixers/Mixer_Ultracomb_LM_2552_600w_cuchillas_inox_2_vel_y_vaso_800ml_1.webp",
        "images/mixers/Mixer_Ultracomb_LM_2552_600w_cuchillas_inox_2_vel_y_vaso_800ml_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso medidor',
    codigo: "2075281",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2075281",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Cafeteras",
    nombre: 'Cafetera Moulinex FG320058 FCM CAFE CITY ROJA ( GS )',
    imagen: "images/cafeteras/Cafetera_Moulinex_FG320058_FCM_CAFE_CITY_ROJA_GS_1.webp",
    imagenes: [
        "images/cafeteras/Cafetera_Moulinex_FG320058_FCM_CAFE_CITY_ROJA_GS_1.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320058_FCM_CAFE_CITY_ROJA_GS_2.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320058_FCM_CAFE_CITY_ROJA_GS_3.webp",
        "images/cafeteras/Cafetera_Moulinex_FG320058_FCM_CAFE_CITY_ROJA_GS_4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 600ml\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 650',
    codigo: "2072849",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2072849",
        "Garantía: 1 año"
    ]
},










/////    06 08 2025    /////



    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Almohadas",
    nombre: 'Almohada Suav. VISCO Cervical Thermosense 57x37x12',
    imagen: "images/almohadas/Almohada_Suav_VISCO_Cervical_Thermosense_57x37x12_1.webp",
    imagenes: [
        "images/almohadas/Almohada_Suav_VISCO_Cervical_Thermosense_57x37x12_1.webp",
        "images/almohadas/Almohada_Suav_VISCO_Cervical_Thermosense_57x37x12_2.webp",
        "images/almohadas/Almohada_Suav_VISCO_Cervical_Thermosense_57x37x12_3.webp"
    ],
    descripcion: '<strong>Materiales del relleno:</strong> Fibra de poliéster\n<strong>Dimensiones (Largo x Ancho x Espesor):</strong> 57 x 37 x 12\n<strong>Inteligente:</strong> Sí',
    codigo: "2069641",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2069641",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Atma AS9221PI de tacho 10lts 3 en 1 polvo y liquidos 1200w',
    imagen: "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_1.webp",
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_2.webp",
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_3.webp",
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_4.webp",
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_5.webp",
        "images/aspiradoras/Aspiradora_Atma_AS9221PI_de_tacho_10lts_3_en_1_polvo_y_liquidos_1200w_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200\n<strong>Capacidad (Litros):</strong> 10\n<strong>Apto líquido:</strong> Sí\n<strong>Bolsa:</strong> Sí\n<strong>Tipo de alimentación:</strong> Corriente eléctrica',
    codigo: "2075424 ",
    caracteristicas: [
        "Marca: Atma",
        "Modelo: 2075424 ",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Orbis 315 BBO btra c/enc. 14l. bl.',
    imagen: "images/calefones/Calefon_Orbis_315_BBO_btra_c_enc_14l_bl_1.webp",
    imagenes: [
        "images/calefones/Calefon_Orbis_315_BBO_btra_c_enc_14l_bl_1.webp"
    ],
    descripcion: '<strong>Capacidad (L/h):</strong> 14\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Piezoeléctrico\n<strong>Tipo de control:</strong> Botones\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase D',
    codigo: "14023",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 14023",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. FLOUSTAR 190x80x23 res.',
    imagen: "images/colchones/Colchon_Suav_FLOUSTAR_190x80x23_res_1.webp",
    imagenes: [
        "images/colchones/Colchon_Suav_FLOUSTAR_190x80x23_res_1.webp",
        "images/colchones/Colchon_Suav_FLOUSTAR_190x80x23_res_2.webp",
        "images/colchones/Colchon_Suav_FLOUSTAR_190x80x23_res_3.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 23\n<strong>Peso maximo soportado (Kg):</strong> 80\n<strong>Resortes:</strong> Sí',
    codigo: "14389",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 14389",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Piletas",
    nombre: 'Pileta Sol de Verano S 300 3X2,20X0,70 4620 LTS APROX.',
    imagen: "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_1.webp",
    imagenes: [
        "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_1.webp",
        "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_2.webp",
        "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_3.webp",
        "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_4.webp",
        "images/piletas/Pileta_Solde_Verano__300_3X2_20X0_70_4620_LTS_APROX_5.webp"
    ],
    descripcion: '<strong>Capacidad de agua (L):</strong> 4620\n<strong>Forma:</strong> Rectangular\n<strong>Dimensiones (Cm):</strong> 300 x 220 x 70',
    codigo: "14546",
    caracteristicas: [
        "Marca: Sol de Verano",
        "Modelo: 14546",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Piletas",
    nombre: 'Pileta Sol de Verano S 250 2,50X1,60X0,65 2700lts',
    imagen: "images/piletas/Pileta_Sol_de_Verano_S_250_2_50X1_60X0_65_2700lts_1.webp",
    imagenes: [
        "images/piletas/Pileta_Sol_de_Verano_S_250_2_50X1_60X0_65_2700lts_1.webp",
        "images/piletas/Pileta_Sol_de_Verano_S_250_2_50X1_60X0_65_2700lts_2.webp",
        "images/piletas/Pileta_Sol_de_Verano_S_250_2_50X1_60X0_65_2700lts_3.webp",
        "images/piletas/Pileta_Sol_de_Verano_S_250_2_50X1_60X0_65_2700lts_4.webp"
    ],
    descripcion: '<strong>Capacidad de agua (L):</strong> 2700\n<strong>Forma:</strong> Rectangular\n<strong>Dimensiones (Cm):</strong> 250 x 160 x 65',
    codigo: "14709",
    caracteristicas: [
        "Marca: Sol de Verano",
        "Modelo: 14709",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Piletas",
    nombre: 'Pileta Sol de Verano 450 4,40X2,20X0,80 7800 LTS APROX.',
    imagen: "images/piletas/Pileta_Sol_de_Verano_450_4_40X2_20X0_80_7800_LTS_APROX_1.webp",
    imagenes: [
        "images/piletas/Pileta_Sol_de_Verano_450_4_40X2_20X0_80_7800_LTS_APROX_1.webp",
        "images/piletas/Pileta_Sol_de_Verano_450_4_40X2_20X0_80_7800_LTS_APROX_2.webp",
        "images/piletas/Pileta_Sol_de_Verano_450_4_40X2_20X0_80_7800_LTS_APROX_3.webp",
        "images/piletas/Pileta_Sol_de_Verano_450_4_40X2_20X0_80_7800_LTS_APROX_4.webp"
    ],
    descripcion: '<strong>Capacidad de agua (L):</strong> 7800\n<strong>Forma:</strong> Rectangular\n<strong>Dimensiones (Cm):</strong> 440 x 220 x 80',
    codigo: "16099",
    caracteristicas: [
        "Marca: Sol de Verano",
        "Modelo: 16099",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Bicicletas",
    nombre: 'Bici. Futura Playera R26 Dama Acero 4163',
    imagen: "images/bicicletas/Bici_Futura_Playera_R26_Dama_Acero_4163_1.webp",
    imagenes: [
        "images/bicicletas/Bici_Futura_Playera_R26_Dama_Acero_4163_1.webp"
    ],
    descripcion: '<strong>Estilo:</strong> Playera\n<strong>Material:</strong> Acero\n<strong>Rodado:</strong> 26\n<strong>Tipo de frenos:</strong> V Brake\n<strong>Canasto:</strong> Sí\n<strong>Portaequipaje:</strong> Sí',
    codigo: "19921",
    caracteristicas: [
        "Marca: Futura",
        "Modelo: 19921",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Secarropas",
    nombre: 'Secarropas Drean QV 6.5 centrifugo 6.5 kg',
    imagen: "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_1.webp",
    imagenes: [
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_1.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_2.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_3.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_4.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_5.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_6.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_7.webp",
        "images/secarropas/Secarropas_Drean_QV_6_5_centrifugo_6_5_kg_8.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de secado:</strong> Centrifugado\n<strong>Velocidad de centrifugado (RPM):</strong> 2800',
    codigo: "2069095",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2069095",
        "Garantía: 1 año"
    ]
},






/////// 12 08 2025 ////////


    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Kanji electrica EKX00IV Inox 4 anafes 50x50x89 1300/1500w',
    imagen: "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_1.webp",
    imagenes: [
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_1.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_2.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_3.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_4.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_5.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_6.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_7.webp",
        "images/cocinas/Cocina_Kanji_electrica_EKX00IV_Inox_4_anafes_50x50x89_1300_1500w_8.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 50 x 50\n<strong>Válvula de seguridad:</strong> No\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Tipo:</strong> Eléctrico\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075352",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075352",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "heladeras y freezers",
    nombre: 'Heladera SIAM HSI-CT341B Top Mount ciclica 340lts Blanca',
    imagen: "images/heladeras/Heladera_SIAM_HSI_CT341B_TopMount_ciclica_340ltsBlanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_SIAM_HSI_CT341B_TopMount_ciclica_340ltsBlanca_1.webp",
        "images/heladeras/Heladera_SIAM_HSI_CT341B_TopMount_ciclica_340ltsBlanca_2.webp",
        "images/heladeras/Heladera_SIAM_HSI_CT341B_TopMount_ciclica_340ltsBlanca_3.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 154 x 60 x 62\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 340\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075509",
    caracteristicas: [
        "Marca: Siam",
        "Modelo: 2075509",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED RCA 50" X/C50AND-F Ultra HD 4K Android',
    imagen: "images/televisores/TV_LED_RCA_50_X_C50AND_F_Ultra_HD_4K_Android_1.webp",
    imagenes: [
        "images/televisores/TV_LED_RCA_50_X_C50AND_F_Ultra_HD_4K_Android_1.webp",
        "images/televisores/TV_LED_RCA_50_X_C50AND_F_Ultra_HD_4K_Android_2.webp",
        "images/televisores/TV_LED_RCA_50_X_C50AND_F_Ultra_HD_4K_Android_3.webp",
        "images/televisores/TV_LED_RCA_50_X_C50AND_F_Ultra_HD_4K_Android_4.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 50"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
    codigo: "2072581",
    caracteristicas: [
        "Marca: RCA",
        "Modelo: 2072581",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Tv",
    nombre: 'TV LED Noblex 65" DV65X8580 Google TV',
    imagen: "images/televisores/TV_LED_Noblex_65_DV65X8580_Google_TV_1.webp",
    imagenes: [
        "images/televisores/TV_LED_Noblex_65_DV65X8580_Google_TV_1.webp"
    ],
    descripcion: '<strong>Pulgadas:</strong> 65"\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
    codigo: "2075499",
    caracteristicas: [
        "Marca: Noblex",
        "Modelo: 2075499",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "heladeras y freezers",
    nombre: 'Heladera Telefunken TFK-R90GE/TKF-HB90 Bajo mesada 90lts Blanca',
    imagen: "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_1.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_2.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_3.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_4.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_5.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_6.webp",
        "images/heladeras/Heladera_Telefunken_TFK_R90GE_TKF_HB90_Bajo_mesada_90lts_Blanca_7.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 45 x 48\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 90\n<strong>Freezer:</strong> No\n<strong>Eficiencia energética:</strong> Clase B',
    codigo: "2075106",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075106",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "heladeras y freezers",
    nombre: 'Heladera Philco PHCT225B ciclica Top Mount 199lts Blanca',
    imagen: "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_1.webp",
    imagenes: [
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_1.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_2.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_3.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_4.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_5.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_6.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_7.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_8.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_9.webp",
        "images/heladeras/Heladera_Philco_PHCT225B_ciclica_Top_Mount_199lts_Blanca_10.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 143 X 55 X 55\n<strong>Tipo de tecnología:</strong> Cíclica\n<strong>Capacidad (Litros):</strong> 199\n<strong>Freezer:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2075544",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075544",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Tcl Taca-3100FCSA/TPRO02 3100w F/C Inverter',
    imagen: "images/aires_acondicionados/Acond_Tcl_Taca_3100FCSA_TPRO02_3100w_F_C_Inverter_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Tcl_Taca_3100FCSA_TPRO02_3100w_F_C_Inverter_1.webp",
        "images/aires_acondicionados/Acond_Tcl_Taca_3100FCSA_TPRO02_3100w_F_C_Inverter_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3100\n<strong>Tipo:</strong> Split\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A++',
    codigo: "2075528",
    caracteristicas: [
        "Marca: Tcl",
        "Modelo: 2075528",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Tcl Taca-5700FCSD/TPRO 5700w F/C Inverter',
    imagen: "images/aires_acondicionados/Acond_Tcl_Taca_5700FCSD_TPRO_5700w_F_C_Inverter_1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond_Tcl_Taca_5700FCSD_TPRO_5700w_F_C_Inverter_1.webp",
        "images/aires_acondicionados/Acond_Tcl_Taca_5700FCSD_TPRO_5700w_F_C_Inverter_2.webp",
        "images/aires_acondicionados/Acond_Tcl_Taca_5700FCSD_TPRO_5700w_F_C_Inverter_3.webp",
        "images/aires_acondicionados/Acond_Tcl_Taca_5700FCSD_TPRO_5700w_F_C_Inverter_4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 5700\n<strong>Tipo:</strong> Split\n<strong>Inverter:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A++',
    codigo: "2075529",
    caracteristicas: [
        "Marca: Tcl",
        "Modelo: 2075529",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Samsung VC20CCNMARF Roja s/ bolsa 2000W',
    imagen: "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_1.webp",
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_2.webp",
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_3.webp",
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_4.webp",
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_5.webp",
        "images/aspiradoras/Aspiradora_Samsung_VC20CCNMARF_Roja_s_bolsa_2000W_6.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 2000\n<strong>Capacidad (Litros):</strong> 1,5\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> 220v',
    codigo: "2070958",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2070958",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Ultracomb AS 4224 1800W 2.5Lts',
    imagen: "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_1.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_2.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_3.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_4.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_5.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_6.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_7.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4224_1800W_2_5Lts_8.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1800\n<strong>Capacidad (Litros):</strong> 2,5\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> 220v',
    codigo: "2071813",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2071813",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Ultracomb AS 4220 1600 WTS 1.2lts s/bolsa',
    imagen: "images/aspiradoras/Aspiradora_Ultracomb_AS_4220_1600_WTS_1_2lts_s_bolsa_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4220_1600_WTS_1_2lts_s_bolsa_1.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4220_1600_WTS_1_2lts_s_bolsa_2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1600\n<strong>Capacidad (Litros):</strong> 1,2\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> 220v',
    codigo: "2074308",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2074308",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Ultracomb AS 4110 Inalambrica',
    imagen: "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_1.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_2.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_3.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_4.webp",
        "images/aspiradoras/Aspiradora_Ultracomb_AS_4110_Inalambrica_5.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 45\n<strong>Capacidad (Litros):</strong> 375mL\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> Batería',
    codigo: "2074800",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2074800",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Liliana LA995 1200w 18lts tacho-polvo-agua',
    imagen: "images/aspiradoras/Aspiradora_Liliana_LA995_1200w_18lts_tacho_polvo_agua_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Liliana_LA995_1200w_18lts_tacho_polvo_agua_1.webp",
        "images/aspiradoras/Aspiradora_Liliana_LA995_1200w_18lts_tacho_polvo_agua_2.webp",
        "images/aspiradoras/Aspiradora_Liliana_LA995_1200w_18lts_tacho_polvo_agua_3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200\n<strong>Capacidad (Litros):</strong> 18\n<strong>Apto líquido:</strong> Sí\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> 220v',
    codigo: "2075362",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2075362",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Samsung VSI5A6032R7/BG inalambrica',
    imagen: "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_1.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_2.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_3.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_4.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_5.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_6.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_7.webp",
        "images/aspiradoras/Aspiradora_Samsung_VSI5A6032R7_BG_inalambrica_8.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 410\n<strong>Capacidad (Litros):</strong> 800mL\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> Batería',
    codigo: "2075462",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075462",
        "Garantía: 1 año"
    ]
},








////////   13 08 2025   ////////

{
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Anafes",
    nombre: 'Anafe Liliana AA911 Electrico 1 hornalla 1100w',
    imagen: "images/anafes/Anafe Liliana AA911 Electrico 1 hornalla 1100w 1.webp",
    imagenes: [
        "images/anafes/Anafe Liliana AA911 Electrico 1 hornalla 1100w 1.webp",
        "images/anafes/Anafe Liliana AA911 Electrico 1 hornalla 1100w 2.webp",
        "images/anafes/Anafe Liliana AA911 Electrico 1 hornalla 1100w 3.webp",
        "images/anafes/Anafe Liliana AA911 Electrico 1 hornalla 1100w 4.webp"
    ],
    descripcion: '<strong>Material de superficie:</strong> Resistencia\n<strong>Cantidad de hornallas:</strong> 1\n<strong>Dimensiones (Anc x Pro):</strong> 22 x 20 x 7,5\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075357",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2075357",
        "Garantía: 1 año"
    ]
},

   
    {
    categoria: "Pequeños",
    subcategoria: "Batidoras",
    nombre: 'Batidora Liliana AB902/AB102 c/ bowl gir. 3lts 5 vel.',
    imagen: "images/batidoras/Batidora Liliana AB902AB102 c bowl gir 3lts 5 vel 1.webp",
    imagenes: [
        "images/batidoras/Batidora Liliana AB902AB102 c bowl gir 3lts 5 vel 1.webp",
        "images/batidoras/Batidora Liliana AB902AB102 c bowl gir 3lts 5 vel 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 450\n<strong>Velocidades:</strong> 5\n<strong>Capacidad (Litros):</strong> 3\n<strong>Accesorios incluidos:</strong> Bowl, Amasador',
    codigo: "2071328",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2071328",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Cafeteras",
    nombre: 'Cafetera Kanji CM1500MC01 Multicapsula porta capsula adaptable',
    imagen: "images/cafeteras/Cafetera Kanji CM1500MC01 Multicapsula porta capsula adaptable 1.webp",
    imagenes: [
        "images/cafeteras/Cafetera Kanji CM1500MC01 Multicapsula porta capsula adaptable 1.webp",
        "images/cafeteras/Cafetera Kanji CM1500MC01 Multicapsula porta capsula adaptable 2.webp",
        "images/cafeteras/Cafetera Kanji CM1500MC01 Multicapsula porta capsula adaptable 3.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 700mL\n<strong>Tipo:</strong> Cápsulas\n<strong>Potencia (W):</strong> 1500',
    codigo: "2072196",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2072196",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Cafeteras",
    nombre: 'Cafetera Smartlife SL-CMD1095 1.5Lts control digital c/visor',
    imagen: "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 1.webp",
    imagenes: [
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 1.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 2.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 3.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 4.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 5.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 6.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 7.webp",
        "images/cafeteras/Cafetera Smartlife SL CMD1095 1 5Lts control digital c visor 8.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 1,5\n<strong>Tipo:</strong> Filtro\n<strong>Potencia (W):</strong> 900',
    codigo: "2073215",
    caracteristicas: [
        "Marca: Smartlife",
        "Modelo: 2073215",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Exprimidores y Jugueras",
    nombre: 'Exprimidor Oster JU4176 automatico 500cc 75 watts',
    imagen: "images/exprimidores_jugueras/Exprimidor Oster JU4176 automatico 500cc 75 watts 1.webp",
    imagenes: [
        "images/exprimidores_jugueras/Exprimidor Oster JU4176 automatico 500cc 75 watts 1.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU4176 automatico 500cc 75 watts 2.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU4176 automatico 500cc 75 watts 3.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU4176 automatico 500cc 75 watts 4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 75\n<strong>Capacidad (Litros):</strong> 500 mL\n<strong>Tipo:</strong> Exprimidor',
    codigo: "2072945",
    caracteristicas: [
        "Marca: Oster",
        "Modelo: 2072945",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Exprimidores y Jugueras",
    nombre: 'Exprimidor Oster JU407B',
    imagen: "images/exprimidores_jugueras/Exprimidor Oster JU407B 1.webp",
    imagenes: [
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 1.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 2.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 3.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 4.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 5.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 6.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 7.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 8.webp",
        "images/exprimidores_jugueras/Exprimidor Oster JU407B 9.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 25\n<strong>Capacidad (Litros):</strong> 1\n<strong>Tipo:</strong> Exprimidor',
    codigo: "2073213",
    caracteristicas: [
        "Marca: Oster",
        "Modelo: 2073213",
        "Garantía: 1 año"
    ]
},




/////////// 15 08 2025 //////////

{
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Liliana LL961 2 en 1 210w Bateria',
    imagen: "images/aspiradoras/Aspiradora Liliana LL961 2 en 1 210w Bateria 1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora Liliana LL961 2 en 1 210w Bateria 1.webp",
        "images/aspiradoras/Aspiradora Liliana LL961 2 en 1 210w Bateria 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 210\n<strong>Capacidad (Litros):</strong> 400mL\n<strong>Bolsa:</strong> No\n<strong>Tipo de alimentación:</strong> Batería',
    codigo: "2075267",
    caracteristicas: [
        "Marca: Liliana",
        "Modelo: 2075267",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Audio",
    nombre: 'Auriculares Havit H201 6d Gaming Altavoz',
    imagen: "images/audio/Auriculares Havit H201 6d Gaming Altavoz 1.webp",
    imagenes: [
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 1.webp",
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 2.webp",
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 3.webp",
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 4.webp",
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 5.webp",
        "images/audio/Auriculares Havit H201 6d Gaming Altavoz 6.webp"
    ],
    descripcion: '<strong>Conectores 3,5:</strong> Sí\n<strong>Micrófono:</strong> Sí',
    codigo: "2073866",
    caracteristicas: [
        "Marca: Havit",
        "Modelo: 2073866",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Audio",
    nombre: 'Autoestereo Crown Mustang DMR-3000BT Usb/am/fm/bt 52w',
    imagen: "images/audio/Autoestereo Crown Mustang DMR 3000BT Usb am fm bt 52w 1.webp",
    imagenes: [
        "images/audio/Autoestereo Crown Mustang DMR 3000BT Usb am fm bt 52w 1.webp",
        "images/audio/Autoestereo Crown Mustang DMR 3000BT Usb am fm bt 52w 3.webp",
        "images/audio/Autoestereo Crown Mustang DMR 3000BT Usb am fm bt 52w 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 52\n<strong>Bluethoot:</strong> Sí\n<strong>Conectores 3,5:</strong> Sí\n<strong>USB:</strong> Sí\n<strong>AUX:</strong> Sí\n<strong>FM:</strong> Sí\n<strong>AM:</strong> Sí',
    codigo: "2072649",
    caracteristicas: [
        "Marca: Crown",
        "Modelo: 2072649",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Audio",
    nombre: 'Autoestereo Crown Mustang DMK-8000BT dig+jgo parlantes 300w',
    imagen: "images/audio/Autoestereo Crown Mustang DMK 8000BT dig jgo parlantes 300w 1.webp",
    imagenes: [
        "images/audio/Autoestereo Crown Mustang DMK 8000BT dig jgo parlantes 300w 1.webp",
        "images/audio/Autoestereo Crown Mustang DMK 8000BT dig jgo parlantes 300w 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 300\n<strong>Bluethoot:</strong> Sí\n<strong>Conectores 3,5:</strong> Sí\n<strong>USB:</strong> Sí\n<strong>AUX:</strong> Sí\n<strong>FM:</strong> Sí\n<strong>AM:</strong> Sí',
    codigo: "2075272",
    caracteristicas: [
        "Marca: Crown Mustang",
        "Modelo: 2075272",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Audio",
    nombre: 'Autoestereo Crown Mustang DMK-9000BT dig+jgo parlantes 400w',
    imagen: "images/audio/Autoestereo Crown Mustang DMK 9000BT dig jgo parlantes 400w 1.webp",
    imagenes: [
        "images/audio/Autoestereo Crown Mustang DMK 9000BT dig jgo parlantes 400w 1.webp",
        "images/audio/Autoestereo Crown Mustang DMK 9000BT dig jgo parlantes 400w 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 400\n<strong>Bluethoot:</strong> Sí\n<strong>Conectores 3,5:</strong> Sí\n<strong>USB:</strong> Sí\n<strong>AUX:</strong> Sí\n<strong>FM:</strong> Sí\n<strong>AM:</strong> Sí',
    codigo: "2075273",
    caracteristicas: [
        "Marca: Crown Mustang",
        "Modelo: 2075273",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tv y Audio",
    subcategoria: "Audio",
    nombre: 'Auricular Smartlife HSWG902GRAY Gamer Wire',
    imagen: "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 1.webp",
    imagenes: [
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 1.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 7.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 6.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 5.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 4.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 3.webp",
        "images/audio/Auricular Smartlife HSWG902GRAY Gamer Wire 2.webp"
    ],
    descripcion: '<strong>Conectores 3,5:</strong> Sí\n<strong>Micrófono:</strong> Sí',
    codigo: "2074624",
    caracteristicas: [
        "Marca: Smartlife",
        "Modelo: 2074624",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Jardín",
    nombre: 'Bordeadora PETRI Plus 3001005 900wts',
    imagen: "images/jardín/Bordeadora PETRI Plus 3001005 900wts 1.webp",
    imagenes: [
        "images/jardín/Bordeadora PETRI Plus 3001005 900wts 1.webp",
        "images/jardín/Bordeadora PETRI Plus 3001005 900wts 2.webp",
        "images/jardín/Bordeadora PETRI Plus 3001005 900wts 3.webp",
        "images/jardín/Bordeadora PETRI Plus 3001005 900wts 4.webp",
        "images/jardín/Bordeadora PETRI Plus 3001005 900wts 5.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Bordeadora eléctrica\n<strong>Potencia (HP):</strong> 800w\n<strong>Eléctrica:</strong> Sí',
    codigo: "2074993",
    caracteristicas: [
        "Marca: PETRI",
        "Modelo: 2074993",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Termotanques y calefones",
    subcategoria: "Calefones",
    nombre: 'Calefon Volcan 313 BRV 12 lts',
    imagen: "images/calefones/Calefon Volcan 313 BRV 12 lts 1.webp",
    imagenes: [
        "images/calefones/Calefon Volcan 313 BRV 12 lts 1.webp"
    ],
    descripcion: '<strong>Capacidad (L/m):</strong> 12\n<strong>Tiraje:</strong> Tiro natural\n<strong>Tipo de gas:</strong> Gas natural\n<strong>Tipo de encendido:</strong> Piezoeléctrico\n<strong>Tipo de control:</strong> Perilla\n<strong>Conexiones de agua:</strong> Carga inferior\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2069927",
    caracteristicas: [
        "Marca: Volcan",
        "Modelo: 2069927",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Codini Silent 4054 10KG Semiautomatico 7 Prog.',
    imagen: "images/lavarropas/Lavarropas Codini Silent 4054 10KG Semiautomatico 7 Prog 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Codini Silent 4054 10KG Semiautomatico 7 Prog 1.webp",
        "images/lavarropas/Lavarropas Codini Silent 4054 10KG Semiautomatico 7 Prog 2.webp",
        "images/lavarropas/Lavarropas Codini Silent 4054 10KG Semiautomatico 7 Prog 3.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior',
    codigo: "2071094",
    caracteristicas: [
        "Marca: Codini",
        "Modelo: 2071094",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog.',
    imagen: "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 1.webp",
        "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 2.webp",
        "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 3.webp",
        "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 4.webp",
        "images/lavarropas/Lavarropas Codini 4053 Dynamics 10KG Semiautomatico 7 Prog 5.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 10\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior',
    codigo: "2071098",
    caracteristicas: [
        "Marca: Codini",
        "Modelo: 2071098",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Whirlpool WWH07AB c/superior 7.5kg',
    imagen: "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 1.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 7.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 6.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 5.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 4.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 3.webp",
        "images/lavarropas/Lavarropas Whirlpool WWH07AB c superior 7 5kg 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 750',
    codigo: "2073411",
    caracteristicas: [
        "Marca: Whirlpool",
        "Modelo: 2073411",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavasecarropas",
    nombre: 'Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco',
    imagen: "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 1.webp",
    imagenes: [
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 1.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 7.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 6.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 5.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 4.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 3.webp",
        "images/lavasecarropas/Lavarropas Samsung WW10T504DAW Smart 10KG 1400rpm Blanco 2.webp"
    ],
    descripcion: '<strong>Capacidad lavado (kg):</strong> 10\n<strong>Capacidad secado (kg):</strong> 6\n<strong>Tipo de carga:</strong> Frontal\n<strong>Inverter:</strong> Sí\n<strong>WIFI:</strong> Sí',
    codigo: "2074185",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074185",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco',
    imagen: "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 1.webp",
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 6.webp",
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 5.webp",
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 4.webp",
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 3.webp",
        "images/lavarropas/Lavarropas Samsung WW70A4000EE 7 kg 1000 rpm Blanco 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2074200",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074200",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Whirlpool WNQ70AB 7kg c/frontal blanco',
    imagen: "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 1.webp",
        "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 5.webp",
        "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 4.webp",
        "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 3.webp",
        "images/lavarropas/Lavarropas Whirlpool WNQ70AB 7kg c frontal blanco 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1200\n<strong>Inverter:</strong> Sí',
    codigo: "2074342",
    caracteristicas: [
        "Marca: Whirlpool",
        "Modelo: 2074342",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW95AA046BWUBG 9.5Kg 1400rpm Blanco Inverter',
    imagen: "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 1.webp",
        "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 5.webp",
        "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 4.webp",
        "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 3.webp",
        "images/lavarropas/Lavarropas Samsung WW95AA046BWUBG 9 5Kg 1400rpm Blanco Inverter 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 9,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2074426",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074426",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WA85C5441BVUBG c/sup 8.5 kg 700 rpm Negro Inverter',
    imagen: "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 1.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 9.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 8.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 7.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 6.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 5.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 4.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 3.webp",
        "images/lavarropas/Lavarropas Samsung WA85 c sup 8 5 kg 700 rpm Negro Inverter 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 700\n<strong>Inverter:</strong> Sí',
    codigo: "2074787",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074787",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Codini Ecowash 6010-B Inverter 6KG  1000rpm c/Frontal',
    imagen: "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 1.webp",
        "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 5.webp",
        "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 4.webp",
        "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 3.webp",
        "images/lavarropas/Lavarropas Codini Ecowash 6010 B Inverter 6KG  1000rpm c Frontal 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2074910",
    caracteristicas: [
        "Marca: Codini",
        "Modelo: 2074910",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WA75C5441BWUBG c/sup 7.5 kg Blanco Inverter',
    imagen: "images/lavarropas/Lavarropas Samsung WA75C5441BWUBG c sup 7.5 kg Blanco Inverter 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WA75C5441BWUBG c sup 7.5 kg Blanco Inverter 1.webp",
        "images/lavarropas/Lavarropas Samsung WA75C5441BWUBG c sup 7.5 kg Blanco Inverter 4.webp",
        "images/lavarropas/Lavarropas Samsung WA75C5441BWUBG c sup 7.5 kg Blanco Inverter 3.webp",
        "images/lavarropas/Lavarropas Samsung WA75C5441BWUBG c sup 7.5 kg Blanco Inverter 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 700\n<strong>Inverter:</strong> Sí',
    codigo: "2075033",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075033",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean LFDR0814SB0 c/frontal Ecoinverter 8kg 1400rpm',
    imagen: "images/lavarropas/Lavarropas Drean LFDR0814SB0 c frontal Ecoinverter 8kg 1400rpm 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Drean LFDR0814SB0 c frontal Ecoinverter 8kg 1400rpm 1.webp",
        "images/lavarropas/Lavarropas Drean LFDR0814SB0 c frontal Ecoinverter 8kg 1400rpm 4.webp",
        "images/lavarropas/Lavarropas Drean LFDR0814SB0 c frontal Ecoinverter 8kg 1400rpm 3.webp",
        "images/lavarropas/Lavarropas Drean LFDR0814SB0 c frontal Ecoinverter 8kg 1400rpm 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2075325",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075325",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Midea MF200W80WB/T-A1 c/frontal 8kg 1400rpm Inverter Wifi Gris',
    imagen: "images/lavarropas/Lavarropas Midea MF200W80WB T A1 c frontal 8kg 1400rpm Inverter Wifi Gris 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Midea MF200W80WB T A1 c frontal 8kg 1400rpm Inverter Wifi Gris 1.webp",
        "images/lavarropas/Lavarropas Midea MF200W80WB T A1 c frontal 8kg 1400rpm Inverter Wifi Gris 4.webp",
        "images/lavarropas/Lavarropas Midea MF200W80WB T A1 c frontal 8kg 1400rpm Inverter Wifi Gris 3.webp",
        "images/lavarropas/Lavarropas Midea MF200W80WB T A1 c frontal 8kg 1400rpm Inverter Wifi Gris 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2075373",
    caracteristicas: [
        "Marca: Midea",
        "Modelo: 2075373",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Drean LTDR67SB Family 6 Eco 6kg c/s semiauto. 7 Prog.',
    imagen: "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 1.webp",
        "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 5.webp",
        "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 4.webp",
        "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 3.webp",
        "images/lavarropas/Lavarropas Drean LTDR67SB Family 6 Eco 6kg c s semiauto 7 Prog 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior',
    codigo: "2075422",
    caracteristicas: [
        "Marca: Drean",
        "Modelo: 2075422",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Kanji KJH-WMCFWT 8kg Inverter carga frontal Blanco',
    imagen: "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 1.webp",
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 6.webp",
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 5.webp",
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 4.webp",
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 3.webp",
        "images/lavarropas/Lavarropas Kanji KJH WMCFWT 8kg Inverter carga frontal Blanco 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1200\n<strong>Inverter:</strong> Sí',
    codigo: "2075438",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075438",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Eslabon de lujo EWH06AB c/superior 6kg',
    imagen: "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 1.webp",
        "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 5.webp",
        "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 4.webp",
        "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 3.webp",
        "images/lavarropas/Lavarropas Eslabon de lujo EWH06AB c superior 6kg 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 750',
    codigo: "2075545",
    caracteristicas: [
        "Marca: Eslabon de lujo",
        "Modelo: 2075545",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv',
    imagen: "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 1.webp",
        "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 5.webp",
        "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 4.webp",
        "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 3.webp",
        "images/lavarropas/Lavarropas Samsung WW70A40000S 7 kg 1000 rpm Silver Inv 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2074221",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074221",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW65A40000S 6.5kg 1000 rpm Silver',
    imagen: "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 1.webp",
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 6.webp",
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 5.webp",
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 4.webp",
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 3.webp",
        "images/lavarropas/Lavarropas Samsung WW65A40000S 6 5kg 1000 rpm Silver 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí',
    codigo: "2074234",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074234",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco',
    imagen: "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 1.webp",
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 6.webp",
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 5.webp",
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 4.webp",
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 3.webp",
        "images/lavarropas/Lavarropas Samsung WW70AA46BW 7 kg 1400 rpm Blanco 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2074201",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074201",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c/frontal plata',
    imagen: "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 1.webp",
        "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 5.webp",
        "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 4.webp",
        "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 3.webp",
        "images/lavarropas/Lavarropas Philco PHLF8014PI2 Inverter 8kg 1400 rpm c frontal plata 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí',
    codigo: "2075483",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075483",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Lavado",
    subcategoria: "Lavarropas",
    nombre: 'Lavarropas Philco PHLF6510B2 6.5kg 800rpm 15 prog. c/frontal Bco',
    imagen: "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 1.webp",
    imagenes: [
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 1.webp",
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 6.webp",
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 5.webp",
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 4.webp",
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 3.webp",
        "images/lavarropas/Lavarropas Philco PHLF6510B2 6 5kg 800rpm 15 prog c frontal Bco 2.webp"
    ],
    descripcion: '<strong>Capacidad (kg):</strong> 6,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 800',
    codigo: "2075426",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075426",
        "Garantía: 1 año"
    ]
},


///   25 08 2025   ///

{
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Ultracomb UC36S 36 lts 1200w',
    imagen: "images/hornos/Horno electrico Ultracomb UC36S 36 lts 1200w 1.webp",
    imagenes: [
        "images/hornos/Horno electrico Ultracomb UC36S 36 lts 1200w 1.webp",
        "images/hornos/Horno electrico Ultracomb UC36S 36 lts 1200w 2.webp",
        "images/hornos/Horno electrico Ultracomb UC36S 36 lts 1200w 3.webp",
        "images/hornos/Horno electrico Ultracomb UC36S 36 lts 1200w 4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 36\n<strong>Potencia (W):</strong> 1200',
    codigo: "2074550",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2074550",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Kanji KJH-HE600013600RAC 60 lts c/anafes 2000w',
    imagen: "images/hornos/Horno electrico Kanji KJH HE600013600RAC 60 lts c anafes 2000w 1.webp",
    imagenes: [
        "images/hornos/Horno electrico Kanji KJH HE600013600RAC 60 lts c anafes 2000w 1.webp",
        "images/hornos/Horno electrico Kanji KJH HE600013600RAC 60 lts c anafes 2000w 2.webp",
        "images/hornos/Horno electrico Kanji KJH HE600013600RAC 60 lts c anafes 2000w 3.webp",
        "images/hornos/Horno electrico Kanji KJH HE600013600RAC 60 lts c anafes 2000w 4.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 60\n<strong>Potencia (W):</strong> 2000\n<strong>Anafes:</strong> Sí\n<strong>Spiedo:</strong> Sí\n<strong>Conveccion:</strong> Sí',
    codigo: "2075420",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075420",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Hornos, Microondas y Freidoras",
    subcategoria: "Hornos",
    nombre: 'Horno electrico Kanji 70Lts KJH-HE70SL 2000w Acero',
    imagen: "images/hornos/Horno electrico Kanji 70Lts KJH HE70SL 2000w Acero 1.webp",
    imagenes: [
        "images/hornos/Horno electrico Kanji 70Lts KJH HE70SL 2000w Acero 1.webp",
        "images/hornos/Horno electrico Kanji 70Lts KJH HE70SL 2000w Acero 2.webp"
    ],
    descripcion: '<strong>Capacidad (Litros):</strong> 70\n<strong>Potencia (W):</strong> 2000\n<strong>Grill:</strong> Sí',
    codigo: "2075524",
    caracteristicas: [
        "Marca: Kanji",
        "Modelo: 2075524",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picadora Moulinex AD6021AR 750W 300Gr. picadora 1.2.3 + licuadora',
    imagen: "images/picadoras/Picadora Moulinex AD6021AR 750W 300Gr picadora 1 2 3  licuadora 1.webp",
    imagenes: [
        "images/picadoras/Picadora Moulinex AD6021AR 750W 300Gr picadora 1 2 3  licuadora 1.webp",
        "images/picadoras/Picadora Moulinex AD6021AR 750W 300Gr picadora 1 2 3  licuadora 2.webp",
        "images/picadoras/Picadora Moulinex AD6021AR 750W 300Gr picadora 1 2 3  licuadora 3.webp",
        "images/picadoras/Picadora Moulinex AD6021AR 750W 300Gr picadora 1 2 3  licuadora 4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 750\n<strong>Capacidad (Litros):</strong> 300mL, Licuadora 1L\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2071585",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2071585",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Ultracomb LM-2555 800ml 1200w batidor/picador/bowl',
    imagen: "images/mixers/Mixer Ultracomb LM 2555 800ml 1200w batidor picador bowl 1.webp",
    imagenes: [
        "images/mixers/Mixer Ultracomb LM 2555 800ml 1200w batidor picador bowl 1.webp",
        "images/mixers/Mixer Ultracomb LM 2555 800ml 1200w batidor picador bowl 2.webp",
        "images/mixers/Mixer Ultracomb LM 2555 800ml 1200w batidor picador bowl 3.webp",
        "images/mixers/Mixer Ultracomb LM 2555 800ml 1200w batidor picador bowl 4.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 1200\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso medidor, Batidor, Bowl picador',
    codigo: "2075200",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2075200",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Mixers",
    nombre: 'Mixer Philco LMPH8507NP 3 en 1 600w turbo acero inox Negra',
    imagen: "images/mixers/Mixer Philco LMPH8507NP 3 en 1 600w turbo acero inox Negra 1.webp",
    imagenes: [
        "images/mixers/Mixer Philco LMPH8507NP 3 en 1 600w turbo acero inox Negra 1.webp",
        "images/mixers/Mixer Philco LMPH8507NP 3 en 1 600w turbo acero inox Negra 2.webp",
        "images/mixers/Mixer Philco LMPH8507NP 3 en 1 600w turbo acero inox Negra 3.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 600\n<strong>Velocidades:</strong> 2\n<strong>Accesorios incluidos:</strong> Vaso medidor, Batidor',
    codigo: "2075432",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2075432",
        "Garantía: 1 año"
    ]
},







////    28 08 2025    ////

    {
    categoria: "Cuidado Personal",
    subcategoria: "Afeitadoras",
    nombre: 'Afeitadora Philco AE5105PP Electrica',
    imagen: "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 1.webp",
    imagenes: [
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 1.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 2.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 3.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 4.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 5.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 6.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 7.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 8.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 9.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 10.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 11.webp",
        "images/afeitadoras/Afeitadora Philco AE5105PP Electrica 12.webp"
    ],
    descripcion: '<strong>Patillera:</strong> Sí\n<strong>Tipos de cabezales:</strong> Rotativo\n<strong>Autonomía (min):</strong> 75\n<strong>Inalámbrica:</strong> Sí',
    codigo: "2074755",
    caracteristicas: [
        "Marca: Philco",
        "Modelo: 2074755",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Aspiradoras",
    nombre: 'Aspiradora Ultracomb AS-6061 Robot filtro',
    imagen: "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 1.webp",
    imagenes: [
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 1.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 2.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 3.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 4.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 5.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 6.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 7.webp",
        "images/aspiradoras/Aspiradora Ultracomb AS 6061 Robot filtro 8.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 20\n<strong>Capacidad (Litros):</strong> 650mL\n<strong>Bolsa:</strong> Sí\n<strong>Tipo de alimentación:</strong> Batería',
    codigo: "2075274",
    caracteristicas: [
        "Marca: Ultracomb",
        "Modelo: 2075274",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. AQUARELA 190x80X21 res.',
    imagen: "images/colchones/Colchon Suav AQUARELA 190x80X21 res 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav AQUARELA 190x80X21 res 1.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 21\n<strong>Peso máximo soportado (Kg):</strong> 100Kg\n<strong>Resortes:</strong> Sí',
    codigo: "15261",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 15261",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Stress Free Rollpack 190x140x25 esp.',
    imagen: "images/colchones/Colchon Suav Stress Free Rollpack 190x140x25 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav Stress Free Rollpack 190x140x25 esp 1.webp",
        "images/colchones/Colchon Suav Stress Free Rollpack 190x140x25 esp 4.webp",
        "images/colchones/Colchon Suav Stress Free Rollpack 190x140x25 esp 3.webp",
        "images/colchones/Colchon Suav Stress Free Rollpack 190x140x25 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 2\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 140 x 25\n<strong>Peso máximo soportado (Kg):</strong> 100Kg\n<strong>Espuma:</strong> Sí',
    codigo: "2073302",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2073302",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Rockstar 190x100x24/25 esp.',
    imagen: "images/colchones/Colchon Suav Rockstar 190x100x24 25 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav Rockstar 190x100x24 25 esp 1.webp",
        "images/colchones/Colchon Suav Rockstar 190x100x24 25 esp 3.webp",
        "images/colchones/Colchon Suav Rockstar 190x100x24 25 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1 1/2\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 100 x 25\n<strong>Peso máximo soportado (Kg):</strong> 110Kg\n<strong>Espuma:</strong> Sí',
    codigo: "2073334",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2073334",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Rockstar PT 190x80x30 esp.',
    imagen: "images/colchones/Colchon Suav Rockstar PT 190x80x30 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav Rockstar PT 190x80x30 esp 1.webp",
        "images/colchones/Colchon Suav Rockstar PT 190x80x30 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 100 x 30\n<strong>Peso máximo soportado (Kg):</strong> 110Kg\n<strong>Espuma:</strong> Sí\n<strong>Pillow:</strong> Sí',
    codigo: "2073595",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2073595",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Lujo 20 190x140x20 esp.',
    imagen: "images/colchones/Colchon Suav Lujo 20 190x140x20 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav Lujo 20 190x140x20 esp 1.webp",
        "images/colchones/Colchon Suav Lujo 20 190x140x20 esp 3.webp",
        "images/colchones/Colchon Suav Lujo 20 190x140x20 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 2\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 140 x 20\n<strong>Peso máximo soportado (Kg):</strong> 85Kg\n<strong>Espuma:</strong> Sí',
    codigo: "2075026",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2075026",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. Lujo 20 190x80x20 esp.',
    imagen: "images/colchones/Colchon Suav Lujo 20 190x80x20 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav Lujo 20 190x80x20 esp 1.webp",
        "images/colchones/Colchon Suav Lujo 20 190x80x20 esp 3.webp",
        "images/colchones/Colchon Suav Lujo 20 190x80x20 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 20\n<strong>Peso máximo soportado (Kg):</strong> 80\n<strong>Espuma:</strong> Sí',
    codigo: "2075027",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 2075027",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "hogar jardin y tiempo libre",
    subcategoria: "Colchones",
    nombre: 'Colchon Suav. EXTRA BM 190x140x18 esp.',
    imagen: "images/colchones/Colchon Suav EXTRA BM 190x140x18 esp 1.webp",
    imagenes: [
        "images/colchones/Colchon Suav EXTRA BM 190x140x18 esp 1.webp",
        "images/colchones/Colchon Suav EXTRA BM 190x140x18 esp 4.webp",
        "images/colchones/Colchon Suav EXTRA BM 190x140x18 esp 3.webp",
        "images/colchones/Colchon Suav EXTRA BM 190x140x18 esp 2.webp"
    ],
    descripcion: '<strong>Plazas:</strong> 1\n<strong>Dimensiones (Largo x Ancho x Alto):</strong> 190 x 80 x 18\n<strong>Peso máximo soportado (Kg):</strong> 65kg\n<strong>Espuma:</strong> Sí',
    codigo: "7098",
    caracteristicas: [
        "Marca: Suavestar",
        "Modelo: 7098",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Pequeños",
    subcategoria: "Picadoras",
    nombre: 'Picadora Moulinex AD6011AR 750W 300Gr. picadora 1.2.3',
    imagen: "images/picadoras/Picadora Moulinex AD6011AR 750W 300Gr picadora 1 2 3 1.webp",
    imagenes: [
        "images/picadoras/Picadora Moulinex AD6011AR 750W 300Gr picadora 1 2 3 1.webp",
        "images/picadoras/Picadora Moulinex AD6011AR 750W 300Gr picadora 1 2 3 4.webp",
        "images/picadoras/Picadora Moulinex AD6011AR 750W 300Gr picadora 1 2 3 3.webp",
        "images/picadoras/Picadora Moulinex AD6011AR 750W 300Gr picadora 1 2 3 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 750\n<strong>Capacidad (Litros):</strong> 300Gr\n<strong>Cuchillas desmontables:</strong> Sí',
    codigo: "2071584",
    caracteristicas: [
        "Marca: Moulinex",
        "Modelo: 2071584",
        "Garantía: 1 año"
    ]
},



////    29 08 2025    ////

{
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Surrey Split 2730 kw OnOff 2348 Kcal/h',
    imagen: "images/aires_acondicionados/Acond Surrey Split 2730 kw OnOff 2348 Kcal h 1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond Surrey Split 2730 kw OnOff 2348 Kcal h 1.webp",
        "images/aires_acondicionados/Acond Surrey Split 2730 kw OnOff 2348 Kcal h 3.webp",
        "images/aires_acondicionados/Acond Surrey Split 2730 kw OnOff 2348 Kcal h 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 2730Kw\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A+',
    codigo: "2075137",
    caracteristicas: [
        "Marca: Surrey",
        "Modelo: 2075137",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Climatización",
    subcategoria: "Aires Acondicionados",
    nombre: 'Acond. Enova Split 3400 kw 2924fg',
    imagen: "images/aires_acondicionados/Acond Enova Split 3400 kw 2924fg 1.webp",
    imagenes: [
        "images/aires_acondicionados/Acond Enova Split 3400 kw 2924fg 1.webp",
        "images/aires_acondicionados/Acond Enova Split 3400 kw 2924fg 4.webp",
        "images/aires_acondicionados/Acond Enova Split 3400 kw 2924fg 3.webp",
        "images/aires_acondicionados/Acond Enova Split 3400 kw 2924fg 2.webp"
    ],
    descripcion: '<strong>Potencia (W):</strong> 3400\n<strong>Tipo:</strong> Split\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074639",
    caracteristicas: [
        "Marca: Enova",
        "Modelo: 2074639",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Motorola G24 4/128GB',
    imagen: "images/celulares/LIBERADO Motorola G24 4 128GB 1.webp",
    imagenes: [
        "images/celulares/LIBERADO Motorola G24 4 128GB 1.webp",
        "images/celulares/LIBERADO Motorola G24 4 128GB 4.webp",
        "images/celulares/LIBERADO Motorola G24 4 128GB 3.webp",
        "images/celulares/LIBERADO Motorola G24 4 128GB 2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6,6"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 14',
    codigo: "2075385",
    caracteristicas: [
        "Marca: Motorola",
        "Modelo: 2075385",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Zte Blade V60 8/256GB 6.72" 4G (Z2356-FAL)',
    imagen: "images/celulares/LIBERADO Zte Blade V60 8 256GB 6 72 4G Z2356 FAL 1.webp",
    imagenes: [
        "images/celulares/LIBERADO Zte Blade V60 8 256GB 6 72 4G Z2356 FAL 1.webp",
        "images/celulares/LIBERADO Zte Blade V60 8 256GB 6 72 4G Z2356 FAL 4.webp",
        "images/celulares/LIBERADO Zte Blade V60 8 256GB 6 72 4G Z2356 FAL 3.webp",
        "images/celulares/LIBERADO Zte Blade V60 8 256GB 6 72 4G Z2356 FAL 2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 256\n<strong>RAM (GB):</strong> 8\n<strong>Pulgadas:</strong> 6,72"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 8 Mpx\n<strong>NFC:</strong> Sí\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075453",
    caracteristicas: [
        "Marca: Zte",
        "Modelo: 2075453",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A26 6/128GB',
    imagen: "images/celulares/LIBERADO Samsung A26 6 128GB 1.webp",
    imagenes: [
        "images/celulares/LIBERADO Samsung A26 6 128GB 1.webp",
        "images/celulares/LIBERADO Samsung A26 6 128GB 3.webp",
        "images/celulares/LIBERADO Samsung A26 6 128GB 2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 6\n<strong>Pulgadas:</strong> 6,7"\n<strong>Cámara trasera:</strong>  50 Mpx\n<strong>Cámara frontal:</strong>  13 Mpx\n<strong>NFC:</strong> Sí\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> 5G\n<strong>Sistema operativo:</strong> Android 13',
    codigo: "2075539",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2075539",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Tecnología",
    subcategoria: "Celulares",
    nombre: 'LIBERADO Samsung A04 4/128GB',
    imagen: "images/celulares/LIBERADO Samsung A04 4 128GB 1.webp",
    imagenes: [
        "images/celulares/LIBERADO Samsung A04 4 128GB 1.webp",
        "images/celulares/LIBERADO Samsung A04 4 128GB 3.webp",
        "images/celulares/LIBERADO Samsung A04 4 128GB 2.webp"
    ],
    descripcion: '<strong>Almacenamiento (GB):</strong> 128\n<strong>RAM (GB):</strong> 4\n<strong>Pulgadas:</strong> 6,5"\n<strong>Cámara trasera:</strong> 50 Mpx\n<strong>Cámara frontal:</strong> 5 Mpx\n<strong>NFC:</strong> No\n<strong>Batería:</strong> 5 Ah\n<strong>Red móvil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 12',
    codigo: "2074193",
    caracteristicas: [
        "Marca: Samsung",
        "Modelo: 2074193",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Win 85cm 5 Hornallas p/v 4006',
    imagen: "images/cocinas/Cocina Usman Industrial Win 85cm 5 Hornallas p v 4006 1.webp",
    imagenes: [
        "images/cocinas/Cocina Usman Industrial Win 85cm 5 Hornallas p v 4006 1.webp",
        "images/cocinas/Cocina Usman Industrial Win 85cm 5 Hornallas p v 4006 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 85 x 62\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 5\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072788",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2072788",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067',
    imagen: "images/cocinas/Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067 1.webp",
    imagenes: [
        "images/cocinas/Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067 1.webp",
        "images/cocinas/Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067 4.webp",
        "images/cocinas/Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067 3.webp",
        "images/cocinas/Cocina Morelli Industrial jitaku grill 820 4 hornallas 18067 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 82 x 62\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Plancha:</strong> Sí\n<strong>Carlitera:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072965",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2072965",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Escorial Master S2 Classic ge Negra',
    imagen: "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 1.webp",
    imagenes: [
        "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 1.webp",
        "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 5.webp",
        "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 4.webp",
        "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 3.webp",
        "images/cocinas/Cocina Escorial Master S2 Classic ge Negra 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Tipo:</strong> Envasado\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2073968",
    caracteristicas: [
        "Marca: Escorial",
        "Modelo: 2073968",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial 820 Ex Acero 16069 p/v r/fundicion liv',
    imagen: "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 1.webp",
    imagenes: [
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 1.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 5.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 4.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 3.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16069 p v r fundicion liv 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 82 x 62\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 5\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074820",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2074820",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera',
    imagen: "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera 1.webp",
    imagenes: [
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera 1.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera 4.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera 3.webp",
        "images/cocinas/Cocina Morelli Industrial 820 Ex Acero 16380 Multigrill Carlitera 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 82 x 62\n<strong>Válvula de seguridad:</strong> No\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Plancha:</strong> Sí\n<strong>Carlitera:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074821",
    caracteristicas: [
        "Marca: Morelli",
        "Modelo: 2074821",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Usman Industrial Compact 4800 4 Hornallas 80cm p/v-r/a + plancha',
    imagen: "images/cocinas/Cocina Usman Industrial Compact 4800 4 Hornallas 80cm p v r a  plancha 1.webp",
    imagenes: [
        "images/cocinas/Cocina Usman Industrial Compact 4800 4 Hornallas 80cm p v r a  plancha 1.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Industrial\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 82 x 62\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Rejillas de aluminio:</strong> Sí\n<strong>Ladrillos refractarios:</strong> Sí\n<strong>Plancha:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074965",
    caracteristicas: [
        "Marca: Usman",
        "Modelo: 2074965",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Orbis C9300 938GP4M Gris inox 55cm',
    imagen: "images/cocinas/Cocina Orbis C9300 938GP4M Gris inox 55cm 1.webp",
    imagenes: [
        "images/cocinas/Cocina Orbis C9300 938GP4M Gris inox 55cm 1.webp",
        "images/cocinas/Cocina Orbis C9300 938GP4M Gris inox 55cm 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 55 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Rejillas de fundición:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075541",
    caracteristicas: [
        "Marca: Orbis",
        "Modelo: 2075541",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Cocinas, anafes y purificadores",
    subcategoria: "Cocinas",
    nombre: 'Cocina Florencia 5536/F bca. enc. electr. con Timer',
    imagen: "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 1.webp",
    imagenes: [
        "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 1.webp",
        "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 5.webp",
        "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 4.webp",
        "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 3.webp",
        "images/cocinas/Cocina Florencia 5536 F bca enc electr con Timer 2.webp"
    ],
    descripcion: '<strong>Tipo de uso:</strong> Doméstico\n<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 56 x 60\n<strong>Válvula de seguridad:</strong> Sí\n<strong>Luz en el horno:</strong> Sí\n<strong>Encendido eléctrico:</strong> Sí\n<strong>Timer:</strong> Sí\n<strong>Tipo:</strong> Multigas\n<strong>Cantidad de hornallas:</strong> 4\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2072764",
    caracteristicas: [
        "Marca: Florencia",
        "Modelo: 2072764",
        "Garantía: 1 año"
    ]
},





////    30 08 2025   ////

    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Gafa FGHI100B-S horizontal Inverter 117 lts',
    imagen: "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 1.webp",
        "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 5.webp",
        "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 4.webp",
        "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 3.webp",
        "images/freezers/Freezer Gafa FGHI100B S horizontal Inverter 117 lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 89 x 60 x 66\n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 117\n<strong>Inverter:</strong> Sí\n<strong>Funciones:</strong> Conservar, Congelar\n<strong>Cantidad de puertas:</strong> 1\n<strong>Con ruedas:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074052",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2074052",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Neba Trial F 402 cap 384 lts 2 puertas',
    imagen: "images/freezers/Freezer Neba Trial F 402 cap 384 lts 2 puertas 1.webp",
    imagenes: [
        "images/freezers/Freezer Neba Trial F 402 cap 384 lts 2 puertas 1.webp",
        "images/freezers/Freezer Neba Trial F 402 cap 384 lts 2 puertas 4.webp",
        "images/freezers/Freezer Neba Trial F 402 cap 384 lts 2 puertas 3.webp",
        "images/freezers/Freezer Neba Trial F 402 cap 384 lts 2 puertas 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 120 x 65 \n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 384\n<strong>Funciones:</strong> Conservar, Congelar, Enfriar\n<strong>Cantidad de puertas:</strong> 2\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "21407",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 21407",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Neba Trial F 400 cap 384lts',
    imagen: "images/freezers/Freezer Neba Trial F 400 cap 384lts 1.webp",
    imagenes: [
        "images/freezers/Freezer Neba Trial F 400 cap 384lts 1.webp",
        "images/freezers/Freezer Neba Trial F 400 cap 384lts 4.webp",
        "images/freezers/Freezer Neba Trial F 400 cap 384lts 3.webp",
        "images/freezers/Freezer Neba Trial F 400 cap 384lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 85 x 120 x 65 \n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 384\n<strong>Funciones:</strong> Conservar, Congelar, Enfriar\n<strong>Cantidad de puertas:</strong> 1\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "21403",
    caracteristicas: [
        "Marca: Neba",
        "Modelo: 21403",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer Gafa FGHI200B-M',
    imagen: "images/freezers/Freezer Gafa FGHI200B M 1.webp",
    imagenes: [
        "images/freezers/Freezer Gafa FGHI200B M 1.webp",
        "images/freezers/Freezer Gafa FGHI200B M 4.webp",
        "images/freezers/Freezer Gafa FGHI200B M 3.webp",
        "images/freezers/Freezer Gafa FGHI200B M 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 89 x 86 x 66\n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 205\n<strong>Funciones:</strong> Conservar, Congelar\n<strong>Cantidad de puertas:</strong> 1\n<strong>Inverter:</strong> Sí\n<strong>Con ruedas:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2074058",
    caracteristicas: [
        "Marca: Gafa",
        "Modelo: 2074058",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer TELEFUNKEN de pozo 120 lts FP120',
    imagen: "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 1.webp",
    imagenes: [
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 1.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 7.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 6.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 5.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 4.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 3.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 120 lts FP120 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 83 x 58 x 66\n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 120\n<strong>Funciones:</strong> Conservar, Congelar, Enfriar\n<strong>Cantidad de puertas:</strong> 1\n<strong>Con ruedas:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075163",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075163",
        "Garantía: 1 año"
    ]
},
    {
    categoria: "Heladeras y freezers",
    subcategoria: "Freezers",
    nombre: 'Freezer TELEFUNKEN de pozo 50 lts',
    imagen: "images/freezers/Freezer TELEFUNKEN de pozo 50 lts 1.webp",
    imagenes: [
        "images/freezers/Freezer TELEFUNKEN de pozo 50 lts 1.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 50 lts 4.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 50 lts 3.webp",
        "images/freezers/Freezer TELEFUNKEN de pozo 50 lts 2.webp"
    ],
    descripcion: '<strong>Dimensiones (Alt x Anc x Pro):</strong> 62 x 45 x 43\n<strong>Tipo:</strong> Pozo\n<strong>Capacidad (Litros):</strong> 50\n<strong>Funciones:</strong> Conservar, Congelar\n<strong>Cantidad de puertas:</strong> 1\n<strong>Eficiencia energética:</strong> Clase A',
    codigo: "2075107",
    caracteristicas: [
        "Marca: Telefunken",
        "Modelo: 2075107",
        "Garantía: 1 año"
    ]
},


];
