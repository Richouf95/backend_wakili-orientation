const schollFromDB = require('../uploadSchoolsData/wakili_orientation.schools');

const extractProgramLM = [
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00138/MES/R/I/SG/DGE/DESPIDESPRI du 21/11/14",
        "name": "Gestion des Projets (PG)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00138/MES/R/I/SG/DGE/DESPIDESPRI du 21/11/14",
        "name": "Gestion des Ressources Humaines (GRH)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00138/MES/R/I/SG/DGE/DESPIDESPRI du 21/11/14",
        "name": "Micro Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00138/MES/R/I/SG/DGE/DESPIDESPRI du 21/11/14",
        "name": "Conseiller en Administration Scolaire et Universitaire (CASU)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": " Arrêté provisoire N°0095/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": " Arrêté provisoire N°0095/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Logistique- Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": " Arrêté provisoire N°0095/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Finance- Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrété provisoire n°0097/MESlR/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Management des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrété provisoire n°0097/MESlR/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Logistique- Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrété provisoire n°0097/MESlR/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Management des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "0032/MESS/R/T/SGlDGE/DL/DES/DEPRI du  20/01/2006",
        "name": "Technicien en Soins Obstétricaux (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Az_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0016/MES/R/I/SG/DGE/DESP/DESPRI du 11i02/16",
        "name": "Nutrition",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Soins Obstétricaux (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien du Développement Social (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Kinésithérapie (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Biologie Médicale (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Nutrition (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Communication en Santé (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Epidémiologie (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Management et Gestion (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Technicien en Santé communautaire (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Do_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00102/MESS/R/T/SG/OGE/DL/DES/DEPRI du 00/00/00",
        "name": "Délégué Médicale (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du   03/12/14",
        "name": "Licence en Gestion des Ressources Humaines (GRH)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du   03/12/14",
        "name": "Licence en Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du   03/12/14",
        "name": "Licence en Administration et Gestion des Organisation (AGO)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du   03/12/14",
        "name": "Licence en Informatique de Gestion (IG)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du   03/12/14",
        "name": "Licence en Gestion des Projets.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0011MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence - Master en Transport — Logistique (TL)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0011MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence - Master en Gestion des Ressources Humaines (GRH) ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0011MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence - Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0013MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence- Master en Comptabilité, et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0013MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence- Master en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0013MES/R/I/SG/DGE/DESP/DESPRI du 03/02/15",
        "name": "Licence et Master en Gestion des Projets (GP)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0084MES/R/I/SG/DGE/DESP/DESPRI du 06/08/14",
        "name": "Licence - Master en Sciences lnfirmières et Obstétrique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0084MES/R/I/SG/DGE/DESP/DESPRI du 06/08/14",
        "name": "Licence - Master en Santé de la Reproduction",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0084MES/R/I/SG/DGE/DESP/DESPRI du 06/08/14",
        "name": "Licence-Master en Nutrition Humaine",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°009MES/R/I/SG/DGE/DESP/DESPRI du 25101/17",
        "name": "Licence Professionnelle en lnformatique Appliquée",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°009MES/R/I/SG/DGE/DESP/DESPRI du 25101/17",
        "name": "Licence Professionnelle en Economie et Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°009MES/R/I/SG/DGE/DESP/DESPRI du 25101/17",
        "name": "Master Professionnel en lnformatique Appliquée ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°009MES/R/I/SG/DGE/DESP/DESPRI du 25101/17",
        "name": "Master Professionnel en Economie et Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°002/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17",
        "name": "Licence en Génie Electrique et Automatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°002/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17",
        "name": "Licence en Génie Civil : Option BTP",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°125/MES/R/I/SG/DGE/DESP/DESPRI du 16/10/17",
        "name": "Licence Professionnelle en Génie Civil : Option Hydraulique Licence",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°125/MES/R/I/SG/DGE/DESP/DESPRI du 16/10/17",
        "name": "Professionnelle en Electromécanique : Option Maintenance Industrielle",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Fermé par arrêté N° 0012/MES/R/I/SG/DL/DESP/DESPRI du 07/02/17 pour ouverture frauduleuse de filières en Licence et Master, non-exécution de la décision de fermeture ordonnée par arrêté N0065/MESR/I/SG/DGE/DL/DESP/DESPRI du 9/06/2016 et insuffisance de la qualité du corps enseignant et des équipements...",
        "name": "N/A",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Political Science",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in International Relations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Public Administration",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master Mass Communication",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Education (M.ed)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Computer Engineering",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Computer Science",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Information Technology",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Software Engineering",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Accounting and finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Business Administration",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in International Trade and Economics ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in International Economic and Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor of Medecine (MD)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in inPharmacy",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Radiography (Diagnostic and Therapy)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in EnvironmentalHealth and Development 4",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Nursing Science",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in MedicalLaboratory Science",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": " Bachelor/Master in Hospital Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Nutrition Science",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Health Care Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Public Health",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Health Information Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in French",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in English",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Hausa",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in Animal Health and Husbandry",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Mi_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Filières homologuées ",
        "name": "Bachelor/Master in law (LLB)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0094/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Licence Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0094/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Licence en Administration et Gestion des Organisations ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0094/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Licence en Logistique – Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0094/MES/R/I/SG/DGE/DESP/DESPRI du 15/09/15",
        "name": "Licence en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation n°00212/MES/R/I/SG/DGE/DESP/DEPRI du 27/09/13",
        "name": "Licence en Comptabilité et Gestiondes Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation n°00212/MES/R/I/SG/DGE/DESP/DEPRI du 27/09/13",
        "name": " Licence en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation n°00212/MES/R/I/SG/DGE/DESP/DEPRI du 27/09/13",
        "name": "Licence en Logistique - Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation n°00212/MES/R/I/SG/DGE/DESP/DEPRI du 27/09/13",
        "name": "Licence en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête 00196/MESS/R/T/SG/DGE/DL/DES/DEPRI du 21/10/2008",
        "name": "Technicien en Soins Obstétricaux (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête 00196/MESS/R/T/SG/DGE/DL/DES/DEPRI du 21/10/2008",
        "name": " Technicien de l’Action Sociale (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ta_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête 00196/MESS/R/T/SG/DGE/DL/DES/DEPRI du 21/10/2008",
        "name": "Technicien en Epidémiologie et Bio Statistique (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0028iMES/R/I/SG/DGE/DESP/DESPRI du 09/03/16",
        "name": "Licence-Master en Communication Marketing (optionnel)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0028iMES/R/I/SG/DGE/DESP/DESPRI du 09/03/16",
        "name": " Licence en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°0028iMES/R/I/SG/DGE/DESP/DESPRI du 09/03/16",
        "name": "Licence en techniques comptables et financières",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Transport —Logistique (TL)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Gestion des Ressources Humaines (GRH)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": " Licence en Gestion des Collectivités (GP)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Comptabilité, Contrôle et Audit (CCA)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Administration et Gestion des Organisation (AGO)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Conseiller en Administration Scolaire et Universitaire (CASU)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Communication des Entreprises (CE)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence en Marketing et Commerce International (MCI)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence et Master en Gestion des Projets (GP) ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°00152/MEMS/RS/SG/DGE/DESP/DEPRI du 28/06/13",
        "name": "Licence et Master en Informatique de Gestion (IG)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Soins Obstétricaux (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien du Développement Social (à régulariser) ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en kinésithérapie (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Biologie Médicale (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Nutrition (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Communication en Santé (régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": " Technicien en épidémiologie (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Management et Gestion (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Technicien en Santé Communautaire (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Zr_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté 000147/MESS/R/T/SG/DGE/DL/DES/DEPRI du 14/09/2009 ",
        "name": "Délégué Médicale (à régulariser)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0029/MES/R/I/SG/DGE/DL/DESIDEPRI du 09/03/16",
        "name": "Licence -Master en Génie Civil ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0029/MES/R/I/SG/DGE/DL/DESIDEPRI du 09/03/16",
        "name": "Licence -Master en Génie Electrique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0029/MES/R/I/SG/DGE/DL/DESIDEPRI du 09/03/16",
        "name": "Licence -Master en Génie Mécanique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0056/MES/R/I/SG/DGE/DL/DES/DEPRI du 28/04/15 ",
        "name": "Licence -Banque et Finance des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0056/MES/R/I/SG/DGE/DL/DES/DEPRI du 28/04/15 ",
        "name": "Licence -Gestion Commerciale et Marketing International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0086/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/16",
        "name": "Licence -Genie Rural et environnement",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Provisoire 00102/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16 ",
        "name": "Licence -Master en sciences et techniques comptables et financière.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Provisoire 00102/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16 ",
        "name": "Licence -Master en gestion commerciale et marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Provisoire 00102/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16 ",
        "name": "Licence -Master en gestion des ressources humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Provisoire 00102/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16 ",
        "name": "Licence -Master en administration et management des organisations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Provisoire 00102/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16 ",
        "name": "Licence -Master en Transport Logistique.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00104/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16",
        "name": "Licence-Master Informatique de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00104/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16",
        "name": "Licence-Master en Management et Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00104/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16",
        "name": "Licence-Master en Télécom Réseaux Informatiques",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00104/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16",
        "name": "Master en Management des Banques et Finances des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00104/MES/R/I/SG/DGE/DL/DESP/DESPRI du 18/10/16",
        "name": " Licence -Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 24/1/17 ",
        "name": "Licence professionnelle en Droit Privé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 24/1/17 ",
        "name": "Licence professionnelle en Droit des Affaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 24/1/17 ",
        "name": "Licence professionnelle en Droit Humanitaire Internationale ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 24/1/17 ",
        "name": "Licence professionnelle en Relations Internationales et Diplomatie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 24/1/17 ",
        "name": "Master professionnel en Relations Internationales et Diplomatie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 060/MESR/I/SG/DGE/DL/DESP/DESPRI du 20/06/17 ",
        "name": "Licence professionnelle en Production Animale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 060/MESR/I/SG/DGE/DL/DESP/DESPRI du 20/06/17 ",
        "name": "Licence professionnelle en Gestion de l’Eau et de l’Environnement",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 060/MESR/I/SG/DGE/DL/DESP/DESPRI du 20/06/17 ",
        "name": " Licence professionnelle en Economie Rurale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 060/MESR/I/SG/DGE/DL/DESP/DESPRI du 20/06/17 ",
        "name": "Licence professionnelle en Production Végétale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Economie Rurale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Production Végétale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Gestion Intégrée des Ressources en Eau",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": " Master en Production Animale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Hydraulique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Gestion des Risques des Catastrophes et des Crises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_1",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0132/MESR/I/SG/DGE/DL/DESP/DESPRI du 16/10/2017 ",
        "name": "Master en Sécurité Alimentaire et Nutritionnelle",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_2",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Les offres de formations des parcours Licence et Master sont fermées par arrêté N° 0107/MES/R/I/SG/DL/DESP/DESPRI du 21/10/16 pour insuffisance de la qualité du corps enseignant et des équipements",
        "name": "N/A",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête provisoire n° 00107/MESR/I/SGDGE/DES/DL/DESPRI du 9/9/14 ",
        "name": "licence en Nutrition Humaine",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00105/MESR/I/SG/DGE/DES/DL/DESPRI du 18/10/16 ",
        "name": "Master en Nutrition Humaine",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00110/MESR/I/SG/DGEiDES/DL/DESPRI du 9/9/14",
        "name": "Licence en Epidémiologie - Bio statistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00103/MESR/I/SG/DGE/DES/DL/DESPRI du 18/10/16 ",
        "name": "Licence — master en management des organisations sanitaires et sociales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00103/MESR/I/SG/DGE/DES/DL/DESPRI du 18/10/16 ",
        "name": "Licence-Master en Santé de la Reproduction",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00103/MESR/I/SG/DGE/DES/DL/DESPRI du 18/10/16 ",
        "name": "Master en Sciences Infirmière et Obstétrical ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 00103/MESR/I/SG/DGE/DES/DL/DESPRI du 18/10/16 ",
        "name": "Master en Epidémiologie d Intervention",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrété provisoire n° 058/MESR/I/SG/DGE/DES/DL/DESPRI du 20/06/17 ",
        "name": "Master en Ingénierie des Systèmes d’lnformation Sanitaire.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_3",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n° 127/MESR/I/SG/DGE/DES/DL/DESPRI du 16/09/17",
        "name": "Master en Génie Sanitaire et Environnement.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté n° 0086/MESR/I/SG/DGE/DES/DL/DESPRI du21/08/15 ",
        "name": "Licence —M aster en Management des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté n° 0086/MESR/I/SG/DGE/DES/DL/DESPRI du21/08/15 ",
        "name": "Licence —Master en Transport — Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_4",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté n° 0086/MESR/I/SG/DGE/DES/DL/DESPRI du21/08/15 ",
        "name": "Licence-Master en Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence Professionnelle en Gestion de Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence Professionnelle en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence Professionnelle en Gestion et Administration des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence Professionnelle en Sciences et Techniques Comptables et Financières ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence professionnelle en Contrôle de Gestion et Audit Interne",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence professionnelle en Attaché d’Administration et Intendance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence professionnelle en Attaché d’Administration Scolaire et Universitaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Licence Professionnelle en Attaché d’Administration Option GRH",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Gestion des Entreprises et des Organisations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": " Master Professionnel en Assurance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Finance- Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Langues et Communication Internationale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": " Master Professionnel en Contrôle de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Gestion et Administration des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": " Master Professionnel en Gestion des Services de Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00136/MEMS/R/TiDGE/DES/DLIDEPRI du 13/06/13(régularisation)",
        "name": "Master Professionnel en Audit Interne et GRH , Master Professionnel en CASU",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00166/MEMS/R/T/DGE/DES/DL/DEPRI du 12/07/13",
        "name": "Master Professionnel en Banque Finance ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00166/MEMS/R/T/DGE/DES/DL/DEPRI du 12/07/13",
        "name": "Master de Recherche en Organisation et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00137/MES/R/IiDGE/DES/DL/DEPRI du 21/11/14",
        "name": "Licence- Master Professionnels en Transport Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00109/MES/R/I/DGE/DES/DL/DEPRI du 9/9/14",
        "name": "Licence-Master Professionnels en Science de Gestion : Marketing ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0070/MES/R/I/DGE/DES/DL/DEPRI du14/03/13",
        "name": "Master Professionnel en Gestion et Administration des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0070/MES/R/I/DGE/DES/DL/DEPRI du14/03/13",
        "name": "Master Professionnel en Direction Financière Contrôle de Gestion et Audit Interne",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0070/MES/R/I/DGE/DES/DL/DEPRI du14/03/13",
        "name": "Master Professionnel en Comptabilité Contrôle et Audit ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0070/MES/R/I/DGE/DES/DL/DEPRI du14/03/13",
        "name": "Master Professionnel en Gestion Comptable des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0050/MES/R/I/DGE/DESP/DL/DESPRI du  20/04/15",
        "name": "Licence en Transport —Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0050/MES/R/I/DGE/DESP/DL/DESPRI du  20/04/15",
        "name": "Licence en Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0085/MESiR/I/DGE/DESP/DL/DESPRI du 21/09/15 ",
        "name": "Master en Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0085/MESiR/I/DGE/DESP/DL/DESPRI du 21/09/15 ",
        "name": "Master en Transport-Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_5",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°036/MES/R/I/SG/DGE/DL/DESP/DESPRI du 14/04/2017 ",
        "name": "Master en Ingénierie de la Formation",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence- Master en Finance Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence-Master en Logistique Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence —Master en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence — Master en Communication Multimédia",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence — Master en Gestion des Projets et Création d’Entreprise",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_6",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00126/MES/R/I/SG/DGE/DESP/DL/DESPRI du 13/12/16",
        "name": "Licence —Master Marketing et Commerce International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_7",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Les filières de Master en Droit et de Gestion sont Fermées par arrêté N°0119/MES/R/I/SG/DGE/DL/DESP/DESPRI du 01/11/2016 pour irrégularité et insuffisance de la qualité du corps enseignant",
        "name": "N/A",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_8",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0012/MES/R/I/DGE/DES/DL/DEPRI du 3/02/15",
        "name": "Licence en Management Logistique —Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_8",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0012/MES/R/I/DGE/DES/DL/DEPRI du 3/02/15",
        "name": "Licence en Management des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_8",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0012/MES/R/I/DGE/DES/DL/DEPRI du 3/02/15",
        "name": " Licence en Communication (optionnelle)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_8",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0004/MES/R/I/DGE/DES/DL/DEPRI du 15/01/16",
        "name": "Master en GRH",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_8",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0004/MES/R/I/DGE/DES/DL/DEPRI du 15/01/16",
        "name": "Master en Communication (optionnelle)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N0017 /MES/R/I/DGE/DES/DL/DEPRI du 06/02/16",
        "name": "Licence en Assistanat de Direction Bilingue",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N0017 /MES/R/I/DGE/DES/DL/DEPRI du 06/02/16",
        "name": "Licence en Gestion des Collectivités Territoriales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N0017 /MES/R/I/DGE/DES/DL/DEPRI du 06/02/16",
        "name": "Licence en Administration et Gestion des Organisations (GRH)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°134/MESR/I/SG/DGE/DL/DES/DESPRI du 16/11/15 ",
        "name": "Licence et Master en Comptabilité et Gestion des Entreprises Finance Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0031/MES/R/I/DGE/DES/DL/DEPRI du 24/3/16 ",
        "name": "Licence - Master en Fiscalité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_9",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0018/MES/R/I/DGE/DES/DL/DEPRI du 24/02/17",
        "name": "Master Professionnel en Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00145/MES/R/I/DGE/DES/DL/DEPRI du 03/12/14",
        "name": "Licence — Master Langue et Littérature Arabe ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00145/MES/R/I/DGE/DES/DL/DEPRI du 03/12/14",
        "name": "Licence - Master Sciences Islamiques d’Histoire et Civilisation ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00145/MES/R/I/DGE/DES/DL/DEPRI du 03/12/14",
        "name": "Licence en Administration ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00145/MES/R/I/DGE/DES/DL/DEPRI du 03/12/14",
        "name": "Licence- en l'informatique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00145/MES/R/I/DGE/DES/DL/DEPRI du 03/12/14",
        "name": "Licence en Pédagogie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0047/M ES/R/I/DGE/DES/DL/DEPRI du 16/04/15 ",
        "name": "Master de Recherche en Administration",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0047/M ES/R/I/DGE/DES/DL/DEPRI du 16/04/15 ",
        "name": "Master de Recherche en l'lnformatique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0047/M ES/R/I/DGE/DES/DL/DEPRI du 16/04/15 ",
        "name": "Master de Recherche en Pédagogie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_10",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°006/MES/R/I/DGE/DES/DL/DEPRI du 24/01/16",
        "name": "Master en Ingénierie de la Formation",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_11",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0048/MES/R/llDGE/DES/DL/DEPRI du 16/04/15",
        "name": "Licence-Master Professionnels en Statistique - Planification ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_11",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0048/MES/R/llDGE/DES/DL/DEPRI du 16/04/15",
        "name": "Licence-Master Professionnels en Economie Appliquée",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Banque —Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Micro — Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Maintenance Electronique et Informatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Système Réseaux (système télécom)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Informatique de Gestion (Réseaux Telecom) ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Licence professionnelles Marketing et Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Masters Professionnels Micro — Finance ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Masters Professionnels Marketing et Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Masters Professionnels Informatique de gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Masters Professionnels Maintenance Informatique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MEMS/RS/DGE/DES/DL/DEPRI du 13/06/13 portant rectificatif de I'arrêté N°00226/MESS/R/T/SG/DGE/DES/DEPRI du 26/10/209 portant autorisation d’ouverture de nouvelles filières",
        "name": "Masters Professionnels Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0245/MES/R/I/DGEiDES/DLIDEPRI du 04/12/13 (régularisation)",
        "name": "Licence en Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0245/MES/R/I/DGEiDES/DLIDEPRI du 04/12/13 (régularisation)",
        "name": "Master en Comptabilité, Contrôle et Audit ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0245/MES/R/I/DGEiDES/DLIDEPRI du 04/12/13 (régularisation)",
        "name": "Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DESP/DL/DESPRI du 26/12/16 ",
        "name": "Master Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DESP/DL/DESPRI du 26/12/16 ",
        "name": "Master en Banque et Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DESP/DL/DESPRI du 26/12/16 ",
        "name": "Licence —Master Administration Scolaire et Universitaire ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DESP/DL/DESPRI du 26/12/16 ",
        "name": "Master en GRH",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0139/MES/R/I/SG/DGE/DESP/DL/DESPRI du 29/12/16 ",
        "name": "Licence en Exploitation Pétrolière",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_12",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°128/MES/R/I/SG/DGE/DI/DESP/DESPRI du 16/10/17",
        "name": "Licence en Droit de la Gestion Immobilière",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0169/MEMS/RS/DGE/DES/DL/DEPRI du 15/04/13 ",
        "name": "Licence-Master en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0169/MEMS/RS/DGE/DES/DL/DEPRI du 15/04/13 ",
        "name": "Licence —Master en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°085/MES/R/I/DGE/DESP/DL/DESPRI du 19/07/16 ",
        "name": "Licence —Master en Comptabilité de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°085/MES/R/I/DGE/DESP/DL/DESPRI du 19/07/16 ",
        "name": "Licence —Master en Finance-Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°085/MES/R/I/DGE/DESP/DL/DESPRI du 19/07/16 ",
        "name": "Licence —Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°085/MES/R/I/DGE/DESP/DL/DESPRI du 19/07/16 ",
        "name": "Licence —Master en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°085/MES/R/I/DGE/DESP/DL/DESPRI du 19/07/16 ",
        "name": "Licence —Master en Informatique de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_14",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138/MES/R/I/DGE/DESP/DL/DESPRI du 29/12/16 ",
        "name": "Licence en Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0185/MEMS/RS/DGE/DES/DL/DEPRI du 31/07/13",
        "name": "Licences- Master en Communication Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0185/MEMS/RS/DGE/DES/DL/DEPRI du 31/07/13",
        "name": "Licences- Master en Finance Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0185/MEMS/RS/DGE/DES/DL/DEPRI du 31/07/13",
        "name": "Licences- Master en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0185/MEMS/RS/DGE/DES/DL/DEPRI du 31/07/13",
        "name": "Licences en Relations Internationales ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0027/MES/R/I/DGE/DESP/DL/DESPRI du 09/03/16 ",
        "name": "Licence en Production Végétale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0113/MES/RI/DGE/DESP/DL/DESPRI du 09/09/14 ",
        "name": "Licence en Droit (privé et public)",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°096/MES/RI/DGE/DESP/DL/DESPRI du 15/09/15 ",
        "name": "Licence-Master en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°096/MES/RI/DGE/DESP/DL/DESPRI du 15/09/15 ",
        "name": "Licence-Master en Logistique- Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°056/MEMS/RS/DGE/DESP/DL/DESPRI du02/16 ",
        "name": "Licences- Master en Communication Marketing ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°056/MEMS/RS/DGE/DESP/DL/DESPRI du02/16 ",
        "name": "Licences- ”en Technique Comptabilité et Financière",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°008/MES/RI/DGE/DESP/DL/DESPRI du 24/01/17",
        "name": "Master Professionnel Droit Privé option Fiscalité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°059/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Master en Droit Public",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_15",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°059/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Master en Relations Internationales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Licences Professionnelles Administration et Gestion des Organisations ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Licences Professionnelles Micro-Finance et Système Financier Décentralisé ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Licences Professionnelles Commerce International Transport — Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Licences Professionnelles Informatique Réseaux et Service ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Licences Professionnelles Informatique et Génie Logiciel",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Masters Professionnels Administration et Gestion des Organisations ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Masters Professionnels Finances —Banque — Assurance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Masters Professionnels Stratégie — Marketing ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Masters Professionnels Commerce International ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0187/MEMS/RS/DGE/DES/DL/DEPRI du 1/08/13 ",
        "name": "Masters Professionnels Transport — Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0131/MES/RI/SG/DGE/DESP/DL/DESPRI du 26/12/16",
        "name": "Licence en Gestion des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0131/MES/RI/SG/DGE/DESP/DL/DESPRI du 26/12/16",
        "name": "Licence en Finance- Banque ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0131/MES/RI/SG/DGE/DESP/DL/DESPRI du 26/12/16",
        "name": "Master en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Licence en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Licence en Comptabilité et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Licence en Communication des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Licence en Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Master en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_16",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0138lMESS/R/T/DGE/DES/OL/DEPRI du 10/10/07 Attestation 05/2013/RED/SG/CAMES et 09",
        "name": "Master en Comptabilité, Contrôle et Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_17",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0111/MES/R/I/DGE/DESP/DL/DESPRI du 9/9/14",
        "name": "Licence Professionnelle Comptabilité Gestion ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_17",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0111/MES/R/I/DGE/DESP/DL/DESPRI du 9/9/14",
        "name": "Licence Professionnelle Gestion des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_17",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0111/MES/R/I/DGE/DESP/DL/DESPRI du 9/9/14",
        "name": "Licence Professionnelle Transport Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_17",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0111/MES/R/I/DGE/DESP/DL/DESPRI du 9/9/14",
        "name": "Licence Professionnelle Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_17",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0111/MES/R/I/DGE/DESP/DL/DESPRI du 9/9/14",
        "name": "Licence Professionnelle Informatique de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Informatique et Telecom ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Gestions des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Banque et Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Business Administration ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Assistance de Direction ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Marketing et Commerce ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Commerce International ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Relations Internationales ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Comptabilité et Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Licence professionnelle Analyse Programmeur dans les Option de : [  • Conception et Développement ; • Réseau et Système d'lnformation; • Analyse Systèmes; •\tRéseaux et Télécommunication ]",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Banque et Finance ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Comptabilité et Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Gestion Commerciale et Marketing ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Informatique et Telecom ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Assistance de Direction ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Gestions des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Audit et Expertise Comptable ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Business Administration ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Gestion Administrative ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Marketing et Commerce ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Commerce International ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Relations Internationales ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Réseaux et Télécommunication",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_18",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°0151/MEMS/RS/DGEiDES/DL/DEPRI du 28/06/13",
        "name": "Masters Professionnels Conception et Développement",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0249/MESiRI/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Licence et Master Administration et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0249/MESiRI/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Licence et Master Communication des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0249/MESiRI/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Licence et Master Maintenance et Electro- Mécanique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0249/MESiRI/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Licence et Master Assistant de Direction",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Commerce International ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Transport Logistique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Management des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Comptabilité et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Génie Civil",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Génie Electrique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0149/MEMSiRS/DGE/DES/DL/DEPRI du 28/06/13 ",
        "name": "Licence et Master Système Réseaux et Telecom ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_19",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°024/MES/R/I/DGE/DESP/DL/DESPRI du 02/03/15 ",
        "name": "Licence en informatique de Gestion ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_20",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0252/MESiR/I/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_20",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0252/MESiR/I/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Administration et Gestion des Organisations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_20",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0252/MESiR/I/DGE/DES/DL/DEPRI du 23/12/13",
        "name": "Télécommunication et Réseau",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Comptabilité- Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Comptabilité-Contrôle-Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": " Master Marketing et Publicité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": " Master Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Telecom Réseau",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Master Système Réseaux Informatiques ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Comptabilité des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Communication des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Finance Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Informatique de Gestion ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Maintenance Informatique ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_21",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0075/MESS/R/T/SG/DGE/DL/DESP/DESPRI du 27/06/16",
        "name": "Licence Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Management de Qualité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Logistique et Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Audit et Contrôle",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Management des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Communication et Marketing Juriste d'Affaires et d’Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": " Informatique de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Comptabilité et Fiscalité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_22",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0214/MEMS/R/I/DGE/DES/OL/DEPRI du 27/09/13",
        "name": "Assurance Finances- Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_23",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0150/MEMS/R/I/DGE/DES/DL/DEPRI du 28/6/13",
        "name": "Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Management et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": " Gestion des Collectivités Territoriales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Droit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Sciences de l'Education",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": " Economie Générale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Droit de l'Homme et Droit Humanitaire International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Décentralisation, Développement Loca! et Aménagement du Territoire ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Sécurité Alimentaire et Nutritionnelle",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Administration Publique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_24",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0074/MEMS/R/I/DGE/DES/OL/DEPRI du 14/3/13",
        "name": "Administration Diplomatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_26",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0014/MES/R/I/DGE/DESP/DL/DESPRI du 3/2/15",
        "name": "Licence- Master en Informatique (Sécurité Réseaux et Systèmes) ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_26",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00100/MESS/R/TSG/DGE/DL/DESP/DEPRI du 08/06/2009 à régulariser",
        "name": "Licence en Management et Gestion des PME ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_26",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00100/MESS/R/TSG/DGE/DL/DESP/DEPRI du 08/06/2009 à régulariser",
        "name": "Licence en Marketing International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_26",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00100/MESS/R/TSG/DGE/DL/DESP/DEPRI du 08/06/2009 à régulariser",
        "name": "Master Management Stratégie d'Entreprise",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_27",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00144/MES/R/I/DGE/DESP/DL/DESPRI du 22/12/16",
        "name": "Licence —Master en Evaluation",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_27",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00144/MES/R/I/DGE/DESP/DL/DESPRI du 22/12/16",
        "name": "Licence —Master en Prospective",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_27",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00144/MES/R/I/DGE/DESP/DL/DESPRI du 22/12/16",
        "name": "Licence —Master en Stratégie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00071/MESS/R/T/SG/DGE/DL/DES/DEPRI du14/3/13 ",
        "name": "Licence Master en Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00071/MESS/R/T/SG/DGE/DL/DES/DEPRI du14/3/13 ",
        "name": "Licence-Master en Gestion Commerciale et Financière",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Licence-Master en Management des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Licence- Master en Communication-Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Licence-Master en Audit et Finance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Licence-Master en GRH",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Licence-Master Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Master en Management et Droit des Affaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_29",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté régularisation N°00293/MEMS/RS/SG/DGE.DL/DES/DEPRI du 21/12/12",
        "name": "Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Nutrition Humaine et Santé ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Epidémiologie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Gynéco-Obstétrique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Soins Infirmiers",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Urgence-Médico-chirurgicale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00084/MES/R/I/SG/DGE/DL/DESP/DESPRI du 21/9/15",
        "name": "Master en Gestion des Institutions de Soins",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Epidémiologie et Bio Statistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Information Education Communication",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Santé Communautaire ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Nutrition",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Management et Gestion des Services de Sante",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Puériculture ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Dermatologie ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Odontologie ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Technicien en Soins Obstétricaux ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Gestion des Hôpitaux",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Santé et Sécurité au Travai!",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Planification Sanitaire ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Gestion des Catastrophes",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Economie de la santé BTS",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "Secrétariat Médicale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "BTS Logisticien de Développement ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "DESS en Psychopédagogie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00015/MESS/R/T/SG/DGE/DL/DES/DEPRI du 9/01/2004 à régulariser ",
        "name": "DEA en Gestion des Services de Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Licence en Nutrition Humaine",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Licence en Epidémiologie et Bio-Statistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": " Licence en Santé de la Reproduction",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Licence en Urgence Médico-chirurgicale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Information - Education - Communication en Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Gestion des Services de Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_30",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°034/MES/R/I/SG/DGE/DL/DESPRI du 27/03/2017 Régularisation",
        "name": "Dermatologie et Vénérologie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 15/01/16",
        "name": "Licence en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 15/01/16",
        "name": "Licence en Communication des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0005/MES/R/I/SG/DGE/DL/DESP/DESPRI du 15/01/16",
        "name": "Licence en Techniques Comptables et Financières",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°126/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/09/17",
        "name": "Licence Professionnelle en Administration et Gestion des Organisations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°126/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/09/17",
        "name": "Licence Professionnelle en Gestion des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°126/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/09/17",
        "name": "Licence Professionnelle en Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_31",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°133/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/09/17",
        "name": "Master en Finance Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_32",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00246/MES/R/I/SG/DGE/DL/DESP/DESPRI du 04/12/13",
        "name": "Licence-Master en Communication, Marketing, et Stratégie Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_32",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00246/MES/R/I/SG/DGE/DL/DESP/DESPRI du 04/12/13",
        "name": "Licence-Master en Négociation et Relation Clients",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_32",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00246/MES/R/I/SG/DGE/DL/DESP/DESPRI du 04/12/13",
        "name": "Licence-Master en Transport-Lopistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_32",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00246/MES/R/I/SG/DGE/DL/DESP/DESPRI du 04/12/13",
        "name": "Licence-Master en GRH",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/2015",
        "name": "Licence en Communication des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/2015",
        "name": "Licence en Finance-Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/2015",
        "name": "Licence en Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/2015",
        "name": "Licence en Administration et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0056/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/5/14",
        "name": "Licence en Réseaux Informatiques et Télécom",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0056/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/5/14",
        "name": "Licence en Sciences et Techniques Comptables et Financières ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0022/MES/R/I/SG/DGE/DL/DESP/DESPRI du 06/2/14 ",
        "name": "Licence-Master en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0022/MES/R/I/SG/DGE/DL/DESP/DESPRI du 06/2/14 ",
        "name": "Licence-Master en Génie Pétrochimie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0032/MES/R/I/SG/DGE/DL/DESP/DESPRI du 30/3/16 ",
        "name": "Licence —Master en Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/15 ",
        "name": "Master en Gestion des Projets et Création d’Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00146/MES/R/I/SG/DGE/DL/DESP/DESPRI du 22/12/15 ",
        "name": "Master en Logistique et Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00244/MES/R/I/SG/DGE/DL/DES/DEPRI du 04/12/13",
        "name": "Licence-Master en Pétrochimie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00244/MES/R/I/SG/DGE/DL/DES/DEPRI du 04/12/13",
        "name": "Licence-Master en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/10/17 ",
        "name": "Licence Professionnelle en Génie Electrique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_33",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0130/MES/R/I/SG/DGE/DL/DESP/DESPRI du 16/10/17 ",
        "name": "Master Professionnel en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_34",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00186/MES/R/I/SG/DGE/DL/DES/DEPRI du 1/08/13",
        "name": "Licence-Master en Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_34",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00186/MES/R/I/SG/DGE/DL/DES/DEPRI du 1/08/13",
        "name": "Licence —Master en Gestion et Administration des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_34",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00186/MES/R/I/SG/DGE/DL/DES/DEPRI du 1/08/13",
        "name": "Licence-Master en Gestion des Ressources Humaines,",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_34",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00186/MES/R/I/SG/DGE/DL/DES/DEPRI du 1/08/13",
        "name": "Licence-Master en Sciences et Techniques Comptables et Financières",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Nutrition Humaine ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Santé Communautaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Information Education Communication en Santé ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Laboratoire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Oto-rhino-LaryngoIogie ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Dermatologie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Management et Gestion des Services de Santé Licence en Kinésithérapie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Licence en Infirmier —Urgentiste",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Licence-Master en Epidémiologie-Bio Statistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Master en Masso-Kinesithérapie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Master en Science et Clinique Infirmier",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Master en Gestion des Etablissements et Service de Soins",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Master en Education pour la Santé et du Patient",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00021/MES/R/I/SG/DGE/DLlDESiDEPRl du 06/2/14",
        "name": "Master en Politique et Programmes en Santé Communautaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Santé Publique option : Nutrition Humaine",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Santé Publique option : Santé Communautaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Santé Publique option Information Education Communication en Santé ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Laboratoire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Oto-rhino-laryngologie ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Dermatologie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Management et Gestion des Services de Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_35",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°000108/MES/R/I/SG/DGE/DL/DESP/DESPRI du 26/10/16",
        "name": "Licence en Kinésithérapie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_36",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00117/MESS/R/T/DGE/DES/DEPRI du 21 octobre 2008 à régulariser",
        "name": "Technicien en Soins Gynéco-Obstétrical",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_36",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00117/MESS/R/T/DGE/DES/DEPRI du 21 octobre 2008 à régulariser",
        "name": "Technicien en Management et Gestion de Service de Santé ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_36",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00117/MESS/R/T/DGE/DES/DEPRI du 21 octobre 2008 à régulariser",
        "name": "Technicien en Epidémiologie — Bio Statistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_36",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00117/MESS/R/T/DGE/DES/DEPRI du 21 octobre 2008 à régulariser",
        "name": "Technicien en Information-Education —Communication",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_36",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00117/MESS/R/T/DGE/DES/DEPRI du 21 octobre 2008 à régulariser",
        "name": "Technicien en Santé Communautaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_37",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0087/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/2016 ",
        "name": "Licence —Master en Attaché d’Administration Scolaire et Universitaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_37",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0087/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/2016 ",
        "name": "Licence — Master en Maintenance en Réseau Informatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_37",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0087/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/2016 ",
        "name": "Licence — Master en Assurance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_37",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0087/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/2016 ",
        "name": "Licence — Master en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_37",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 0087/MES/R/I/SG/DGE/DL/DESP/DESPRI du 19/07/2016 ",
        "name": "Licence — Master en Management et Gestion des Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_39",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00168/MES/R/I/SG/DGE/DL/DES/DEPRI du 15/07/13 ",
        "name": "Licence en Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_39",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00168/MES/R/I/SG/DGE/DL/DES/DEPRI du 15/07/13 ",
        "name": "Licence en Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_39",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0029/MES/R/I/SG/DGE/DL/DES/DEPRI du 10/03/14 ",
        "name": "Licence en Droit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00107 et 00135/MES/R/I/SG/DGE/DL/DES/DEPRI du 16/11/15",
        "name": "Licence- Master   Génie Civil",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00107 et 00135/MES/R/I/SG/DGE/DL/DES/DEPRI du 16/11/15",
        "name": "Licence — Master Génie Electrique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire 00107 et 00135/MES/R/I/SG/DGE/DL/DES/DEPRI du 16/11/15",
        "name": "Licence - Master Génie Mécanique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Secrétariat de Bureautique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Informatique de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Comptabilité et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Gestion Commerciale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Banque et Micro — Finance ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_40",
        "programLevel": "Licence / Master",
        "authorisationDecree": "00186/MEMS/RS/SG/DGE/DES/DEPR du 29 août 2011 fermés pour non régularisation",
        "name": "DTS en Mécanique Auto Mobile",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_41",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00155/MES/R/I/SG/DGE/DL/DES/DEPRI du 30/12/14",
        "name": "Licence et Master Professionnels en Langue Arabe et Etudes Littéraires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_41",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00155/MES/R/I/SG/DGE/DL/DES/DEPRI du 30/12/14",
        "name": "Licence et Master Professionnels en Charia et Etudes Islamiques ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_41",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0018/MES/R/I/SG/DGE/DL/DESP/DESPRI du 6/2/15",
        "name": "Licence en Gestion et Economie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_41",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°0018/MES/R/I/SG/DGE/DL/DESP/DESPRI du 6/2/15",
        "name": "Licence- en Sciences de l’Education et de la Formation",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_41",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00132/MES/R/I/SG/DGE/DL/DES/DESPRI du 26/12116 ",
        "name": "Master Professionnel en Sciences de l’Education",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_43",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00028/MES/R/I/SG/DGE/DL/DES/DEPRI du 10/03/14",
        "name": "Langues Arabe ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_43",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00028/MES/R/I/SG/DGE/DL/DES/DEPRI du 10/03/14",
        "name": "Sciences Islamique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management de Transport et de la Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management Achats et Logistique Internationale",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management de Qualité. Hygiène, Sécurité Environnement",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Transport logistique Transit International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Communication —Marketing Transport —Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management Stratégique et Logistique des Organisations",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management des Services Généraux et Logistique Humanitaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_44",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00106/MES/R/I/SG/DGE/DL/DES/DEPRI du 9/10/14",
        "name": "Management Logistique et Droit de Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_46",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00144/MES/R/I/SG/DGE/DL/DES/DEPRI du 3/12/14",
        "name": "Finance, Comptabilité Contrôle et Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_46",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00144/MES/R/I/SG/DGE/DL/DES/DEPRI du 3/12/14",
        "name": "Transport Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_46",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00144/MES/R/I/SG/DGE/DL/DES/DEPRI du 3/12/14",
        "name": "Communication Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_46",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00144/MES/R/I/SG/DGE/DL/DES/DEPRI du 3/12/14",
        "name": "Management et Business Administration.",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Comptabilité et Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": " Finances —Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Administration et Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Gestion des Collectivités Territoriales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Marketing et Commerce International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Gestion des Ressources Humaines ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Comptabilité et Gestion des Entreprises ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Communication des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Administration et Management ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Gestion des Collectivités Territoriales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Marketing et Commerce International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Communication Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Management des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Management des Projets ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Comptabilité Contrôle et Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Finances",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Commerce International",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": " Droit des Affaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00184/MEMS/RS/SG/DGE/DL/DES/DEPRI du 31/07/13",
        "name": "Contrôle de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00250/MES/R/I/SG/DGE/DL/DES/DEPRI du 23/12/13 ",
        "name": "Licence- Master en Assurance",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_48",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00250/MES/R/I/SG/DGE/DL/DES/DEPRI du 23/12/13 ",
        "name": "Licence —Master en Transport —Logistique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_49",
        "programLevel": "Licence / Master",
        "authorisationDecree": "arrêté N°0017/MES/RI/SG/DGE/DES/DESPRI du 16 février 2017",
        "name": "Master en Epidémiologie Intervention",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_49",
        "programLevel": "Licence / Master",
        "authorisationDecree": "arrêté N°0017/MES/RI/SG/DGE/DES/DESPRI du 16 février 2017",
        "name": "Master en sciences Infirmières et Obstétricales",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_51",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°003/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17",
        "name": "Licence en Analyse de Politique Economique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Les offres de formations des parcours de Licence et Master ouvertes sans autorisation sont fermées par arrêté N°0016/MES/RI/SG/DGE/DES/DESPRI du 16 février",
        "name": "N/A",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Génie Télécom et Informatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Génie Civil",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Administration des Affaires ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Finance Banque ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Comptabilité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Droit Privé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_55",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°061/MES/RI/DGE/DESP/DL/DESPRI du 20/06/17 ",
        "name": "Licence en Droit Public",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18i01/17",
        "name": "Licence en Littérature arabe",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18i01/17",
        "name": "Licence en Jurisprudence et Principe ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18i01/17",
        "name": "Licence en Curricula et Didactique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17 ",
        "name": "Master en Littérature Arabe",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17 ",
        "name": "Master en Curricula et Didactique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_56",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire n°001/MES/R/I/SG/DGE/DESP/DESPRI du 18/01/17 ",
        "name": "Master en Jurisprudence et Principes",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_57",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Les offres de formations des parcours DPTS et OST sont fermées par arrêté N°0015/MES/RI/SG/DGE/DES/DESPRI du 16 février pour non- conformité au LMD",
        "name": "N/A",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_66",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Licence professionnelle en Génie Civil",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Licence en Gestion des Entreprises",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Licence en Comptabilité Contrôle et Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": " Licence en Droit public",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Licence en Droit privé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Licence en Analyse et Politique de Développement ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Master en Gestion de la Politique Economique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Master en Droit des Marchés Publics",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_67",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°0137/MES/R/I/DGE/DES/DL/DESPRI du 29/12/16",
        "name": "Master en Droit Public",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Comptabilité —Contrôle-Audit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Management desOrganisations  Financières",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Comptabilité- Fiscalité",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Droit des Affaires et Droit Humanitaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": " Licence-Master Professionnels en Finance-Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_68",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrête Provisoire N° 109/MESR/I/SG/DGE/DL/DESPRI du 26/10/2016",
        "name": "Licence-Master Professionnels en Logistique —Transport",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_71",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00131/MES/RI/SGlDL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle en Curricula et Didactique Jurisprudence ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_71",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00131/MES/RI/SGlDL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle en Jurisprudence",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_71",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00131/MES/RI/SGlDL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle en Langue Arabe et Sciences Islamique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_76",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Licence-Master en Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_76",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Licence-Master en Marketing",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Licence Professionnelle en Nutrition Humaine et Diététique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": " Licence Professionnelle en Sciences Politiques",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Licence Professionnelle en Droit Mention Droit Privé, Spécialité Droit des Affaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Master en Carrières Judiciaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13",
        "name": "Master en Droit des Affaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13 ",
        "name": "Licence Professionnelle en Santé Sécurité au Travail",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_77",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°00248/MES/R/I/SG/ DGE/DL/DES/DESPRI du 23/12/13 ",
        "name": "Master Professionnel en Santé Publique, Spécialité : Politique, Planification et Management de la Santé",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_81",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°007/MES/R/I/SG/ DGE/DL/DES/DESPRI du 24/1/17 ",
        "name": "Licence Professionnelle Système Réseau Et Télécom",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_81",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°007/MES/R/I/SG/ DGE/DL/DES/DESPRI du 24/1/17 ",
        "name": "Licence Professionnelle Management des Organisation et Projets",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_82",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°129/MES/R/I/SG/ DGE/DL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle Appliquée en Technologie de l’lnformatique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_82",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°129/MES/R/I/SG/ DGE/DL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle Appliquée en Technologie des Réseaux Informatiques",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_82",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté provisoire N°129/MES/R/I/SG/ DGE/DL/DESP/DESPRI du 16/10/2017",
        "name": "Licence Professionnelle Appliquée en Informatiques de Gestion",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_90",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Licence Professionnelle en Charia et Etudes lslamiques",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_90",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Licence Professionnelle en Langue Arabe et Etudes Littéraires ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_90",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master Professionnel en Charia et Etudes lslamiques",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_90",
        "programLevel": "Licence / Master",
        "authorisationDecree": "Arrêté N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master Professionnel en Langue Arabe et Etudes Littéraires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Management d’Entreprise",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Finance d’Entreprise ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Commerce International ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Entreprenariat et Innovation",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Marketing et Communication ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Comptabilité ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master Professionnel en Science de Gestion ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Science de Gestion Option Communication et Marketing ",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Science de Gestion Option Finance et Banque",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Science de Gestion Option Leaderchip et Management",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Science de Gestion Option Gestion des Ressources Humaines",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Relations Internationales et Diplomatie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Science Politique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Relations Internationales et Diplomatie",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Science Politique",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Bachelor en Droit",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Droit des Affaires",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Droit International Humanitaire",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Droit Public",
        "domaine": "N/A"
    },
    {
        "school": "",
        "t_id": "Ny_91",
        "programLevel": "Licence / Master",
        "authorisationDecree": "N°00142//MESR/I/SG/DGE/DL/DESPRI du 26 Octobre 2017",
        "name": "Master en Droit Privé",
        "domaine": "N/A"
    }
]

extractProgramLM.forEach(element => {
    const hisSchool = schollFromDB.filter(x => x.t_id === element.t_id)[0];
    element.school = hisSchool._id.$oid;
})

module.exports = extractProgramLM;