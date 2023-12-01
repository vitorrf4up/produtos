require("dotenv").config();
const fornecedorUrl = process.env.FORNECEDOR_URL;

async function getFornecedorById(id) {
    const req = await fetch(`${fornecedorUrl}/${id}`, {
        method: "GET"
    })
    .catch(err => {
        console.log("Fornecedor está indisponivel, Erro:");
        console.log(err);

        return null;
    });


    if (req.status === 404) {
        console.log(`Fornecedor ${id} não encontrado`);
        return null;
    }

    return await req.json();
}

module.exports = getFornecedorById;