import json

# Chemin vers le fichier JSON
file_path = '../allData.json'
# Chemin vers le nouveau fichier JSON
output_file_path = '../uploadLicenceMasterData/localLicenceMasterData.js'

# Ouvrir et lire le fichier JSON en spécifiant l'encodage utf-8
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Liste pour stocker les nouveaux objets
result = []

print(len(data))

# i = 0

for item in data:
    # Créer un nouvel objet pour les propriétés extraites
    LM = item['program']['LicenceMaster']
    
    if len(LM) != 0:
        for arrete in LM:
            if len(arrete['formations']) == 0:
                extracted_item_00 = {}
                # i = i + 1
                extracted_item_00['school'] = ""
                extracted_item_00['t_id'] = item['t_id']
                extracted_item_00['programLevel'] = "Licence / Master"
                extracted_item_00['authorisationDecree'] = arrete['autorizeDecree']
                extracted_item_00['name'] = "N/A"
                extracted_item_00['domaine'] = "N/A"
                        # print("\t => : {}".format(arrete['autorizeDecree']))
                        # print("*** {}".format(item['t_id']))
                result.append(extracted_item_00)
            else:
                for formation in arrete['formations']:
                    extracted_item_01 = {}
                    # i = i + 1
                    extracted_item_01['school'] = ""
                    extracted_item_01['t_id'] = item['t_id']
                    extracted_item_01['programLevel'] = "Licence / Master"
                    extracted_item_01['authorisationDecree'] = arrete['autorizeDecree']
                    extracted_item_01['name'] = formation
                    extracted_item_01['domaine'] = "N/A"
                    # if item['t_id'] == "Az_1" or item['t_id'] == "Az_2":
                    #     print("\t => : {}".format(item['t_id']))
                    #     print("\t\t => : {}".format(arrete['autorizeDecree']))
                    #     print("\t\t\t*** {}".format(formation))
                    result.append(extracted_item_01)

# print(result)
# print(i)
                
print(len(result))

# Écrire les données extraites dans un nouveau fichier JSON
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(result, file, ensure_ascii=False, indent=4)

# Afficher un message de confirmation
print(f'Données extraites et sauvegardées dans {output_file_path}')
