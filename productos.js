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
        imagen: "images/cocina_escorial_candor.webp",
        imagenes: [
            "images/cocina_escorial_candor.webp",
            "images/cocina_escorial_candor2.webp",
            "images/cocina_escorial_candor3.webp"
        ],
        descripcion: "<strong>Dimensiones:</strong> 51cm (An) x  95cm (Al) x 60 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> No\n<strong>Encencido eléctrico:</strong> No\n<strong>Tipo de gas:</strong> Natural o envasado.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "18079",
        caracteristicas: ["Marca: Escorial", "Modelo: Candor", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Florencia 5507F 3 Hornallas",
        imagen: "images/florenca_5507F.webp",
        imagenes: [
            "images/florenca_5507F.webp",
            "images/florenca_5507F2.png",
            "images/florenca_5507F3.jpg"
        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x  85cm (Al) x 60 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Hornallas:</strong> 3.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2074709",
        caracteristicas: ["Marca: Florencia", "Modelo: 5507F", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master S2 Classic gn Negra",
        imagen: "images/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
        imagenes: [
            "images/Cocina_Escorial_Master_S2_Classic_gn_Negra_1.webp",
            "images/Cocina_Escorial_Master_S2_Classic_gn_Negra_2.webp",
            "images/Cocina_Escorial_Master_S2_Classic_gn_Negra_3.webp",
            "images/Cocina_Escorial_Master_S2_Classic_gn_Negra_4.webp"
        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x  95cm (Al) x 60 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Hornallas:</strong> 4.\n<strong>Tipo de gas:</strong> Natural.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073969",
        caracteristicas: ["Marca: Florencia", "Modelo: 5507F", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Candor Black",
        imagen: "images/cocina_candor_negra.jpg",
        imagenes: [
            "images/cocina_candor_negra.jpg",
            "images/cocina_candor_negra1.jpg",
            "images/cocina_candor_negra2.jpg",
            "images/cocina_candor_negra3.jpg",
            "images/cocina_candor_negra4.jpg",
            "images/cocina_candor_negra5.jpg"
        ],
        descripcion: "<strong>Dimensiones:</strong> 51cm (An) x  95cm (Al) x 60 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Tipo de gas:</strong> Natural o envasado.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2072621",
        caracteristicas: ["Marca: Escorial", "Modelo: Candor Black", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Classic",
        imagen: "images/cocina_escorial_master_classic.jpg",
        imagenes: [
            "images/cocina_escorial_master_classic.jpg",
            "images/cocina_escorial_master_classic2.jpg",
            "images/cocina_escorial_master_classic3.jpg",
            "images/cocina_escorial_master_classic4.jpg",
            "images/cocina_escorial_master_classic5.jpg",
        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x  93cm (Al) x 60 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Tipo de gas:</strong> Natural o envasado.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073930",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial PALACE CRISTAL LX",
        imagen: "images/cocina-escorial-palace-cristal-lx-gn.jpg",
        imagenes: [
            "images/cocina-escorial-palace-cristal-lx-gn.jpg",

        ],
        descripcion: "<strong>Dimensiones:</strong> 51cm (An) x  85cm (Al) x 52 cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> Sí\n<strong>Encencido eléctrico:</strong> Sí\n<strong>Tipo de gas:</strong> Natural.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073930",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Classic ge Inox",
        imagen: "images/cocina-escorial-master-classic-ge-inox.jpg",
        imagenes: [
            "images/cocina-escorial-master-classic-ge-inox.jpg",
            "images/cocina-escorial-master-classic-ge-inox1.jpg",
            "images/cocina-escorial-master-classic-ge-inox2.jpg",
            "images/cocina-escorial-master-classic-ge-inox3.jpg",
            "images/cocina-escorial-master-classic-ge-inox4.jpg",

        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 91cm (Al) x 60cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> No\n<strong>Encencido eléctrico:</strong> No\n<strong>Tipo de gas:</strong> Envasado.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075088",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Classic", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Florencia 5518F - Inox.",
        imagen: "images/Cocina_Florencia_5518F _Inox_1.webp",
        imagenes: [
            "images/Cocina_Florencia_5518F _Inox_1.webp",
            "images/Cocina_Florencia_5518F _Inox_2.webp",
            "images/Cocina_Florencia_5518F _Inox_3.webp",
            "images/Cocina_Florencia_5518F _Inox_4.webp",

        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 85cm (Al) x 60cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> No\n<strong>Encencido eléctrico:</strong> No\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase AA.",
        codigo: "2071810 ",
        caracteristicas: ["Marca: Florencia", "Modelo: 5518F", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Escorial Master Style Multigas Bca.",
        imagen: "images/cocina-escorial-master-style-multigas-bca.jpg",
        imagenes: [
            "images/cocina-escorial-master-style-multigas-bca.jpg",
            "images/cocina-escorial-master-style-multigas-bca1.jpg",
            "images/cocina-escorial-master-style-multigas-bca2.jpg",
            "images/cocina-escorial-master-style-multigas-bca3.jpg",

        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 93cm (Al) x 60cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> Sí.\n<strong>Encencido eléctrico:</strong> Sí.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073910",
        caracteristicas: ["Marca: Escorial", "Modelo: Master Style", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87643 55cm 4 horn. Blanca luz-enc.elec",
        imagen: "images/cocina-volcan-87643-55cm-4-horn-blanca.jpg",
        imagenes: [
            "images/cocina-volcan-87643-55cm-4-horn-blanca.jpg",
        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 86cm (Al) x 58cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> Sí.\n<strong>Encencido eléctrico:</strong> Sí.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073893",
        caracteristicas: ["Marca: Volcan", "Modelo: 87643", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87644 55cm 4 horn. Blanca sin luz",
        imagen: "images/Cocina_Volcan_87644_55cm_4_horn_Blanca_sin_luz.webp",
        imagenes: [
            "images/Cocina_Volcan_87644_55cm_4_horn_Blanca_sin_luz.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 86cm (Al) x 58cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> No.\n<strong>Encencido eléctrico:</strong> No.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2074783",
        caracteristicas: ["Marca: Volcan", "Modelo: 87644", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Volcan 87673 55cm 4 horn. inox",
        imagen: "images/Cocina Volcan 87673 55cm 4 horn inox 1.jpg",
        imagenes: [
            "images/Cocina Volcan 87673 55cm 4 horn inox 1.jpg",
            "images/Cocina Volcan 87673 55cm 4 horn inox 2.png",
            "images/Cocina Volcan 87673 55cm 4 horn inox 3.webp",
            "images/Cocina Volcan 87673 55cm 4 horn inox 4.webp",

        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 86cm (Al) x 58cm (Pr).\n<strong>Válvula de seguridad:</strong> Sí.\n<strong>Luz en el horno:</strong> Sí.\n<strong>Encencido eléctrico:</strong> Sí.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073914",
        caracteristicas: ["Marca: Volcan", "Modelo: 87673", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Morelli Industrial Saho Kuro 550 p/v-r/a 180001",
        imagen: "images/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
        imagenes: [
            "images/Cocina_Morelli_Industrial_Saho_Kuro_550_180001.webp",
            "images/Cocina_Morelli_Industrial_Saho_Kuro_550_1800012.webp",
            "images/Cocina_Morelli_Industrial_Saho_Kuro_550_1800013.webp",
            "images/Cocina_Morelli_Industrial_Saho_Kuro_550_1800014.webp",

        ],
        descripcion: "<strong>Dimensiones:</strong> 56cm (An) x 86cm (Al) x 58cm (Pr).\n<strong>Válvula de seguridad:</strong> No.\n<strong>Luz en el horno:</strong> No.\n<strong>Encencido eléctrico:</strong> No.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2074224",
        caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },

    {
        categoria: "Cocinas",
        nombre: "Cocina Morelli Industrial Jitaku/saho 820 18062 5 horn. inox",
        imagen: "images/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
        imagenes: [
            "images/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox.webp",
            "images/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox2.webp",
            "images/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox3.webp",
            "images/Cocina_Morelli_Industrial_Jitaku_saho_820_18062_5_horn_puerta_vidrio_82_cm_acero_inox4.webp",


        ],
        descripcion: "<strong>Dimensiones:</strong> 82cm (An) x 86cm (Al) x 58cm (Pr).\n<strong>Válvula de seguridad:</strong> No.\n<strong>Luz en el horno:</strong> No.\n<strong>Encencido eléctrico:</strong> No.\n<strong>Tipo de gas:</strong> Multigas.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073292",
        caracteristicas: ["Marca: Morelli", "Modelo: Saho Kuro 550", "Garantía: 1 año"]
    },



    /////---------- Heladeras ----------/////
    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RT29K577JS8 Silver No Fr 299lts c/disp",
        imagen: "images/heladera_samsung_rt29_silver_no_fr_290lts_cdisp1.webp",
        imagenes: [
            "images/heladera_samsung_rt29_silver_no_fr_290lts_cdisp1.webp",
            "images/heladera_samsung_rt29_silver_no_fr_290lts_cdisp2.webp"
        ],
        descripcion: "<strong>Dimensiones:</strong> 184.5 (Alt) x 61.3 (Anc) x 62.1 (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 347 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> Sí.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073101",
        caracteristicas: ["Marca: Samsung", "Modelo: RT29K577JS8", "Garantía: 1 año"]
    },

    {
        categoria: "Heladeras",
        nombre: "Heladera Gafa HGNW3900P No Frost 347lts Plata c/dispenser",
        imagen: "images/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser1.webp",
        imagenes: [
            "images/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser1.webp",
            "images/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser2.webp",
            "images/Heladera_Gafa_HGNW3900P_No_Frost_347lts_Plata_dispenser3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 184.5 (Alt) x 61.3 (Anc) x 62.1 (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 347 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> Sí.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075205",
        caracteristicas: ["Marca: Gafa", "Modelo: HGNW3900P", "Garantía: 1 año"]
    },

    {
        categoria: "Heladeras",
        nombre: "Heladera Neba A 128B Ciclica 2 frios 128 Lts Blanca",
        imagen: "images/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_1.webp",
        imagenes: [
            "images/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_1.webp",
            "images/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_2.webp",
            "images/Heladera_Neba_A_128B_Ciclica_2_frios_128_Lts_Blanca_3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong>  81cm (Alt) x 57cm (Anc) x 60cm (Pro).\n<strong>Tipo de tecnologia:</strong> Cíclica.\n<strong>Capacidad:</strong> 128 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2073986",
        caracteristicas: ["Marca: Neba", "Modelo: A 128B", "Garantía: 1 año"]
    },
    {
        categoria: "Heladeras",
        nombre: "Heladera Neba A 280 Ciclica 2 frios 280 Lts",
        imagen: "images/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_1.webp",
        imagenes: [
            "images/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_1.webp",
            "images/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_2.webp",
            "images/Heladera_Neba_A_280_Ciclica_2_frios_280_Lts_3.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 152cm (Alt) x 57cm (Anc) x 60cm (Pro).\n<strong>Tipo de tecnologia:</strong> Cíclica.\n<strong>Capacidad:</strong> 280 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "22566",
        caracteristicas: ["Marca: Gafa", "Modelo: HGNW3900P", "Garantía: 1 año"]
    },
    {
        categoria: "Heladeras",
        nombre: "Heladera Neba H-300BL Top Mount 294lts Blanca",
        imagen: "images/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_1.webp",
        imagenes: [
            "images/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_1.webp",
            "images/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_2.webp",
            "images/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_3.webp",
            "images/Heladera-Neba-H-300BL-Top-Mount-294lts-Blanca_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 170cm(Alt) x 65cm (Anc) x 54cm (Pro).\n<strong>Tipo de tecnologia:</strong> Cíclica.\n<strong>Capacidad:</strong> 294 Litros.\n<strong>Dispenser de agua:</strong> No.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2074983",
        caracteristicas: ["Marca: Neba", "Modelo: H-300BL", "Garantía: 1 año"]
    },
    {
        categoria: "Heladeras",
        nombre: "Heladera Philco PHCT302X Top Mount 298Lts Inox ciclica",
        imagen: "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_1.webp",
        imagenes: [
            "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_1.webp",
            "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_2.webp",
            "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_3.webp",
            "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_4.webp",
            "images/Heladera_Philco_PHCT302X_Top_Mount_298Lts_Inox_ciclica_5.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 176cm (Alt) x 55cm (Anc) x 60cm (Pro).\n<strong>Tipo de tecnologia:</strong> Cíclica.\n<strong>Capacidad:</strong> 298 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No.\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075258",
        caracteristicas: ["Marca: Philco", "Modelo: PHCT302X", "Garantía: 1 año"]
    },

    {
        categoria: "Heladeras",
        nombre: "Heladera Philco PHCT341B ciclica 340Lts Blanca",
        imagen: "images/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_1.webp",
        imagenes: [
            "images/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_1.webp",
            "images/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_2.webp",
            "images/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_3.webp",
            "images/Heladera_Philco_PHCT341B]_ciclica_340Lts_Blanca_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185cm (Alt) x 61cm (Anc) x 62cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 347 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075205",
        caracteristicas: ["Marca: Philco", "Modelo: PHCT341B", "Garantía: 1 año"]
    },

    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RB31FSRNDSA 328lts Silver",
        imagen: "images/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_3.webp",
        imagenes: [
            "images/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_3.webp",
            "images/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_1.webp",
            "images/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_2.webp",
            "images/Heladera_Samsung_RB31FSRNDSA_328lts_Silver_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185cm (Alt) x 60cm (Anc) x 68cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 328 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A+.",
        codigo: "2074199",
        caracteristicas: ["Marca: Samsung", "Modelo: RB31FSRNDSA", "Garantía: 1 año"]
    },

    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RT32k5070S8 Silver No Fr 321lts",
        imagen: "images/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_1.webp",
        imagenes: [
            "images/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_1.webp",
            "images/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_2.webp",
            "images/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_3.webp",
            "images/Heladera_Samsung_RT32k5070S8_Silver_No_Fr_321lts_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> cm (Alt) x cm (Anc) x cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 269 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A+.",
        codigo: "2072958",
        caracteristicas: ["Marca: Samsung", "Modelo: RT32k5070S8", "Garantía: 1 año"]
    },
    
    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RT29K507JS8 Silver No Fr 290lts sin dispenser",
        imagen: "images/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_1.webp",
        imagenes: [
            "images/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_1.webp",
            "images/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_2.webp",
            "images/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_3.webp",
            "images/Heladera_Samsung_RT29K507JS8_Silver_No_Fr_290lts_sin_dispenser_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 163cm (Alt) x 60cm (Anc) x 67cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 290 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2074499",
        caracteristicas: ["Marca: Samsung", "Modelo: RT29K507JS8", "Garantía: 1 año"]
    },
    
    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RT32K5070WW No Fr 321lts Bl s/disp",
        imagen: "images/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_1.webp",
        imagenes: [
            "images/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_1.webp",
            "images/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_2.webp",
            "images/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_3.webp",
            "images/Heladera_Samsung_RT32K5070WW_NoFr_321lts_Bl_s_disp_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 171cm (Alt) x 60cm (Anc) x 67cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 321 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2072527",
        caracteristicas: ["Marca: Samsung", "Modelo: RT32K5070WW", "Garantía: 1 año"]
    },
    
    {
        categoria: "Heladeras",
        nombre: "Heladera Whirlpool WRE57CK Inverter 449lts No Frost Platinum",
        imagen: "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_1.webp",
        imagenes: [
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_1.webp",
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_2.webp",
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_3.webp",
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_4.webp",
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_5.webp",
            "images/Heladera_Whirlpool_WRE57CK_Inverter_449lts_No_Frost_Platinum_6.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 185cm (Alt) x 70cm (Anc) x 76cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 449 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> No\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075208",
        caracteristicas: ["Marca: Whirlpool", "Modelo: WRE57CK", "Garantía: 1 año"]
    },


    {
        categoria: "Heladeras",
        nombre: "Heladera Samsung RT42DG6730B1 No Frost (424 lts bruto) Black Dispenser Inverter",
        imagen: "images/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_1.webp",
        imagenes: [
            "images/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_1.webp",
            "images/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_2.webp",
            "images/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_3.webp",
            "images/Heladera_Samsung_RT42DG6730B1_No_Frost_424_lts_bruto_Black_Dispenser_Inverter_4.webp",
        ],
        descripcion: "<strong>Dimensiones:</strong> 178cm (Alt) x 70cm (Anc) x 67cm (Pro).\n<strong>Tipo de tecnologia:</strong> No Frost.\n<strong>Capacidad:</strong> 424 Litros.\n<strong>Freezer:</strong> Sí.\n<strong>Dispenser de agua:</strong> Sí\n<strong>Eficiencia energética:</strong> Clase A.",
        codigo: "2075161",
        caracteristicas: ["Marca: Samsung", "Modelo: RT42DG6730B1", "Garantía: 1 año"]
    },



    










    /////---------- Lavarropas ----------/////
    {
        categoria: "Lavarropas y secarropas",
        nombre: "Lavarropas ENOVA EWMF-B7 carga frontal 7kg 1000rpm",
        imagen: "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_1.webp",
        imagenes: [
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_1.webp",
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_2.webp",
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_3.webp",
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_4.webp",
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_5.webp",
            "images/Lavarropas_ENOVA_EWMF_B7_carga_frontal_7kg_1000rpm_6.webp"
        ],
        descripcion: "Lavarropas de carga frontal con capacidad de 7kg.",
        codigo: "2075251",
        caracteristicas: ["Marca: Enova", "Modelo: EWMF-B7", "Garantía: 1 año"]
    },

    

    {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Midea MF100W60/W-A1 c/frontal 6kg 1000rpm Blanco',
        imagen: "images/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_1.webp",
        imagenes: [
            "images/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_1.webp",
            "images/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_2.webp",
            "images/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_3.webp",
            "images/Lavarropas_Midea_MF100W60_W_A1_c_frontal_6kg_1000rpm_Blanco_4.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2075301",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2075301",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Bgh Inverter 8kg 1400 rpm Blanco c/frontal BWFI08W24AR',
        imagen: "images/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_1.webp",
        imagenes: [
            "images/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_1.webp",
            "images/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_2.webp",
            "images/Lavarropas_Bgh_Inverter_8kg_1400_rpm_Blanco_c_frontal_BWFI08W24AR_3.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 8\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2075312",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2075312",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Bgh Inverter 6kg 1000 rpm Silver c/frontal BWFI06S24AR',
        imagen: "images/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_2.webp",
        imagenes: [
            "images/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_2.webp",
            "images/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_1.webp",
            "images/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_3.webp",
            "images/Lavarropas_Bgh_Inverter_6kg_1000_rpm_Silver_c_frontal_BWFI06S24AR_4.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2075313",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2075313",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Columbia LSC10000 Semiautomatico 10 kg',
        imagen: "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_1.webp",
        imagenes: [
            "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_1.webp",
            "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_2.webp",
            "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_3.webp",
            "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_4.webp",
            "images/Lavarropas_Columbia_LSC10000_Semiautomatico_10_kg_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 10\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2072096",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2072096",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Columbia LSC10001 10 kg c/bomba desagote',
        imagen: "images/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_1.webp",
        imagenes: [
            "images/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_1.webp",
            "images/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_3.webp",
            "images/Lavarropas_Columbia_LSC10001_10_kg_c_bomba_desagote_2.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 10\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2073176",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2073176",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Columbia LSC7000 Semiautomatico 7 kg',
        imagen: "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_1.webp",
        imagenes: [
            "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_1.webp",
            "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_2.webp",
            "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_3.webp",
            "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_4.webp",
            "images/Lavarropas_Columbia_LSC7000_Semiautomatico_7_kg_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2072095",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2072095",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Columbia LSC7001 Semiautomatico 7 kg c/bomba',
        imagen: "images/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_1.webp",
        imagenes: [
            "images/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_1.webp",
            "images/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_2.webp",
            "images/Lavarropas_Columbia_LSC7001_Semiautomatico_7_kg_c_bomba_3.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2074987",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2074987",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Drean GOLD BLUE 10.6 ECO +',
        imagen: "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_1.webp",
        imagenes: [
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_1.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_2.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_3.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_4.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_5.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_6.webp",
            "images/Lavarropas_Drean_GOLD_BLUE_10_6_ECO_7.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 1000\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2070313",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2070313",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Patrick LTPK67SB 6kg c/s semiauto.',
        imagen: "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_1.webp",
        imagenes: [
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_1.webp",
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_2.webp",
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_3.webp",
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_4.webp",
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_5.webp",
            "images/Lavarropas_Patrick_LTPK67SB_6kg_c_s_semiauto_6.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 6\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2074107",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2074107",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Samsung WA85C5441BWUBG c/sup 8.5 kg 700 rpm Blanco Inverter',
        imagen: "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_1.webp",
        imagenes: [
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_1.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_2.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_3.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_4.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_5.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_6.webp",
            "images/Lavarropas_Samsung_WA85C5441BWUBG_c_sup_8_5_kg_700_rpm_Blanco_Inverter_7.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 8,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> 700\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2074786",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2074786",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Samsung WW70AA46BX 7 kg 1400 rpm Inox',
        imagen: "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_1.webp",
        imagenes: [
            "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_1.webp",
            "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_2.webp",
            "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_3.webp",
            "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_4.webp",
            "images/Lavarropas_Samsung_WW70AA46BX_7_kg_1400_rpm_Inox_5.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 7\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> No',
        codigo: "2074202",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2074202",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavarropas Steel Home LRSH56SB0 Redondo 5kg 6 programas',
        imagen: "images/Lavarropas_Steel_Home_LRSH56SB0_Redondo_5kg_6_programas_1.webp",
        imagenes: [
            "images/Lavarropas_Steel_Home_LRSH56SB0_Redondo_5kg_6_programas_1.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 5\n<strong>Tipo de lavado:</strong> Semiautomático\n<strong>Tipo de carga:</strong> Superior\n<strong>Velocidad de centrifugado (RPM):</strong> -\n<strong>Inverter:</strong> No\n<strong>Secado a calor:</strong> No',
        codigo: "2075324",
        caracteristicas: [
            "Marca: Lavarropas",
            "Modelo: 2075324",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Lavarropas y secarropas",
        nombre: 'Lavasecarropas Samsung WD95A4453BWUBG 9.5kg Blanco',
        imagen: "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
        imagenes: [
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_1.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_2.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_3.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_4.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_5.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_6.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_7.webp",
            "images/Lavasecarropas_Samsung_WD95A4453BWUBG_9_5kg_Blanco_8.webp"
        ],
        descripcion: '<strong>Capacidad (kg):</strong> 9,5\n<strong>Tipo de lavado:</strong> Automático\n<strong>Tipo de carga:</strong> Frontal\n<strong>Velocidad de centrifugado (RPM):</strong> 1400\n<strong>Inverter:</strong> Sí\n<strong>Secado a calor:</strong> Sí',
        codigo: "2074749",
        caracteristicas: [
            "Marca: Lavasecarropas",
            "Modelo: 2074749",
            "Garantía: 1 año"
        ]
    },


    /////---------- Televisores ----------/////
    {
        categoria: "Televisores",
        nombre: 'TV LED ENOVA 50" smart (TE50UA10) 4K UHD Android',
        imagen: "images/tv_led_enova_50_smart_te50ua10_4k_uhd_android_1.webp",
        imagenes: [
            "images/tv_led_enova_50_smart_te50ua10_4k_uhd_android_1.webp",
            "images/tv_led_enova_50_smart_te50ua10_4k_uhd_android_2.webp",
            "images/tv_led_enova_50_smart_te50ua10_4k_uhd_android_3.webp",
            "images/tv_led_enova_50_smart_te50ua10_4k_uhd_android_4.webp"
        ],
        descripcion: "<strong>Dimensiones:</strong> 1.11m x 64.4cm.\n<strong>Tipo de pantalla:</strong> DLED.\n<strong>Tamaño de la pantalla:</strong> 50 pulgadas.\n<strong>Tipo de resolución:</strong> 4K.\n<strong>Sistema operativo:</strong> Android TV",
        codigo: "2074218",
        caracteristicas: ["Marca: Enova", "Modelo: TE50UA10", "Garantía: 1 año"]
    },


    
    {
        categoria: "Televisores",
        nombre: "TV LED ENOVA 32 smart HD Android",
        imagen: "images/TV_LED_ENOVA_32_smart_HD_Android_1.webp",
        imagenes: [
              "images/TV_LED_ENOVA_32_smart_HD_Android_1.webp",
              "images/TV_LED_ENOVA_32_smart_HD_Android_2.webp"
            ],
        descripcion: '<strong>Pulgadas:</strong> 32".\n<strong>Tipo de pantalla:</strong> Led.\n<strong>Tipo de resolución:</strong> HD.\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2073755",
        caracteristicas: [
          "Marca: Enova", "Modelo: Te32ha10", "Garantía: 1 año"
        ]
      },
      {
        categoria: "Televisores",
        nombre: "TV LED RCA 32 AND32Y Android",
        codigo: "2073676",
        descripcion: '<strong>Pulgadas:</strong> 32".\n<strong>Tipo de pantalla:</strong> Led.\n<strong>Tipo de resolución:</strong> HD.\n<strong>Sistema operativo:</strong> Android TV.',
        imagen: "images/TV_LED_RCA_32_AND32Y_Android_1.webp",
        imagenes: [
          "images/TV_LED_RCA_32_AND32Y_Android_1.webp",
          "images/TV_LED_RCA_32_AND32Y_Android_2.webp",
          "images/TV_LED_RCA_32_AND32Y_Android_3.webp"
        ],
        caracteristicas: [ "Marca: RCA", "Modelo: AND32Y", "Garantía: 1 año"
        ]
      },

    {
        categoria: "Televisores",
        nombre: "TV LED Philips 32\" Smart HD 32PHD6910/77 con Titan OS",
        codigo: "2075320",
        descripcion: '<strong>Pulgadas:</strong> 32".\n<strong>Tipo de pantalla:</strong> Led.\n<strong>Tipo de resolución:</strong> HD.\n<strong>Sistema operativo:</strong> Titan OS.',
        imagen: "images/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
        imagenes: [
          "images/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
          "images/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_2.webp",
          "images/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_3.webp",
          "images/TV_LED _Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_4.webp"
        ],
        caracteristicas: [
          "Marca: Philips",
          "Modelo: 32PHD6910/77 ",
          "Garantía: 1 año"
        ]
      },

        {
        categoria: "Televisores",
        nombre: 'TV LED RCA 40" R40AND-F Smart c/ Android',
        imagen: "images/TV_LED_RCA_40_R40AND_F_Smart_c_Android_1.webp",
        imagenes: [
            "images/TV_LED_RCA_40_R40AND_F_Smart_c_Android_1.webp",
            "images/TV_LED_RCA_40_R40AND_F_Smart_c_Android_2.webp",
            "images/TV_LED_RCA_40_R40AND_F_Smart_c_Android_3.webp"
        ],
        descripcion: ['<strong>Pulgadas:</strong> 40.\n<strong>Tipo de pantalla:</strong> Led.\n<strong>Tipo de resolucion:</strong> HD.\n<strong>Sistema operativo:</strong> Android TV.'],
        codigo: "2075067",
        caracteristicas: [
            "Marca: RCA",
            "Modelo: R40AND-F",
            "Garantía: 1 año"
        ]
    },



    {
        categoria: "Televisores",
        nombre: 'TV LED ENOVA 65" smart 4K UHD Google Tv',
        imagen: "images/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_2.webp",
        imagenes: [
            "images/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_2.webp",
            "images/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_1.webp",
            "images/TV_LED_ENOVA_65_smart_4K_UHD_Google_Tv_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 65\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2075302",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075302",
            "Garantía: 1 año"
        ]
    },

    {
        categoria: "Televisores",
        nombre: 'TV LED ENOVA 75" smart 4K UHD Android/Google tv',
        imagen: "images/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_1.webp",
        imagenes: [
            "images/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_1.webp",
            "images/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_2.webp",
            "images/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_3.webp",
            "images/TV_LED_ENOVA_75_smart_4K_UHD_Android_Google_tv_4.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 75\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2074860",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2074860",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Kanji 40" (7635718719284) HD Smart Google Tv',
        imagen: "images/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_3.webp",
        imagenes: [
            "images/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_3.webp",
            "images/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_2.webp",
            "images/TV_LED_Kanji 40_7635718719284_HD_Smart_Google_Tv_1.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 40\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2074810",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2074810",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Kodak 50" QLED 4K Smart Google tv',
        imagen: "images/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_1.webp",
        imagenes: [
            "images/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_1.webp",
            "images/TV_LED_Kodak_50_QLED_4K_Smart_Google_tv_2.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 50\n<strong>Tipo de pantalla:</strong> QLED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Google TV',
        codigo: "2075193",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075193",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Noblex 32" DR/DV32X7080 Android Tv',
        imagen: "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_1.webp",
        imagenes: [
            "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_1.webp",
            "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_2.webp",
            "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_3.webp",
            "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_4.webp",
            "images/TV_LED_Noblex_32_DR_DV32X7080_Android_Tv_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2075334",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075334",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Noblex 50" DR50X8580 Smart Google tv',
        imagen: "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_1.webp",
        imagenes: [
            "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_1.webp",
            "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_2.webp",
            "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_3.webp",
            "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_4.webp",
            "images/TV_LED_Noblex_50_DR50X8580_Smart_Google_tv_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 50\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> GO',
        codigo: "2075285",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075285",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Noblex 58" DB58X7550 Android 4K',
        imagen: "images/TV_LED_Noblex_58_DB58X7550_Android_4K_1.webp",
        imagenes: [
            "images/TV_LED_Noblex_58_DB58X7550_Android_4K_1.webp",
            "images/TV_LED_Noblex_58_DB58X7550_Android_4K_2.webp",
            "images/TV_LED_Noblex_58_DB58X7550_Android_4K_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 58\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2074829",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2074829",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Philco 40" PLD40HS24 SMART TV Vidaa',
        imagen: "images/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_1.webp",
        imagenes: [
            "images/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_1.webp",
            "images/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_2.webp",
            "images/TV_LED_Philco_40_PLD40HS24_SMART_TV_Vidaa_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 40\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Vidaa',
        codigo: "2074975",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2074975",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Philips 32" Smart HD 32PHD6910/77 con Titan OS',
        imagen: "images/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
        imagenes: [
            "images/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_1.webp",
            "images/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_2.webp",
            "images/TV_LED_Philips_32_Smart_HD_32PHD6910_77_con_Titan_OS_3.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Titan OS',
        codigo: "2075320",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075320",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED RCA 32" AND32Y/C/R32AND-F  Android Smart',
        imagen: "images/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_1.webp",
        imagenes: [
            "images/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_1.webp",
            "images/TV_LED_RCA_32_AND32Y_C_R32AND_F _Android_Smart_2.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Android TV',
        codigo: "2073676",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2073676",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Samsung 32" UN32T4300AG  SMART HD',
        imagen: "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_1.webp",
        imagenes: [
            "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_1.webp",
            "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_2.webp",
            "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_3.webp",
            "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_4.webp",
            "images/TV_LED_Samsung_32_UN32T4300AG _SMART_HD_5.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 32\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> HD\n<strong>Sistema operativo:</strong> Tyzen',
        codigo: "2071627",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2071627",
            "Garantía: 1 año"
        ]
    },
        {
        categoria: "Televisores",
        nombre: 'TV LED Samsung 50" LH50BECHVGGZB  Smart UHD Bussines Crystal 4K',
        imagen: "images/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_2.webp",
        imagenes: [
            "images/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_2.webp",
            "images/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_1.webp",
            "images/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_3.webp",
            "images/TV_LED_Samsung_50_LH50BECHVGGZB _Smart_UHD_Bussines_Crystal_4K_4.webp"
        ],
        descripcion: '<strong>Pulgadas:</strong> 50\n<strong>Tipo de pantalla:</strong> LED\n<strong>Tipo de resolución:</strong> 4K\n<strong>Sistema operativo:</strong> Tyzen',
        codigo: "2075206",
        caracteristicas: [
            "Marca: TV",
            "Modelo: 2075206",
            "Garantía: 1 año"
        ]
    },





    /////---------- Celulares ----------/////
    {
        categoria: "Celulares",
        nombre: "LIBERADO Motorola MOTO E15 (XT2523-8) 2/64gb",
        imagen: "images/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_1.webp",
        imagenes: [
            "images/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_1.webp",
            "images/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_2.webp",
            "images/LIBERADO_Motorola_MOTO_E15_XT2523-8_2_64gb_3.webp"
        ],
        descripcion: "Celular Motorola liberado con 64GB de almacenamiento.",
        codigo: "2075246",
        caracteristicas: ["Marca: Motorola", "Modelo: XT2523-8", "Garantía: 1 año"]
    },

    {
        categoria: "Celulares",
        nombre: 'LIBERADO Motorola Moto E13 2/64GB',
        imagen: "images/LIBERADO_Motorola_Moto_E13_2_64GB_1.webp",
        imagenes: [
            "images/LIBERADO_Motorola_Moto_E13_2_64GB_1.webp",
            "images/LIBERADO_Motorola_Moto_E13_2_64GB_2.webp",
            "images/LIBERADO_Motorola_Moto_E13_2_64GB_3.webp"
        ],
        descripcion: '<strong>Almacenamiento (GB):</strong> 64\n<strong>RAM (GB):</strong> 2\n<strong>Pulgadas:</strong> 6.5"\n<strong>Camara trasera:</strong> 13 Mpx\n<strong>Camara frontal:</strong> 5 Mpx\n<strong>Bateria:</strong> 5 Ah\n<strong>Red movil:</strong> 4G\n<strong>Sistema operativo:</strong> Android 13',
        codigo: "2074414",
        caracteristicas: [
            "Marca: LIBERADO",
            "Modelo: 2074414",
            "Garantía: 1 año"
        ]
    }
];