import { ResponseApiLogin } from '../support/types/CommandsLogin';

export default function verificaPerfilEmpresa(responseBody: ResponseApiLogin) {
    const buscaPrivilegios = responseBody?.body?.user.privileges ?? null;
    const verificaPerfilEmpresa = buscaPrivilegios.includes("Empresa") ?? false;
    if(verificaPerfilEmpresa){
        return console.log('Usuário com perfil EMPRESA.');
    }
    new Error('Usuário com perfil diferente de EMPRESA.')
}