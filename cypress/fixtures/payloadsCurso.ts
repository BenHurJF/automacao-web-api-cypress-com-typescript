import { IPayloadCurso } from "../support/types/PayloadCurso";

function gerarDataAtual() {
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 29)
    const dataPublicacaoCurso = dataAtual.toISOString();
    return dataPublicacaoCurso;
}

export function payloadDadosDoCurso({ nome, tipoCurso = 1, modalidade = 1, userId }: IPayloadCurso
) {
    return {
        "name": nome + ` ${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`,
        "typeId": tipoCurso,
        "categoryId": modalidade,
        "areasId": [1],
        "description": "Curso criado via api, com automação utilizando o cypress",
        "syllabus": null,
        "workload": 0,
        "publishDate": gerarDataAtual(),
        "published": false,
        "publishedAt": null,
        "highlight": false,
        "unlistCourse": false,
        "isExclusive": false,
        "hasCertificate": false,
        "fileId": null,
        "tags": [
            "tesd",
            "dasd",
            "sa",
            "saj",
            "sajfn",
            "akf"
        ],
        "competences": [
            "teste"
        ],
        "targetAudiences": null,
        "marketPlaceUrl": null,
        "sku": null,
        "isPaid": false,
        "certificatePrice": null,
        "affiliateCode": null,
        "branchCode": null,
        "studyProgramFileId": 4151,
        "activateCover": false,
        "userId": userId,
        "isPending": true
    }
}

export function payloadEmenta({ nome, tipoCurso = 1, modalidade = 1, userId }: IPayloadCurso) {
    return {
        "name": nome,
        "typeId": tipoCurso,
        "categoryId": modalidade,
        "areasId": [1],
        "description": "Ementa do curso criado via automação de testes com cypress - gerado por automação.",
        "syllabus": "Ementa do curso criado via automação de testes com cypress - gerado por automação.",
        "workload": 0,
        "coins": null,
        "publishDate": gerarDataAtual(),
        "published": false,
        "publishedAt": null,
        "highlight": false,
        "unlistCourse": false,
        "isExclusive": false,
        "hasCertificate": true,
        "fileId": null,
        "tags": [
            "tesd",
            "dasd",
            "sa",
            "saj",
            "sajfn",
            "akf"
        ],
        "competences": [
            "teste"
        ],
        "targetAudiences": [
            "Estudantes do Ensino Médio",
            "Empreendedores",
            "Docentes"
        ],
        "marketPlaceUrl": null,
        "isPaid": false,
        "certificatePrice": 0,
        "affiliateCode": null,
        "branchCode": null,
        "studyProgramFileId": 4172,
        "activateCover": false,
        "userId": userId
    }
}

export function payloadGradeCurricular() {
    return {

    }
}

export function payloadMedalhaDigital() {
    return {

    }
}

export function payloadMarketPlace() {
    return {

    }
}

export function payloadPublicar() {
    return {

    }
}