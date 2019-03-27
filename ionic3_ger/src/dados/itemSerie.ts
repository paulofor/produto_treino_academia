
import { ItemSerie } from "../shared/sdk/models";

export const  ITEMSERIE : ItemSerie[] = [

    {
        'parametros': 'posição do banco: 2',
        'listaCargaPlanejada': [
            { 'ordemRepeticao': 1, 'quantidadeRepeticao': 10, 'valorCarga': 30 },
            { 'ordemRepeticao': 2, 'quantidadeRepeticao': 10, 'valorCarga': 30 },
            { 'ordemRepeticao': 3, 'quantidadeRepeticao': 10, 'valorCarga': 30 }
        ],
        'exercicio': {
            'titulo': 'Voador de Frente',
            'subtitulo': 'Pectoral',
            'listaExecucaoItemSerie' : [ {} ],
        },

    },

    {
        'parametros': '',
        'listaCargaPlanejada': [
            { 'ordemRepeticao': 1, 'quantidadeRepeticao': 10, 'valorCarga': 10 },
            { 'ordemRepeticao': 2, 'quantidadeRepeticao': 10, 'valorCarga': 10 },
            { 'ordemRepeticao': 3, 'quantidadeRepeticao': 10, 'valorCarga': 10 }
        ],
        'exercicio': {
            'titulo': 'Remada Alta em Pé',
            'subtitulo': 'no puxador baixo',
            'listaExecucaoItemSerie' : [],
        }
    },

]