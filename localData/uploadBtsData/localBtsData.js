const schollFromDB = require('../uploadLicenceMasterData/wakili_orientation.schools')

const extractProgramBts = [
    {
        "t_id": "Az_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Az_3",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Az_4",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Az_5",
        "name": "BTS d'Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Da_1",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Do_1",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Do_2",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Do_3",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_2",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_3",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_4",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_5",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_6",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Mi_7",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_2",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_3",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_4",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_5",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_6",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ta_7",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ti_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ti_2",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_2",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_3",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_4",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_5",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Zr_6",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_1",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_2",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_3",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_4",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_5",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_6",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_8",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_9",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_11",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_12",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_13",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_14",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_15",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_16",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_17",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_18",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_19",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_20",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_21",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_22",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_23",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_24",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_25",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_26",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_27",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_28",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_29",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_30",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_31",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_32",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_33",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_34",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_35",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_36",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_37",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_38",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_39",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_40",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_42",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_44",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_45",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_46",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_47",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_48",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_49",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_50",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_51",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_52",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_53",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_54",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_57",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_58",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_59",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_60",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_61",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_62",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_63",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_64",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_65",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_66",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_68",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_69",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_70",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_72",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_73",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_74",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_75",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_76",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_77",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_78",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_79",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_80",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_81",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_82",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_83",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_84",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_85",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_86",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_87",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_88",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_89",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_92",
        "name": "BTS d’Etat",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    },
    {
        "t_id": "Ny_93",
        "name": "Diplôme d’Etat en santé",
        "programLevel": "BTS",
        "authorisationDecree": "N/A",
        "domaine": "N/A",
        "school": "66993024d22dca888bd03893"
    }
]

extractProgramBts.forEach(element => {
    const hisSchool = schollFromDB.filter(x => x.t_id === element.t_id)[0];
    element.school = hisSchool._id.$oid;
    element.programLevel = {
        niveau: "Enseignement Supérieur",
        sousNiveau: "BTS"
    }
    if (element.name.includes('santé')) {
        element.domaine = "66a3812a56d17d9ae6ff0b17"
    } else {
        element.domaine = "N/A"
    }
})

module.exports = extractProgramBts;