const express = require("express");
const produtoController = require("../controllers/produtoController");
const router = express();

/**
 * @swagger
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       required:
 *         - nome
 *         - categoria
 *         - precoSugerido
 *       properties:
 *         id:
 *           type: number
 *           description: ID do produto, gerado automaticamente
 *         nome:
 *           type: string
 *           description: O nome do produto
 *         categoria:
 *           type: string
 *           description: A categoria do produto
 *         precoSugerido:
 *           type: number
 *           description: Preço sugerido para o produto
 *       example:
 *          id: 1
 *          nome: Café
 *          categoria: Alimentos
 *          precoSugerido: 15
 *     Error:
 *        type: object
 *        properties:
 *          error:
 *            type: string
 */


/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Obtém todos os produtos
 *     responses:
 *       200:
 *         description: Um array de produtos
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro no servidor ao tentar buscar os produtos
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 */
router.get('/produtos', async (req, res) => {
  produtoController.getProdutos(req, res)
});

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do produto
 *     responses:
 *       200:
 *         description: O produto com o ID buscado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *       404:
 *         description: O produto não foi encontrado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro no servidor ao tentar buscar o produto
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 */
router.get('/produtos/:id', async (req, res) => {
  produtoController.getProdutoById(req, res)
});

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: O produto criado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Erro no servidor ao tentar criar o produto
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 */
router.post('/produtos', async (req, res) => {
  produtoController.createProduto(req, res)
});

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                 $ref: '#/components/schemas/Produto'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do produto
 *     responses:
 *       204:
 *         description: O produto foi atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Produto'
 *       404:
 *         description: O produto não foi encontrado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro no servidor ao tentar atualizar o produto
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 */
router.put('/produtos/:id', async (req, res) => {
  produtoController.updateProduto(req, res)
});


/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do produto
 *     responses:
 *       201:
 *         description: O produto foi deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Produto'
 *       404:
 *         description: O produto não foi encontrado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erro no servidor ao tentar deletar o produto
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Error'
 */
router.delete('/produtos/:id', async (req, res) => {
  produtoController.deleteProduto(req, res)
});

module.exports = router;