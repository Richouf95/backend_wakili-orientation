const extractProgramLM = require('../uploadLicenceMasterData/localLicenceMasterData');

const t = extractProgramLM.filter(x => x.domaine !== "N/A");

console.log(t.length);
// console.log(t);

const createIt = async (item, itemIndex) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(item);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };

    try {
        const response = await fetch("http://localhost:4000/programs/create-program", requestOptions);
        if (response.ok) {
            // console.log(`[${itemIndex + 1}] => OK`);
        } else {
            console.error(`[${itemIndex + 1}] => NOT OKccc: ${response.message}`);
        }
    } catch (error) {
        console.error(`[${itemIndex + 1}] => NOT OK: ${error.message}`);
    }
};

const run = async () => {
    const promises = t.map((element, index) => createIt(element, index));
    await Promise.all(promises);
    console.log('All requests have been processed.');
};

run();