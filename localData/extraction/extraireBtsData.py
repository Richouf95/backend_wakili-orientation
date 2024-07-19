import json

# Chemin vers le fichier JSON
file_path = '../allData.json'
# Chemin vers le nouveau fichier JSON
output_file_path = '../uploadBtsData/localBtsData.js'

# Ouvrir et lire le fichier JSON en spécifiant l'encodage utf-8
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Liste pour stocker les nouveaux objets
result = []

# Propriétés à extraire
properties_to_extract = [
    "t_id",
    "program"
]

for item in data:
    # Créer un nouvel objet pour les propriétés extraites
    extracted_item = {prop: item[prop] for prop in properties_to_extract if prop in item}
    extractResult = {}

    if extracted_item['program']['bts']['name'] is None:
        pass
    else:
        extractResult['t_id'] = extracted_item['t_id']
        extractResult['name'] = extracted_item['program']['bts']['name']
        extractResult['programLevel'] = "BTS"
        extractResult['authorisationDecree'] = "N/A"
        extractResult['domaine'] = "N/A"
        extractResult['school'] = "66993024d22dca888bd03893"

    # Ajouter le nouvel objet à la liste
    if len(extractResult) == 0:
        pass
    else:
        result.append(extractResult)

# Écrire les données extraites dans un nouveau fichier JSON
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(result, file, ensure_ascii=False, indent=4)

# Afficher un message de confirmation
print(f'Données extraites et sauvegardées dans {output_file_path}')
