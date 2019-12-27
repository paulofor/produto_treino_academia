export var PathValidador : string = 'https://www.digicom.inf.br:21040';


export var Cartao = {
    "nomeCartao": "",
    "bandeira": "",
    "numero": "",
    "anoExpira": "",
    "mesExpira": "",
    "verificador": ""
}



export var Assinatura = {
    "plan": "E2BB1113ECECEC5884A45FAA7983BB24",
    "sender": {
        "name": "",
        "email": "",

        "hash" : "",
        "phone": {
            "areaCode": "",
            "number": ""
        },
        "address": {
            "street": "",
            "number": "",
            "complement": "",
            "district": "",
            "city": "",
            "state": "",
            "country": "BRA",
            "postalCode": ""
        },
        "documents": [
            {
                "type": "CPF",
                "value": ""
            }

        ]
    },
    "paymentMethod": {
        "type": "CREDITCARD",
        "creditCard": {
            "token": "",
            "holder": {
                "name": "",
                "birthDate": "",
                "phone": {
                    "areaCode": "",
                    "number": ""
                },
                "documents": [
                    {
                        "type": "CPF",
                        "value": ""
                    }
                ]
            }
        },
    }
}
