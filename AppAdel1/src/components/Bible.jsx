"use client";
import axios from "axios";

const axios = require('axios');

// URL da API da Bíblia
const apiUrl = 'https://bible-api.com/john%203:16?translation=almeida';

// Função para fazer a solicitação à API da Bíblia
async function getBibleVerse() {
    try {
        const response = await axios.get(apiUrl);
        // Se a solicitação for bem-sucedida, você pode acessar os dados da resposta
        console.log(response.data);
    } catch (error) {
        // Se houver algum erro na solicitação, você pode lidar com ele aqui
        console.error('Erro ao obter versículo da Bíblia:', error);
    }
}

// Chamar a função para obter um versículo da Bíblia
getBibleVerse();
